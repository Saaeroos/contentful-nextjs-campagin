import { IFooter } from '@/types/contentful';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Description } from '@/components/ui/Description';

interface FooterProps {
  data: IFooter;
}

export function Footer({ data }: FooterProps) {
  const { title, description, subscriptionButton } = data;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            {title && <Heading data={title} className="text-white text-lg" />}
            {description && <Description data={description} className="text-gray-400 text-sm" />}
          </div>
          
          {subscriptionButton && (
            <div>
              <Button 
                data={subscriptionButton} 
                className="px-6 py-2"
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
