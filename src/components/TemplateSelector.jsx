import React from 'react';
import { Layout, Maximize2, Columns } from 'lucide-react';

const templates = [
    {
        id: 'horizontal',
        name: 'Horizontal Format',
        icon: <Layout size={24} />,
        description: 'Standard landscape layout with side-by-side details.'
    },
    {
        id: 'vertical',
        name: 'Vertical Format',
        icon: <Maximize2 size={24} />,
        description: 'Portrait layout, great for mobile viewing.'
    },
    {
        id: 'alternate',
        name: 'Alternate Layout',
        icon: <Columns size={24} />,
        description: 'Modern split-view design with focused details.'
    }
];

const TemplateSelector = ({ selectedTemplate, onSelect, error }) => {
    return (
        <div>
            <h2 className="section-title">Step 1: Select Template</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Choose the best layout for your NGO's receipts.
            </p>

            <div className="template-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card ${selectedTemplate === template.id ? 'active' : ''}`}
                        onClick={() => onSelect(template.id)}
                    >
                        <div className="template-preview-box">
                            {/* This is a "mini" version of the receipt for preview */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'white',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                padding: '10px',
                                fontSize: '8px',
                                display: 'flex',
                                flexDirection: template.id === 'vertical' ? 'column' : 'row',
                                gap: '5px'
                            }}>
                                <div style={{ flex: 1, borderBottom: template.id === 'vertical' ? '1px solid #eee' : 'none', borderRight: template.id === 'horizontal' ? '1px solid #eee' : 'none' }}>
                                    <div style={{ fontWeight: 800, marginBottom: '2px' }}>NGO NAME</div>
                                    <div style={{ color: '#999' }}>Address Line 1...</div>
                                    <div style={{ color: '#999' }}>PAN: XXXXX0000X</div>
                                </div>
                                <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ fontWeight: 700 }}>DONOR NAME</div>
                                    <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary)', marginTop: '4px' }}>₹ 5,000</div>
                                    <div style={{ fontSize: '6px', marginTop: '4px' }}>Five Thousand Only</div>
                                </div>
                            </div>
                        </div>
                        <div className="template-info">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                {template.icon}
                                <h4 style={{ margin: 0 }}>{template.name}</h4>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{template.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {error && <p className="error-text" style={{ textAlign: 'center', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
};

export default TemplateSelector;
