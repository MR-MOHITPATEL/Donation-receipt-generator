import React from 'react';
import { formatReceiptNumber } from '../../utils/receiptGenerator';

const VerticalReceipt = ({ ngo, donor }) => {
    const receiptNo = formatReceiptNumber(donor.id);

    return (
        <div className="receipt-container vertical" style={{
            width: '148mm',
            height: '210mm',
            padding: '10mm',
            background: 'white',
            border: '1px solid #000',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'serif',
            color: '#000',
            boxSizing: 'border-box'
        }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '5mm', marginBottom: '5mm' }}>
                {ngo.logo && <img src={ngo.logo} alt="NGO Logo" style={{ height: '25mm', width: 'auto', marginBottom: '3mm' }} />}
                <h1 style={{ margin: 0, fontSize: '20pt', fontWeight: 'bold' }}>{ngo.name}</h1>
                <p style={{ margin: '2mm 0', fontSize: '10pt' }}>{ngo.address}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '5mm', fontSize: '9pt', marginTop: '2mm' }}>
                    <span><strong>PAN:</strong> {ngo.panNumber}</span>
                    <span><strong>REG:</strong> {ngo.regNumber}</span>
                    <span><strong>80G:</strong> {ngo.eightyGNumber}</span>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10mm' }}>
                <div>
                    <p><strong>Receipt No:</strong> {receiptNo}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p><strong>Date:</strong> {donor['Date']}</p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '10mm' }}>
                <h2 style={{ margin: 0, textDecoration: 'underline', letterSpacing: '2pt' }}>DONATION RECEIPT</h2>
            </div>

            <div style={{ flex: 1, padding: '5mm', border: '1px solid #eee', lineHeight: '2' }}>
                <p style={{ fontSize: '12pt' }}>
                    This is to acknowledge the receipt of donation from:
                </p>
                <p style={{ fontSize: '14pt', fontWeight: 'bold', margin: '5mm 0' }}>
                    {donor['Donor Name']}
                </p>
                <p style={{ fontSize: '12pt' }}>
                    Donor PAN: <strong>{donor['Donor PAN']}</strong>
                </p>
                <p style={{ fontSize: '12pt', marginTop: '5mm' }}>
                    Amount Received: <br />
                    <span style={{ fontSize: '18pt', fontWeight: 'bold' }}>₹ {Number(donor['Amount']).toLocaleString('en-IN')}</span>
                </p>
                <p style={{ fontSize: '12pt', fontStyle: 'italic' }}>
                    (Rupees {donor['Amount in Words']})
                </p>
            </div>

            <div style={{ marginTop: '10mm', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ fontSize: '8pt', color: '#666', maxWidth: '50%' }}>
                    * Donations are tax-exempt under section 80G of the IT Act.
                    This receipt is generated for the 2026-27 Financial Year.
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '20mm', width: '40mm', borderBottom: '1px solid #000', marginBottom: '2mm' }}></div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{ngo.signatoryName}</p>
                    <p style={{ margin: 0, fontSize: '9pt' }}>{ngo.signatoryDesignation}</p>
                </div>
            </div>
        </div>
    );
};

export default VerticalReceipt;
