import SectionTitle from "./SectionTitle";
import { Heart, ShoppingCart, Eye } from "lucide-react";

function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-warm-gold hover:shadow-lg">
      {/* Quick actions overlay */}
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="rounded-full bg-beige-200/80 p-2 text-warm-dark transition-all duration-300 hover:bg-warm-gold hover:text-warm-white hover:scale-110">
          <Heart className="h-4 w-4" />
        </button>
        <button className="rounded-full bg-beige-200/80 p-2 text-warm-dark transition-all duration-300 hover:bg-warm-gold hover:text-warm-white hover:scale-110">
          <Eye className="h-4 w-4" />
        </button>
      </div>

      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-beige-200/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Add to cart button overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full transform bg-warm-gold p-3 transition-transform duration-300 group-hover:translate-y-0">
          <button className="flex w-full items-center justify-center gap-2 text-sm font-medium text-warm-white transition-colors hover:text-beige-100">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-base font-medium text-warm-dark transition-colors duration-300 group-hover:text-warm-gold">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-warm-gold">{product.price}</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-3 w-3 ${i < 4 ? 'text-warm-gold' : 'text-beige-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProductGrid({ products }) {
  return (
    <section>
      <SectionTitle title="Featured Products" subtitle="Discover handcrafted luxury pieces made to stand out." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
