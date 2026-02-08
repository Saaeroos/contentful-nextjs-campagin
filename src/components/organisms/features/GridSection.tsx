// components
import { Heading, HeadingType } from '@/components/atoms';
import { Card, Description } from '@/components/molecules';

//CMS types
import { GridSectionFieldsFragment } from '@graphql/generated/graphql';


interface GridSectionProps {
  data: GridSectionFieldsFragment;
}

export function GridSection({ data }: GridSectionProps) {
  const { title, text, cardsCollection } = data;

  if (!cardsCollection?.items?.length && !title && !text) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Heading and Description */}
          {title && <Heading content={title.content || ''} type={(title.type || 'h2') as HeadingType} className="text-gray-900 mb-6 text-4xl font-bold" />}
          {text && <Description content={text.content?.json || ''} className="mt-4 text-xl text-gray-600" />}
        </div>
        {/* Grid of Cards */}
        {cardsCollection?.items && cardsCollection.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {cardsCollection.items.map((card) => {
              if (!card || !card.title || !card.asset) return null;
              return (
                <Card
                  key={card.sys.id}
                  title={card.title}
                  description={card.description || undefined}
                  assetContainer={card.asset || undefined}
                  linksCollection={card.linksCollection?.items.filter((item) => item !== null) || []}
                  badges={card.badges}
                  date={card.date}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
