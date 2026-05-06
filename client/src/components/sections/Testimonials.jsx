import SectionTitle from "./SectionTitle";
import { Star, Quote } from "lucide-react";

function TestimonialCard({ item, index }) {
  return (
    <article 
      className={`group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white p-6 transition-all duration-300 hover:border-warm-gold hover:shadow-lg ${
        index === 1 ? 'md:scale-105' : ''
      }`}
    >
      {/* Quote icon */}
      <div className="absolute right-4 top-4 opacity-10">
        <Quote className="h-8 w-8 text-warm-gold" />
      </div>
      
      {/* Rating stars */}
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < 5 ? 'fill-warm-gold text-warm-gold' : 'text-beige-300'}`}
          />
        ))}
      </div>
      
      <p className="text-sm leading-relaxed text-warm-dark/80 italic">
        "{item.review}"
      </p>
      
      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-warm-gold to-beige-300 p-0.5">
          <div className="h-full w-full rounded-full bg-warm-white flex items-center justify-center">
            <span className="text-xs font-bold text-warm-gold">
              {item.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-warm-gold">{item.name}</p>
          <p className="text-xs text-warm-dark/60">Verified Customer</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials({ items }) {
  return (
    <section>
      <SectionTitle title="What Clients Say" subtitle="Trusted by customers who value elegance and quality." />
      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {items.map((item, index) => (
          <TestimonialCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
