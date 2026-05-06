const block = "skeleton-shimmer rounded-xl";

function HeroSkeleton() {
  return (
    <div className="relative">
      <div className={`${block} h-[70vh] min-h-[500px] w-full`} />
      {/* Navigation arrows placeholder */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className={`${block} h-10 w-10 rounded-full`} />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className={`${block} h-10 w-10 rounded-full`} />
      </div>
      {/* Dots navigation placeholder */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className={`${block} h-3 w-3 rounded-full ${i === 1 ? 'w-8' : ''}`} />
        ))}
      </div>
    </div>
  );
}

function CategorySkeleton({ cards }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: cards }).map((_, index) => (
        <div key={index} className="space-y-4">
          <div className={`${block} h-64 w-full`} />
          <div className="text-center space-y-2">
            <div className={`${block} h-5 w-3/4 mx-auto`} />
            <div className={`${block} h-0.5 w-8 mx-auto`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductSkeleton({ cards }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: cards }).map((_, index) => (
        <div key={index} className="space-y-4">
          <div className={`${block} h-72 w-full`} />
          <div className="p-4 space-y-3">
            <div className={`${block} h-4 w-3/4`} />
            <div className="flex justify-between items-center">
              <div className={`${block} h-5 w-1/3`} />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`${block} h-3 w-3 rounded-full`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TestimonialSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={`${block} border border-white/10 p-6 space-y-4 ${index === 1 ? 'md:scale-105' : ''}`}>
          {/* Rating stars placeholder */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`${block} h-4 w-4 rounded-full`} />
            ))}
          </div>
          {/* Review text placeholder */}
          <div className="space-y-2">
            <div className={`${block} h-4 w-full`} />
            <div className={`${block} h-4 w-5/6`} />
            <div className={`${block} h-4 w-4/5`} />
          </div>
          {/* Author info placeholder */}
          <div className="flex items-center gap-3">
            <div className={`${block} h-10 w-10 rounded-full`} />
            <div className="space-y-1">
              <div className={`${block} h-4 w-24`} />
              <div className={`${block} h-3 w-20`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function OfferBannerSkeleton() {
  return (
    <div className={`${block} border border-luxury-gold/40 h-48 w-full`} />
  );
}

function NewsletterSkeleton() {
  return (
    <div className={`${block} border border-white/10 h-64 w-full`} />
  );
}

export default function HomeSkeleton() {
  return (
    <div className="space-y-14">
      <HeroSkeleton />
      <CategorySkeleton cards={4} />
      <ProductSkeleton cards={4} />
      <OfferBannerSkeleton />
      <TestimonialSkeleton />
      <NewsletterSkeleton />
    </div>
  );
}
