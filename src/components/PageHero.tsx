import type { CSSProperties } from 'react';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
};

// Intestazione di pagina: immagine in un riquadro inset, titolo in basso a sinistra
export default function PageHero({ title, subtitle, eyebrow, image }: PageHeroProps) {
  return (
    <section className="px-2 sm:px-3 pt-2 sm:pt-3">
      <div className="relative h-[260px] sm:h-[320px] md:h-[380px] rounded-[20px] sm:rounded-[28px] overflow-hidden bg-ink">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/10" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12">
          {eyebrow && (
            <p className="eyebrow text-primary reveal" style={{ '--i': 0 } as CSSProperties}>
              {eyebrow}
            </p>
          )}
          <h1
            className="mt-2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white reveal"
            style={{ '--i': 1 } as CSSProperties}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-3 max-w-xl text-base sm:text-lg text-white/80 reveal"
              style={{ '--i': 2 } as CSSProperties}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
