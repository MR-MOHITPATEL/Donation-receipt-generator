import React, { useState } from 'react';
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { parseExcelData } from '../utils/excelParser';

const ExcelUploader = ({ onDataParsed, donorCount, error }) => {
    const [loading, setLoading] = useState(false);
    const [localErrors, setLocalErrors] = useState([]);
    const [fileName, setFileName] = useState('');

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.name.endsWith('.xlsx')) {
            setLocalErrors(['Please upload a valid .xlsx file']);
            return;
        }

        setFileName(file.name);
        setLoading(true);
        setLocalErrors([]);

        try {
            const { data, errors } = await parseExcelData(file);
            if (errors.length > 0) {
                setLocalErrors(errors);
                onDataParsed([]);
            } else {
                onDataParsed(data);
                setLocalErrors([]);
            }
        } catch (err) {
            setLocalErrors(['Failed to parse Excel file. Ensure it follows the required format.']);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="section-title">Step 3: Upload Donor Data</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Upload an Excel file with your donation records (Max 100 donors).
            </p>

            <div className={`uploader-area ${error || localErrors.length > 0 ? 'error' : ''}`} style={{
                border: '2px dashed var(--border)',
                borderRadius: '1rem',
                padding: '3rem',
                textAlign: 'center',
                background: '#f8fafc',
                cursor: 'pointer',
                position: 'relative'
            }}>
                <input
                    type="file"
                    accept=".xlsx"
                    onChange={handleFileChange}
                    style={{
                        opacity: 0,
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        cursor: 'pointer',
                        width: '100%'
                    }}
                />

                {loading ? (
                    <div>
                        <div className="spinner" style={{ width: '30px', height: '30px', marginBottom: '1rem' }}></div>
                        <p>Validating Excel Data...</p>
                    </div>
                ) : donorCount > 0 ? (
                    <div>
                        <CheckCircle2 color="var(--success)" size={48} style={{ margin: '0 auto 1rem' }} />
                        <h4 style={{ color: 'var(--success)' }}>{donorCount} Donors Loaded Successfully</h4>
                        <p style={{ fontSize: '0.875rem' }}>File: {fileName}</p>
                    </div>
                ) : (
                    <div>
                        <FileSpreadsheet color="var(--primary)" size={48} style={{ margin: '0 auto 1rem' }} />
                        <h4>Click to upload .xlsx file</h4>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Required columns: Date, Donor Name, Donor PAN, Amount, Amount in Words
                        </p>
                    </div>
                )}
            </div>

            {localErrors.length > 0 && (
                <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: '#fef2f2',
                    border: '1px solid #fee2e2',
                    borderRadius: '0.5rem'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error)', marginBottom: '0.5rem' }}>
                        <AlertCircle size={18} />
                        <span style={{ fontWeight: 700 }}>Validation Errors found:</span>
                    </div>
                    <ul style={{ paddingLeft: '1.5rem', fontSize: '0.875rem', color: '#b91c1c' }}>
                        {localErrors.slice(0, 5).map((err, i) => (
                            <li key={i}>{err}</li>
                        ))}
                        {localErrors.length > 5 && <li>...and {localErrors.length - 5} more errors</li>}
                    </ul>
                </div>
            )}

            {error && !localErrors.length && <p className="error-text" style={{ textAlign: 'center', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
};

export default ExcelUploader;
