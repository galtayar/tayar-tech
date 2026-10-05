import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ChevronLeft, CheckCircle2, MapPin, Award, Camera, Layers, Sparkles, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { absoluteUrl } from "@/lib/seo";

export const PHONE = "052-5718085";
export const PHONE_TEL = "+972525718085";
export const WHATSAPP_URL = `https://wa.me/972525718085?text=${encodeURIComponent(
  "שלום, אשמח לקבל ייעוץ לגבי תיקון צנרת",
)}`;

export type ServiceSlug =
  | "/tikkun-tzaneret-lelo-heres"
  | "/patch-pipe-repair"
  | "/cipp-pipe-relining"
  | "/sewer-camera-inspection";

export const SERVICE_LINKS: { to: ServiceSlug; title: string; text: string; icon: typeof Phone }[] = [
  { to: "/tikkun-tzaneret-lelo-heres", title: "תיקון ושיקום צנרת ללא הרס", text: "התאמת שיטת התיקון לאחר אבחון, בלי לשבור כשמצב הקו מאפשר זאת.", icon: ShieldCheck },
  { to: "/patch-pipe-repair", title: "תיקון פאץ׳ נקודתי", text: "טיפול מקומי בסדק, חור או חיבור פגום מתוך הצינור הקיים.", icon: Sparkles },
  { to: "/cipp-pipe-relining", title: "שיקום בשרוול CIPP", text: "יצירת צינור חדש בתוך הצינור הקיים לאורך מקטע שלם.", icon: Layers },
  { to: "/sewer-camera-inspection", title: "צילום קווי ביוב 360°", text: "אבחון ויזואלי מדויק של מצב הקו לפני קבלת החלטה.", icon: Camera },
];

export const SERVICE_AREAS = [
  "קריית אונו", "גני תקווה", "יהוד-מונוסון", "אור יהודה", "סביון", "גבעת שמואל",
  "פתח תקווה", "רמת גן", "גבעתיים", "תל אביב-יפו", "בני ברק", "חולון", "בת ים", "ראשון לציון",
];

export type Section = {
  h2: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  subsections?: { h3: string; text: string }[];
};

export type ServicePageData = {
  slug: ServiceSlug;
  title: string;
  description: string;
  h1: string;
  breadcrumb: string;
  serviceName: string;
  serviceType: string;
  intro: string;
  sections: Section[];
  methodsAfter?: number; // render method cards after this section index
  faq: { q: string; a: string }[];
};

export function buildServiceHead(d: ServicePageData) {
  const url = absoluteUrl(d.slug);
  return {
    meta: [
      { title: d.title },
      { name: "description", content: d.description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: d.title },
      { property: "og:description", content: d.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: d.title },
      { name: "twitter:description", content: d.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": url + "#service",
              name: d.serviceName,
              serviceType: d.serviceType,
              description: d.description,
              url,
              inLanguage: "he-IL",
              provider: { "@id": absoluteUrl("/#localbusiness") },
              areaServed: SERVICE_AREAS.map((n) => ({ "@type": "City", name: n })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "דף הבית", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: d.breadcrumb, item: url },
              ],
            },
            {
              "@type": "FAQPage",
              "@id": url + "#faq",
              mainEntity: d.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  };
}

function track(action: "call" | "whatsapp", location: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { gtag?: (...a: unknown[]) => void };
  w.gtag?.("event", action === "call" ? "phone_call" : "whatsapp_click", {
    event_category: "engagement",
    event_label: location,
  });
}

function CtaButtons({ location }: { location: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={`tel:${PHONE_TEL}`}
        onClick={() => track("call", location)}
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary-glow transition-colors min-h-12"
      >
        <Phone className="w-4 h-4" /> התקשרו — {PHONE}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        onClick={() => track("whatsapp", location)}
        className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform min-h-12"
      >
        <MessageCircle className="w-4 h-4" /> שלחו הודעה בוואטסאפ
      </a>
    </div>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const related = SERVICE_LINKS.filter((s) => s.to !== data.slug);
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0" dir="rtl">
      <header className="border-b border-border bg-background/95">
        <div className="container-section flex items-center justify-between gap-4 py-2">
          <Link to="/" aria-label="TAYAR TECH — דף הבית" className="block">
            <img src="/logo.png" alt="TAYAR TECH — טייאר טכנולוגיות צנרת" className="h-12 sm:h-14 w-auto object-contain" width={1600} height={680} />
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => track("call", "service_header")}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-glow transition-colors min-h-11"
          >
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">{PHONE}</span><span className="sm:hidden">התקשרו</span>
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-soft border-b border-border">
          <div className="container-section py-10 lg:py-16 max-w-4xl">
            <nav aria-label="פירורי לחם" className="text-sm text-muted-foreground mb-6">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link to="/" className="hover:text-primary underline-offset-4 hover:underline">דף הבית</Link></li>
                <li aria-hidden="true"><ChevronLeft className="w-4 h-4" /></li>
                <li aria-current="page" className="text-foreground font-medium">{data.breadcrumb}</li>
              </ol>
            </nav>
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-5">{data.h1}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{data.intro}</p>
            <CtaButtons location="service_hero" />
          </div>
        </section>

        <div className="container-section py-12 lg:py-16 max-w-4xl space-y-14">
          {data.sections.map((s, i) => (
            <div key={s.h2} className="space-y-14">
              <section>
                <h2 className="text-2xl lg:text-3xl font-extrabold mb-4">{s.h2}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 24)} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 bg-card border border-border rounded-xl p-4">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.steps && (
                  <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {s.steps.map((st, n) => (
                      <li key={st} className="bg-card border border-border rounded-2xl p-5">
                        <span className="w-9 h-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center font-bold mb-3">{n + 1}</span>
                        <span className="font-semibold leading-snug">{st}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {s.subsections?.map((sub) => (
                  <div key={sub.h3} className="mt-5">
                    <h3 className="font-bold text-lg mb-2">{sub.h3}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sub.text}</p>
                  </div>
                ))}
              </section>
              {data.methodsAfter === i && <RelatedCards items={related} heading="שיטות תיקון ושיקום הצנרת שלנו" />}
            </div>
          ))}

          <section aria-labelledby="areas-h">
            <h2 id="areas-h" className="text-2xl lg:text-3xl font-extrabold mb-4">שירות בכל אזור המרכז וגוש דן</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              TAYAR TECH מעניקה שירות לבתים פרטיים, בניינים, עסקים, חברות ניהול וגופים נוספים ברחבי אזור המרכז וגוש דן.
            </p>
            <ul className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a} className="inline-flex items-center gap-1 text-sm bg-muted text-foreground px-3 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> {a}
                </li>
              ))}
              <li className="text-sm text-muted-foreground px-3 py-1.5">והסביבה</li>
            </ul>
          </section>

          <section aria-labelledby="why-h" className="bg-card border border-border rounded-3xl p-6 lg:p-8">
            <h2 id="why-h" className="text-2xl lg:text-3xl font-extrabold mb-2">למה TAYAR TECH?</h2>
            <p className="text-muted-foreground mb-5">TAYAR TECH | טכנולוגיות צנרת מתקדמות — מבית טייאר אינסטלציה ושירותי ביובית.</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "מעל 12 שנות ניסיון בתחום האינסטלציה והצנרת",
                "הסמכת STS לתיקון צנרת ללא הרס",
                "צילום קווי ביוב במצלמת 360° לאבחון מדויק",
                "עבודה מול בתים פרטיים, ועדי בתים, חברות ניהול ורשויות",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-h">
            <h2 id="faq-h" className="text-2xl lg:text-3xl font-extrabold mb-4">שאלות נפוצות</h2>
            <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl px-5">
              {data.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`}>
                  <AccordionTrigger className="text-right font-semibold">
                    <h3>{f.q}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {data.methodsAfter === undefined && <RelatedCards items={related} heading="שירותים נוספים" />}

          <section className="bg-gradient-primary text-primary-foreground rounded-3xl p-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">רוצים לדעת אם אפשר לתקן בלי לשבור?</h2>
            <p className="opacity-90 mb-6">ספרו לנו על התקלה ונתאם אבחון מקצועי.</p>
            <div className="flex justify-center"><CtaButtons location="service_bottom" /></div>
          </section>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="container-section py-8 flex flex-col md:flex-row gap-6 justify-between text-sm">
          <nav aria-label="שירותים">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><Link to="/" className="hover:text-primary">דף הבית</Link></li>
              {SERVICE_LINKS.map((s) => (
                <li key={s.to}><Link to={s.to} className="hover:text-primary">{s.title}</Link></li>
              ))}
            </ul>
          </nav>
          <p className="text-muted-foreground">© {new Date().getFullYear()} TAYAR TECH — טייאר טכנולוגיות צנרת</p>
        </div>
      </footer>

      <div className="fixed bottom-4 inset-x-4 z-50 flex gap-3 md:hidden">
        <a href={`tel:${PHONE_TEL}`} onClick={() => track("call", "floating")} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-2xl font-bold shadow-elegant">
          <Phone className="w-5 h-5" /> התקשרו
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" onClick={() => track("whatsapp", "floating")} className="flex-1 inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-4 py-3 rounded-2xl font-bold shadow-elegant">
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>
    </div>
  );
}

function RelatedCards({ items, heading }: { items: typeof SERVICE_LINKS; heading: string }) {
  return (
    <section>
      <h2 className="text-2xl lg:text-3xl font-extrabold mb-5">{heading}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((s) => (
          <Link key={s.to} to={s.to} className="group bg-card border border-border rounded-2xl p-5 hover:shadow-elegant hover:-translate-y-1 transition-all">
            <s.icon className="w-6 h-6 text-primary mb-3" aria-hidden="true" />
            <h3 className="font-bold mb-1">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.text}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">למידע נוסף <ChevronLeft className="w-4 h-4" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
