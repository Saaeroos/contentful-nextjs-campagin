//utils
import { cn } from "@/lib/utils";

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  content: string;
  type?: HeadingType;
  className?: string;
}

export function Heading({ content, type = "h2", className }: HeadingProps) {
  const safeType = type.toLowerCase() as HeadingType;
  const Tag = safeType;

  const styles: Record<string, string> = {
    h1: "text-4xl md:text-5xl font-bold mb-6",
    h2: "text-3xl font-bold mb-4",
    h3: "text-2xl font-semibold mb-3",
    h4: "text-xl font-medium mb-2",
    h5: "text-lg font-medium mb-2",
    h6: "text-base font-medium mb-1",
  };

  return <Tag className={cn(styles[safeType], className)}>{content}</Tag>;
}
