export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_DEVELOPMENT_SITE_URL
    : process.env.NEXT_PRODUCTION_SITE_URL;
