// Central SEO config. Change SITE_URL in one place to update every canonical,
// og:url, JSON-LD id, and sitemap entry across the app.
export const SITE_URL = "https://tayar-tech.co.il";

export const absoluteUrl = (path: string = "/") => {
  if (!path) return SITE_URL + "/";
  if (/^https?:\/\//i.test(path)) return path;
  return SITE_URL + (path.startsWith("/") ? path : "/" + path);
};
