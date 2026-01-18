"use client"

import { useEffect, useState } from "react"

const marqueeItems = [
  // E-commerce platforms
  { text: "Amazon FBA", type: "platform", color: "bg-orange-50 text-orange-600 border-orange-200" },
  { text: "Walmart", type: "platform", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { text: "eBay", type: "platform", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  { text: "Shopify", type: "platform", color: "bg-green-50 text-green-600 border-green-200" },
  { text: "Etsy", type: "platform", color: "bg-pink-50 text-pink-600 border-pink-200" },
  
  // Shipping carriers
  { text: "FedEx", type: "carrier", color: "bg-purple-50 text-purple-600 border-purple-200" },
  { text: "UPS", type: "carrier", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { text: "USPS", type: "carrier", color: "bg-red-50 text-red-600 border-red-200" },
  { text: "DHL", type: "carrier", color: "bg-yellow-50 text-yellow-600 border-yellow-200" },
  
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
              <div className={`px-4 py-2 rounded-full text-sm font-medium border ${item.color} backdrop-blur-sm`}>
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
              <div className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${item.color} backdrop-blur-sm`}>
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
              <div className={`px-5 py-2.5 rounded-xl text-sm font-semibold border ${item.color} backdrop-blur-sm`}>
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
              <div className={`px-4 py-2 rounded-md text-xs font-medium border ${item.color} backdrop-blur-sm`}>
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
              <div className={`px-6 py-3 rounded-2xl text-sm font-bold border ${item.color} backdrop-blur-sm`}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}