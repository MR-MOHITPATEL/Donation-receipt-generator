import React, { useState, useRef, useEffect } from 'react';
import TemplateSelector from './components/TemplateSelector';
import NGOForm from './components/NGOForm';
import ExcelUploader from './components/ExcelUploader';
import ReceiptPreview from './components/ReceiptPreview';
import HorizontalReceipt from './components/ReceiptTemplates/HorizontalReceipt';
import VerticalReceipt from './components/ReceiptTemplates/VerticalReceipt';
import AlternateHorizontalReceipt from './components/ReceiptTemplates/AlternateHorizontalReceipt';
import { generatePDFBlob } from './utils/generatePDF';
import { generateZip } from './utils/generateZip';
import { Heart, LayoutDashboard, FileText, Download } from 'lucide-react';

const App = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('horizontal');
    const [ngoData, setNgoData] = useState({
        name: '',
        address: '',
        regNumber: '',
        eightyGNumber: '',
        panNumber: '',
        signatoryName: '',
        signatoryDesignation: 'President',
        slogan: '',
        logo: null,
    });
    const [donorData, setDonorData] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [currentDonor, setCurrentDonor] = useState(null);
    const receiptRef = useRef(null);

    const updateNgoData = (data) => {
        setNgoData({ ...ngoData, ...data });
    };

    const handleDataParsed = (data) => {
        setDonorData(data);
    };

    const handleDownloadAll = async () => {
        if (donorData.length === 0) return;
        setIsGenerating(true);

        const pdfFiles = [];

        // Loop through donors and generate PDFs
        // We update currentDonor state to render the hidden receipt component
        // then capture it as a PDF
        for (let i = 0; i < donorData.length; i++) {
            const donor = donorData[i];
            setCurrentDonor(donor);

            // Wait for React to render the component
            await new Promise(resolve => setTimeout(resolve, 300));

            const filename = `${donor.receiptNo}_${donor.name.replace(/\s+/g, '_')}.pdf`;
            const blob = await generatePDFBlob(receiptRef.current, filename);
            pdfFiles.push({ blob, name: filename });
        }

        await generateZip(pdfFiles, `${ngoData.name.replace(/\s+/g, '_')}_Receipts.zip`);
        setIsGenerating(false);
        setCurrentDonor(null);
    };

    const renderSelectedTemplate = () => {
        if (!currentDonor) return null;

        const props = {
            ngo: ngoData,
            donor: currentDonor,
            receiptRef: receiptRef,
        };

        switch (selectedTemplate) {
            case 'horizontal':
                return <HorizontalReceipt {...props} />;
            case 'vertical':
                return <VerticalReceipt {...props} />;
            case 'alternate':
                return <AlternateHorizontalReceipt {...props} />;
            default:
                return <HorizontalReceipt {...props} />;
        }
    };

    return (
        <div className="container">
            <header>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <Heart color="#2e7d32" fill="#2e7d32" />
                    <h1 style={{ marginBottom: 0 }}>NGO Receipt Generator</h1>
                </div>
                <p style={{ color: '#666' }}>Professional donor receipts, generated 100% in your browser.</p>
            </header>

            <div className="step-indicator">
                <div className={`step ${selectedTemplate ? 'active' : ''}`}>1</div>
                <div className={`step ${ngoData.name ? 'active' : ''}`}>2</div>
                <div className={`step ${donorData.length > 0 ? 'active' : ''}`}>3</div>
                <div className={`step ${isGenerating ? 'active' : ''}`}>4</div>
            </div>

            <TemplateSelector
                selectedTemplate={selectedTemplate}
                onSelect={setSelectedTemplate}
            />

            <NGOForm
                ngoData={ngoData}
                updateNgoData={updateNgoData}
            />

            <ExcelUploader
                onDataParsed={handleDataParsed}
                donorCount={donorData.length}
            />

            <ReceiptPreview
                donors={donorData}
                ngo={ngoData}
                onDownloadAll={handleDownloadAll}
                isGenerating={isGenerating}
            />

            {/* Hidden container for rendering receipts for PDF capture */}
            <div className="hidden-receipt-container">
                {renderSelectedTemplate()}
            </div>

            <footer style={{ textAlign: 'center', marginTop: '4rem', color: '#999', fontSize: '0.875rem' }}>
                <p>© 2026 NGO Receipt Generator. No data is stored on any server.</p>
            </footer>

            {isGenerating && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <div className="loader" style={{
                            width: '40px', height: '40px',
                            border: '4px solid #f3f3f3',
                            borderTop: '4px solid #2e7d32',
                            borderRadius: '50%',
                            margin: '0 auto 1rem auto',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <h3 style={{ color: 'var(--text-main)' }}>Generating Receipts...</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Processing Batch Capture (May take a few moments)</p>
                    </div>
                    <style>{`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          `}</style>
                </div>
            )}
        </div>
    );
};

export default App;
