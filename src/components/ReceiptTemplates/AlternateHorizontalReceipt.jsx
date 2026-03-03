import React from 'react';
import { formatReceiptNumber } from '../../utils/receiptGenerator';

const AlternateHorizontalReceipt = ({ ngo, donor }) => {
    const receiptNo = formatReceiptNumber(donor.id);

    return (
        <div className="receipt-container alternate" style={{
            width: '210mm',
            height: '100mm',
            padding: '0',
            background: 'white',
            border: '2px solid var(--primary, #2563eb)',
            display: 'flex',
            fontFamily: 'sans-serif',
            color: '#333',
            boxSizing: 'border-box',
            overflow: 'hidden'
        }}>
            {/* Left Sidebar */}
            <div style={{
                width: '60mm',
                background: '#f8fafc',
                borderRight: '2px solid #2563eb',
                padding: '10mm',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <div>
                    {ngo.logo && <img src={ngo.logo} alt="Logo" style={{ width: '100%', marginBottom: '5mm', borderRadius: '4px' }} />}
                    <p style={{ fontSize: '9pt', fontWeight: 600, color: '#2563eb' }}>NGO DETAILS</p>
                    <p style={{ fontSize: '8pt' }}>PAN: {ngo.panNumber}</p>
                    <p style={{ fontSize: '8pt' }}>REG: {ngo.regNumber}</p>
                    <p style={{ fontSize: '8pt' }}>80G: {ngo.eightyGNumber}</p>
                </div>
                <div style={{ borderTop: '1px solid #ddd', paddingTop: '5mm' }}>
                    <p style={{ fontSize: '10pt', fontWeight: 800 }}>{receiptNo}</p>
                    <p style={{ fontSize: '8pt' }}>{donor['Date']}</p>
                </div>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: '10mm', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5mm' }}>
                    <h1 style={{ fontSize: '16pt', color: '#2563eb', fontWeight: 900, margin: 0 }}>{ngo.name}</h1>
                    <div style={{ background: '#2563eb', color: 'white', padding: '2mm 4mm', borderRadius: '4px', fontSize: '9pt', fontWeight: 800 }}>OFFICIAL RECEIPT</div>
                </div>

                <p style={{ fontSize: '9pt', color: '#666', margin: '0 0 5mm 0' }}>{ngo.address}</p>

                <div style={{ flex: 1, borderTop: '1px solid #eee', paddingTop: '5mm' }}>
                    <p style={{ fontSize: '11pt', margin: '0 0 2mm 0' }}>Received from:</p>
                    <h2 style={{ fontSize: '14pt', margin: '0 0 5mm 0', color: '#000' }}>{donor['Donor Name']}</h2>

                    <div style={{ display: 'flex', gap: '10mm', marginBottom: '5mm' }}>
                        <div>
                            <p style={{ fontSize: '8pt', color: '#666', margin: 0 }}>AMOUNT</p>
                            <p style={{ fontSize: '14pt', fontWeight: 800, margin: 0 }}>₹ {Number(donor['Amount']).toLocaleString('en-IN')}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '8pt', color: '#666', margin: 0 }}>DONOR PAN</p>
                            <p style={{ fontSize: '11pt', fontWeight: 600, margin: 0 }}>{donor['Donor PAN']}</p>
                        </div>
                    </div>

                    <p style={{ fontSize: '10pt', fontStyle: 'italic' }}>Amount in words: {donor['Amount in Words']}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
                    <p style={{ fontSize: '7pt', color: '#999', margin: 0 }}>* Exempt under Sec 80G of IT Act.</p>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '10pt', fontWeight: 800, margin: 0 }}>{ngo.signatoryName}</p>
                        <p style={{ fontSize: '8pt', margin: 0 }}>{ngo.signatoryDesignation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlternateHorizontalReceipt;
