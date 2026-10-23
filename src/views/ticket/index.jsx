import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePayment } from '../../context/ContextPayment';
import './styles.css';

const amountFormatter = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 });

function formatAmount(value) {
    let amount = value;

    if (typeof value === 'string') {
        const input = value.trim().replace(/\s/g, '');
        // Three trailing digits are a thousands group; one or two are cents.
        const decimals = input.match(/[.,](\d{1,2})$/);
        const integer = decimals ? input.slice(0, -decimals[0].length) : input;
        amount = Number(integer.replace(/[.,]/g, '') + (decimals ? `.${decimals[1]}` : ''));
    } else {
        amount = Number(value);
    }

    return amountFormatter.format(Number.isFinite(amount) ? amount : 0);
}

const SparkleBadge = () => (
    <svg className="receipt-sparkle" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <circle cx="26.5" cy="26.5" r="24" fill="#6ad4ee" />
        <circle cx="25" cy="25.5" r="24" fill="#fff000" stroke="#edf42b" strokeWidth="1.5" />
        <path d="M26 16c1.8 6.2 3.9 8.3 10 10-6.1 1.8-8.2 3.9-10 10-1.8-6.1-3.9-8.2-10-10 6.1-1.7 8.2-3.8 10-10Z" fill="#6454d9" />
        <path d="M34 15c.5 1.7 1.1 2.3 2.8 2.8-1.7.5-2.3 1.1-2.8 2.8-.5-1.7-1.1-2.3-2.8-2.8 1.7-.5 2.3-1.1 2.8-2.8Z" fill="#6454d9" />
    </svg>
);

const ProtectionShield = () => (
    <svg className="receipt-shield" viewBox="0 0 52 60" fill="none" aria-hidden="true">
        <defs>
            <linearGradient id="receipt-shield-fill" x1="9" y1="10" x2="45" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffb43b" />
                <stop offset=".5" stopColor="#ff931c" />
                <stop offset="1" stopColor="#ec5b0c" />
            </linearGradient>
        </defs>
        <path d="M26 3C20 7 12 9 5 10c0 23 4 36 21 45 17-9 21-22 21-45-7-1-15-3-21-7Z" fill="#da650e" opacity=".14" transform="translate(0 2)" />
        <path d="M26 2C20 6 12 8 5 9c0 23 4 36 21 45 17-9 21-22 21-45-7-1-15-3-21-7Z" fill="url(#receipt-shield-fill)" stroke="#ffbd55" strokeWidth="1.4" />
        <path d="M26 6C20 9 14 11 8 12c.4 20 4 31 18 39 14-8 17.6-19 18-39-6-1-12-3-18-6Z" stroke="#ffce7b" strokeWidth="1.1" opacity=".8" />
        <path d="M26 7v43c14-8 17-19 17.5-38C37 11 31 9 26 7Z" fill="#e96e0b" opacity=".22" />
        <text x="26" y="37" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif" fontSize="29" fontWeight="700">$</text>
    </svg>
);

const Ticket = () => {
    const { name, bank, cvu, total, setName, setBank, setCvu, setTotal } = usePayment();
    const navigate = useNavigate();
    const [shareMessage, setShareMessage] = useState('');
    const amount = formatAmount(total);
    const recipient = name || 'Destinatario';
    const recipientBank = bank || 'Mercado Pago';
    const account = cvu.trim();
    const accountLabel = /^\d+$/.test(account) ? 'CVU' : 'Alias';

    const shareReceipt = async () => {
        const text = [
            `Transferiste $ ${amount}`,
            recipient,
            account ? `${accountLabel}: ${account}` : '',
            recipientBank,
        ].filter(Boolean).join('\n');
        setShareMessage('');
        try {
            if (navigator.share) {
                await navigator.share({ title: 'Comprobante de transferencia', text });
                return;
            }
            const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'comprobante-de-transferencia.txt';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(url), 1000);
            setShareMessage('Descargamos tu comprobante.');
        } catch (error) {
            if (error.name !== 'AbortError') {
                setShareMessage('No pudimos compartir el comprobante. Intentá de nuevo.');
            }
        }
    };

    const startNewTransfer = () => {
        setName('');
        setBank(null);
        setCvu('');
        setTotal(0);
        navigate('/');
    };

    return (
        <main className="receipt-page" aria-labelledby="receipt-title">
            <header className="receipt-toolbar">
                <Link className="receipt-close" to="/" aria-label="Cerrar comprobante">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Link>
            </header>
            <section className="receipt-content">
                <div className="receipt-success-row">
                    <div className="receipt-success-icon" aria-hidden="true">
                        <svg viewBox="0 0 48 48" fill="none">
                            <path d="m11 24 9 9 18-18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <SparkleBadge />
                </div>
                <h1 id="receipt-title">Transferiste $ {amount}</h1>
                <div className="receipt-recipient">
                    <div className="receipt-recipient-logo" aria-hidden="true">
                        <img src="/mp-removebg-preview.png" alt="" />
                    </div>
                    <div className="receipt-recipient-details">
                        <p className="receipt-recipient-name">{recipient}</p>
                        <p>{account ? `${accountLabel}: ${account}` : 'Cuenta de destino'}</p>
                        <p>{recipientBank}</p>
                    </div>
                </div>
                <aside className="receipt-protection" aria-labelledby="receipt-protection-title">
                    <ProtectionShield />
                    <div className="receipt-protection-copy">
                        <h2 id="receipt-protection-title">Protección extra para tu dinero</h2>
                        <p>Protegé tu cuenta ante robos y estafas</p>
                        <a href="https://www.mercadopago.com.ar/seguridad" target="_blank" rel="noopener noreferrer">
                            Saber más
                            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </aside>
            </section>
            <footer className="receipt-actions">
                <p className="receipt-share-message" role="status">{shareMessage}</p>
                <button className="receipt-button receipt-button-primary" type="button" onClick={shareReceipt}>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="17.5" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="17.5" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="m8.6 10.4 6.3-3.8m-6.3 7 6.3 3.8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Compartir comprobante
                </button>
                <button className="receipt-button receipt-button-secondary" type="button" onClick={startNewTransfer}>
                    Hacer otra transferencia
                </button>
            </footer>
        </main>
    );
};

export default Ticket;
