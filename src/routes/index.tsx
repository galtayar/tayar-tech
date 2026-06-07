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
  ChevronDown,
  Quote,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-pipes.jpg";
import logoAsset from "@/assets/tayar-tech-logo.png.asset.json";

const PHONE = "052-5718085";
const PHONE_TEL = "+972525718085";
const WHATSAPP = "972525718085";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "שלום, אשמח לקבל הצעת מחיר לטיפול בצנרת",
)}`;
const GOOGLE_BUSINESS_NAME = "טייאר אינסטלציה ושירותי ביובית";
const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}`;
const GOOGLE_WRITE_REVIEW_URL = `https://www.google.com/search?q=${encodeURIComponent(GOOGLE_BUSINESS_NAME)}#lrd=`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "טייאר טכנולוגיות צנרת — תיקון ושיקום צנרת ללא הרס" },
      {
        name: "description",
        content:
          "תיקון ושיקום צנרת ללא הרס, איתור נזילות מדויק וצילום קווי ביוב. שירות מקצועי לבתים פרטיים, בניינים, ועדי בתים וקבלנים.",
      },
      { property: "og:title", content: "טייאר טכנולוגיות צנרת" },
      {
        property: "og:description",
        content:
          "פתרונות מתקדמים לצנרת ללא עבודות הרס מיותרות — איתור נזילות, שיקום וצילום קווי ביוב.",
      },
      { property: "og:url", content: "/" },
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
        <WhyUs />
        <Services />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
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
    { href: "#why", label: "למה אנחנו" },
    { href: "#services", label: "שירותים" },
    { href: "#gallery", label: "גלריה" },
    { href: "#testimonials", label: "המלצות" },
    { href: "#faq", label: "שאלות נפוצות" },
    { href: "#contact", label: "צור קשר" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-section flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="font-display font-bold text-lg leading-tight">
            טייאר<span className="text-primary"> טכנולוגיות צנרת</span>
          </span>
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

function Logo() {
  return (
    <div className="w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center shadow-card-soft">
      <Droplets className="w-5 h-5 text-primary-foreground" />
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="container-section grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            טכנולוגיה מתקדמת. אפס הרס.
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-5">
            תיקון ושיקום צנרת
            <br />
            <span className="text-gradient">ללא הרס</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            פתרונות מתקדמים לצנרת באמצעות טכנולוגיה חדשנית — ללא שבירת
            קירות, ללא לכלוך מיותר, ובלי להפוך את הבית.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 bg-success text-success-foreground px-6 py-3.5 rounded-xl font-bold shadow-elegant hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              שלחו וואטסאפ עכשיו
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-bold shadow-card-soft hover:bg-primary-glow transition-colors"
            >
              <Phone className="w-5 h-5" />
              חייגו {PHONE}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["זמינות מהירה", "אחריות מלאה", "ציוד טכנולוגי מתקדם"].map((t) => (
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
            alt="טכנולוגיית צנרת מתקדמת — צנרת חכמה עם רשת נתונים"
            width={1600}
            height={1100}
            className="relative rounded-3xl shadow-elegant w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const items = [
    {
      icon: Zap,
      title: "טכנולוגיות מתקדמות",
      text: "ציוד אבחון וצילום חדיש לאיתור מדויק של תקלות בצנרת.",
    },
    {
      icon: ShieldCheck,
      title: "פתרונות ללא הרס",
      text: "שיקום ותיקון מבלי לשבור קירות, רצפות או ריצוף יקר.",
    },
    {
      icon: Award,
      title: "מקצועיות ואמינות",
      text: "צוות מנוסה, עבודה נקייה ואחריות מלאה על כל שירות.",
    },
    {
      icon: Clock,
      title: "מענה מהיר",
      text: "הגעה מהירה לכל מקרה דחוף — 7 ימים בשבוע.",
    },
  ];
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="היתרונות שלנו"
          title="למה לבחור בטייאר טכנולוגיות צנרת"
          subtitle="שילוב נדיר של ניסיון בשטח, ציוד מתקדם וגישה הנדסית לכל בעיה."
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
    {
      icon: Wrench,
      title: "תיקון צנרת ללא הרס",
      text: "תיקון מקצועי של תקלות צנרת תוך שמירה מלאה על תשתיות הבית.",
    },
    {
      icon: ShieldCheck,
      title: "שיקום צנרת",
      text: "החלפת צנרת ישנה וחלודה בשיטות שיקום פנימיות מתקדמות.",
    },
    {
      icon: Sparkles,
      title: "תיקוני פאץ׳",
      text: "פתרון נקודתי ויעיל לסדקים ונזילות בצנרת קיימת.",
    },
    {
      icon: Droplets,
      title: "איתור נזילות",
      text: "אבחון מדויק באמצעות מצלמות תרמיות, גז עקיבה וציוד אקוסטי.",
    },
    {
      icon: Camera,
      title: "צילום קווי ביוב",
      text: "מצלמה רובוטית מתקדמת לאיתור סתימות, סדקים ומכשולים.",
    },
    {
      icon: Award,
      title: "פתרונות לעסקים וועדים",
      text: "ליווי וטיפול לוועדי בתים, חברות ניהול וקבלנים בפרויקטים.",
    },
  ];
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container-section">
        <SectionHead
          eyebrow="השירותים שלנו"
          title="פתרון מקצועי לכל בעיית צנרת"
          subtitle="לבתים פרטיים, בניינים משותפים, ועדי בתים, חברות ניהול וקבלנים."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s) => (
            <article
              key={s.title}
              className="relative bg-card border border-border rounded-2xl p-7 overflow-hidden hover:shadow-elegant transition-all"
            >
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {s.text}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-glow"
                >
                  לפרטים נוספים ←
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const items = [
    { title: "שיקום קו ביוב — בניין מגורים", tag: "שיקום צנרת" },
    { title: "איתור נזילה במקלחת ללא הרס", tag: "איתור נזילות" },
    { title: "צילום קו ביוב לאחר סתימה", tag: "צילום ביוב" },
    { title: "תיקון פאץ׳ בקו ראשי", tag: "תיקוני פאץ׳" },
    { title: "שיקום קו דירתי בשיטת CIPP", tag: "ללא הרס" },
    { title: "פרויקט ועד בית — 24 דירות", tag: "ועדי בתים" },
  ];
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="container-section">
        <SectionHead
          eyebrow="גלריית עבודות"
          title="פרויקטים שביצענו"
          subtitle="הצצה לעבודות שטח אמיתיות — כל פרויקט הסתיים מבלי לשבור קיר אחד."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-card-soft"
            >
              <div
                className="absolute inset-0 bg-gradient-primary"
                style={{
                  opacity: 0.85 - i * 0.05,
                  backgroundPosition: `${i * 20}% center`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <span className="inline-block w-fit text-[11px] tracking-wide uppercase font-bold bg-white/20 backdrop-blur px-2.5 py-1 rounded-full mb-2">
                  {it.tag}
                </span>
                <h3 className="font-bold text-lg leading-snug">{it.title}</h3>
              </div>
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
          subtitle="עשרות לקוחות פרטיים, ועדי בתים וקבלנים סומכים עלינו לאורך השנים."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 shadow-card-soft relative"
            >
              <Quote className="absolute top-5 left-5 w-8 h-8 text-primary/15" />
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
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "מה זה תיקון צנרת ללא הרס?",
      a: "טכנולוגיה שמאפשרת לתקן או לשקם צנרת מבפנים, ללא צורך בשבירת קירות, רצפות או ריצוף. החיסכון בעלויות ובזמן עצום.",
    },
    {
      q: "כמה זמן לוקח שיקום צנרת?",
      a: "ברוב המקרים העבודה מסתיימת תוך יום עד שלושה ימי עבודה, בהתאם להיקף הפרויקט ולמורכבות הצנרת.",
    },
    {
      q: "האם אתם נותנים אחריות?",
      a: "כן. אנחנו מעניקים אחריות מלאה על העבודה ועל החומרים, בהתאם לסוג השירות שסיפקנו.",
    },
    {
      q: "האם השירות מתאים גם לבניינים משותפים?",
      a: "בהחלט. אנחנו מתמחים בעבודה מול ועדי בתים, חברות ניהול וקבלנים, כולל ליווי וייעוץ הנדסי.",
    },
    {
      q: "כמה מהר אתם מגיעים למקרה דחוף?",
      a: "במקרים דחופים אנחנו משתדלים להגיע באותו היום. צרו קשר ונתאם הגעה מהירה ככל האפשר.",
    },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="container-section max-w-3xl">
        <SectionHead
          eyebrow="שאלות נפוצות"
          title="כל מה שרציתם לדעת"
          subtitle="לא מצאתם תשובה? פשוט שלחו לנו וואטסאפ."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-right font-semibold hover:bg-muted/40 transition-colors"
      >
        <span>{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="container-section relative">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full mb-4">
            צרו קשר
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            יש לכם בעיית צנרת? אנחנו כאן.
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl">
            ייעוץ ראשוני, הערכת מחיר וזימון הגעה — בלחיצה אחת.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-4 bg-white text-foreground p-5 rounded-2xl hover:scale-[1.02] transition-transform shadow-elegant"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-xs text-muted-foreground">חייגו אלינו</div>
                <div className="font-bold text-lg">{PHONE}</div>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-success text-success-foreground p-5 rounded-2xl hover:scale-[1.02] transition-transform shadow-elegant"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 grid place-items-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="text-right">
                <div className="text-xs opacity-80">שלחו הודעה</div>
                <div className="font-bold text-lg">וואטסאפ</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container-section flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-display font-bold">טייאר טכנולוגיות צנרת</span>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}

/* ---------- Floating action buttons ---------- */
function FloatingButtons() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-success text-success-foreground grid place-items-center shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="התקשרות"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

/* ---------- Helpers ---------- */
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
      <div className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
