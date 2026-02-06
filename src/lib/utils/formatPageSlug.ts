/**
 * Formats a slug by joining the slug parameters with '/' and ensuring a leading slash.
 * If no slug parameters are provided, returns '/'.
 * @param slugParams - The slug parameters to format.
 * @returns The formatted slug.
 */

export const formatPageSlug = (slugParams?: string[]) => {
    if (!slugParams || slugParams.length === 0) {
        return '/'; 
    }
    return `/${slugParams.join('/')}`; 
};