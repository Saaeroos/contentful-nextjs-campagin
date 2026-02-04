import Image from 'next/image';
import { ICard } from '@/types/contentful';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Description } from '@/components/ui/Description';

interface CardProps {
  data: ICard;
}

export function Card({ data }: CardProps) {
  const { title, description, asset, linksCollection, badges, date } = data;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {asset?.asset && (
        <div className="relative h-48 w-full">
          <Image
            src={asset.asset.url}
            alt={asset.asset.description || title?.content || 'Card image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {badges?.map((badge, index) => (
            <span key={index} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-600 rounded">
              {badge}
            </span>
          ))}
          {date && (
            <span className="text-xs text-gray-500 py-1">
              {new Date(date).toLocaleDateString()}
            </span>
          )}
        </div>

        {title && <Heading data={title} className="mb-3 text-gray-900" />}
        
        {description && <Description data={description} className="mb-6 flex-grow" />}
        
        {linksCollection?.items.length > 0 && (
          <div className="mt-auto pt-4 space-y-2">
            {linksCollection.items.map((link) => (
              <Button 
                key={link.sys.id} 
                data={{ ...link, type: 'outline' }} 
                className="w-full" 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
