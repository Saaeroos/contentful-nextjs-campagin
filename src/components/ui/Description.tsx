import { IDescription } from '@/types/contentful';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { cn } from '@/lib/utils/cn';

interface DescriptionProps {
  data: IDescription;
  className?: string;
}

export function Description({ data, className }: DescriptionProps) {
  const { content } = data;

  if (!content?.json) return null;

  return (
    <div className={cn('prose prose-gray max-w-none text-gray-600', className)}>
      {documentToReactComponents(content.json as Document)}
    </div>
  );
}
