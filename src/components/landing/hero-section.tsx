<<<<<<< HEAD
"use client"

=======
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
<<<<<<< HEAD
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Image Marquee */}
      <div className="absolute top-10 left-0 w-full h-32 opacity-50 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{animation: 'marqueeMove 40s linear infinite'}}>
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon</div>
          <div className="bg-green-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Shopify</div>
          <div className="bg-yellow-500 text-black px-6 py-3 mx-8 rounded-lg font-bold text-lg">eBay</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart</div>
          <div className="bg-orange-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Etsy</div>
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon FBA</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart Plus</div>
          <div className="bg-green-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Shopify Plus</div>
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon Prime</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart Marketplace</div>
          <div className="bg-yellow-500 text-black px-6 py-3 mx-8 rounded-lg font-bold text-lg">eBay Motors</div>
          <div className="bg-orange-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Etsy Plus</div>
          {/* Duplicate for infinite scroll */}
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon</div>
          <div className="bg-green-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Shopify</div>
          <div className="bg-yellow-500 text-black px-6 py-3 mx-8 rounded-lg font-bold text-lg">eBay</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart</div>
          <div className="bg-orange-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Etsy</div>
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon FBA</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart Plus</div>
          <div className="bg-green-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Shopify Plus</div>
          <div className="bg-orange-500 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Amazon Prime</div>
          <div className="bg-blue-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Walmart Marketplace</div>
          <div className="bg-yellow-500 text-black px-6 py-3 mx-8 rounded-lg font-bold text-lg">eBay Motors</div>
          <div className="bg-orange-600 text-white px-6 py-3 mx-8 rounded-lg font-bold text-lg">Etsy Plus</div>
        </div>
      </div>
      
      <style>{`
        @keyframes marqueeMove {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8">
=======
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8 animate-slide-down">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          <span className="text-sm font-medium">New: Infinite Canvas</span>
          <span className="text-sm font-semibold text-accent">Learn more</span>
        </div>

<<<<<<< HEAD
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-[1.1]">
=======
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-[1.1] animate-slide-up">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          Super fast labels
          <br />
          for every seller
        </h1>

<<<<<<< HEAD
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
=======
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up animation-delay-200">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          The complete platform for e-commerce label management. 255+ formats for Amazon FBA, Walmart, eBay, Shopify and
          major shipping carriers.
        </p>

<<<<<<< HEAD
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
=======
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base" asChild>
            <a href="/signup">Try LabelPro for free</a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-base group bg-transparent" asChild>
            <a href="/pricing">
              View pricing
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

<<<<<<< HEAD
        <div className="mt-16 pt-8 border-t border-border">
=======
        <div className="mt-16 pt-8 border-t border-border animate-fade-in animation-delay-600">
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
          <p className="text-sm text-muted-foreground mb-6">
            <span className="font-semibold text-foreground">Over 10,000+ e-commerce sellers</span> use LabelPro to
            create stunning labels.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <span className="text-xl font-bold text-foreground">amazon</span>
            <span className="text-xl font-bold text-foreground">Walmart</span>
            <span className="text-xl font-bold text-foreground">eBay</span>
            <span className="text-xl font-bold text-foreground">Shopify</span>
            <span className="text-xl font-bold text-foreground">Etsy</span>
          </div>
        </div>
      </div>
    </section>
  )
}
