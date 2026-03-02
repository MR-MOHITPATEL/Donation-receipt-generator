import React from 'react';
import { Layout, Columns, LayoutPanelTop } from 'lucide-react';

const TemplateSelector = ({ selectedTemplate, onSelect }) => {
    const templates = [
        {
            id: 'horizontal',
            name: 'Horizontal Format',
            description: 'Landscape two-column layout with signature on the right.',
            icon: <Columns size={48} />,
        },
        {
            id: 'vertical',
            name: 'Vertical Format',
            description: 'Portrait center-aligned layout with stacked sections.',
            icon: <Layout size={48} />,
        },
        {
            id: 'alternate',
            name: 'Horizontal Alternate',
            description: 'Box-based professional layout with auto-receipt numbering.',
            icon: <LayoutPanelTop size={48} />,
        },
    ];

    return (
        <div className="card">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Step 1: Select Receipt Template</h2>
            <div className="grid grid-cols-3">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className={`template-card card ${selectedTemplate === template.id ? 'active' : ''}`}
                        onClick={() => onSelect(template.id)}
                    >
                        {template.icon}
                        <h3>{template.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>{template.description}</p>
                        {selectedTemplate === template.id && (
                            <div style={{ marginTop: '1rem', color: '#2e7d32', fontWeight: 'bold' }}>
                                Selected ✓
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;
