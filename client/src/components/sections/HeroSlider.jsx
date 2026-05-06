import { useEffect, useState } from "react";

export default function HeroSlider({ slides }) {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length, isHovered]);

  const goToSlide = (index) => {
    setActive(index);
  };

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      className="relative h-[70vh] min-h-[500px] overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === active 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="h-full w-full object-cover transition-transform duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-beige-900/80 via-beige-800/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-6 max-w-2xl sm:mx-12 lg:mx-16">
              <p className="text-xs uppercase tracking-[0.35em] text-warm-gold font-medium">
                New Collection
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-warm-white sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-4 text-base text-warm-white/90 sm:text-lg lg:text-xl">
                {slide.subtitle}
              </p>
              <button className="mt-8 group relative overflow-hidden rounded border border-warm-gold bg-transparent px-8 py-3 text-sm font-medium text-warm-gold transition-all duration-300 hover:bg-warm-gold hover:text-warm-white hover:shadow-lg">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-warm-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-beige-800/50 p-2 text-warm-white transition-all duration-300 hover:bg-warm-gold hover:text-warm-white hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-beige-800/50 p-2 text-warm-white transition-all duration-300 hover:bg-warm-gold hover:text-warm-white hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === active 
                ? "bg-warm-gold w-8 shadow-lg" 
                : "bg-warm-white/40 hover:bg-warm-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
