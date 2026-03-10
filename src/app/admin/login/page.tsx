import { redirect } from "next/navigation";
import type { Metadata } from "next";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getAuthenticatedAdmin } from "@/lib/admin/auth";

export const metadata: Metadata = {
    title: "Logowanie Admin | GRINDFIX",
    robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
    const { user, reason } = await getAuthenticatedAdmin();
    if (user) {
        redirect("/admin");
    }

    return (
        <section className="admin-wrap">
            <div className="admin-container admin-login-shell">
                {reason === "misconfigured" && (
                    <div className="admin-warning" style={{ width: "min(560px, 100%)" }}>
                        <p style={{ margin: 0 }}>
                            Brak konfiguracji Supabase. Ustaw NEXT_PUBLIC_SUPABASE_URL i NEXT_PUBLIC_SUPABASE_ANON_KEY.
                        </p>
                    </div>
                )}
                {reason === "not_allowed" && (
                    <div className="admin-warning" style={{ width: "min(560px, 100%)" }}>
                        <p style={{ margin: 0 }}>
                            Konto jest zalogowane, ale nie ma uprawnien admina. Sprawdz zmienna ADMIN_EMAILS.
                        </p>
                    </div>
                )}
                <AdminLoginForm />
            </div>
        </section>
    );
}
