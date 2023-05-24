export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "home":
      return "/";
    case "about":
      return `/about`;
    case "service":
      return `/services`;
    case "project":
      return slug ? `/projects/${slug}` : undefined;
    case "post":
      return slug ? `/blog/${slug}` : undefined;
    case "products":
      return slug ? `/shop/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
