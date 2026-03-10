"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminSignOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function onClick() {
        setLoading(true);
        try {
            const supabase = getSupabaseBrowserClient();
            await supabase.auth.signOut();
            router.replace("/admin/login");
            router.refresh();
        } finally {
            setLoading(false);
        }
    }

    return (
        <button type="button" className="admin-btn admin-btn-secondary" onClick={onClick} disabled={loading}>
            {loading ? "Wylogowanie..." : "Wyloguj"}
        </button>
    );
}
