import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

const WelcomeOverlay = ({ onContinue }) => {
    return (
        <div className="welcome-overlay">
            <div className="welcome-card">
                <div className="welcome-header">
                    <ShieldCheck size={48} color="var(--primary)" />
                    <h2>Welcome!</h2>
                </div>
                <div className="welcome-body">
                    <p className="message-from">Message from <strong>Mongo Silicon</strong>:</p>
                    <div className="info-box">
                        <Info size={24} color="var(--primary)" />
                        <p>
                            This app works <strong>offline</strong>. Your data is stored <strong>only on your side</strong> (client-side) and is never sent to a server.
                        </p>
                    </div>
                    <p className="privacy-note">
                        Your privacy and security are our top priorities. All receipt generation happens right in your browser.
                    </p>
                </div>
                <button className="btn btn-primary btn-large" onClick={onContinue}>
                    Continue to App
                </button>
            </div>
        </div>
    );
};

export default WelcomeOverlay;
