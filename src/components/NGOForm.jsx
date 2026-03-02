import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const NGOForm = ({ ngoData, updateNgoData }) => {
    const [logoPreview, setLogoPreview] = useState(ngoData.logo || null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateNgoData({ [name]: value });
    };

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
                updateNgoData({ logo: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="card">
            <h2 style={{ marginBottom: '1.5rem' }}>Step 2: NGO Details</h2>
            <form>
                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                    <div className="form-group">
                        <label>NGO Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={ngoData.name}
                            onChange={handleChange}
                            placeholder="Enter NGO Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Registration Number *</label>
                        <input
                            type="text"
                            name="regNumber"
                            value={ngoData.regNumber}
                            onChange={handleChange}
                            placeholder="e.g. 1234/2023"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>NGO Slogan / Tagline</label>
                    <input
                        type="text"
                        name="slogan"
                        value={ngoData.slogan}
                        onChange={handleChange}
                        placeholder="e.g. Empowering Lives, Building Futures"
                    />
                </div>

                <div className="form-group">
                    <label>Full Address *</label>
                    <textarea
                        name="address"
                        value={ngoData.address}
                        onChange={handleChange}
                        placeholder="Full Postal Address"
                        rows="3"
                        required
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}
                    ></textarea>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                    <div className="form-group">
                        <label>80G Number *</label>
                        <input
                            type="text"
                            name="eightyGNumber"
                            value={ngoData.eightyGNumber}
                            onChange={handleChange}
                            placeholder="80G/Registration/..."
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>PAN Number *</label>
                        <input
                            type="text"
                            name="panNumber"
                            value={ngoData.panNumber}
                            onChange={handleChange}
                            placeholder="ABCDE1234F"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
                    <div className="form-group">
                        <label>Signatory Name *</label>
                        <input
                            type="text"
                            name="signatoryName"
                            value={ngoData.signatoryName}
                            onChange={handleChange}
                            placeholder="Name of Authorised Signatory"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Signatory Designation *</label>
                        <select
                            name="signatoryDesignation"
                            value={ngoData.signatoryDesignation}
                            onChange={handleChange}
                            required
                        >
                            <option value="President">President</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Treasurer">Treasurer</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>NGO Logo</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="logo-preview">
                            {logoPreview ? (
                                <img src={logoPreview} alt="Logo preview" />
                            ) : (
                                <Upload size={24} color="#999" />
                            )}
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            style={{ border: 'none', padding: '0' }}
                        />
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.5rem' }}>
                        Recommended: Transparent PNG or high-quality JPG.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default NGOForm;
