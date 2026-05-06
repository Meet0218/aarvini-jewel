import { Mail, Phone, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";

const footerData = {
  company: {
    name: "OLIMP Craft Jewelry",
    description: "OLIMP creates premium metal jewelry with timeless design and modern elegance. Beautifully crafted pieces made for everyday luxury.",
    address: "B-402, Atlanta Mall, Opp. Tulsi Arcade, Nr. Sudama Chowk, Surat-395006",
    phone: "+91 9327407713",
    email: "contact@olimpjewelry.com"
  },
  quickLinks: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Design My Ring", href: "/design" },
    { name: "FAQ's", href: "/faq" }
  ],
  collections: [
    { name: "Rings", href: "/shop?category=rings" },
    { name: "Earrings", href: "/shop?category=earrings" },
    { name: "Necklace", href: "/shop?category=necklace" },
    { name: "Bracelets", href: "/shop?category=bracelets" },
    { name: "All Collection", href: "/shop" }
  ],
  helpPolicy: [
    { name: "Contact Information", href: "/contact-info" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Return And Refund Policy", href: "/returns" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Terms Of Service", href: "/terms" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-beige-100 to-beige-200/90 text-warm-dark">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          
          {/* Company Information */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-warm-dark mb-4">Company</h3>
            <h4 className="text-xl font-bold text-warm-dark mb-3">
              {footerData.company.name}
            </h4>
            <p className="text-sm text-warm-dark/70 leading-relaxed mb-4">
              {footerData.company.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-warm-dark/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-warm-gold" />
                <span>{footerData.company.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-dark/70">
                <Phone className="h-4 w-4 flex-shrink-0 text-warm-gold" />
                <span>{footerData.company.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-dark/70">
                <Mail className="h-4 w-4 flex-shrink-0 text-warm-gold" />
                <span>{footerData.company.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-warm-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-warm-dark/70 hover:text-warm-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold text-warm-dark mb-4">Collections</h3>
            <ul className="space-y-2">
              {footerData.collections.map((collection) => (
                <li key={collection.name}>
                  <a
                    href={collection.href}
                    className="text-sm text-warm-dark/70 hover:text-warm-gold transition-colors duration-300"
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Policy */}
          <div>
            <h3 className="text-lg font-semibold text-warm-dark mb-4">Help & Policy</h3>
            <ul className="space-y-2">
              {footerData.helpPolicy.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-sm text-warm-dark/70 hover:text-warm-gold transition-colors duration-300"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons & Bottom Bar */}
        <div className="border-t border-beige-300 mt-4 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-200 rounded-full flex items-center justify-center text-warm-dark transition-all duration-300 hover:bg-warm-gold hover:text-white"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-200 rounded-full flex items-center justify-center text-warm-dark transition-all duration-300 hover:bg-warm-gold hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-beige-200 rounded-full flex items-center justify-center text-warm-dark transition-all duration-300 hover:bg-warm-gold hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <p className="text-sm text-warm-dark/60">
              © {currentYear} {footerData.company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
