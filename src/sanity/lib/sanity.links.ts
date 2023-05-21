export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case "home":
      return "/";
    case "work":
      return slug ? `/works/${slug}` : undefined;
    case "post":
      return slug ? `/blog/${slug}` : undefined;
    case "products":
      return slug ? `/shop/${slug}` : undefined;
    default:
      console.warn("Invalid document type:", documentType);
      return undefined;
  }
}
