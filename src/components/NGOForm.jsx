import React from 'react';
import { Building2, FileText, User, Upload } from 'lucide-react';

const NGOForm = ({ ngoData, setNgoData, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        // PAN should always be uppercase
        const finalValue = name === 'panNumber' ? value.toUpperCase() : value;
        setNgoData(prev => ({ ...prev, [name]: finalValue }));
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file (PNG/JPG)');
                return;
            }
            const reader = new FileReader();
            reader.onload = (event) => {
                setNgoData(prev => ({ ...prev, logo: event.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <h2 className="section-title">Step 2: NGO Details</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Fill in your official NGO information for the receipts.
            </p>

            <div className="grid grid-cols-2">
                <div className="form-group">
                    <label><Building2 size={16} inline /> NGO Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'error' : ''}`}
                        name="name"
                        value={ngoData.name}
                        onChange={handleChange}
                        placeholder="e.g. Save The Children NGO"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label><FileText size={16} inline /> Registration Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="regNumber"
                        value={ngoData.regNumber}
                        onChange={handleChange}
                        placeholder="NGO/REG/0001"
                    />
                    {errors.regNumber && <p className="error-text">{errors.regNumber}</p>}
                </div>
            </div>

            <div className="form-group">
                <label>Full Address</label>
                <textarea
                    className="form-control"
                    name="address"
                    rows="2"
                    value={ngoData.address}
                    onChange={handleChange}
                    placeholder="Main Office, Building No, Street, City, State, PIN"
                ></textarea>
                {errors.address && <p className="error-text">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-2">
                <div className="form-group">
                    <label>PAN Number (Indian Format)</label>
                    <input
                        type="text"
                        className="form-control"
                        name="panNumber"
                        value={ngoData.panNumber}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="ABCDE1234F"
                    />
                    {errors.panNumber && <p className="error-text">{errors.panNumber}</p>}
                </div>

                <div className="form-group">
                    <label>80G Number</label>
                    <input
                        type="text"
                        className="form-control"
                        name="eightyGNumber"
                        value={ngoData.eightyGNumber}
                        onChange={handleChange}
                        placeholder="CIT/80G/001"
                    />
                    {errors.eightyGNumber && <p className="error-text">{errors.eightyGNumber}</p>}
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className="form-group">
                    <label><User size={16} inline /> Signatory Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="signatoryName"
                        value={ngoData.signatoryName}
                        onChange={handleChange}
                        placeholder="John Doe"
                    />
                    {errors.signatoryName && <p className="error-text">{errors.signatoryName}</p>}
                </div>

                <div className="form-group">
                    <label>Signatory Designation</label>
                    <select
                        className="form-control"
                        name="signatoryDesignation"
                        value={ngoData.signatoryDesignation}
                        onChange={handleChange}
                    >
                        <option>President</option>
                        <option>Secretary</option>
                        <option>Trustee</option>
                        <option>Director</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label><Upload size={16} inline /> NGO Logo / Letterhead</label>
                <div className={`uploader-area ${errors.logo ? 'error' : ''}`} style={{ padding: '2rem', background: '#f8fafc', border: '2px dashed var(--border)' }}>
                    <input
                        type="file"
                        onChange={handleLogoUpload}
                        accept="image/*"
                        id="logo-upload"
                        className="hidden"
                    />
                    <label htmlFor="logo-upload" style={{ cursor: 'pointer' }}>
                        {ngoData.logo ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                <img src={ngoData.logo} alt="Logo Preview" style={{ height: '60px', borderRadius: '4px' }} />
                                <span>Change Logo</span>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Upload color="var(--primary)" size={32} />
                                <p style={{ marginTop: '0.5rem' }}>Click to upload Logo (PNG/JPG)</p>
                            </div>
                        )}
                    </label>
                </div>
                {errors.logo && <p className="error-text">{errors.logo}</p>}
            </div>
        </div>
    );
};

export default NGOForm;
