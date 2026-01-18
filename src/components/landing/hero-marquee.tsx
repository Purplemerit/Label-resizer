"use client"

import { useEffect, useState } from "react"

// Brand icons as image components
const AmazonIcon = () => (
  <img src="/amazon-logo.png" alt="Amazon FBA" className="w-5 h-5 object-contain" />
)

const WalmartIcon = () => (
  <img src="/walmart-logo.png" alt="Walmart" className="w-5 h-5 object-contain" />
)

const EbayIcon = () => (
  <img src="/ebay-logo-display.png" alt="eBay" className="w-5 h-5 object-contain" />
)

const ShopifyIcon = () => (
  <img src="/shopify-logo.png" alt="Shopify" className="w-5 h-5 object-contain" />
)

const EtsyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.16 12.01c0-1.28 1.04-2.32 2.32-2.32s2.32 1.04 2.32 2.32-1.04 2.32-2.32 2.32-2.32-1.04-2.32-2.32zm11.48 0c0 6.04-4.92 10.96-10.96 10.96S-1.28 18.05-1.28 12.01 3.64 1.05 9.68 1.05s10.96 4.92 10.96 10.96z"/>
  </svg>
)

const FedExIcon = () => (
  <img src="/fedex-label.jpg" alt="FedEx" className="w-5 h-5 object-contain" />
)

const UPSIcon = () => (
  <img src="/ups-label.jpg" alt="UPS" className="w-5 h-5 object-contain" />
)

const USPSIcon = () => (
  <img src="/usps-label.jpg" alt="USPS" className="w-5 h-5 object-contain" />
)

const DHLIcon = () => (
  <img src="/dhl-label.jpg" alt="DHL" className="w-5 h-5 object-contain" />
)

const marqueeItems = [
  // E-commerce platforms with icons
  { text: "Amazon FBA", type: "platform", color: "bg-orange-50 text-orange-600 border-orange-200", icon: AmazonIcon },
  { text: "Walmart Plus", type: "platform", color: "bg-blue-50 text-blue-600 border-blue-200", icon: WalmartIcon },
  { text: "eBay", type: "platform", color: "bg-yellow-50 text-yellow-700 border-yellow-200", icon: EbayIcon },
  { text: "Shopify", type: "platform", color: "bg-green-50 text-green-600 border-green-200", icon: ShopifyIcon },
  { text: "Etsy", type: "platform", color: "bg-pink-50 text-pink-600 border-pink-200", icon: EtsyIcon },
  
  // Shipping carriers with icons
  { text: "FedEx", type: "carrier", color: "bg-purple-50 text-purple-600 border-purple-200", icon: FedExIcon },
  { text: "UPS", type: "carrier", color: "bg-amber-50 text-amber-700 border-amber-200", icon: UPSIcon },
  { text: "USPS", type: "carrier", color: "bg-red-50 text-red-600 border-red-200", icon: USPSIcon },
  { text: "DHL", type: "carrier", color: "bg-yellow-50 text-yellow-600 border-yellow-200", icon: DHLIcon },
  
  // Label types
  { text: "Shipping Labels", type: "label", color: "bg-slate-50 text-slate-600 border-slate-200" },
  { text: "Product Labels", type: "label", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
  { text: "Barcode Labels", type: "label", color: "bg-teal-50 text-teal-600 border-teal-200" },
  { text: "Return Labels", type: "label", color: "bg-rose-50 text-rose-600 border-rose-200" },
  { text: "Address Labels", type: "label", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
  { text: "Custom Labels", type: "label", color: "bg-violet-50 text-violet-600 border-violet-200" },
  
  // Features
  { text: "Batch Processing", type: "feature", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { text: "255+ Formats", type: "feature", color: "bg-orange-50 text-orange-600 border-orange-200" },
  { text: "Drag & Drop", type: "feature", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { text: "Print Ready", type: "feature", color: "bg-green-50 text-green-600 border-green-200" },
  { text: "API Access", type: "feature", color: "bg-purple-50 text-purple-600 border-purple-200" },
  { text: "Team Collaboration", type: "feature", color: "bg-pink-50 text-pink-600 border-pink-200" },
]

export function HeroMarquee() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null

  // Create different sets for each row
  const row1Items = marqueeItems.filter(item => item.type === 'platform' || item.type === 'carrier')
  const row2Items = marqueeItems.filter(item => item.type === 'label')
  const row3Items = marqueeItems.filter(item => item.type === 'feature')
  const row4Items = [...marqueeItems].sort(() => Math.random() - 0.5).slice(0, 8)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      {/* Row 1 - Platforms & Carriers - moving right */}
      <div className="absolute top-16 left-0 w-full opacity-15">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...row1Items, ...row1Items, ...row1Items].map((item, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 mx-6">
              <div className={`px-4 py-2 rounded-full text-sm font-medium border ${item.color} backdrop-blur-sm flex items-center gap-2`}>
                {item.icon && <item.icon />}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Label types - moving left */}
      <div className="absolute top-32 left-0 w-full opacity-12">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...row2Items, ...row2Items, ...row2Items].map((item, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 mx-8">
              <div className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${item.color} backdrop-blur-sm flex items-center gap-2`}>
                {item.icon && <item.icon />}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 3 - Features - moving right slow */}
      <div className="absolute top-48 left-0 w-full opacity-10">
        <div className="flex animate-marquee-right-slow whitespace-nowrap">
          {[...row3Items, ...row3Items, ...row3Items].map((item, index) => (
            <div key={`row3-${index}`} className="flex-shrink-0 mx-10">
              <div className={`px-5 py-2.5 rounded-xl text-sm font-semibold border ${item.color} backdrop-blur-sm flex items-center gap-2`}>
                {item.icon && <item.icon />}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 4 - Mixed items - moving left slow */}
      <div className="absolute top-64 left-0 w-full opacity-8">
        <div className="flex animate-marquee-left-slow whitespace-nowrap">
          {[...row4Items, ...row4Items, ...row4Items].map((item, index) => (
            <div key={`row4-${index}`} className="flex-shrink-0 mx-7">
              <div className={`px-4 py-2 rounded-md text-xs font-medium border ${item.color} backdrop-blur-sm flex items-center gap-2`}>
                {item.icon && <item.icon />}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 5 - Additional background elements */}
      <div className="absolute top-80 left-0 w-full opacity-6">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...marqueeItems.slice(0, 10), ...marqueeItems.slice(0, 10), ...marqueeItems.slice(0, 10)].map((item, index) => (
            <div key={`row5-${index}`} className="flex-shrink-0 mx-12">
              <div className={`px-6 py-3 rounded-2xl text-sm font-bold border ${item.color} backdrop-blur-sm flex items-center gap-2`}>
                {item.icon && <item.icon />}
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}