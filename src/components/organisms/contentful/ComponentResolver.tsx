import { PageSection } from '@/types/contentful';
import { Hero } from '@/components/organisms/features/Hero';
import { GridSection } from '@/components/organisms/features/GridSection';
import { Footer } from '@/components/organisms/layout/Footer';

interface ComponentResolverProps {
  component: PageSection;
}

export function ComponentResolver({ component }: ComponentResolverProps) {
  switch (component.__typename) {
    case 'PageHero':
      return <Hero data={component} />;
    case 'PageSection':
      return <GridSection data={component} />;
    case 'PageFooter':
      return <Footer data={component} />;
    default:
      if (process.env.NODE_ENV === 'development') {
        console.warn("Unknown component type");
      }
      return null;
  }
}
