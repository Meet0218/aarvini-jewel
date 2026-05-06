import { useEffect, useState } from "react";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import CategoryGrid from "./components/sections/CategoryGrid";
import HeroSlider from "./components/sections/HeroSlider";
import Newsletter from "./components/sections/Newsletter";
import OfferBanner from "./components/sections/OfferBanner";
import ProductGrid from "./components/sections/ProductGrid";
import Testimonials from "./components/sections/Testimonials";
import HomeSkeleton from "./components/skeleton/HomeSkeleton";
import About from "./pages/About";
import Shop from "./pages/Shop";
import { categories, heroSlides, products, testimonials } from "./data/homeData";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'shop':
        return <Shop />;
      default:
        return (
          <div className="space-y-14">
            <HeroSlider slides={heroSlides} />
            <CategoryGrid categories={categories} />
            <ProductGrid products={products} />
            <OfferBanner />
            <Testimonials items={testimonials} />
            <Newsletter />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-beige-50 text-warm-dark">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {currentPage === 'shop' || currentPage === 'about' ? (
          loading ? <div className="animate-pulse min-h-screen"></div> : renderPage()
        ) : (
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            {loading ? (
              currentPage === 'home' ? <HomeSkeleton /> : <div className="animate-pulse">Loading...</div>
            ) : (
              renderPage()
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
