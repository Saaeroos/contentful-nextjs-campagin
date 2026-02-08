{
  /*
   * Formats an Open Graph image URL by adding the 'https:' prefix if it is missing.
   * @param ogImage - The Open Graph image URL to format.
   * @returns The formatted Open Graph image URL.
   */
}
export function formatOGImage(ogImage?: string) {
  if (!ogImage) {
    return undefined;
  }
  return ogImage?.startsWith("//") ? `https:${ogImage}` : ogImage;
}
