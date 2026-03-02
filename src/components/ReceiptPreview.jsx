import React from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

const ReceiptPreview = ({ donors, ngo, onDownloadAll, isGenerating }) => {
    if (!donors || donors.length === 0) return null;

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>Step 4: Preview & Generate</h2>
                <button
                    className="btn btn-primary"
                    onClick={onDownloadAll}
                    disabled={isGenerating || !ngo.name}
                    style={{ gap: '0.5rem' }}
                >
                    {isGenerating ? (
                        'Generating ZIP...'
                    ) : (
                        <>
                            <Download size={18} />
                            Download All Receipts (ZIP)
                        </>
                    )}
                </button>
            </div>

            {!ngo.name && (
                <div style={{ padding: '1rem', background: '#fff9c4', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.875rem', color: '#827717' }}>
                    Please fill in the NGO Name in Step 2 to enable downloads.
                </div>
            )}

            <div className="receipt-preview-grid">
                {donors.map((donor, index) => (
                    <div key={index} className="receipt-mini">
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{donor.receiptNo}</span>
                            <span style={{ color: '#666' }}>{donor.date}</span>
                        </div>
                        <p><strong>To:</strong> {donor.name}</p>
                        <p><strong>Amount:</strong> ₹ {donor.amount}</p>
                        <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', color: '#4caf50', fontSize: '10px' }}>
                            <CheckCircle2 size={12} style={{ marginRight: '4px' }} />
                            Ready for Export
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReceiptPreview;
