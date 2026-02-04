import { IHeading } from '@/types/contentful';
import React from 'react';
import { cn } from '@/lib/utils/cn';

interface HeadingProps {
  data: IHeading;
  className?: string;
}

export function Heading({ data, className }: HeadingProps) {
  const { type, content } = data;
  const normalizedType: string = type?.toLowerCase() || 'h2';
  const Tag = normalizedType as keyof React.JSX.IntrinsicElements;

  const styles: Record<string, string> = {
    h1: 'text-4xl md:text-5xl font-bold mb-6',
    h2: 'text-3xl font-bold mb-4',
    h3: 'text-2xl font-semibold mb-3',
    h4: 'text-xl font-medium mb-2',
    h5: 'text-lg font-medium mb-2',
    h6: 'text-base font-medium mb-1',
  };

  return (
    <Tag className={cn(styles[normalizedType], className)}>
      {content}
    </Tag>
  );
}
