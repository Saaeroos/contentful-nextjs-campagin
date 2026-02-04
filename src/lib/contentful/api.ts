import { IPage } from '@/types/contentful';
import { GetPageBySlugDocument } from '../../../graphql/generated/graphql';
import { print } from 'graphql';

export async function getPage(slug: string, preview: boolean = false): Promise<IPage | null> {
  const query = print(GetPageBySlugDocument);

  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
            }`,
        },
        body: JSON.stringify({
          query: query,
          variables: { slug, preview },
        }),
        next: { tags: ['contentful'] }, // Next.js-specific configuration for caching and revalidation.
      }
    );

    const { data, errors } = await response.json();

    if (errors) {
      console.error('GraphQL Errors:', errors);
      return null;
    }

    return data?.pageCollection?.items[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
