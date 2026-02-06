import { Document } from '@contentful/rich-text-types';
import { cn } from '@/lib/utils/cn';

//CMS types
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface DescriptionProps {
  content: string | Document;
  className?: string;
}

export function Description({ content, className }: DescriptionProps) {

  if (!content) return null;

  let document: Document;

  try {
    if (typeof content === 'string') {
      document = JSON.parse(content);
    } else {
      document = content;
    }
  } catch (e) {
    console.error('Error parsing description content:', e);
    return null;
  }

  return (
    <div className={cn('prose prose-gray max-w-none text-gray-600', className)}>
      {documentToReactComponents(document)}
    </div>
  );
}
