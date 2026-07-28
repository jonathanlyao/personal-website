const LOCAL_DEVELOPMENT_URL = "http://localhost:3000";

function parseSiteUrl(value: string, source: string): URL {
  const candidate = value.trim();

  if (!candidate) {
    throw new Error(`${source} must not be empty.`);
  }

  const url = new URL(candidate);

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(`${source} must use the http or https protocol.`);
  }

  if (url.pathname !== "/" || url.search || url.hash) {
    throw new Error(`${source} must contain only the site origin.`);
  }

  return new URL(url.origin);
}

function getVercelSiteUrl(): URL | undefined {
  const hostname =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  return hostname
    ? parseSiteUrl(`https://${hostname}`, "Vercel site URL")
    : undefined;
}

export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl?.trim()) {
    return parseSiteUrl(configuredUrl, "NEXT_PUBLIC_SITE_URL");
  }

  const vercelUrl = getVercelSiteUrl();

  if (vercelUrl) {
    return vercelUrl;
  }

  if (process.env.NODE_ENV === "development") {
    return new URL(LOCAL_DEVELOPMENT_URL);
  }

  return undefined;
}

export function requireSiteUrl(): URL {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    throw new Error(
      "A production site origin is required. Set NEXT_PUBLIC_SITE_URL before running a production build.",
    );
  }

  return siteUrl;
}
