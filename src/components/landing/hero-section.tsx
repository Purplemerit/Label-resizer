import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-8 animate-slide-down">
          <span className="text-sm font-medium">New: Infinite Canvas</span>
          <span className="text-sm font-semibold text-accent">Learn more</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance max-w-4xl mx-auto leading-[1.1] animate-slide-up">
          Super fast labels
          <br />
          for every seller
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up animation-delay-200">
          The complete platform for e-commerce label management. 255+ formats for Amazon FBA, Walmart, eBay, Shopify and
          major shipping carriers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
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

        <div className="mt-16 pt-8 border-t border-border animate-fade-in animation-delay-600">
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
