// components
import { Button, Heading, HeadingType } from '@/components/atoms';
import { Description } from '@/components/molecules';

//CMS types
import { FooterFieldsFragment } from '@graphql/generated/graphql';


interface FooterProps {
  data: FooterFieldsFragment;
}

export function Footer({ data }: FooterProps) {
  const { title, description, subscriptionButton } = data;
  const { text: buttonTitle, link: buttonLink, type: buttonType } = subscriptionButton || {};

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            {/* Footer Title & Description */}
            {title && <Heading content={title.content || ''} type={(title.type || 'h2') as HeadingType} className="text-white text-lg" />}
            {description && <Description content={description.content?.json || '[]'} className="text-gray-400 text-sm" />}
          </div>

          {/* Subscription Button */}
          {subscriptionButton && (
            <div>
              <Button
                text={buttonTitle || ''}
                link={buttonLink || ''}
                type={buttonType || 'primary'}
                className="px-6 py-2"
              />
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
