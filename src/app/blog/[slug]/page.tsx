import { notFound } from "next/navigation";
import { Metadata } from "next";
import { AUTHORS, SITE_URL } from "@/lib/data";
import { getBlogPostBySlug, getBlogPosts, getBlogSlugs } from "@/lib/cms";
import { normalizeSeoDescription, normalizeSeoTitle } from "@/lib/seo";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";

<<<<<<< HEAD
export const revalidate = 3600;
=======
export const dynamic = "force-dynamic";
>>>>>>> 7ee1612 (update project)

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const article = await getBlogPostBySlug(slug);
    if (!article) return {};
    const seoTitle = normalizeSeoTitle(`${article.title} | Blog GRINDFIX`);
    const seoDescription = normalizeSeoDescription(article.excerpt, article.title);

    return {
        title: seoTitle,
        description: seoDescription,
        alternates: { canonical: `${SITE_URL}/blog/${slug}` },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            type: "article",
            publishedTime: article.date,
            modifiedTime: article.updatedDate,
            url: `${SITE_URL}/blog/${slug}`,
        },
    };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = await getBlogPostBySlug(slug);
    if (!article) notFound();

    const author = AUTHORS.find((a) => a.slug === article.author) || AUTHORS[0]!;
    const allArticles = await getBlogPosts();
    const related = allArticles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

    return (
        <>
            <ArticleJsonLd
                title={article.title}
                description={article.excerpt}
                url={`${SITE_URL}/blog/${slug}`}
                imageUrl={`${SITE_URL}${article.image}`}
                datePublished={article.date}
                dateModified={article.updatedDate}
                authorName={author.name}
                authorUrl={`${SITE_URL}/authors/${author.slug}`}
            />
            <Breadcrumbs items={[
                { name: "Blog", href: "/blog" },
                { name: article.title, href: `/blog/${slug}` },
            ]} />

            <article>
                {/* Hero */}
                <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "3rem 0 2rem" }}>
                    <div className="container" style={{ maxWidth: 860 }}>
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
                            <span className="badge-green">{article.category}</span>
                            <span style={{ fontSize: "0.8rem", color: "var(--gray-500)" }}>⏱ {article.readingTime} min czytania</span>
                        </div>
                        <h1 style={{ marginBottom: "1rem" }}>{article.title}</h1>
                        <p style={{ fontSize: "1.05rem", color: "var(--gray-700)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{article.excerpt}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "var(--gray-500)" }}>
                            <Link href={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600, color: "var(--green-dark)" }}>
                                👤 {author.name}
                            </Link>
                            <span>|</span>
                            <span>📅 Opublikowano: {article.date}</span>
                            <span>|</span>
                            <span>🔄 Aktualizacja: {article.updatedDate}</span>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="section">
                    <div className="container" style={{ maxWidth: 860 }}>
                        <div className="prose" dangerouslySetInnerHTML={{ __html: article.bodyHtml || `<p>${article.excerpt}</p>` }} />

                        {/* CTA */}
                        <div className="card section-green" style={{ marginTop: "2.5rem", textAlign: "center", padding: "2rem" }}>
                            <h3 style={{ marginBottom: "0.5rem" }}>Potrzebujesz pomocy z rowerem?</h3>
                            <p style={{ color: "var(--gray-600)", marginBottom: "1.25rem" }}>Skontaktuj się z GRINDFIX – najlepszym serwisem rowerowym w Warszawie.</p>
                            <a href="/#kontakt" className="btn-primary">📅 Zarezerwuj wizytę</a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                {article.faq.length > 0 && <FAQSection items={article.faq} />}

                {/* Related */}
                {related.length > 0 && (
                    <section className="section section-gray">
                        <div className="container">
                            <h2 style={{ marginBottom: "1.5rem" }}>Podobne artykuły</h2>
                            <div className="grid-3">
                                {related.map(a => (
                                    <div key={a.slug} className="card">
                                        <span className="badge-green">{a.category}</span>
                                        <h3 style={{ fontSize: "0.95rem", margin: "0.5rem 0" }}>
                                            <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                                        </h3>
                                        <p style={{ fontSize: "0.85rem", color: "var(--gray-600)" }}>{a.excerpt.substring(0, 100)}...</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </article>
        </>
    );
}
