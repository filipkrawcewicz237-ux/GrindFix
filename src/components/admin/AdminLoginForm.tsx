"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLoginForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const supabase = getSupabaseBrowserClient();
            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

            if (signInError) {
                setError(signInError.message);
                return;
            }

            router.replace("/admin");
            router.refresh();
        } catch (caughtError) {
            const message = caughtError instanceof Error ? caughtError.message : "Nie mozna zalogowac.";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="admin-login-card">
            <h1 className="admin-login-title">Panel administratora</h1>
            <p className="admin-login-subtitle">
                Zaloguj sie kontem Supabase Auth.
            </p>

            <div className="admin-field">
                <label htmlFor="admin-email">E-mail</label>
                <input
                    id="admin-email"
                    className="admin-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="admin-field">
                <label htmlFor="admin-password">Haslo</label>
                <input
                    id="admin-password"
                    className="admin-input"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {error && (
                <p className="admin-alert-error" style={{ marginBottom: "0.75rem" }}>{error}</p>
            )}

            <button type="submit" className="admin-btn admin-btn-primary" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Logowanie..." : "Zaloguj"}
            </button>
        </form>
    );
}
