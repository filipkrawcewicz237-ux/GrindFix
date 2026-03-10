"use client";

import { useState } from "react";
import AdminBlogForm from "@/components/admin/AdminBlogForm";
import AdminServiceForm from "@/components/admin/AdminServiceForm";

type AdminTab = "blog" | "service";

export default function AdminDashboard() {
    const [tab, setTab] = useState<AdminTab>("blog");

    return (
        <div className="admin-panel">
            <div className="admin-tabs">
                <button
                    type="button"
                    className={`admin-tab ${tab === "blog" ? "admin-tab-active" : ""}`}
                    onClick={() => setTab("blog")}
                >
                    Artykul bloga
                </button>
                <button
                    type="button"
                    className={`admin-tab ${tab === "service" ? "admin-tab-active" : ""}`}
                    onClick={() => setTab("service")}
                >
                    Strona uslugi
                </button>
            </div>

            {tab === "blog" ? <AdminBlogForm /> : <AdminServiceForm />}
        </div>
    );
}
