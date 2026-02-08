import {
  GetPageBySlugDocument,
  GetPageBySlugQuery,
} from "@graphql/generated/graphql";
import { print } from "graphql";

export type PageData = NonNullable<
  NonNullable<GetPageBySlugQuery["pageCollection"]>["items"][0]
>;

export async function getPage(
  slug: string,
  preview: boolean = false,
): Promise<PageData | null> {
  const query = print(GetPageBySlugDocument);

  try {
    const accessToken = preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
      : process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!accessToken) {
      console.error(
        `Missing Contentful ${preview ? "Preview" : ""} Access Token`,
      );
      return null;
    }

    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: query,
          variables: { slug, preview },
        }),
        next: { tags: ["contentful"] }, // Next.js-specific configuration for caching and revalidation.
      },
    );

    const { data, errors } = await response.json();

    if (errors) {
      console.error("GraphQL Errors:", errors);
      return null;
    }

    const pageData = data?.pageCollection?.items[0] || null;

    if (!pageData) {
      console.log(`Page not found for slug: ${slug} (preview: ${preview})`);
    }

    return pageData;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
}
