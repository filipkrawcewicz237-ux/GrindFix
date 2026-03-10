import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/data";

interface BreadcrumbItem { name: string; href: string; }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
    const ldItems = [
        { name: "Strona główna", url: SITE_URL },
        ...items.map(item => ({ name: item.name, url: `${SITE_URL}${item.href}` })),
    ];

    return (
        <>
            <BreadcrumbJsonLd items={ldItems} />
            <nav aria-label="Breadcrumb" style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-100)" }}>
                <div className="container">
                    <ol className="breadcrumbs">
                        <li><Link href="/">Strona główna</Link></li>
                        {items.map((item, i) => (
                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                                <span className="sep">/</span>
                                {i === items.length - 1 ? (
                                    <span style={{ color: "var(--green-primary)", fontWeight: 600 }}>{item.name}</span>
                                ) : (
                                    <Link href={item.href}>{item.name}</Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </nav>
        </>
    );
}
