import React from 'react';

const VerticalReceipt = ({ ngo, donor, receiptRef }) => {
    return (
        <div ref={receiptRef} className="receipt-paper vertical-receipt premium-receipt" style={{ width: '595px', padding: '60px', background: 'white', color: '#2c3e50', border: '1px solid #e2e8f0', margin: '0 auto', textAlign: 'center', position: 'relative', boxShadow: 'none' }}>
            <div className="receipt-watermark" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, fontSize: '120px', fontWeight: 900, whiteSpace: 'nowrap', pointerEvents: 'none', color: '#2e7d32', zIndex: 0 }}>
                {ngo.name.substring(0, 3).toUpperCase()}
            </div>

            <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                {ngo.logo && (
                    <div style={{ width: '120px', height: '120px', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={ngo.logo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </div>
                )}
                <h1 style={{ color: '#1a365d', fontSize: '32px', margin: '0 0 5px 0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>{ngo.name}</h1>
                {ngo.slogan && <p style={{ color: '#2e7d32', fontStyle: 'italic', fontSize: '16px', margin: '0 0 15px 0', fontWeight: 500 }}>"{ngo.slogan}"</p>}
                <p style={{ margin: '0 auto', fontSize: '14px', color: '#4a5568', maxWidth: '85%', lineHeight: '1.5' }}>{ngo.address}</p>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '20px', marginBottom: '40px', display: 'flex', justifyContent: 'space-around', position: 'relative', zIndex: 1, border: '1px solid #e2e8f0' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, fontSize: '11px', margin: '0 0 5px 0', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Registration No</p>
                    <p style={{ margin: '0', fontWeight: 600, color: '#2d3748', fontSize: '14px' }}>{ngo.regNumber}</p>
                </div>
                <div style={{ width: '1px', background: '#e2e8f0' }}></div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, fontSize: '11px', margin: '0 0 5px 0', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>PAN Number</p>
                    <p style={{ margin: '0', fontWeight: 600, color: '#2d3748', fontSize: '14px' }}>{ngo.panNumber}</p>
                </div>
                <div style={{ width: '1px', background: '#e2e8f0' }}></div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontWeight: 700, fontSize: '11px', margin: '0 0 5px 0', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' }}>80G Number</p>
                    <p style={{ margin: '0', fontWeight: 600, color: '#2d3748', fontSize: '14px' }}>{ngo.eightyGNumber}</p>
                </div>
            </div>

            <div style={{ position: 'relative', zIndex: 1, marginBottom: '40px' }}>
                <div style={{ display: 'inline-block', borderBottom: '2px solid #2e7d32', paddingBottom: '5px' }}>
                    <p style={{ fontSize: '20px', margin: '0', fontWeight: 700, color: '#1a365d', letterSpacing: '1px' }}>DONATION RECEIPT</p>
                </div>
            </div>

            <div style={{ textAlign: 'left', marginBottom: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', background: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '10px' }}>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Receipt No & Date:</span>
                        <strong style={{ color: '#2d3748', fontSize: '15px' }}>{donor.receiptNo || 'N/A'} • {donor.date}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '10px' }}>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Received with thanks from:</span>
                        <strong style={{ color: '#2d3748', fontSize: '16px', textTransform: 'uppercase' }}>{donor.name}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '10px' }}>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Donor PAN:</span>
                        <strong style={{ color: '#2d3748', fontSize: '15px' }}>{donor.pan}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #e2e8f0', paddingBottom: '10px', alignItems: 'center' }}>
                        <span style={{ color: '#718096', fontSize: '14px' }}>Donation Amount:</span>
                        <strong style={{ color: '#2e7d32', fontSize: '22px' }}>₹ {donor.amount}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5px' }}>
                        <span style={{ color: '#718096', fontSize: '14px', whiteSpace: 'nowrap', marginRight: '15px' }}>Amount in Words:</span>
                        <strong style={{ color: '#2d3748', fontSize: '14px', textAlign: 'right', fontStyle: 'italic' }}>Rupees {donor.amountInWords} Only</strong>
                    </div>
                </div>

                <p style={{ fontStyle: 'italic', fontSize: '15px', lineHeight: '1.7', color: '#4a5568', marginTop: '30px', textAlign: 'center', fontWeight: 500 }}>
                    We gratefully acknowledge your contribution towards our programs. This receipt is issued in recognition of your generous support to our cause.
                </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '60px', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', minWidth: '220px' }}>
                    <div style={{ borderBottom: '2px solid #1a365d', marginBottom: '10px', height: '40px' }}></div>
                    <p style={{ fontWeight: 700, margin: '0', color: '#1a365d', fontSize: '16px' }}>{ngo.signatoryName}</p>
                    <p style={{ fontSize: '13px', margin: '0', color: '#718096', fontWeight: 500 }}>{ngo.signatoryDesignation}</p>
                    <p style={{ letterSpacing: '0.5px', fontSize: '10px', marginTop: '12px', color: '#a0aec0', textTransform: 'uppercase' }}>Digitally Generated Receipt</p>
                </div>
            </div>
        </div>
    );
};

export default VerticalReceipt;
