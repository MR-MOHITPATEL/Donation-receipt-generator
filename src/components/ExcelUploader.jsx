import React, { useRef } from 'react';
import * as XLSX from 'xlsx';
import { Download, FileUp, AlertCircle } from 'lucide-react';

const ExcelUploader = ({ onDataParsed, donorCount }) => {
    const fileInputRef = useRef(null);

    const downloadDemoExcel = () => {
        const data = [
            ['Date', 'Donor Name', 'Donor PAN', 'Amount', 'Amount in Words'],
            ['2024-03-01', 'John Doe', 'ABCDE1234F', 5000, 'Five Thousand Only'],
            ['2024-03-05', 'Jane Smith', 'FGHIJ5678K', 2500, 'Two Thousand Five Hundred Only'],
            ['2024-03-10', 'Global Tech Corp', 'PQRST9012L', 15000, 'Fifteen Thousand Only'],
        ];

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Donors');
        XLSX.writeFile(wb, 'NGO_Donation_Demo.xlsx');
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws);

            // Validate data
            const validatedData = data.slice(0, 50).map((row, index) => ({
                date: row['Date'] || '',
                name: row['Donor Name'] || 'Unknown Donor',
                pan: row['Donor PAN'] || 'N/A',
                amount: row['Amount'] || 0,
                amountInWords: row['Amount in Words'] || '',
                receiptNo: `REC-${String(index + 1).padStart(4, '0')}`,
            }));

            onDataParsed(validatedData);
        };
        reader.readAsBinaryString(file);
    };

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2>Step 3: Upload Donor Data</h2>
                <button className="btn btn-outline" onClick={downloadDemoExcel}>
                    <Download size={18} style={{ marginRight: '0.5rem' }} />
                    Download Demo Excel
                </button>
            </div>

            <div
                style={{
                    border: '2px dashed var(--border-color)',
                    borderRadius: '12px',
                    padding: '3rem',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: donorCount > 0 ? 'rgba(46, 125, 50, 0.02)' : 'transparent',
                    transition: 'all 0.2s',
                }}
                onClick={() => fileInputRef.current.click()}
            >
                <FileUp size={48} color={donorCount > 0 ? 'var(--primary-color)' : '#999'} style={{ marginBottom: '1rem' }} />
                {donorCount > 0 ? (
                    <div>
                        <h3 style={{ color: 'var(--primary-color)' }}>{donorCount} Donors Loaded!</h3>
                        <p>Click to change file</p>
                    </div>
                ) : (
                    <div>
                        <h3>Click to Upload Excel File</h3>
                        <p style={{ color: '#666' }}>Max 50 rows. Required columns: Date, Donor Name, Donor PAN, Amount, Amount in Words</p>
                    </div>
                )}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".xlsx, .xls"
                    style={{ display: 'none' }}
                />
            </div>

            {donorCount > 50 && (
                <div style={{ marginTop: '1rem', color: '#d32f2f', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={18} />
                    <p style={{ fontSize: '0.875rem' }}>Note: Only the first 50 rows will be processed.</p>
                </div>
            )}
        </div>
    );
};

export default ExcelUploader;
