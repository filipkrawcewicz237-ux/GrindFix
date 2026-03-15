import { notFound } from "next/navigation";
import { Metadata } from "next";
import { AUTHORS, SITE_URL } from "@/lib/data";
import { getBlogPosts } from "@/lib/cms";
import BlogCard from "@/components/ui/BlogCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
    return AUTHORS.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const author = AUTHORS.find(a => a.slug === slug);
    if (!author) return {};
    return {
        title: `${author.name} – ${author.role} | GRINDFIX Blog`,
        description: author.bio.substring(0, 160),
        alternates: { canonical: `${SITE_URL}/authors/${slug}` },
        robots: { index: true, follow: true },
    };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const author = AUTHORS.find(a => a.slug === slug);
    if (!author) notFound();

    const articles = (await getBlogPosts()).filter((a) => a.author === slug);

    return (
        <>
            <PersonJsonLd
                name={author.name}
                url={`${SITE_URL}/authors/${slug}`}
                jobTitle={author.role}
                description={author.bio}
                image={`${SITE_URL}${author.avatar}`}
            />
            <Breadcrumbs items={[
                { name: "Blog", href: "/blog" },
                { name: author.name, href: `/authors/${slug}` },
            ]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
                        <div style={{
                            width: 120, height: 120, borderRadius: "50%",
                            background: "linear-gradient(135deg,var(--green-primary),var(--yellow-accent))",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "3rem", flexShrink: 0,
                        }}>
                            👤
                        </div>
                        <div>
                            <span className="section-label">{author.role}</span>
                            <h1 style={{ marginBottom: "0.25rem" }}>{author.name}</h1>
                            <p style={{ color: "var(--green-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
                                🔧 {author.specialization}
                            </p>
                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                {Object.entries(author.social).map(([platform, url]) => (
                                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                                        style={{ color: "var(--gray-600)", fontSize: "0.875rem", fontWeight: 600 }}>
                                        {platform === "instagram" ? "📸 Instagram" : "📘 Facebook"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: 900 }}>
                    <div className="card" style={{ marginBottom: "2.5rem" }}>
                        <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>O autorze</h2>
                        <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--gray-700)" }}>{author.bio}</p>
                    </div>

                    {articles.length > 0 && (
                        <>
                            <h2 style={{ marginBottom: "1.5rem" }}>Artykuły autora ({articles.length})</h2>
                            <div className="grid-3">
                                {articles.map(a => <BlogCard key={a.slug} article={a} />)}
                            </div>
                        </>
                    )}

                    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                        <Link href="/blog" className="btn-outline">← Wróć do bloga</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
