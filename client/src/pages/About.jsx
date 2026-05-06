import { useState } from "react";
import SectionTitle from "../components/sections/SectionTitle";
import { 
  Gem, 
  Award, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  Users,
  Trophy,
  Award as Certificate,
  Star,
  Home,
  ChevronRight
} from "lucide-react";

// Static data for About Us page
const companyData = {
  introduction: {
    title: "Welcome to Aarvini Jewel",
    paragraphs: [
      "Founded with a passion for exquisite craftsmanship, Aarvini Jewel has been creating timeless pieces of jewelry for over two decades. Our journey began in a small workshop where our founder's vision was to blend traditional techniques with contemporary design, creating pieces that would be cherished for generations.",
      "Today, we stand as a beacon of luxury and elegance in the jewelry industry. Each piece in our collection tells a story of dedication, precision, and artistic excellence. From engagement rings that symbolize eternal love to everyday pieces that celebrate personal style, our jewelry is crafted to be more than just accessories – they're expressions of life's most precious moments.",
      "Our commitment to quality extends beyond our products. We believe in ethical sourcing, sustainable practices, and creating lasting relationships with our clients. When you choose Aarvini Jewel, you're not just buying jewelry – you're investing in a legacy of excellence and becoming part of our extended family of discerning collectors and jewelry enthusiasts."
    ]
  },
  visionMission: {
    vision: "To be the world's most trusted destination for exceptional jewelry, where every piece represents the perfect harmony of artistry, quality, and emotional significance.",
    mission: "To create extraordinary jewelry pieces that celebrate life's most meaningful moments while maintaining the highest standards of craftsmanship, ethical sourcing, and customer satisfaction."
  },
  whyChooseUs: [
    {
      icon: Gem,
      title: "Exceptional Craftsmanship",
      description: "Each piece is meticulously handcrafted by master jewelers with decades of experience, ensuring unparalleled quality and attention to detail."
    },
    {
      icon: ShieldCheck,
      title: "Ethical Sourcing",
      description: "We source only conflict-free gems and precious metals, ensuring every piece is not only beautiful but also responsibly obtained."
    },
    {
      icon: Heart,
      title: "Lifetime Warranty",
      description: "All our jewelry comes with a comprehensive lifetime warranty, reflecting our confidence in the quality and durability of every piece."
    },
    {
      icon: Sparkles,
      title: "Custom Design Service",
      description: "Our expert designers work closely with clients to create bespoke pieces that perfectly capture their unique vision and personality."
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "From consultation to after-care, our dedicated team provides personalized attention to ensure every client's experience is exceptional."
    },
    {
      icon: Trophy,
      title: "Award-Winning Designs",
      description: "Our innovative designs have received international recognition, setting trends and pushing the boundaries of traditional jewelry design."
    }
  ],
  certifications: [
    {
      name: "GIA Certified",
      description: "Gemological Institute of America",
      logo: "🔬"
    },
    {
      name: "ISO 9001",
      description: "Quality Management Systems",
      logo: "🏆"
    },
    {
      name: "Fair Trade Gold",
      description: "Ethical Gold Sourcing",
      logo: "⚖️"
    },
    {
      name: "Luxury Brand Award",
      description: "International Design Excellence",
      logo: "🌟"
    },
    {
      name: "Conflict Free",
      description: "Ethical Diamond Sourcing",
      logo: "💎"
    },
    {
      name: "Master Jeweler",
      description: "Craftsmanship Excellence",
      logo: "🎨"
    }
  ],
  team: [
    {
      name: "Alexander Chen",
      role: "Master Jeweler & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f3d?auto=format&fit=crop&w=400&q=80",
      description: "With over 25 years of experience, Alexander brings unparalleled expertise and artistic vision to every piece."
    },
    {
      name: "Sophia Rodriguez",
      role: "Head Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9c6?auto=format&fit=crop&w=400&q=80",
      description: "Sophia's innovative designs have redefined modern luxury jewelry, winning numerous international awards."
    },
    {
      name: "Marcus Williams",
      role: "Gemstone Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dc994a3e1e?auto=format&fit=crop&w=400&q=80",
      description: "Marcus ensures every gemstone meets our exacting standards for quality, clarity, and ethical sourcing."
    }
  ]
};

function WhyChooseUsCard({ item, index }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white p-6 shadow-sm transition-all duration-300 hover:border-warm-gold hover:shadow-lg hover:-translate-y-1 ${
      index % 2 === 1 ? 'md:translate-x-2' : ''
    }`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="rounded-lg bg-beige-100 p-3 text-warm-gold transition-colors duration-300 group-hover:bg-warm-gold group-hover:text-warm-white">
            <item.icon className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-warm-dark mb-2 group-hover:text-warm-gold transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-warm-dark/70 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CertificationCard({ cert }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white p-6 text-center shadow-sm transition-all duration-300 hover:border-warm-gold hover:shadow-lg">
      <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full bg-beige-100 text-3xl transition-all duration-300 group-hover:bg-warm-gold group-hover:scale-110">
        {cert.logo}
      </div>
      <h4 className="text-sm font-semibold text-warm-dark mb-1 group-hover:text-warm-gold transition-colors duration-300">
        {cert.name}
      </h4>
      <p className="text-xs text-warm-dark/60">
        {cert.description}
      </p>
    </div>
  );
}

function TeamMemberCard({ member }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-beige-300 bg-warm-white shadow-sm transition-all duration-300 hover:border-warm-gold hover:shadow-lg hover:-translate-y-2">
      <div className="aspect-square overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="text-base font-semibold text-warm-dark mb-1 group-hover:text-warm-gold transition-colors duration-300">
          {member.name}
        </h4>
        <p className="text-sm text-warm-gold font-medium mb-2">
          {member.role}
        </p>
        <p className="text-xs text-warm-dark/60 leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('why');

  return (
    <div className="min-h-screen bg-beige-50 text-warm-dark">
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
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-white tracking-widest uppercase mb-4">
            About
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
            <span className="text-sm text-white/60">About</span>
          </nav>
        </div>
      </div>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          {/* Company Introduction */}
          <section className="mb-16">
            <SectionTitle title={companyData.introduction.title} />
            <div className="mx-auto max-w-4xl space-y-6 text-center">
              {companyData.introduction.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-warm-dark/80 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="mb-16">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-beige-300 bg-warm-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-6 w-6 text-warm-gold" />
                  <h3 className="text-xl font-semibold text-warm-dark">Our Vision</h3>
                </div>
                <p className="text-base leading-relaxed text-warm-dark/80">
                  {companyData.visionMission.vision}
                </p>
              </div>
              <div className="rounded-xl border border-beige-300 bg-warm-white p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-warm-gold" />
                  <h3 className="text-xl font-semibold text-warm-dark">Our Mission</h3>
                </div>
                <p className="text-base leading-relaxed text-warm-dark/80">
                  {companyData.visionMission.mission}
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <SectionTitle title="Why Choose Aarvini Jewel" subtitle="Discover what makes us the preferred choice for discerning jewelry lovers." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {companyData.whyChooseUs.map((item, index) => (
                <WhyChooseUsCard key={index} item={item} index={index} />
              ))}
            </div>
          </section>

          {/* Certifications & Awards */}
          <section className="mb-16">
            <SectionTitle title="Certifications & Awards" subtitle="Our commitment to excellence recognized by leading industry authorities." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {companyData.certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <SectionTitle title="Meet Our Master Craftsmen" subtitle="The talented artisans behind our exceptional jewelry collections." />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {companyData.team.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
