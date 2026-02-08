import Image from 'next/image';

// components
import { Heading, HeadingType, Button } from '@/components/atoms';
import { Description } from '@/components/molecules/Description';

//CMS types
import {
  AssetContainerFieldsFragment,
  ButtonFieldsFragment,
  DescriptionFieldsFragment,
  HeadingFieldsFragment
} from '@graphql/generated/graphql';


interface CardProps {
  title: HeadingFieldsFragment
  description?: DescriptionFieldsFragment | null
  assetContainer?: AssetContainerFieldsFragment | null
  linksCollection?: (ButtonFieldsFragment | null)[] | null
  badges?: (string | null)[] | null
  date?: string | null
}

export function Card({ title, description, assetContainer, linksCollection, badges, date }: CardProps) {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
      {assetContainer?.asset && (
        <div className="relative h-48 w-full">
          <Image
            src={assetContainer.asset.url || ''}
            alt={assetContainer.asset.description || title.content || 'Card image'}
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

        {title && <Heading content={title.content || ''} type={(title.type || 'h3') as HeadingType} className="mb-3 text-gray-900" />}

        {description && <Description content={description.content?.json || '[]'} className="mb-6 flex-grow" />}

        {linksCollection && linksCollection.length > 0 && (
          <div className="mt-auto pt-4 space-y-2">
            {linksCollection.map((button) => {
              if (!button) return null;
              return (
                <Button
                  key={button.sys.id}
                  text={button.text || ''}
                  link={button.link || ''}
                  type={button.type || 'outline'}
                  className="w-full"
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
