import { useState } from "react";
import { ShoppingCart, Search, Menu, X, ChevronLeft, ChevronDown } from "lucide-react";

export default function Navbar({ currentPage, onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navLinks = [
    { name: "HOME", href: "#", page: "home", hasSubmenu: false },
    { name: "ABOUT", href: "#", page: "about", hasSubmenu: false },
    { name: "BLOG", href: "#", page: "blog", hasSubmenu: true },
    { name: "SHOP", href: "#", page: "shop", hasSubmenu: true },
    { name: "CONTACTS", href: "#", page: "contacts", hasSubmenu: false },
    { name: "PAGES", href: "#", page: "pages", hasSubmenu: true },
  ];

  const handleNavClick = (page) => {
    onPageChange(page);
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (page) => {
    setOpenSubmenu(openSubmenu === page ? null : page);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-beige-100 to-beige-200/90 shadow-sm relative z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold tracking-wide text-warm-dark">
                OLIMP CRAFT JEWELRY
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.page)}
                    className={`text-sm font-medium transition-colors ${
                      currentPage === link.page 
                        ? "bg-beige-300 px-3 py-1 rounded text-warm-dark" 
                        : "text-warm-dark hover:text-warm-gold"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button className="relative rounded-none p-2 text-warm-dark transition-colors hover:text-warm-gold">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-warm-gold text-xs font-bold text-warm-white">
                  {cartCount}
                </span>
              </button>

              {/* Search */}
              <button className="rounded-none p-2 text-warm-dark transition-colors hover:text-warm-gold">
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="rounded-none p-2 text-warm-dark transition-colors hover:text-warm-gold"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-800 hover:text-[#C9A96E] transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-lg font-serif font-bold text-gray-900">OLIMP</span>
          </div>
          <button className="relative p-2 text-gray-800 hover:text-[#C9A96E] transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A96E] text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-2">
          {navLinks.map((link) => (
            <div key={link.name}>
              <div 
                className={`flex items-center justify-between px-4 py-3.5 cursor-pointer transition-colors ${
                  currentPage === link.page
                    ? "bg-[#C9A96E] text-white"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                <button
                  onClick={() => handleNavClick(link.page)}
                  className="flex-1 text-left text-sm font-medium tracking-wide uppercase"
                >
                  {link.name}
                </button>
                {link.hasSubmenu && (
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubmenu(link.page);
                    }}
                    className="p-1"
                  >
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSubmenu === link.page ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                )}
              </div>
              
              {/* Submenu */}
              {link.hasSubmenu && openSubmenu === link.page && (
                <div className="bg-gray-50 py-2">
                  <button 
                    onClick={() => handleNavClick(link.page)}
                    className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:text-[#C9A96E] transition-colors"
                  >
                    View {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
