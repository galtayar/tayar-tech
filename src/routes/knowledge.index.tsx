import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, BookOpen } from "lucide-react";
import { SiteHeader, SiteFooter, FloatingCta } from "@/components/service-page/ServicePage";
import { ARTICLES } from "@/lib/knowledge";
import { absoluteUrl } from "@/lib/seo";

const TITLE = "מרכז הידע לצילום, תיקון ושיקום צנרת | TAYAR TECH";
const DESC =
  "מידע מקצועי מבית TAYAR TECH על תיקון צנרת ללא הרס, תיקוני פאץ׳, צילום קווי ביוב ושיקום צנרת בטכנולוגיות מתקדמות.";

export const Route = createFileRoute("/knowledge/")({
  head: () => {
    const url = absoluteUrl("/knowledge");
    return {
      meta: [
        { title: TITLE },
        { name: "description", content: DESC },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: TITLE },
        { property: "og:description", content: DESC },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "he_IL" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: TITLE },
        { name: "twitter:description", content: DESC },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": url + "#page",
                name: "מרכז הידע של TAYAR TECH",
                description: DESC,
                url,
                inLanguage: "he-IL",
                publisher: { "@id": absoluteUrl("/#organization") },
                hasPart: ARTICLES.map((a) => ({
                  "@type": "Article",
                  headline: a.h1,
                  url: absoluteUrl(`/knowledge/${a.slug}`),
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "דף הבית", item: absoluteUrl("/") },
                  { "@type": "ListItem", position: 2, name: "מרכז ידע", item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: KnowledgeIndex,
});

function KnowledgeIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0" dir="rtl">
      <SiteHeader />
      <main>
        <section className="bg-gradient-soft border-b border-border">
          <div className="container-section py-10 lg:py-16 max-w-4xl">
            <nav aria-label="פירורי לחם" className="text-sm text-muted-foreground mb-6">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link to="/" className="hover:text-primary hover:underline underline-offset-4">דף הבית</Link></li>
                <li aria-hidden="true"><ChevronLeft className="w-4 h-4" /></li>
                <li aria-current="page" className="text-foreground font-medium">מרכז ידע</li>
              </ol>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-5">מרכז הידע של TAYAR TECH</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              מידע מקצועי וברור על אבחון, צילום, תיקון ושיקום צנרת בטכנולוגיות מתקדמות. תשובות לשאלות נפוצות לפני שמחליטים איך לטפל בתקלה בצנרת.
            </p>
          </div>
        </section>
        <div className="container-section py-12 lg:py-16 max-w-5xl">
          <ul className="grid md:grid-cols-2 gap-5">
            {ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/knowledge/$slug"
                  params={{ slug: a.slug }}
                  className="group flex flex-col h-full bg-card border border-border rounded-2xl p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
                >
                  <BookOpen className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
                  <h2 className="font-bold text-lg mb-2 leading-snug">{a.h1}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{a.summary}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    לקריאת המאמר <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
