import React from 'react';
import { formatReceiptNumber } from '../../utils/receiptGenerator';

const HorizontalReceipt = ({ ngo, donor }) => {
    const receiptNo = formatReceiptNumber(donor.id);

    return (
        <div className="receipt-container horizontal" style={{
            width: '210mm',
            height: '100mm',
            padding: '15mm',
            background: 'white',
            border: '1px solid #000',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'serif',
            color: '#000',
            boxSizing: 'border-box'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #000', paddingBottom: '5mm', marginBottom: '5mm' }}>
                <div style={{ display: 'flex', gap: '5mm' }}>
                    {ngo.logo && <img src={ngo.logo} alt="NGO Logo" style={{ height: '20mm', width: 'auto' }} />}
                    <div>
                        <h1 style={{ margin: 0, fontSize: '18pt', fontWeight: 'bold' }}>{ngo.name}</h1>
                        <p style={{ margin: '2mm 0', fontSize: '10pt', maxWidth: '100mm' }}>{ngo.address}</p>
                    </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '10pt' }}>
                    <p><strong>REG NO:</strong> {ngo.regNumber}</p>
                    <p><strong>80G NO:</strong> {ngo.eightyGNumber}</p>
                    <p><strong>NGO PAN:</strong> {ngo.panNumber}</p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5mm' }}>
                <div>
                    <p><strong>Receipt No:</strong> {receiptNo}</p>
                    <p><strong>Date:</strong> {donor['Date']}</p>
                </div>
                <div style={{ textAlign: 'center', flex: 1 }}>
                    <h2 style={{ margin: 0, textDecoration: 'underline' }}>DONATION RECEIPT</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <p><strong>Original Copy</strong></p>
                </div>
            </div>

            <div style={{ flex: 1, border: '1px solid #000', padding: '5mm', marginBottom: '5mm' }}>
                <p style={{ fontSize: '12pt', lineHeight: '1.8' }}>
                    Received with thanks from <strong>{donor['Donor Name']}</strong> (PAN: {donor['Donor PAN']}),
                    a sum of <strong>₹ {Number(donor['Amount']).toLocaleString('en-IN')}</strong>
                    (Rupees {donor['Amount in Words']}) towards donation for the corpus of the NGO.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ fontSize: '9pt', color: '#666', maxWidth: '60%' }}>
                    * This is a computer generated receipt and does not require a physical signature if stamped.
                    Donations are exempt under section 80G of the Income Tax Act.
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '15mm', borderBottom: '1px solid #000', width: '40mm', marginBottom: '2mm' }}></div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{ngo.signatoryName}</p>
                    <p style={{ margin: 0, fontSize: '9pt' }}>({ngo.signatoryDesignation})</p>
                </div>
            </div>
        </div>
    );
};

export default HorizontalReceipt;
