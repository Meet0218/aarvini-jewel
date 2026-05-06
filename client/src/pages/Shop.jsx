import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X, Heart, ShoppingCart, Eye, ChevronDown, Home, ChevronRight, Star } from "lucide-react";

// Static product data
const productsData = [
  {
    id: 1,
    name: "Celeste Diamond Ring",
    price: 899,
    category: "Rings",
    type: "Gold",
    weight: "2.5g",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    name: "Aurora Gold Necklace",
    price: 1199,
    category: "Necklaces",
    type: "Gold",
    weight: "5.2g",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    isNew: false
  },
  {
    id: 3,
    name: "Luxe Pearl Earrings",
    price: 699,
    category: "Earrings",
    type: "Silver",
    weight: "1.8g",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Noir Charm Bracelet",
    price: 549,
    category: "Bracelets",
    type: "Silver",
    weight: "3.1g",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    isNew: false
  },
  {
    id: 5,
    name: "Royal Ruby Pendant",
    price: 1599,
    category: "Necklaces",
    type: "Gold",
    weight: "4.5g",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    isNew: true
  },
  {
    id: 6,
    name: "Elegant Hoop Earrings",
    price: 449,
    category: "Earrings",
    type: "Silver",
    weight: "2.2g",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    isNew: false
  },
  {
    id: 7,
    name: "Classic Wedding Band",
    price: 799,
    category: "Rings",
    type: "Platinum",
    weight: "3.8g",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    isNew: false
  },
  {
    id: 8,
    name: "Vintage Chain Bracelet",
    price: 649,
    category: "Bracelets",
    type: "Gold",
    weight: "4.2g",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    isNew: true
  },
  {
    id: 9,
    name: "Sapphire Stud Earrings",
    price: 999,
    category: "Earrings",
    type: "Platinum",
    weight: "1.5g",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    isNew: false
  },
  {
    id: 10,
    name: "Emerald Tennis Bracelet",
    price: 1899,
    category: "Bracelets",
    type: "Gold",
    weight: "6.5g",
    image: "https://images.unsplash.com/photo-1611652022414-a4259017d397?auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    isNew: true
  },
  {
    id: 11,
    name: "Pearl Drop Necklace",
    price: 749,
    category: "Necklaces",
    type: "Silver",
    weight: "3.5g",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    isNew: false
  },
  {
    id: 12,
    name: "Diamond Solitaire Ring",
    price: 2499,
    category: "Rings",
    type: "Platinum",
    weight: "2.8g",
    image: "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=400&q=80",
    rating: 5.0,
    isNew: true
  }
];

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets"];
const types = ["All", "Gold", "Silver", "Platinum"];
const weights = ["All", "Light (0-2g)", "Medium (2-4g)", "Heavy (4g+)"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest First", value: "newest" },
  { label: "Top Rated", value: "rating" }
];

function ProductCard({ product }) {
  return (
    <div className="group relative bg-white rounded-none border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
      {/* Badges */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex flex-col gap-1 sm:gap-2">
        {product.isNew && (
          <span className="bg-[#C9A96E] text-white text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 tracking-widest uppercase">
            New
          </span>
        )}
        <span className="bg-gray-900 text-white text-[9px] sm:text-[10px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 tracking-widest uppercase">
          {product.type}
        </span>
      </div>
      
      {/* Quick Actions - Slide in from right */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 flex flex-col gap-1.5 sm:gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#C9A96E] hover:text-white transition-all duration-300">
          <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-[#C9A96E] hover:text-white transition-all duration-300">
          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <button className="w-8 h-8 sm:w-10 sm:h-10 bg-[#C9A96E] shadow-lg flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-300">
          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
      </div>

      {/* Image Container with Zoom */}
      <div className="aspect-[4/5] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content - Minimalist Premium */}
      <div className="p-6 text-center">
        {/* Category Tag */}
        <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase font-medium">
          {product.category}
        </span>
        
        {/* Product Name */}
        <h3 className="text-base font-light text-gray-900 mt-2 mb-1 tracking-wide group-hover:text-[#C9A96E] transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Weight */}
        <p className="text-xs text-gray-400 mb-3">{product.weight}</p>
        
        {/* Price */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-lg font-serif text-[#C9A96E]">${product.price}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-[#C9A96E] fill-[#C9A96E]' : 'text-gray-200'}`} 
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
        </div>

        {/* Add to Cart Button - Appears on hover */}
        <button className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 w-full py-3 bg-gray-900 text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#C9A96E] transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function FilterSection({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-100 pb-5 mb-5">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left group"
      >
        <h4 className="text-xs font-semibold text-gray-900 tracking-[0.15em] uppercase">{title}</h4>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:text-[#C9A96E] ${isOpen ? "rotate-180 text-[#C9A96E]" : ""}`} />
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedWeight, setSelectedWeight] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openFilters, setOpenFilters] = useState({
    category: true,
    price: true,
    type: true,
    weight: true
  });

  const toggleFilter = (filter) => {
    setOpenFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  const filteredProducts = useMemo(() => {
    let filtered = productsData;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Type filter
    if (selectedType !== "All") {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // Weight filter
    if (selectedWeight !== "All") {
      const weight = parseFloat(p.weight);
      switch (selectedWeight) {
        case "Light (0-2g)":
          filtered = filtered.filter(p => parseFloat(p.weight) <= 2);
          break;
        case "Medium (2-4g)":
          filtered = filtered.filter(p => {
            const w = parseFloat(p.weight);
            return w > 2 && w <= 4;
          });
          break;
        case "Heavy (4g+)":
          filtered = filtered.filter(p => parseFloat(p.weight) > 4);
          break;
        default:
          break;
      }
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedType, selectedWeight, priceRange, sortBy]);

  const activeFiltersCount = [
    selectedCategory !== "All",
    selectedType !== "All",
    selectedWeight !== "All",
    priceRange[0] > 0 || priceRange[1] < 3000
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedWeight("All");
    setPriceRange([0, 3000]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Hero Banner Section */}
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Jewelry Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-widest uppercase mb-4">
            Shop
          </h1>
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-white/80">
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="h-4 w-4" />
              <span className="text-sm">Home</span>
            </button>
            <ChevronRight className="h-4 w-4" />
            <span className="text-sm text-white/60">Shop</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C9A96E] transition-colors tracking-wide"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-dark/40 hover:text-warm-dark"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Sort and Filter Toggle */}
          <div className="flex gap-3">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 text-xs text-gray-900 tracking-wide hover:border-[#C9A96E] transition-colors uppercase"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-[#C9A96E] text-white text-[10px] w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 bg-white border border-gray-200 text-xs text-gray-900 tracking-wide focus:outline-none focus:border-[#C9A96E] cursor-pointer uppercase"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`${showMobileFilters ? "block" : "hidden"} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-semibold text-gray-900 tracking-[0.2em] uppercase">Filter By</h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] text-[#C9A96E] hover:text-gray-900 tracking-[0.1em] uppercase font-medium transition-colors duration-300 border-b border-[#C9A96E] pb-0.5 hover:border-gray-900"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <FilterSection 
                title="Category" 
                isOpen={openFilters.category} 
                onToggle={() => toggleFilter("category")}
              >
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="w-4 h-4 cursor-pointer appearance-none rounded-full border-2 border-gray-300 checked:border-[#C9A96E] checked:bg-[#C9A96E] transition-all duration-200 focus:outline-none focus:ring-0"
                      />
                      <span className={`text-xs tracking-wide ${selectedCategory === category ? "text-gray-900 font-medium" : "text-gray-500 group-hover:text-gray-900"} transition-colors duration-300`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Price Range Filter */}
              <FilterSection 
                title="Price Range" 
                isOpen={openFilters.price} 
                onToggle={() => toggleFilter("price")}
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        className="w-full pl-6 pr-3 py-2 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C9A96E] transition-colors"
                      />
                    </div>
                    <span className="text-gray-300">—</span>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 3000])}
                        className="w-full pl-6 pr-3 py-2 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-[#C9A96E] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C9A96E]"
                    />
                    <div className="flex justify-between text-[10px] text-gray-400 tracking-wider mt-2 uppercase">
                      <span>Min ${priceRange[0]}</span>
                      <span>Max ${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </FilterSection>

              {/* Type Filter */}
              <FilterSection 
                title="Material Type" 
                isOpen={openFilters.type} 
                onToggle={() => toggleFilter("type")}
              >
                <div className="space-y-2">
                  {types.map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="type"
                        checked={selectedType === type}
                        onChange={() => setSelectedType(type)}
                        className="w-4 h-4 cursor-pointer appearance-none rounded-full border-2 border-gray-300 checked:border-[#C9A96E] checked:bg-[#C9A96E] transition-all duration-200 focus:outline-none focus:ring-0"
                      />
                      <span className={`text-xs tracking-wide ${selectedType === type ? "text-gray-900 font-medium" : "text-gray-500 group-hover:text-gray-900"} transition-colors duration-300`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {/* Weight Filter */}
              <FilterSection 
                title="Weight" 
                isOpen={openFilters.weight} 
                onToggle={() => toggleFilter("weight")}
              >
                <div className="space-y-2">
                  {weights.map(weight => (
                    <label key={weight} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="weight"
                        checked={selectedWeight === weight}
                        onChange={() => setSelectedWeight(weight)}
                        className="w-4 h-4 cursor-pointer appearance-none rounded-full border-2 border-gray-300 checked:border-[#C9A96E] checked:bg-[#C9A96E] transition-all duration-200 focus:outline-none focus:ring-0"
                      />
                      <span className={`text-xs tracking-wide ${selectedWeight === weight ? "text-gray-900 font-medium" : "text-gray-500 group-hover:text-gray-900"} transition-colors duration-300`}>
                        {weight}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[11px] text-gray-400 tracking-[0.1em] uppercase">
                Showing {filteredProducts.length} of {productsData.length} Products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-900 text-lg font-light tracking-wide mb-2">No Products Found</p>
                <p className="text-gray-400 text-xs tracking-[0.1em] uppercase mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-8 py-3 bg-gray-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-[#C9A96E] transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
