import { PageData } from '@/lib/contentful/api';

// components
import { GridSection } from '@/components/organisms';


type PageSectionItem = NonNullable<NonNullable<PageData['mainContentCollection']>['items'][0]>;

interface ComponentResolverProps {
  component: PageSectionItem;
}

export function ComponentResolver({ component }: ComponentResolverProps) {
  if (!component) return null;

  switch (component.__typename) {
    case 'PageSection':
      return <GridSection data={component} />;
    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn("Unknown component type");
      }
      return null;
  }
}
