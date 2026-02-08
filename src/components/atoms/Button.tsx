import Link from 'next/link';

// utils
import { cn } from '@/lib/utils';


interface ButtonProps {
  text: string;
  link: string;
  type?: string;
  className?: string;
}

export function Button({ text, link, type: rawType, className }: ButtonProps) {
  const type = (rawType || 'primary').toLowerCase();

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
  };

  const styles = cn(
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200',
    variants[type as keyof typeof variants] || variants.primary,
    className
  );

  if (link.startsWith('/')) {
    return (
      <Link href={link} className={styles}>
        {text}
      </Link>
    );
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles}>
      {text}
    </a>
  );
}