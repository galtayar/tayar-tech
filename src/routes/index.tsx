import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Zap,
  Wrench,
  Camera,
  Droplets,
  Sparkles,
  Award,
  CheckCircle2,
  Quote,
  Star,
  MapPin,
  GraduationCap,
  Building2,
  Layers,
  Waves,
  Cpu,
  Gauge,
  Facebook,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-pipe-cutaway.jpg";
import logoAsset from "@/assets/tayar-tech-logo.png.asset.json";
import galProfile from "@/assets/gal-profile.jpg.asset.json";
import logoGaneiTikva from "@/assets/clients/ganei-tikva.png.asset.json";
import logoKiryatOno from "@/assets/clients/kiryat-ono.png.asset.json";
import logoNesher from "@/assets/clients/nesher.png.asset.json";
import logoYakir from "@/assets/clients/yakir.png.asset.json";
import logoMeatbar from "@/assets/clients/meatbar.jpg.asset.json";
import logoOved from "@/assets/clients/oved.png.asset.json";

const PHONE = "052-5718085";
const PHONE_TEL = "+972525718085";
const WHATSAPP = "972525718085";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "שלום, אשמח לקבל הצעת מחיר לשיקום / תיקון צנרת",
)}`;
const GOOGLE_BUSINESS_NAME = "טייאר אינסטלציה ושירותי ביובית";
const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}`;
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}&output=embed`;
const FACEBOOK_URL = "https://www.facebook.com/tayargal/";

// Click tracking — sends to gtag/dataLayer when Google Analytics/Ads is wired up.
function trackConversion(
  action: "call" | "whatsapp" | "google_reviews" | "contact",
  location: string,
) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  const eventName =
    action === "call"
      ? "phone_call"
      : action === "whatsapp"
        ? "whatsapp_click"
        : action === "google_reviews"
          ? "google_reviews_click"
          : "contact_click";
  const payload = { event_category: "engagement", event_label: location, action };
  w.gtag?.("event", eventName, payload);
  w.dataLayer?.push({ event: eventName, ...payload });
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "TAYAR TECH | שיקום צנרת ללא הרס, תיקון פאץ׳ ושרוול, צילום קווי ביוב",
      },
      {
        name: "description",
        content:
          "TAYAR TECH — שיקום ותיקון צנרת ללא הרס, תיקון פאץ׳, שיטת שרוול (CIPP), צילום קווי ביוב 360° וחידוש תשתיות מים וביוב. מעל 12 שנות ניסיון, מוסמכי STS. שירות לפרטיים, ועדי בתים, חברות ניהול ורשויות.",
      },
      {
        name: "keywords",
        content:
          "תיקון צנרת ללא הרס, שיקום צנרת ללא הרס, תיקון צנרת בלי לשבור, צילום קווי ביוב, תיקון פאץ', חידוש צנרת, שרוול לצנרת, צילום צנרת 360, אינסטלטור ללא הרס, שיקום תשתיות מים וביוב, CIPP, טייאר טכנולוגיות צנרת, TAYAR TECH",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "IL" },
      { name: "geo.placename", content: "אזור המרכז, ישראל" },
      { property: "og:title", content: "TAYAR TECH | טכנולוגיות צנרת מתקדמות" },
      {
        property: "og:description",
        content:
          "שיקום ותיקון צנרת ללא הרס — שיטת פאץ׳ ושרוול, צילום קווי ביוב 360°. מעל 12 שנות ניסיון.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TAYAR TECH" },
      { property: "og:locale", content: "he_IL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TAYAR TECH | טכנולוגיות צנרת מתקדמות" },
      {
        name: "twitter:description",
        content: "שיקום ותיקון צנרת ללא הרס — פאץ׳, שרוול וצילום קווי ביוב 360°.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "#organization",
              name: "TAYAR TECH — טייאר טכנולוגיות צנרת",
              alternateName: ["טייאר טכנולוגיות צנרת", "טייאר אינסטלציה ושירותי ביובית"],
              url: "/",
              logo: "/",
              telephone: "+972525718085",
              sameAs: [
                "https://www.facebook.com/tayargal/",
                "https://www.google.com/maps/search/?api=1&query=" +
                  encodeURIComponent("טייאר אינסטלציה ושירותי ביובית"),
              ],
              founder: { "@type": "Person", name: "גל טייאר" },
            },
            {
              "@type": ["LocalBusiness", "Plumber"],
              "@id": "#localbusiness",
              name: "TAYAR TECH — טייאר טכנולוגיות צנרת",
              image: "/",
              description:
                "שיקום ותיקון צנרת ללא הרס, תיקון פאץ׳, שיטת שרוול (CIPP) וצילום קווי ביוב 360°. מעל 12 שנות ניסיון, מוסמכי STS.",
              telephone: "+972525718085",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
                addressRegion: "מרכז",
              },
              areaServed: [
                "קריית אונו","גני תקווה","פתח תקווה","גבעת שמואל","יהוד",
                "אור יהודה","סביון","רמת גן","תל אביב","ראשון לציון",
                "חולון","בת ים","בקעת אונו","אזור המרכז",
              ].map((n) => ({ "@type": "City", name: n })),
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/tayargal/",
                "https://www.google.com/maps/search/?api=1&query=" +
                  encodeURIComponent("טייאר אינסטלציה ושירותי ביובית"),
              ],
              founder: { "@type": "Person", name: "גל טייאר" },
              knowsAbout: [
                "שיקום צנרת ללא הרס","תיקון צנרת ללא חפירה","תיקון פאץ׳",
                "שיטת שרוול CIPP","צילום קווי ביוב","שטיפת קווי ביוב",
                "שיקום מערכות ביוב","חידוש צנרת","צילום צנרת 360",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "20",
              },
            },
            ...[
              { name: "שיקום צנרת ללא הרס", desc: "שיקום פנימי מלא של מערכת הצנרת — בלי לשבור קירות, רצפות או ריצוף." },
              { name: "תיקון צנרת ללא חפירה", desc: "תיקון צנרת מים וביוב ללא חפירות בחצר או ברחוב — מהיר ומדויק." },
              { name: "תיקון פאץ׳ לצנרת", desc: "טיפול נקודתי באפוקסי בסדקים, חורים ונזילות בקטעי צנרת." },
              { name: "שיקום צנרת בשיטת שרוול (CIPP)", desc: "יצירת ׳צינור בתוך צינור׳ — שרוול אפוקסי פנימי עמיד לעשרות שנים." },
              { name: "צילום קווי ביוב 360°", desc: "אבחון מדויק של סתימות, שברים, שורשים ומפגעים בצנרת באמצעות מצלמות רובוטיות." },
              { name: "שטיפת קווי ביוב", desc: "שטיפה בלחץ גבוה (ג׳טינג) להסרת שומנים, אבנית וסתימות עיקשות." },
            ].map((s) => ({
              "@type": "Service",
              name: s.name,
              description: s.desc,
              serviceType: s.name,
              provider: { "@id": "#localbusiness" },
              areaServed: { "@type": "AdministrativeArea", name: "אזור המרכז, ישראל" },
            })),
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "דף הבית", item: "/" },
                { "@type": "ListItem", position: 2, name: "שירותים", item: "/#services" },
                { "@type": "ListItem", position: 3, name: "אודות", item: "/#about" },
                { "@type": "ListItem", position: 4, name: "שאלות נפוצות", item: "/#faq" },
                { "@type": "ListItem", position: 5, name: "צור קשר", item: "/#contact" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { q: "מהו שיקום צנרת ללא הרס?", a: "שיקום צנרת ללא הרס הוא פתרון טכנולוגי מתקדם המאפשר להחזיר צנרת ישנה ופגומה למצב חדש — מבלי לשבור קירות, רצפות או חפירות בחצר. השיקום מתבצע מתוך הצנרת באמצעות שיטות פאץ׳ או שרוול (CIPP)." },
                { q: "מהו תיקון פאץ׳?", a: "תיקון פאץ׳ הוא טיפול נקודתי בקטע פגום בצנרת — סדק, חור או חיבור דולף. מותקנת ׳טבעת׳ אפוקסי פנימית באורך של עד מטר אשר אוטמת לחלוטין את הקטע הפגום." },
                { q: "מהו שיקום צנרת בשיטת שרוול (CIPP)?", a: "שיטת השרוול (Cured In Place Pipe) יוצרת ׳צינור בתוך צינור׳: שרוול ספוג ברזין אפוקסי מוחדר לקו הקיים ומתקשה למצב מוצק. התוצאה — קו חדש, עמיד לעשרות שנים." },
                { q: "האם חייבים לחפור או לשבור קירות?", a: "לא. כל העבודה מתבצעת דרך פתחי גישה קיימים — ללא חפירות, ללא שבירת קירות ורצפות וללא נזק להחזרת המצב לקדמותו." },
                { q: "כמה זמן נמשך התהליך?", a: "רוב תיקוני הפאץ׳ מתבצעים תוך מספר שעות באותו היום. שיקום מלא בשיטת שרוול לבניין אורך בדרך כלל בין יום אחד לכמה ימי עבודה." },
                { q: "מתי מומלץ לבצע צילום קווי ביוב?", a: "מומלץ לפני רכישת נכס, לאחר סתימות חוזרות, כשמופיעות נזילות לא מוסברות, או כתחזוקה תקופתית למבני מגורים, ועדי בתים, מוסדות ועסקים." },
              ].map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});


function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24 md:pb-0" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <WhyUs />
        <Services />
        <Clients />
        <Testimonials />
        <ServiceAreas />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "אודות" },
    { href: "#services", label: "שירותים" },
    { href: "#why", label: "למה אנחנו" },
    { href: "#clients", label: "לקוחות" },
    { href: "#areas", label: "אזורי שירות" },
    { href: "#faq", label: "שאלות נפוצות" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container-section flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="TAYAR TECH — טייאר טכנולוגיות צנרת"
            className="h-10 w-auto"
            width={120}
            height={40}
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${PHONE_TEL}`}
          onClick={() => trackConversion("call", "header")}
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-glow transition-colors shadow-card-soft"
        >
          <Phone className="w-4 h-4" />
          {PHONE}
        </a>
        <button
          aria-label="פתח תפריט"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md hover:bg-muted"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground mb-1" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-section py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm py-2 font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackConversion("call", "mobile_menu")}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white"
    >
      {/* Clean white base with very subtle white→light-sky gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #ffffff 0%, #f5fbff 45%, #e8f4ff 100%)",
        }}
      />

      {/* Soft tech aura */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(56,132,255,0.18) 0%, rgba(56,132,255,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(125,200,255,0.22) 0%, rgba(125,200,255,0) 70%)",
        }}
      />

      {/* Flow lines / pipes — abstract minimal SVG */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.35] pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="flow1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-50 200 C 300 150, 500 350, 800 300 S 1300 250, 1500 320" stroke="url(#flow1)" strokeWidth="1.5" />
        <path d="M-50 420 C 280 380, 520 540, 820 500 S 1280 460, 1500 520" stroke="url(#flow2)" strokeWidth="1.2" />
        <path d="M-50 660 C 320 620, 540 760, 860 720 S 1300 680, 1500 740" stroke="url(#flow1)" strokeWidth="1" />
        {/* geometric dots */}
        <g fill="#3b82f6" opacity="0.35">
          <circle cx="180" cy="200" r="3" />
          <circle cx="820" cy="300" r="3" />
          <circle cx="1280" cy="250" r="3" />
          <circle cx="540" cy="540" r="3" />
          <circle cx="1180" cy="460" r="3" />
        </g>
        {/* subtle grid corner */}
        <g stroke="#bfdbfe" strokeWidth="0.5" opacity="0.5">
          <path d="M1100 60 H1400 M1100 110 H1400 M1100 160 H1400" />
          <path d="M1140 30 V200 M1200 30 V200 M1260 30 V200 M1320 30 V200" />
        </g>
      </svg>

      {/* Giant centered logo watermark — original colors, soft depth */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <img
          src={logoAsset.url}
          alt=""
          className="w-[78%] max-w-[900px] opacity-[0.10] blur-[1px] select-none"
          style={{ filter: "drop-shadow(0 20px 60px rgba(37,99,235,0.18))" }}
        />
      </div>

      <div className="container-section relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
        <div className="relative z-10">
          {/* Trust strip */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-xs font-semibold text-primary mb-8">
            {[
              "12 שנות ניסיון",
              "מוסמך STS",
              "צילום קווי ביוב 360°",
              "עיריות וחברות ניהול",
            ].map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-7">
            <Sparkles className="w-3.5 h-3.5" />
            TAYAR TECH | טכנולוגיות צנרת מתקדמות
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-7">
            שיקום ותיקון צנרת
            <br />
            <span className="text-gradient">ללא הרס</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 font-semibold mb-4 max-w-xl leading-relaxed">
            פתרונות מתקדמים לשיקום וחידוש תשתיות מים וביוב
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-xl leading-relaxed">
            צילום קווי ביוב, חידוש צנרת ופתרונות מתקדמים לתשתיות מים וביוב —
            לבתים פרטיים, בניינים, עסקים, חברות ניהול ורשויות מקומיות.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackConversion("call", "hero")}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-bold shadow-elegant hover:bg-primary-glow transition-colors"
            >
              <Phone className="w-5 h-5" />
              התקשרו עכשיו
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => trackConversion("whatsapp", "hero")}
              className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-7 py-4 rounded-xl font-bold shadow-card-soft hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Hero image — large, ~50% of hero */}
        <div className="relative lg:scale-110 lg:origin-left">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[2.5rem] blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.25), transparent 70%)",
            }}
          />
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-primary/10 shadow-elegant">
            <img
              src={heroImage}
              alt="חתך פנימי של צינור עם שיקום פנימי בשיטת שרוול / פאץ׳ — TAYAR TECH"
              width={1536}
              height={1152}
              className="w-full object-cover aspect-[4/3]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const stats = [
    { value: "12+", label: "שנות ניסיון בתחום" },
    { value: "STS", label: "מוסמכים לתיקון צנרת ללא הרס" },
    { value: "360°", label: "צילום קווי ביוב מתקדם" },
    { value: "B2B", label: "עבודה מול חברות ניהול ורשויות" },
  ];
  return (
    <section className="relative -mt-2 z-10">
      <div className="container-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 bg-card border border-border rounded-3xl shadow-elegant p-5 lg:p-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center px-3 py-2 ${i !== 0 ? "lg:border-r lg:border-border" : ""}`}
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-gradient leading-none mb-2">
                {s.value}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground font-semibold leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
            <img
              src={galProfile.url}
              alt="גל טייאר — מייסד TAYAR TECH"
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/85 to-transparent p-5 pt-16 text-primary-foreground">
              <div className="font-display font-extrabold text-xl">גל טייאר</div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-2xl shadow-card-soft px-5 py-4">
            <div className="text-3xl font-extrabold text-gradient">12+</div>
            <div className="text-xs text-muted-foreground font-semibold">שנות ניסיון</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <SectionEyebrow>אודות החברה</SectionEyebrow>
          <h2 className="text-3xl lg:text-4xl font-extrabold mt-3 mb-5">
            גל טייאר — מומחה לשיקום צנרת מתקדם
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            TAYAR TECH הוקמה מתוך מומחיות מקצועית של מעל 12 שנים בתחום
            האינסטלציה ושיקום הצנרת. בראש החברה עומד{" "}
            <span className="font-bold text-foreground">גל טייאר</span> — מוסמך
            לתכנון מערכות אינסטלציה ומוסמך לביצוע תיקוני צנרת ללא הרס מטעם{" "}
            <span className="font-bold text-foreground">STS</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-7">
            החברה מתמחה ב<span className="font-semibold text-foreground">צילום קווי ביוב</span>,
            תיקוני פאץ׳, שיקום צנרת ופתרונות מתקדמים לתשתיות מים וביוב — עבור
            לקוחות פרטיים, בניינים משותפים, חברות ניהול, עסקים ורשויות מקומיות.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: GraduationCap, text: "הסמכת תכנון מערכות אינסטלציה" },
              { icon: Award, text: "מוסמכי STS לתיקון ללא הרס" },
              { icon: Cpu, text: "מצלמות 360° וציוד מתקדם" },
              { icon: Building2, text: "ניסיון מול רשויות וחברות ניהול" },
            ].map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                  <b.icon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold">{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const items = [
    { icon: Award, title: "12+ שנות ניסיון", text: "ניסיון מוכח באלפי פרויקטים מורכבים." },
    { icon: GraduationCap, title: "הסמכת תכנון אינסטלציה", text: "תכנון מערכות מים וביוב לפי תקן." },
    { icon: ShieldCheck, title: "מוסמכי STS", text: "הסמכה לתיקוני צנרת ללא הרס." },
    { icon: Camera, title: "מצלמות 360°", text: "אבחון מדויק בקווי ביוב וצנרת." },
    { icon: Layers, title: "טכנולוגיית פאץ׳ ושרוול", text: "שיקום פנימי ללא חפירה וללא שבירות." },
    { icon: Zap, title: "עבודה ללא הרס", text: "שמירה מלאה על קירות, רצפות וריצוף." },
    { icon: Gauge, title: "שירות מקצועי ואמין", text: "אחריות, יחס אישי ועמידה בלוחות זמנים." },
    { icon: Building2, title: "מול רשויות וחברות ניהול", text: "ניסיון נרחב במגזר העסקי והציבורי." },
  ];
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="היתרונות שלנו"
          title="למה לבחור ב-TAYAR TECH"
          subtitle="חברה מובילה בתחום שיקום הצנרת — שילוב של ניסיון בשטח, הסמכות מקצועיות וטכנולוגיה חדשנית."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {items.map((it) => (
            <div
              key={it.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-card-soft group-hover:shadow-glow transition-shadow">
                <it.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const services = [
    { icon: ShieldCheck, title: "שיקום צנרת ללא הרס", text: "שיקום פנימי מלא של מערכת הצנרת — בלי לשבור קירות, רצפות או ריצוף." },
    { icon: Wrench, title: "תיקון צנרת ללא חפירה", text: "פתרון מהיר ומדויק לתיקון צנרת מים וביוב — ללא חפירות בחצר או ברחוב." },
    { icon: Sparkles, title: "תיקוני פאץ׳", text: "טיפול נקודתי בסדקים, נזילות וקטעים פגומים בצנרת קיימת." },
    { icon: Layers, title: "שיקום בשיטת שרוול (CIPP)", text: "שרוול אפוקסי פנימי שיוצר ׳צינור בתוך צינור׳ עמיד לעשרות שנים." },
    { icon: Camera, title: "צילום קווי ביוב", text: "מצלמות רובוטיות ו-360° לאיתור סתימות, שברים, שורשים ומפגעים." },
    { icon: Waves, title: "שטיפת קווי ביוב", text: "שטיפה בלחץ גבוה (ג׳טינג) להסרת שומנים, אבנית וסתימות עיקשות." },
    { icon: Building2, title: "פתרונות לבניינים משותפים", text: "שיקום צנרת לבניינים וועדי בתים — ביצוע מסודר עם תיאום מלא מול הדיירים." },
    { icon: Droplets, title: "פתרונות לחברות ניהול", text: "הסכמי שירות, אחזקה תקופתית ופרויקטים מקיפים לחברות ניהול נכסים." },
    { icon: Cpu, title: "פתרונות לרשויות מקומיות", text: "שיקום תשתיות מים וביוב לעיריות ומועצות — בסטנדרט הנדסי גבוה." },
  ];
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section">
        <SectionHead
          eyebrow="השירותים שלנו"
          title="פתרון טכנולוגי לכל תקלת צנרת"
          subtitle="טכנולוגיה מתקדמת, ביצוע מקצועי וניסיון מוכח — לבתים פרטיים, בניינים, חברות ניהול ורשויות."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {services.map((s) => (
            <article
              key={s.title}
              className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all group"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => trackConversion("call", "services")}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary-glow transition-colors"
          >
            <Phone className="w-4 h-4" /> ייעוץ מקצועי — {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            onClick={() => trackConversion("whatsapp", "services")}
            className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> שלחו הודעה בוואטסאפ
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Clients ---------- */
function Clients() {
  const clients = [
    { name: "עיריית גני תקווה", logo: logoGaneiTikva.url },
    { name: "עיריית קריית אונו", logo: logoKiryatOno.url },
    { name: "נשר ניהול", logo: logoNesher.url },
    { name: "יקיר ב. ייעוץ וניהול", logo: logoYakir.url },
    { name: "מסעדת מיטבר", logo: logoMeatbar.url },
    { name: "מסעדת עובד בכפר", logo: logoOved.url },
  ];
  return (
    <section id="clients" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="בין לקוחותינו"
          title="חברות, מוסדות ורשויות שסומכים עלינו"
          subtitle="לקוחותינו כוללים רשויות מקומיות, חברות ניהול, עסקים ומוסדות מובילים באזור המרכז."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-12">
          {clients.map((c) => (
            <div
              key={c.name}
              title={c.name}
              className="aspect-[4/3] bg-card border border-border rounded-2xl shadow-card-soft grid place-items-center p-5 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const items = [
    {
      name: "רונית כהן",
      role: "בעלת דירה, רמת גן",
      text: "צוות מקצועי שהציל אותנו מנזילה קשה. אפס לכלוך, אפס שבירות והכל נפתר ביום אחד.",
    },
    {
      name: "אבי לוי",
      role: "ועד בית, תל אביב",
      text: "שיקמו לנו קו ביוב ראשי לבניין שלם בלי לפרק חצר. שירות אמין ויחס אישי לכל דייר.",
    },
    {
      name: "מורן דוד",
      role: "חברת ניהול נכסים",
      text: "אנחנו עובדים איתם באופן קבוע. תמיד זמינים, תמיד מקצועיים, ותמיד מסיימים בזמן.",
    },
  ];
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section">
        <SectionHead
          eyebrow="המלצות לקוחות"
          title="מה הלקוחות שלנו אומרים"
          subtitle="עשרות לקוחות פרטיים, ועדי בתים, מוסדות ורשויות סומכים עלינו לאורך השנים."
        />
        <div className="flex items-center justify-center gap-2 mt-6 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-foreground">5.0</span>
          <span className="text-sm text-muted-foreground">דירוג Google</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 shadow-card-soft relative"
            >
              <Quote className="absolute top-5 left-5 w-8 h-8 text-primary/15" />
              <div className="flex gap-0.5 mb-3" aria-label="דירוג 5 כוכבים">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-5">
                „{t.text}”
              </blockquote>
              <figcaption>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
            onClick={() => trackConversion("google_reviews", "testimonials_view")}
            className="inline-flex items-center justify-center gap-2 bg-card border border-border px-5 py-3.5 rounded-xl font-semibold text-foreground hover:shadow-card-soft transition-shadow min-h-[48px]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
            </svg>
            צפו בביקורות שלנו בגוגל
          </a>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener"
            onClick={() => trackConversion("google_reviews", "testimonials_leave")}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-xl font-semibold hover:bg-primary-glow shadow-glow transition-colors min-h-[48px]"
          >
            <Star className="w-4 h-4 fill-current" />
            השאירו לנו ביקורת בגוגל
          </a>
        </div>

      </div>
    </section>
  );
}

/* ---------- Service Areas ---------- */
function ServiceAreas() {
  const areas = [
    "קריית אונו",
    "גני תקווה",
    "פתח תקווה",
    "גבעת שמואל",
    "יהוד",
    "אור יהודה",
    "סביון",
    "רמת גן",
    "תל אביב",
    "ראשון לציון",
    "חולון",
    "בת ים",
    "בקעת אונו",
    "אזור המרכז",
  ];
  return (
    <section id="areas" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="אזורי שירות"
          title="אזורי השירות שלנו"
          subtitle="TAYAR TECH פועלת באזור המרכז ובערים הסמוכות — שירות מהיר ומקצועי קרוב אליכם."
        />
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {areas.map((a) => (
            <div
              key={a}
              className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "מהו שיקום צנרת ללא הרס?", a: "שיקום צנרת ללא הרס הוא פתרון טכנולוגי מתקדם המאפשר להחזיר צנרת ישנה ופגומה למצב חדש — מבלי לשבור קירות, רצפות או חפירות בחצר. השיקום מתבצע מתוך הצנרת באמצעות שיטות פאץ׳ או שרוול (CIPP)." },
    { q: "מהו תיקון פאץ׳?", a: "תיקון פאץ׳ הוא טיפול נקודתי בקטע פגום בצנרת — סדק, חור או חיבור דולף. מותקנת ׳טבעת׳ אפוקסי פנימית באורך של עד מטר אשר אוטמת לחלוטין את הקטע הפגום ומחזירה את הצנרת לשימוש מלא." },
    { q: "מהו שיקום צנרת בשיטת שרוול (CIPP)?", a: "שיטת השרוול (Cured In Place Pipe) יוצרת ׳צינור בתוך צינור׳: שרוול רך ספוג ברזין אפוקסי מוחדר לתוך הקו הקיים ומתקשה למצב מוצק לאחר חימום. התוצאה — קו חדש לחלוטין, חלק, עמיד וללא תפרים, לעשרות שנים." },
    { q: "האם חייבים לחפור או לשבור קירות?", a: "לא. זהו בדיוק היתרון של הטכנולוגיה. כל העבודה מתבצעת דרך פתחי גישה קיימים — ללא חפירות, ללא שבירת קירות ורצפות וללא נזק להחזרת המצב לקדמותו." },
    { q: "כמה זמן נמשך התהליך?", a: "רוב תיקוני הפאץ׳ מתבצעים תוך מספר שעות באותו היום. שיקום מלא בשיטת שרוול לבניין אורך בדרך כלל בין יום אחד לכמה ימי עבודה — תלוי באורך ובמורכבות הקו." },
    { q: "מתי מומלץ לבצע צילום קווי ביוב?", a: "מומלץ לבצע צילום קווי ביוב לפני רכישת נכס, לאחר סתימות חוזרות, כשמופיעות נזילות לא מוסברות, או כתחזוקה תקופתית למבני מגורים, ועדי בתים, מוסדות ועסקים." },
    { q: "האם אתם עובדים עם ועדי בתים?", a: "בהחלט. אנו מבצעים שיקום צנרת וקווי ביוב לבניינים משותפים, כולל תיאום מסודר מול ועד הבית, הצעת מחיר מפורטת לאסיפת דיירים וביצוע מקצועי עם מינימום הפרעה ליום־יום." },
    { q: "האם אתם עובדים עם חברות ניהול?", a: "כן. TAYAR TECH פועלת עם חברות ניהול נכסים מובילות — באחזקה תקופתית, בפרויקטים מתוכננים ובמתן מענה מהיר לקריאות שירות דחופות." },
    { q: "האם אתם עובדים עם עיריות ורשויות מקומיות?", a: "כן. אנו ספקים מאושרים לרשויות מקומיות ועיריות, ובעלי ניסיון בביצוע פרויקטים תשתיתיים לשיקום מערכות מים וביוב בסטנדרט הנדסי גבוה." },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section max-w-3xl">
        <SectionHead
          eyebrow="שאלות נפוצות"
          title="כל מה שצריך לדעת על שיקום צנרת מתקדם"
        />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-2xl mb-3 px-5 shadow-card-soft data-[state=open]:shadow-elegant">
              <AccordionTrigger className="text-right font-bold text-base hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------- CTA / Contact ---------- */
function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-section">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary shadow-elegant px-6 sm:px-8 py-14 lg:px-16 lg:py-20 text-center text-primary-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              מוכנים לפתרון מקצועי לצנרת שלכם?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              ייעוץ ראשוני ללא עלות. הצעת מחיר שקופה. ביצוע מקצועי ללא הרס.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackConversion("call", "cta")}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-white/90 transition-colors min-h-[52px]"
              >
                <Phone className="w-5 h-5" />
                התקשרו עכשיו {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackConversion("whatsapp", "cta")}
                className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Google Business — Map + link */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-3xl overflow-hidden border border-border shadow-card-soft bg-card">
            <iframe
              title="מיקום העסק בגוגל מפות — טייאר אינסטלציה ושירותי ביובית"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] lg:h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="bg-card border border-border rounded-3xl p-7 lg:p-9 flex flex-col justify-center shadow-card-soft">
            <SectionEyebrow>הכרטיס שלנו בגוגל</SectionEyebrow>
            <h3 className="text-2xl font-extrabold mt-3 mb-3">
              טייאר אינסטלציה ושירותי ביובית
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              עקבו אחרי הביקורות, התמונות והעדכונים שלנו בכרטיס העסק בגוגל —
              חברה מובילה בתחום שיקום הצנרת באזור המרכז.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackConversion("google_reviews", "contact_view")}
                className="inline-flex items-center justify-center gap-2 bg-card border border-border px-5 py-3.5 rounded-xl font-semibold hover:shadow-card-soft transition-shadow min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-primary" />
                לכרטיס העסק בגוגל
              </a>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackConversion("google_reviews", "contact_leave")}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3.5 rounded-xl font-semibold hover:bg-primary-glow transition-colors min-h-[48px]"
              >
                <Star className="w-4 h-4 fill-current" />
                השאירו ביקורת בגוגל
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-section py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <img src={logoAsset.url} alt="TAYAR TECH" className="h-12 w-auto mb-4" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            TAYAR TECH — טכנולוגיות צנרת מתקדמות. שיקום ותיקון צנרת ללא הרס,
            תיקוני פאץ׳, שיטת שרוול וצילום קווי ביוב.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener"
            aria-label="עמוד הפייסבוק שלנו"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Facebook className="w-4 h-4 fill-current" />
            עקבו אחרינו בפייסבוק
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-3">צור קשר</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                onClick={() => trackConversion("call", "footer")}
                className="hover:text-primary"
              >
                <Phone className="inline w-4 h-4 ml-1" /> {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackConversion("whatsapp", "footer")}
                className="hover:text-primary"
              >
                <MessageCircle className="inline w-4 h-4 ml-1" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener"
                onClick={() => trackConversion("google_reviews", "footer")}
                className="hover:text-primary"
              >
                ביקורות בגוגל ★
              </a>
            </li>

            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="hover:text-primary">
                <Facebook className="inline w-4 h-4 ml-1" /> פייסבוק
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">אזורי שירות</h3>
          <p className="text-muted-foreground leading-relaxed">
            קריית אונו, גני תקווה, פתח תקווה, גבעת שמואל, יהוד, אור יהודה,
            סביון, רמת גן, תל אביב, ראשון לציון, חולון, בת ים ואזור המרכז.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TAYAR TECH — טייאר טכנולוגיות צנרת. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

/* ---------- Floating Mobile Buttons ---------- */
function FloatingButtons() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 flex gap-3 md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        onClick={() => trackConversion("call", "floating")}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-2xl font-bold shadow-elegant"
      >
        <Phone className="w-5 h-5" /> התקשרו
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        onClick={() => trackConversion("whatsapp", "floating")}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-4 py-3 rounded-2xl font-bold shadow-elegant"
      >
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </a>
    </div>
  );
}

/* ---------- Helpers ---------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="text-3xl lg:text-4xl font-extrabold mt-4 mb-3">{title}</h2>
      {subtitle && <p className="text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
