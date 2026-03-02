import React from 'react';

const HorizontalReceipt = ({ ngo, donor, receiptRef }) => {
    return (
        <div ref={receiptRef} className="receipt-paper horizontal-receipt premium-receipt" style={{ width: '800px', padding: '50px', background: '#ffffff', color: '#1a202c', border: 'none', position: 'relative', boxShadow: 'none' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, #1b5e20, #4caf50, #1b5e20)' }}></div>
            <div className="receipt-watermark" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.02, fontSize: '180px', fontWeight: 900, whiteSpace: 'nowrap', pointerEvents: 'none', color: '#2e7d32', zIndex: 0 }}>
                {ngo.name.substring(0, 3).toUpperCase()}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #edf2f7', paddingBottom: '25px', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                <div style={{ flex: 1, paddingRight: '20px' }}>
                    <h1 style={{ color: '#1a365d', fontSize: '30px', margin: '0 0 8px 0', fontWeight: 800, letterSpacing: '0.5px' }}>{ngo.name}</h1>
                    {ngo.slogan && <p style={{ color: '#2e7d32', fontStyle: 'italic', fontSize: '15px', margin: '0 0 12px 0', fontWeight: 600 }}>"{ngo.slogan}"</p>}
                    <p style={{ margin: '0', fontSize: '14px', color: '#4a5568', lineHeight: '1.6', maxWidth: '90%' }}>{ngo.address}</p>
                </div>
                {ngo.logo && (
                    <div style={{ width: '100px', height: '100px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                        <img src={ngo.logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) auto minmax(200px, 1fr)', gap: '20px', marginBottom: '35px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: '120px', fontSize: '12px', fontWeight: 700, color: '#718096', textTransform: 'uppercase' }}>Registration No:</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748' }}>{ngo.regNumber}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: '120px', fontSize: '12px', fontWeight: 700, color: '#718096', textTransform: 'uppercase' }}>PAN Number:</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748' }}>{ngo.panNumber}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: '120px', fontSize: '12px', fontWeight: 700, color: '#718096', textTransform: 'uppercase' }}>80G Number:</span>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#2d3748' }}>{ngo.eightyGNumber}</span>
                    </div>
                </div>
                <div style={{ width: '1px', background: '#edf2f7' }}></div>
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                    <div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#718096', textTransform: 'uppercase', marginRight: '8px' }}>Date:</span>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#2d3748' }}>{donor.date}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#718096', textTransform: 'uppercase', marginRight: '8px' }}>Receipt No:</span>
                        <span style={{ fontSize: '15px', fontWeight: 700, color: '#e53e3e' }}>{donor.receiptNo || 'N/A'}</span>
                    </div>
                </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, marginBottom: '20px' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '4px solid #2e7d32', padding: '25px', borderRadius: '4px' }}>
                    <p style={{ fontSize: '16px', margin: '0 0 15px 0', color: '#4a5568', lineHeight: '1.6' }}>
                        Received with thanks from <strong style={{ color: '#1a202c', fontSize: '18px' }}>{donor.name}</strong> (PAN: <strong style={{ color: '#1a202c' }}>{donor.pan}</strong>),
                    </p>
                    <p style={{ fontSize: '16px', margin: '0 0 20px 0', color: '#4a5568', lineHeight: '1.6' }}>
                        a generous donation of <strong style={{ color: '#2e7d32', fontSize: '22px' }}>₹ {donor.amount}</strong>
                        <span style={{ fontStyle: 'italic', fontSize: '15px', display: 'block', marginTop: '5px' }}>
                            (Rupees {donor.amountInWords} Only)
                        </span>
                    </p>
                    <p style={{ fontStyle: 'italic', color: '#718096', fontSize: '14px', margin: '0', display: 'flex', alignItems: 'center' }}>
                        Thank you for your invaluable contribution towards our noble cause.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', minWidth: '220px' }}>
                    <div style={{ borderBottom: '2px solid #2d3748', marginBottom: '12px', height: '40px' }}></div>
                    <p style={{ fontWeight: 700, margin: '0', color: '#1a365d', fontSize: '16px' }}>{ngo.signatoryName}</p>
                    <p style={{ fontSize: '13px', margin: '4px 0 0 0', color: '#718096', fontWeight: 500 }}>{ngo.signatoryDesignation}</p>
                    <p style={{ letterSpacing: '0.5px', fontSize: '10px', marginTop: '15px', color: '#a0aec0', textTransform: 'uppercase' }}>Digitally Generated Receipt</p>
                </div>
            </div>
        </div>
    );
};

export default HorizontalReceipt;
