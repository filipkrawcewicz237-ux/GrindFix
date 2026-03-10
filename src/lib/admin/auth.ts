import { getSupabaseServerAuthClient } from "@/lib/supabase/auth-server";

function getAllowedAdminEmails(): string[] {
    return (process.env.ADMIN_EMAILS || "")
        .split(",")
        .map((item) => item.trim().toLowerCase())
        .filter(Boolean);
}

export function isAllowedAdminEmail(email?: string | null): boolean {
    const allowedEmails = getAllowedAdminEmails();
    if (allowedEmails.length === 0) return true;
    if (!email) return false;
    return allowedEmails.includes(email.toLowerCase());
}

export async function getAuthenticatedAdmin() {
    let supabase;
    try {
        supabase = await getSupabaseServerAuthClient();
    } catch {
        return { user: null, supabase: null, reason: "misconfigured" as const };
    }

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
        return { user: null, supabase, reason: "not_authenticated" as const };
    }

    if (!isAllowedAdminEmail(data.user.email)) {
        return { user: null, supabase, reason: "not_allowed" as const };
    }

    return { user: data.user, supabase, reason: null };
}
