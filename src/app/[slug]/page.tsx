import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { generateMeta } from "@/lib/metadata";
import { getPublishedServicePages, getServicePageBySlug } from "@/lib/cms";
import { NAP, SITE_URL } from "@/lib/data";

<<<<<<< HEAD
export const revalidate = 3600;
=======
export const dynamic = "force-dynamic";
>>>>>>> 7ee1612 (update project)

export async function generateStaticParams() {
    const pages = await getPublishedServicePages();
    return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = await getServicePageBySlug(slug);
    if (!service) return {};

    return generateMeta({
        title: `${service.title} | GRINDFIX`,
        description: service.description,
        path: `/${slug}`,
        type: "website",
    });
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = await getServicePageBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <ServiceJsonLd
                name={service.title}
                description={service.description}
                url={`${SITE_URL}/${service.slug}`}
            />
            <Breadcrumbs items={[{ name: service.title, href: `/${service.slug}` }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">{service.icon} Usluga</span>
                    <h1 style={{ marginBottom: "1rem" }}>{service.title}</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 760, marginBottom: "1.75rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        {service.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href={service.ctaHref} className="btn-primary">{service.ctaLabel}</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">Zadzwon: {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
                </div>
            </section>

            {service.faq.length > 0 && <FAQSection items={service.faq} title={`FAQ - ${service.title}`} />}
        </>
    );
}
