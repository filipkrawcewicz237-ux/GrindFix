import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAuthenticatedAdmin } from "@/lib/admin/auth";
import { buildBlogPayload } from "@/lib/admin/content";

export async function POST(req: Request) {
    try {
        const { user, supabase, reason } = await getAuthenticatedAdmin();
        if (!user) {
            if (reason === "misconfigured") {
                return NextResponse.json({ success: false, error: "Brak konfiguracji Supabase na serwerze." }, { status: 500 });
            }
            return NextResponse.json(
                { success: false, error: reason === "not_allowed" ? "Brak uprawnien administratora." : "Brak autoryzacji." },
                { status: reason === "not_allowed" ? 403 : 401 },
            );
        }

        const body = await req.json();
        const payload = buildBlogPayload(body);
        if (!supabase) {
            return NextResponse.json({ success: false, error: "Brak klienta Supabase." }, { status: 500 });
        }

        const { data, error } = await supabase
            .from("cms_blog_posts")
            .upsert(payload, { onConflict: "slug" })
            .select("slug")
            .single();

        if (error) {
            return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }

        revalidatePath("/");
        revalidatePath("/blog");
        revalidatePath(`/blog/${data.slug}`);
        revalidatePath("/sitemap.xml");

        return NextResponse.json({
            success: true,
            slug: data.slug,
            previewUrl: `/blog/${data.slug}`,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Nieznany blad";
        return NextResponse.json({ success: false, error: message }, { status: 400 });
    }
}
