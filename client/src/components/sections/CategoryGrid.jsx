import SectionTitle from "./SectionTitle";

export default function CategoryGrid({ categories }) {
  return (
    <section>
      <SectionTitle title="Featured Categories" subtitle="Explore iconic pieces curated for every occasion." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <article
            key={item.id}
            className="group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white shadow-sm transition-all duration-300 hover:border-warm-gold hover:shadow-lg"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beige-200/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Overlay content on hover */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="mb-4 translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                  <button className="rounded border border-warm-gold bg-warm-gold px-4 py-2 text-xs font-medium text-warm-white transition-all duration-300 hover:bg-transparent hover:text-warm-gold">
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-warm-dark transition-colors duration-300 group-hover:text-warm-gold">
                {item.name}
              </h3>
              <div className="mt-2 flex justify-center">
                <div className="h-0.5 w-8 bg-warm-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
