import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import AdminSignOutButton from "@/components/admin/AdminSignOutButton";
import { getAuthenticatedAdmin } from "@/lib/admin/auth";

export default async function AdminProtectedLayout({ children }: { children: ReactNode }) {
    const { user } = await getAuthenticatedAdmin();
    if (!user) {
        redirect("/admin/login");
    }

    return (
        <section className="admin-wrap">
            <div className="admin-container">
                <div className="admin-topbar admin-panel">
                    <div>
                        <p className="admin-topbar-title">CMS Admin</p>
                        <p className="admin-topbar-subtitle">
                            Zalogowany: {user.email}
                        </p>
                    </div>
                    <AdminSignOutButton />
                </div>
                {children}
            </div>
        </section>
    );
}
