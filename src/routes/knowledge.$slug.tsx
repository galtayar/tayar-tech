import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { SiteHeader, SiteFooter, FloatingCta, CtaButtons, RichText } from "@/components/service-page/ServicePage";
import { getArticle } from "@/lib/knowledge";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/knowledge/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "המאמר לא נמצא | TAYAR TECH" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    const url = absoluteUrl(`/knowledge/${a.slug}`);
    return {
      meta: [
        { title: a.title },
        { name: "description", content: a.description },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "he_IL" },
        { property: "article:published_time", content: a.datePublished },
        { property: "article:modified_time", content: a.dateModified },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "@id": url + "#article",
                headline: a.h1,
                description: a.description,
                url,
                mainEntityOfPage: url,
                inLanguage: "he-IL",
                datePublished: a.datePublished,
                dateModified: a.dateModified,
                author: { "@type": "Organization", name: "TAYAR TECH", "@id": absoluteUrl("/#organization") },
                publisher: { "@id": absoluteUrl("/#organization") },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "דף הבית", item: absoluteUrl("/") },
                  { "@type": "ListItem", position: 2, name: "מרכז ידע", item: absoluteUrl("/knowledge") },
                  { "@type": "ListItem", position: 3, name: a.h1, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen grid place-items-center p-8 text-center" dir="rtl">
      <div>
        <h1 className="text-2xl font-bold mb-4">המאמר לא נמצא</h1>
        <Link to="/knowledge" className="text-primary font-semibold underline">חזרה למרכז הידע</Link>
      </div>
    </div>
  );
}

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0" dir="rtl">
      <SiteHeader />
      <main>
        <article>
          <header className="bg-gradient-soft border-b border-border">
            <div className="container-section py-10 lg:py-14 max-w-3xl">
              <nav aria-label="פירורי לחם" className="text-sm text-muted-foreground mb-6">
                <ol className="flex flex-wrap items-center gap-1">
                  <li><Link to="/" className="hover:text-primary hover:underline underline-offset-4">דף הבית</Link></li>
                  <li aria-hidden="true"><ChevronLeft className="w-4 h-4" /></li>
                  <li><Link to="/knowledge" className="hover:text-primary hover:underline underline-offset-4">מרכז ידע</Link></li>
                  <li aria-hidden="true"><ChevronLeft className="w-4 h-4" /></li>
                  <li aria-current="page" className="text-foreground font-medium">{a.h1}</li>
                </ol>
              </nav>
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">{a.h1}</h1>
            </div>
          </header>

          <div className="container-section py-10 lg:py-14 max-w-3xl space-y-10">
            <div className="bg-card border-r-4 border-primary border-y border-l border-border rounded-2xl p-5 lg:p-6">
              <p className="text-sm font-bold text-primary mb-2">התשובה בקצרה</p>
              <p className="text-lg leading-relaxed">{a.answer}</p>
            </div>

            {a.sections.map((s) => (
              <section key={s.h2}>
                <h2 className="text-2xl font-extrabold mb-4">{s.h2}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {s.blocks.map((b, i) => {
                    if ("p" in b) return <p key={i}><RichText text={b.p} /></p>;
                    if ("ul" in b)
                      return (
                        <ul key={i} className="space-y-2 list-disc pr-5 marker:text-primary">
                          {b.ul.map((li) => <li key={li}><RichText text={li} /></li>)}
                        </ul>
                      );
                    return (
                      <ol key={i} className="space-y-2 list-decimal pr-5 marker:text-primary marker:font-bold">
                        {b.ol.map((li) => <li key={li}><RichText text={li} /></li>)}
                      </ol>
                    );
                  })}
                </div>
              </section>
            ))}

            <section className="bg-gradient-primary text-primary-foreground rounded-3xl p-7 text-center">
              {a.closing && (
                <p className="text-lg font-semibold mb-5 [&_a]:text-primary-foreground">
                  <RichText text={a.closing} />
                </p>
              )}
              <div className="flex justify-center"><CtaButtons location={`article_${a.slug}`} /></div>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
