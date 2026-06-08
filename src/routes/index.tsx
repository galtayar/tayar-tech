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
  Clock,
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

const PHONE = "052-5718085";
const PHONE_TEL = "+972525718085";
const WHATSAPP = "972525718085";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "שלום, אשמח לקבל הצעת מחיר לשיקום / תיקון צנרת",
)}`;
const GOOGLE_BUSINESS_NAME = "טייאר אינסטלציה ושירותי ביובית";
const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}`;

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
          "TAYAR TECH — טכנולוגיות צנרת מתקדמות. שיקום צנרת ללא הרס, תיקון פאץ׳, שיטת שרוול, צילום ושטיפת קווי ביוב. מעל 12 שנות ניסיון, מוסמכי STS. שירות לפרטיים, ועדי בתים, חברות ניהול ורשויות.",
      },
      { name: "keywords", content: "שיקום צנרת ללא הרס, תיקון צנרת ללא חפירה, תיקון פאץ׳, שיקום צנרת בשיטת שרוול, צילום קווי ביוב, שטיפת קווי ביוב, שיקום מערכות ביוב, טכנולוגיות צנרת מתקדמות, CIPP, טייאר טכנולוגיות צנרת" },
      { property: "og:title", content: "TAYAR TECH | טכנולוגיות צנרת מתקדמות" },
      {
        property: "og:description",
        content:
          "שיקום ותיקון צנרת ללא הרס — שיטת פאץ׳ ושרוול, צילום קווי ביוב, מעל 12 שנות ניסיון.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Header />
      <main>
        <Hero />
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
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      {/* Large faded brand logo as background watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logoAsset.url}
          alt=""
          className="w-[min(900px,110%)] max-w-none opacity-[0.05] select-none"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.10),transparent_55%)]" />

      <div className="container-section relative grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            TAYAR TECH | טכנולוגיות צנרת מתקדמות
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5">
            שיקום ותיקון צנרת
            <br />
            <span className="text-gradient">ללא הרס</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-xl leading-relaxed">
            מומחים לשיקום צנרת בטכנולוגיות מתקדמות עם מעל{" "}
            <span className="font-bold text-foreground">12 שנות ניסיון</span>.
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-xl leading-relaxed">
            צילום קווי ביוב, תיקוני פאץ׳, שיקום צנרת בשיטת שרוול ופתרונות
            מתקדמים לתשתיות מים וביוב — עבור לקוחות פרטיים, חברות ניהול, עסקים
            ורשויות מקומיות.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold shadow-elegant hover:bg-primary-glow transition-colors"
            >
              <Phone className="w-5 h-5" />
              התקשרו עכשיו
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3.5 rounded-xl font-bold shadow-card-soft hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {[
              "12+ שנות ניסיון",
              "מוסמכי STS",
              "ללא חפירה. ללא הרס.",
            ].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-primary/15 blur-3xl rounded-full animate-float" />
          <img
            src={heroImage}
            alt="חתך פנימי של צינור עם שיקום פנימי בשיטת שרוול / פאץ׳ — TAYAR TECH"
            width={1536}
            height={1152}
            className="relative rounded-3xl shadow-elegant w-full object-cover"
          />
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
          <div className="aspect-square rounded-3xl bg-gradient-primary shadow-elegant grid place-items-center p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
            <img
              src={logoAsset.url}
              alt="TAYAR TECH"
              className="relative w-3/4 brightness-0 invert opacity-95"
            />
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
            <span className="font-bold text-foreground">גל טייאר</span> — בעל
            הסמכה לתכנון מערכות אינסטלציה והסמכה לביצוע תיקוני צנרת ללא הרס
            מטעם <span className="font-bold text-foreground">STS</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-7">
            אנחנו מתמחים בטכנולוגיות הצנרת המתקדמות בעולם —{" "}
            <span className="font-semibold text-foreground">מצלמות 360°</span>,
            תיקוני פאץ׳ ושיקום צנרת בשיטת שרוול (CIPP) — עבור לקוחות פרטיים,
            ועדי בתים, חברות ניהול, מוסדות ציבוריים ורשויות מקומיות.
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
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-card-soft hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 shadow-card-soft group-hover:shadow-glow transition-shadow">
                <it.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {it.text}
              </p>
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
    { icon: Droplets, title: "שיקום מערכות ביוב", text: "פרויקטים מקיפים לבניינים, מוסדות ורשויות — מתכנון ועד מסירה." },
    { icon: Cpu, title: "פתרונות מתקדמים לתשתיות", text: "ייעוץ הנדסי ופתרונות מותאמים לתשתיות מים וביוב מורכבות." },
  ];
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section">
        <SectionHead
          eyebrow="השירותים שלנו"
          title="פתרון טכנולוגי לכל תקלת צנרת"
          subtitle="טכנולוגיה מתקדמת, ביצוע מקצועי וניסיון מוכח — לבתים פרטיים, בניינים, חברות ניהול ורשויות."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary-glow transition-colors"
          >
            <Phone className="w-4 h-4" /> ייעוץ מקצועי — {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
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
    "עיריית גני תקווה",
    "עיריית קריית אונו",
    "נשר ניהול",
    "יקיר ניהול — בית הדובדבן",
    "מסעדת מיטבר",
    "מסעדת עובד בכפר",
  ];
  return (
    <section id="clients" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="בין לקוחותינו"
          title="חברות, מוסדות ורשויות שסומכים עלינו"
          subtitle="אנו גאים לעבוד עם רשויות מקומיות, חברות ניהול ועסקים מובילים."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {clients.map((name) => (
            <div
              key={name}
              className="aspect-[5/3] bg-card border border-border rounded-2xl shadow-card-soft grid place-items-center px-3 py-4 text-center hover:border-primary/40 hover:shadow-elegant transition-all"
            >
              <span className="font-display font-bold text-sm md:text-base text-foreground leading-tight">
                {name}
              </span>
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
        <div className="grid md:grid-cols-3 gap-6 mt-14">
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
            className="inline-flex items-center gap-2 bg-card border border-border px-5 py-3 rounded-xl font-semibold text-foreground hover:shadow-card-soft transition-shadow"
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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold hover:bg-primary-glow shadow-glow transition-colors"
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
    {
      q: "מהו שיקום צנרת ללא הרס?",
      a: "שיקום צנרת ללא הרס הוא פתרון טכנולוגי מתקדם המאפשר להחזיר צנרת ישנה ופגומה למצב חדש — מבלי לשבור קירות, רצפות או חפירות בחצר. השיקום מתבצע מתוך הצנרת באמצעות שיטות פאץ׳ או שרוול (CIPP).",
    },
    {
      q: "מהו תיקון פאץ׳?",
      a: "תיקון פאץ׳ הוא טיפול נקודתי בקטע פגום בצנרת — סדק, חור או חיבור דולף. מותקנת ׳טבעת׳ אפוקסי פנימית באורך של עד מטר אשר אוטמת לחלוטין את הקטע הפגום ומחזירה את הצנרת לשימוש מלא.",
    },
    {
      q: "מהו שיקום צנרת בשיטת שרוול (CIPP)?",
      a: "שיטת השרוול (Cured In Place Pipe) יוצרת ׳צינור בתוך צינור׳: שרוול רך ספוג ברזין אפוקסי מוחדר לתוך הקו הקיים ומתקשה למצב מוצק לאחר חימום. התוצאה — קו חדש לחלוטין, חלק, עמיד וללא תפרים, לעשרות שנים.",
    },
    {
      q: "האם חייבים לחפור או לשבור קירות?",
      a: "לא. זהו בדיוק היתרון של הטכנולוגיה. כל העבודה מתבצעת דרך פתחי גישה קיימים — ללא חפירות, ללא שבירת קירות ורצפות וללא נזק להחזרת המצב לקדמותו.",
    },
    {
      q: "כמה זמן נמשך התהליך?",
      a: "רוב תיקוני הפאץ׳ מתבצעים תוך מספר שעות באותו היום. שיקום מלא בשיטת שרוול לבניין אורך בדרך כלל בין יום אחד לכמה ימי עבודה — תלוי באורך ובמורכבות הקו.",
    },
    {
      q: "מתי מומלץ לבצע צילום קווי ביוב?",
      a: "מומלץ לבצע צילום קווי ביוב לפני רכישת נכס, לאחר סתימות חוזרות, כשמופיעות נזילות לא מוסברות, או כתחזוקה תקופתית למבני מגורים, ועדי בתים, מוסדות ועסקים.",
    },
    {
      q: "מהם היתרונות של שיקום צנרת ללא הרס?",
      a: "אפס שבירות והרס, חיסכון משמעותי בעלויות שיפוץ, ביצוע מהיר, פתרון עמיד לעשרות שנים, צמצום מטרדי לכלוך ורעש, ופתרון ידידותי לסביבה.",
    },
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
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary shadow-elegant px-8 py-14 lg:px-16 lg:py-20 text-center text-primary-foreground">
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
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                התקשרו עכשיו {PHONE}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3.5 rounded-xl font-bold hover:scale-[1.02] transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
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
          <img src={logoAsset.url} alt="TAYAR TECH" className="h-10 w-auto mb-4" />
          <p className="text-muted-foreground leading-relaxed">
            TAYAR TECH — טכנולוגיות צנרת מתקדמות. שיקום ותיקון צנרת ללא הרס,
            תיקוני פאץ׳, שיטת שרוול וצילום קווי ביוב.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3">צור קשר</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-primary">
                <Phone className="inline w-4 h-4 ml-1" /> {PHONE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
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
                className="hover:text-primary"
              >
                ביקורות בגוגל ★
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">אזורי שירות</h3>
          <p className="text-muted-foreground leading-relaxed">
            קריית אונו, גני תקווה, פתח תקווה, גבעת שמואל, יהוד, אור יהודה,
            סביון, רמת גן, תל אביב ואזור המרכז.
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
        className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-2xl font-bold shadow-elegant"
      >
        <Phone className="w-5 h-5" /> התקשרו
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
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
      {subtitle && (
        <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
