export default function OfferBanner() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-warm-gold/40 bg-gradient-to-r from-beige-200 via-beige-100 to-beige-200 px-6 py-12 text-center sm:px-12 lg:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-warm-gold via-transparent to-warm-gold transform rotate-12 scale-150" />
      </div>
      
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.35em] text-warm-brown font-medium">
          Limited Time Offer
        </p>
        <h2 className="mt-4 text-3xl font-bold text-warm-dark sm:text-4xl lg:text-5xl">
          Flat <span className="text-warm-gold">20% Off</span> on Wedding Collection
        </h2>
        <p className="mt-4 text-base text-warm-dark/80 sm:text-lg">
          Exclusive promotion valid this week for selected premium designs.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="group relative overflow-hidden rounded-lg border border-warm-gold bg-warm-gold px-8 py-3 text-sm font-medium text-warm-white transition-all duration-300 hover:bg-transparent hover:text-warm-gold hover:shadow-lg">
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <button className="rounded-lg border border-warm-brown/30 bg-transparent px-8 py-3 text-sm font-medium text-warm-dark transition-all duration-300 hover:border-warm-gold hover:text-warm-gold">
            View Collection
          </button>
        </div>
        
        {/* Countdown timer placeholder */}
        <div className="mt-8 flex justify-center gap-4 text-warm-dark/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">03</div>
            <div className="text-xs uppercase">Days</div>
          </div>
          <div className="text-2xl font-bold text-warm-gold">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">14</div>
            <div className="text-xs uppercase">Hours</div>
          </div>
          <div className="text-2xl font-bold text-warm-gold">:</div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">27</div>
            <div className="text-xs uppercase">Minutes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
