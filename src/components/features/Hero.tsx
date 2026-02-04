import Image from 'next/image';
import { IHero } from '@/types/contentful';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';

interface HeroProps {
  data: IHero;
}

export function Hero({ data }: HeroProps) {
  const { title, text, background, linksCollection, badge } = data;

  return (
    <section
      className="w-full min-h-[85vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden"
      style={{ position: 'relative' }}
    >
      {background?.asset && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={background.asset.url}
            alt={background.asset.description || 'Hero background'}
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
        </div>
      )}

      {/* Overlay */}
      <div
        className="bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="container mx-auto px-4 py-20 flex flex-col items-center text-center"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <div className="max-w-4xl">
          {badge && (
            <span className="inline-block px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 shadow-lg border border-blue-500/30">
              {badge}
            </span>
          )}

          {title && (
            <Heading
              data={title}
              className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg"
            />
          )}

          {text && (
            <div className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              <p>{text}</p>
            </div>
          )}

          {linksCollection?.items.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center">
              {linksCollection.items.map((button) => (
                <Button
                  key={button.sys.id}
                  data={button}
                  className="text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
