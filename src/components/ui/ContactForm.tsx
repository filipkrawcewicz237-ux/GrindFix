"use client";

import { useState } from "react";
import { NAP } from "@/lib/data";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (submitted) {
        return (
            <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ color: "var(--green-primary)", marginBottom: "0.5rem" }}>Dziękujemy za wiadomość!</h3>
                <p style={{ color: "var(--gray-600)" }}>Odezwiemy się w ciągu 2-4 godzin w dni robocze.</p>
            </div>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="desktop-contact-form">
                <div className="grid-2">
                    <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">Imię i nazwisko</label>
                        <input id="contact-name" name="name" type="text" className="form-input"
                            value={form.name} onChange={handleChange} placeholder="Jan Kowalski" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contact-phone" className="form-label">Telefon *</label>
                        <input id="contact-phone" name="phone" type="tel" className="form-input" required
                            value={form.phone} onChange={handleChange} placeholder="+48 000 000 000" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">E-mail</label>
                    <input id="contact-email" name="email" type="email" className="form-input"
                        value={form.email} onChange={handleChange} placeholder="twoj@email.pl" />
                </div>
                <div className="form-group">
                    <label htmlFor="contact-service" className="form-label">Usługa</label>
                    <select id="contact-service" name="service" className="form-select"
                        value={form.service} onChange={handleChange}>
                        <option value="">Wybierz usługę...</option>
                        <option value="przeglad">Przegląd roweru</option>
                        <option value="naprawa">Naprawa roweru</option>
                        <option value="ebike">Serwis e-bike</option>
                        <option value="mobilny">Mobilny serwis</option>
                        <option value="kola">Budowa kół</option>
                        <option value="amortyzator">Serwis amortyzatora</option>
                        <option value="inne">Inne</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Wiadomość</label>
                    <textarea id="contact-message" name="message" className="form-textarea"
                        value={form.message} onChange={handleChange}
                        placeholder="Opisz co się dzieje z Twoim rowerem lub czego potrzebujesz..." />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%" }} disabled={loading}>
                    {loading ? "Wysyłanie..." : "📅 Wyślij zapytanie i zarezerwuj wizytę"}
                </button>
                {error && (
                    <p style={{ color: "red", textAlign: "center", marginTop: "1rem", fontSize: "0.9rem" }}>
                        Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub zadzwoń bezpośrednio.
                    </p>
                )}
                <p style={{ fontSize: "0.8rem", color: "var(--gray-400)", textAlign: "center", marginTop: "0.75rem" }}>
                    Odpowiadamy w ciągu 2–4 godzin. Możesz też zadzwonić:{" "}
                    <a href={`tel:${NAP.phone}`} style={{ color: "var(--green-primary)", fontWeight: 700 }}>{NAP.phoneFormatted}</a>
                </p>
            </form>

            <div className="mobile-contact-buttons">
                <a href="tel:+48572456397" className="contact-btn btn-phone">
                    📞 Zadzwoń
                </a>
                <a href="https://t.me/rudicz" target="_blank" rel="noopener noreferrer" className="contact-btn btn-telegram">
                    ✈️ Telegram
                </a>
                <a href="https://wa.me/+48572456397" target="_blank" rel="noopener noreferrer" className="contact-btn btn-whatsapp">
                    💬 WhatsApp
                </a>
                <a href="https://m.me/maks.rudich1" target="_blank" rel="noopener noreferrer" className="contact-btn btn-messenger">
                    🔵 Messenger
                </a>
            </div>
        </>
    );
}
