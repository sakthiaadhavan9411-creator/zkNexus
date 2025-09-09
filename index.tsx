import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('');

    const handleNextStep = (nextStep: number, delay = 1500, text = '') => {
        setLoadingText(text);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep(nextStep);
        }, delay);
    };
    
    const restart = () => setStep(0);

    const commonStyles: { [key: string]: React.CSSProperties } = {
        card: {
            backgroundColor: 'var(--surface-color)',
            borderRadius: '16px',
            padding: 'clamp(20px, 5vw, 40px)',
            width: 'min(92vw, 560px)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            border: '1px solid var(--border-color)',
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in-out',
        },
        title: {
            fontSize: 'clamp(20px, 2.4vw + 1rem, 28px)',
            fontWeight: 700,
            marginBottom: 'clamp(10px, 2vw, 16px)',
            color: 'var(--text-primary)',
        },
        description: {
            fontSize: 'clamp(14px, 1.5vw + 0.6rem, 16px)',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: 'clamp(16px, 4vw, 28px)',
        },
        button: {
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: 'clamp(12px, 1.2vw + 0.6rem, 16px) clamp(16px, 2vw + 0.5rem, 24px)',
            fontSize: 'clamp(14px, 1.4vw + 0.6rem, 16px)',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'background-color 0.2s, transform 0.2s',
            width: '100%',
            marginTop: '10px',
        },
        iconWrapper: {
            marginBottom: '24px',
            animation: 'iconFloat 3s ease-in-out infinite',
        },
        loadingContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        spinner: {
            border: '4px solid rgba(255, 255, 255, 0.2)',
            borderTop: '4px solid var(--primary-color)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
        },
        loadingText: {
            marginTop: '20px',
            color: 'var(--text-secondary)',
        }
    };
    
    // Inject keyframes animation styles
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            @keyframes iconFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
            @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 170, 255, 0.7); }
                70% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(0, 170, 255, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 170, 255, 0); }
            }
        `;
        document.head.appendChild(styleSheet);
    }, []);

    const primaryActionButtonStyle: React.CSSProperties = {
        ...commonStyles.button,
        padding: '16px 24px',
        fontSize: '18px',
        fontWeight: 700,
        animation: 'pulse 2s infinite',
    };

    const renderStep = () => {
        if (loading) {
            return (
                <div style={{...commonStyles.card, ...commonStyles.loadingContainer}}>
                    <div style={commonStyles.spinner}></div>
                    <p style={commonStyles.loadingText}>{loadingText}</p>
                </div>
            );
        }

        switch (step) {
            case 1: // Login
                return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h2 style={commonStyles.title}>Step 1: Simple & Secure Login</h2>
                        <p style={commonStyles.description}>zkPass uses your existing social accounts. No new passwords, no seed phrases to remember.</p>
                        <button style={commonStyles.button} onClick={() => handleNextStep(2, 2000, 'Authenticating with provider...')}>Sign in with Google</button>
                        <button style={commonStyles.button} onClick={() => handleNextStep(2, 2000, 'Authenticating with provider...')}>Sign in with Apple</button>
                    </div>
                );
            case 2: // MPC Key Gen
                return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h2 style={commonStyles.title}>Step 2: Generating Your Key</h2>
                        <p style={commonStyles.description}>Using Multi-Party Computation (MPC), a private key is securely created from your login. It's split into pieces so no single party—not even you—holds the full key.</p>
                        <button style={commonStyles.button} onClick={() => handleNextStep(3, 2500, 'Creating MPC key shares...')}>Securely Generate Wallet</button>
                    </div>
                );
            case 3: // Smart Wallet
                 return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h2 style={commonStyles.title}>Step 3: Preparing Smart Wallet</h2>
                        <p style={commonStyles.description}>An advanced smart contract wallet (ERC-4337) is tied to your identity. To save you costs, it's only deployed to the blockchain with your first transaction ("lazy deployment").</p>
                        <button style={commonStyles.button} onClick={() => handleNextStep(4, 1500, 'Finalizing wallet setup...')}>Go to Dashboard</button>
                    </div>
                );
             case 4: // Dashboard
                return (
                    <div style={commonStyles.card}>
                        <h2 style={commonStyles.title}>Welcome to zkPass</h2>
                        <p style={commonStyles.description}>Your secure, self-custody wallet is ready. All the complexity of Web3 is handled for you.</p>
                        <div style={{ backgroundColor: '#111', borderRadius: '8px', padding: 'clamp(14px, 3vw, 20px)', margin: 'clamp(14px, 3vw, 20px) 0'}}>
                            <p style={{ margin: 0, color: 'var(--text-secondary)'}}>Your Balance</p>
                            <p style={{ margin: '8px 0 0', fontSize: 'clamp(22px, 2vw + 1rem, 28px)', fontWeight: '700'}}>0.5 ETH</p>
                        </div>
                        <button style={commonStyles.button} onClick={() => handleNextStep(5, 2500, 'Sending transaction via relayer...')}>Perform Gas-Free Action</button>
                        <button style={{...commonStyles.button, backgroundColor: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)'}} onClick={() => handleNextStep(6, 1000, '')}>Learn about Social Recovery</button>
                    </div>
                );
            case 5: // Gasless Transaction
                 return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 12.5h5m-5-4h5M3 18h5v-4H3v4zm10-4v4h8v-4h-8zM3 6v4h5V6H3zm10 0v4h8V6h-8z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h2 style={commonStyles.title}>Transaction Sent!</h2>
                        <p style={commonStyles.description}>Your transaction was processed instantly on a zkRollup for speed and low cost. The gas fees were automatically covered by a Paymaster, so your experience is always free and seamless.</p>
                        <button style={commonStyles.button} onClick={() => setStep(4)}>Back to Dashboard</button>
                    </div>
                );
            case 6: // Social Recovery
                 return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h2 style={commonStyles.title}>Never Lose Your Account</h2>
                        <p style={commonStyles.description}>With Social Recovery, you can nominate trusted friends or devices ('Guardians') who can help you regain access if you lose your social login. No more lost funds due to a forgotten password.</p>
                        <button style={commonStyles.button} onClick={() => setStep(4)}>Got it</button>
                    </div>
                );
            default: // Welcome
                return (
                    <div style={commonStyles.card}>
                        <div style={commonStyles.iconWrapper}>
                           <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" fill="var(--primary-color)"/></svg>
                        </div>
                        <h1 style={{...commonStyles.title, fontSize: '32px'}}>zkPass</h1>
                        <p style={commonStyles.description}>A production-ready Web3 login experience that combines the ease of social login, the power of ZK cryptography, and the safety of smart contract wallets—all running gas-free on scalable Layer 2 rollups.</p>
                        <button style={primaryActionButtonStyle} onClick={() => handleNextStep(1, 500, '')}>See it in action</button>
                    </div>
                );
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',

            minHeight: '100vh',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            {renderStep()}
            {step > 0 && <button onClick={restart} style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                marginTop: '24px',
                cursor: 'pointer',
                fontSize: '14px',
            }}>Restart Demo</button>}
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}