import React from 'react';

const AlternateHorizontalReceipt = ({ ngo, donor, receiptRef }) => {
    return (
        <div ref={receiptRef} className="receipt-paper horizontal-receipt premium-receipt" style={{ width: '800px', padding: '40px', background: '#fafaf9', color: '#1c1917', border: '2px solid #2e7d32', borderRadius: '8px', position: 'relative', boxShadow: 'none' }}>
            <div style={{ position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)', background: '#2e7d32', color: 'white', padding: '4px 20px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', fontSize: '14px', fontWeight: 700, letterSpacing: '1px' }}>
                DONATION RECEIPT
            </div>

            <div style={{ position: 'absolute', top: '25px', right: '30px', background: '#f5f5f4', padding: '6px 12px', borderRadius: '4px', border: '1px solid #e7e5e4', fontSize: '13px', color: '#44403c', fontWeight: 600 }}>
                No: <span style={{ color: '#b91c1c' }}>{donor.receiptNo || 'REC-0001'}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #d6d3d1', paddingBottom: '25px', marginBottom: '30px', marginTop: '20px' }}>
                {ngo.logo && (
                    <div style={{ width: '80px', height: '80px', marginRight: '25px', background: 'white', padding: '5px', borderRadius: '8px', border: '1px solid #e7e5e4' }}>
                        <img src={ngo.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                )}
                <div>
                    <h2 style={{ margin: '0 0 5px 0', color: '#1a365d', fontSize: '26px', fontWeight: 800, letterSpacing: '0.5px' }}>{ngo.name}</h2>
                    {ngo.slogan && <p style={{ color: '#2e7d32', fontStyle: 'italic', fontSize: '14px', margin: '0 0 8px 0', fontWeight: 600 }}>"{ngo.slogan}"</p>}
                    <p style={{ margin: '0', fontSize: '13px', color: '#57534e', lineHeight: '1.5' }}>{ngo.address}</p>
                </div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e7e5e4', marginBottom: '25px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', width: '25%', color: '#44403c', fontWeight: 700 }}>Date</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', fontWeight: 600, color: '#1c1917' }}>{donor.date}</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', width: '25%', color: '#44403c', fontWeight: 700 }}>Donor PAN</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', fontWeight: 600, color: '#1c1917' }}>{donor.pan}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', color: '#44403c', fontWeight: 700 }}>Donor Name</td>
                            <td colSpan="3" style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', fontWeight: 700, color: '#1a365d', fontSize: '16px', textTransform: 'uppercase' }}>{donor.name}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', color: '#44403c', fontWeight: 700 }}>Amount (₹)</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', color: '#2e7d32', fontWeight: 800, fontSize: '18px' }}>₹ {donor.amount}</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', color: '#44403c', fontWeight: 700 }}>Registration No.</td>
                            <td style={{ padding: '12px 15px', borderBottom: '1px solid #e7e5e4', fontWeight: 600, color: '#1c1917' }}>{ngo.regNumber}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '12px 15px', borderRight: '1px solid #e7e5e4', background: '#f5f5f4', color: '#44403c', fontWeight: 700 }}>Amount in Words</td>
                            <td colSpan="3" style={{ padding: '12px 15px', fontStyle: 'italic', color: '#44403c' }}>Rupees {donor.amountInWords} Only</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#57534e', marginBottom: '30px', background: '#f5f5f4', padding: '10px 15px', borderRadius: '4px' }}>
                <p style={{ margin: 0 }}><strong>Organization PAN:</strong> <span style={{ color: '#1c1917', fontWeight: 600 }}>{ngo.panNumber}</span></p>
                <p style={{ margin: 0 }}><strong>80G Registration No:</strong> <span style={{ color: '#1c1917', fontWeight: 600 }}>{ngo.eightyGNumber}</span></p>
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0', fontStyle: 'italic', fontSize: '15px', color: '#2e7d32', fontWeight: 500 }}>
                "Every contribution makes a difference. Thank you for your continued support!"
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '40px' }}>
                <div style={{ textAlign: 'center', padding: '10px', minWidth: '200px' }}>
                    <div style={{ height: '40px', borderBottom: '2px solid #1c1917', marginBottom: '8px' }}></div>
                    <p style={{ margin: '0 0 3px 0', fontSize: '15px', fontWeight: 700, color: '#1a365d' }}>{ngo.signatoryName}</p>
                    <p style={{ margin: '0', fontSize: '13px', color: '#57534e', fontWeight: 500 }}>{ngo.signatoryDesignation}</p>
                    <p style={{ margin: '10px 0 0 0', fontSize: '10px', color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Digitally Generated</p>
                </div>
            </div>
        </div>
    );
};

export default AlternateHorizontalReceipt;
