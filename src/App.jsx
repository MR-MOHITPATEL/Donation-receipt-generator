import React, { useState, useRef } from 'react';
import { Heart, ChevronRight, ChevronLeft, Download } from 'lucide-react';
import TemplateSelector from './components/TemplateSelector';
import NGOForm from './components/NGOForm';
import ExcelUploader from './components/ExcelUploader';
import ReceiptPreview from './components/ReceiptPreview';
import HorizontalReceipt from './components/ReceiptTemplates/HorizontalReceipt';
import VerticalReceipt from './components/ReceiptTemplates/VerticalReceipt';
import AlternateHorizontalReceipt from './components/ReceiptTemplates/AlternateHorizontalReceipt';
import { generateBulkZip } from './utils/generateZip';
import { validatePAN, validateNGOName, validateRegNo, validate80G } from './utils/validation';

const steps = [
    { id: 1, label: 'Templates' },
    { id: 2, label: 'NGO Details' },
    { id: 3, label: 'Upload Data' },
    { id: 4, label: 'Generate' }
];

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState('horizontal');
    const [ngoData, setNgoData] = useState({
        name: '',
        address: '',
        regNumber: '',
        eightyGNumber: '',
        panNumber: '',
        signatoryName: '',
        signatoryDesignation: 'President',
        logo: null,
    });
    const [donorData, setDonorData] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [generationProgress, setGenerationProgress] = useState(0);
    const [errors, setErrors] = useState({});

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, 4));
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 1) {
            if (!selectedTemplate) newErrors.template = 'Please select a template';
        } else if (step === 2) {
            if (!validateNGOName(ngoData.name)) newErrors.name = 'Valid NGO Name required (min 3 chars)';
            if (!ngoData.address) newErrors.address = 'Address is required';
            if (!validateRegNo(ngoData.regNumber)) newErrors.regNumber = 'Registration Number required';
            if (!validate80G(ngoData.eightyGNumber)) newErrors.eightyGNumber = '80G Number required';
            if (!validatePAN(ngoData.panNumber)) newErrors.panNumber = 'Invalid PAN format';
            if (!ngoData.signatoryName) newErrors.signatoryName = 'Signatory Name required';
            if (!ngoData.logo) newErrors.logo = 'Logo is required';
        } else if (step === 3) {
            if (donorData.length === 0) newErrors.donors = 'Please upload a valid Excel file';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleDownloadAll = async () => {
        setIsGenerating(true);
        setGenerationProgress(0);
        try {
            await generateBulkZip(donorData, ngoData, selectedTemplate, setGenerationProgress);
        } catch (err) {
            alert('Error generating receipts. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    const renderSelectedTemplate = (donor) => {
        const props = { ngo: ngoData, donor };
        switch (selectedTemplate) {
            case 'horizontal': return <HorizontalReceipt {...props} />;
            case 'vertical': return <VerticalReceipt {...props} />;
            case 'alternate': return <AlternateHorizontalReceipt {...props} />;
            default: return <HorizontalReceipt {...props} />;
        }
    };

    return (
        <div className="container">
            <header>
                <h1><Heart color="var(--primary)" fill="var(--primary)" size={32} /> NGO Receipt Generator</h1>
                <p>Production-grade donor receipts, generated 100% in-browser.</p>
            </header>

            <div className="stepper">
                {steps.map(step => (
                    <div key={step.id} className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}>
                        <div className="step-number">{currentStep > step.id ? '✓' : step.id}</div>
                        <div className="step-label">{step.label}</div>
                    </div>
                ))}
            </div>

            <div className="card">
                {currentStep === 1 && (
                    <TemplateSelector
                        selectedTemplate={selectedTemplate}
                        onSelect={setSelectedTemplate}
                        error={errors.template}
                    />
                )}
                {currentStep === 2 && (
                    <NGOForm
                        ngoData={ngoData}
                        setNgoData={setNgoData}
                        errors={errors}
                    />
                )}
                {currentStep === 3 && (
                    <ExcelUploader
                        onDataParsed={setDonorData}
                        donorCount={donorData.length}
                        error={errors.donors}
                    />
                )}
                {currentStep === 4 && (
                    <ReceiptPreview
                        donors={donorData}
                        ngo={ngoData}
                        isGenerating={isGenerating}
                        onDownloadAll={handleDownloadAll}
                    />
                )}

                <div className="step-nav">
                    <button
                        className="btn btn-secondary"
                        onClick={handleBack}
                        disabled={currentStep === 1 || isGenerating}
                    >
                        <ChevronLeft size={20} /> Back
                    </button>

                    {currentStep < 4 ? (
                        <button className="btn btn-primary" onClick={handleNext}>
                            Next <ChevronRight size={20} />
                        </button>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={handleDownloadAll}
                            disabled={isGenerating || donorData.length === 0}
                        >
                            <Download size={20} /> Generate All (ZIP)
                        </button>
                    )}
                </div>
            </div>

            {/* Hidden rendering for PDF capture */}
            <div className="hidden-receipt-container">
                {donorData.map(donor => (
                    <div key={donor.id} id={`receipt-${donor.id}`}>
                        {renderSelectedTemplate(donor)}
                    </div>
                ))}
            </div>

            {isGenerating && (
                <div className="loader-overlay">
                    <div className="loader-card">
                        <div className="spinner"></div>
                        <h3>Generating Receipts...</h3>
                        <p>Processing batch: {generationProgress}%</p>
                    </div>
                </div>
            )}

            <footer style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <p>© 2026 NGO Receipt Generator • Client-Side Only • Secure & Private</p>
            </footer>
        </div>
    );
};

export default App;
