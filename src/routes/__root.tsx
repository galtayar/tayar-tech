import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TAYAR TECH | שיקום צנרת ללא הרס, תיקון פאץ׳ וצילום קווי ביוב" },
      {
        name: "description",
        content:
          "TAYAR TECH — טכנולוגיות צנרת מתקדמות. שיקום ותיקון צנרת ללא הרס, תיקון פאץ׳, שיטת שרוול, צילום ושטיפת קווי ביוב. מעל 12 שנות ניסיון.",
      },
      { name: "author", content: "TAYAR TECH" },
      { property: "og:title", content: "TAYAR TECH | טכנולוגיות צנרת מתקדמות" },
      {
        property: "og:description",
        content:
          "שיקום ותיקון צנרת ללא הרס — פאץ׳, שרוול וצילום קווי ביוב. מעל 12 שנות ניסיון.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:site_name", content: "TAYAR TECH" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;800&family=Rubik:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TAYAR TECH — טייאר טכנולוגיות צנרת",
          alternateName: "טייאר טכנולוגיות צנרת",
          description:
            "שיקום ותיקון צנרת ללא הרס, תיקון פאץ׳, שיטת שרוול וצילום קווי ביוב — מעל 12 שנות ניסיון.",
          telephone: "+972525718085",
          sameAs: ["https://www.facebook.com/tayargal/"],
          areaServed: [
            "קריית אונו","גני תקווה","פתח תקווה","גבעת שמואל","יהוד",
            "אור יהודה","סביון","רמת גן","תל אביב","ראשון לציון","חולון","בת ים","בקעת אונו","אזור המרכז",
          ],
          address: { "@type": "PostalAddress", addressCountry: "IL", addressRegion: "מרכז" },
          founder: { "@type": "Person", name: "גל טייאר" },
          knowsAbout: [
            "שיקום צנרת ללא הרס","תיקון צנרת ללא חפירה","תיקון פאץ׳","שיטת שרוול CIPP",
            "צילום קווי ביוב","שטיפת קווי ביוב","שיקום מערכות ביוב","חידוש צנרת",
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "20" },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const gaId = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined;
  return (
    <html lang="he" dir="rtl">
      <head>
        <HeadContent />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`,
              }}
            />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />

      </body>
    </html>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
