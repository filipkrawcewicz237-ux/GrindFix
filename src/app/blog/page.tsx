import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/cms";
import BlogCard from "@/components/ui/BlogCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const revalidate = 3600;

export const metadata: Metadata = generateMeta({
    title: "Blog Rowerowy – Porady i Poradniki | GRINDFIX Warszawa",
    description:
        "Blog rowerowy GRINDFIX – porady serwisowe, cenniki, poradniki dla rowerzystów. Dowiedz się ile kosztuje przegląd, jak dbać o e-bike i kiedy serwisować amortyzator.",
    path: "/blog",
});

export default async function BlogIndex() {
    const articles = await getBlogPosts();
    const categories = [...new Set(articles.map((a) => a.category))];

    return (
        <>
            <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">📝 Blog</span>
                    <h1 style={{ marginBottom: "1rem" }}>Blog Rowerowy – Porady dla Rowerzystów</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Praktyczne porady serwisowe, cenniki, poradniki zakupowe i odpowiedzi na najczęstsze pytania rowerzystów w Warszawie.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {categories.map(cat => (
                        <div key={cat} style={{ marginBottom: "3rem" }}>
                            <h2 style={{ fontSize: "1.3rem", marginBottom: "1.5rem", color: "var(--green-dark)", borderBottom: "2px solid var(--yellow-accent)", paddingBottom: "0.5rem", display: "inline-block" }}>
                                {cat}
                            </h2>
                            <div className="grid-3">
                                {articles.filter((a) => a.category === cat).map((a) => (
                                    <BlogCard key={a.slug} article={a} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
