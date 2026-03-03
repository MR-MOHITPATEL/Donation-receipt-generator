import React from 'react';
import { Users, FileCheck, Info, Download } from 'lucide-react';

const ReceiptPreview = ({ donors, ngo, isGenerating, onDownloadAll }) => {
    return (
        <div>
            <h2 className="section-title">Step 4: Final Review & Generate</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Review your NGO details and donor list before generating the final receipts.
            </p>

            <div className="grid grid-cols-2" style={{ marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
                        <Users size={18} />
                        <span>NGO SUMMARY</span>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}><strong>Name:</strong> {ngo.name}</p>
                    <p style={{ fontSize: '0.9rem' }}><strong>PAN:</strong> {ngo.panNumber}</p>
                    <p style={{ fontSize: '0.9rem' }}><strong>80G:</strong> {ngo.eightyGNumber}</p>
                </div>

                <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
                        <FileCheck size={18} />
                        <span>CAPTURE SUMMARY</span>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}><strong>Total Donors:</strong> {donors.length}</p>
                    <p style={{ fontSize: '0.9rem' }}><strong>Total Amount:</strong> ₹ {donors.reduce((acc, d) => acc + Number(d.Amount), 0).toLocaleString('en-IN')}</p>
                    <p style={{ fontSize: '0.9rem' }}><strong>Export Format:</strong> PDF (individually) + ZIP (Bulk)</p>
                </div>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Info size={18} color="var(--primary)" />
                    <span style={{ fontWeight: 700 }}>Donor Batch List</span>
                </div>
                <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid var(--border)', borderRadius: '4px', background: 'white' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                        <thead style={{ background: '#f1f5f9', position: 'sticky', top: 0 }}>
                            <tr>
                                <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>#</th>
                                <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>Donor Name</th>
                                <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>PAN</th>
                                <th style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '1px solid var(--border)' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {donors.map((donor, idx) => (
                                <tr key={idx}>
                                    <td style={{ padding: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>{idx + 1}</td>
                                    <td style={{ padding: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>{donor['Donor Name']}</td>
                                    <td style={{ padding: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>{donor['Donor PAN']}</td>
                                    <td style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '1px solid #f1f5f9' }}>₹ {Number(donor.Amount).toLocaleString('en-IN')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card" style={{ padding: '1.5rem', borderStyle: 'dashed', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Ready to generate individual PDFs and bundle them into a ZIP?</p>
                <button
                    className="btn btn-primary"
                    onClick={onDownloadAll}
                    disabled={isGenerating || donors.length === 0}
                    style={{ width: '100%', padding: '1rem' }}
                >
                    {isGenerating ? 'Processing Bulk Batch...' : <><Download size={20} /> Generate & Export Complete ZIP Bundle</>}
                </button>
            </div>
        </div>
    );
};

export default ReceiptPreview;
