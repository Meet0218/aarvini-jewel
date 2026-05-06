import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl border border-beige-300 bg-gradient-to-br from-beige-100 via-warm-white to-beige-100 px-6 py-12 text-center sm:px-12 lg:py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-bl from-warm-gold via-transparent to-warm-gold transform -rotate-12 scale-150" />
      </div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mx-auto mb-6 h-12 w-12 rounded-full bg-gradient-to-br from-warm-gold to-beige-300 p-0.5">
          <div className="h-full w-full rounded-full bg-warm-white flex items-center justify-center">
            <Mail className="h-6 w-6 text-warm-gold" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-warm-dark sm:text-4xl">
          Join Our <span className="text-warm-gold">Newsletter</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-warm-dark/80 sm:text-lg">
          Get early access to new luxury launches, styling edits, and exclusive member offers.
        </p>

        {isSubscribed ? (
          <div className="mx-auto mt-8 max-w-md rounded-lg border border-warm-gold/30 bg-warm-gold/10 p-4">
            <div className="flex items-center justify-center gap-2 text-warm-gold">
              <Sparkles className="h-5 w-5" />
              <p className="text-sm font-medium">Thank you for subscribing!</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-2xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 rounded-lg border border-beige-300 bg-beige-50/50 px-6 py-3 text-base text-warm-dark placeholder:text-warm-dark/50 backdrop-blur-sm transition-all duration-300 focus:border-warm-gold focus:bg-warm-white focus:outline-none focus:ring-2 focus:ring-warm-gold/20"
              />
              <button
                type="submit"
                className="group relative overflow-hidden rounded-lg border border-warm-gold bg-warm-gold px-8 py-3 text-base font-medium text-warm-white transition-all duration-300 hover:bg-transparent hover:text-warm-gold hover:shadow-lg"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
            <p className="mt-3 text-xs text-warm-dark/60">
              By subscribing, you agree to receive our marketing emails and accept our Privacy Policy.
            </p>
          </form>
        )}

        {/* Social proof */}
        <div className="mt-8 flex items-center justify-center gap-8 text-warm-dark/60">
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">10K+</div>
            <div className="text-xs uppercase">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">98%</div>
            <div className="text-xs uppercase">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warm-gold">4.9★</div>
            <div className="text-xs uppercase">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
