import { IGridSection } from '@/types/contentful';
import { Card } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
import { Description } from '@/components/ui/Description';

interface GridSectionProps {
  data: IGridSection;
}

export function GridSection({ data }: GridSectionProps) {
  const { title, text, cardsCollection } = data;

  if (!cardsCollection?.items.length && !title && !text) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {title && <Heading data={title} className="text-gray-900 mb-6 text-4xl font-bold" />}
          {text && <Description data={text} className="mt-4 text-xl text-gray-600" />}
        </div>
        
        {cardsCollection?.items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {cardsCollection.items.map((card) => (
              <Card key={card.sys.id} data={card} />
            ))}
          </div>
        ) : (
           <div className="text-center py-10 text-gray-500">
             {/* Fallback if no cards but section exists */}
             <p>No items to display.</p>
           </div>
        )}
      </div>
    </section>
  );
}
