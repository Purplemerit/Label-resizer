"use client"

import { useEffect, useState } from "react"

// Brand icons as image components
const AmazonIcon = () => (
  <img src="/amazon-logo.png" alt="Amazon FBA" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const WalmartIcon = () => (
  <img src="/walmart-logo.png" alt="Walmart" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const EbayIcon = () => (
  <img src="/ebay-logo-display.png" alt="eBay" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const ShopifyIcon = () => (
  <img src="/shopify-logo.png" alt="Shopify" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const EtsyIcon = () => (
  <div className="w-5 h-5 bg-orange-500 text-white rounded-full text-xs font-bold flex items-center justify-center">
    E
  </div>
)

const ShipStationIcon = () => (
  <img src="/shipstation-logo.png" alt="ShipStation" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const ZapierIcon = () => (
  <img src="/zapier-logo.png" alt="Zapier" className="w-5 h-5 object-contain" onError={(e) => {
    e.currentTarget.style.display = 'none'
  }} />
)

const FedExIcon = () => (
  <div className="w-5 h-5 bg-purple-600 text-white rounded text-[10px] font-bold flex items-center justify-center">
    FX
  </div>
)

const UPSIcon = () => (
  <div className="w-5 h-5 bg-amber-700 text-white rounded text-[9px] font-bold flex items-center justify-center">
    UPS
  </div>
)

const USPSIcon = () => (
  <div className="w-5 h-5 bg-blue-600 text-white rounded text-[9px] font-bold flex items-center justify-center">
    USPS
  </div>
)

const DHLIcon = () => (
  <div className="w-5 h-5 bg-red-600 text-white rounded text-[9px] font-bold flex items-center justify-center">
    DHL
  </div>
)

const marqueeItems = [
  // E-commerce platforms with icons
  { text: "Amazon FBA", type: "platform", color: "bg-orange-50 text-orange-600 border-orange-200", icon: AmazonIcon },
  { text: "Walmart Plus", type: "platform", color: "bg-blue-50 text-blue-600 border-blue-200", icon: WalmartIcon },
  { text: "eBay", type: "platform", color: "bg-yellow-50 text-yellow-700 border-yellow-200", icon: EbayIcon },
  { text: "Shopify", type: "platform", color: "bg-green-50 text-green-600 border-green-200", icon: ShopifyIcon },
  { text: "Etsy", type: "platform", color: "bg-orange-50 text-orange-600 border-orange-200", icon: EtsyIcon },
  { text: "ShipStation", type: "platform", color: "bg-blue-50 text-blue-600 border-blue-200", icon: ShipStationIcon },
  { text: "Zapier", type: "platform", color: "bg-orange-50 text-orange-600 border-orange-200", icon: ZapierIcon },
  
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
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap hover-pause">
        <div className="flex items-center space-x-24 px-12 mr-24">
          <img src="/amazon-logo.png" alt="Amazon" className="h-12 w-auto opacity-60" />
          <img src="/walmart-logo.png" alt="Walmart" className="h-12 w-auto opacity-60" />
          <img src="/ebay-logo-display.png" alt="eBay" className="h-12 w-auto opacity-60" />
          <img src="/shopify-logo.png" alt="Shopify" className="h-12 w-auto opacity-60" />
          <img src="/shipstation-logo.png" alt="ShipStation" className="h-12 w-auto opacity-60" />
          <img src="/zapier-logo.png" alt="Zapier" className="h-12 w-auto opacity-60" />
        </div>
        <div className="flex items-center space-x-24 px-12 mr-24">
          <img src="/amazon-logo.png" alt="Amazon" className="h-12 w-auto opacity-60" />
          <img src="/walmart-logo.png" alt="Walmart" className="h-12 w-auto opacity-60" />
          <img src="/ebay-logo-display.png" alt="eBay" className="h-12 w-auto opacity-60" />
          <img src="/shopify-logo.png" alt="Shopify" className="h-12 w-auto opacity-60" />
          <img src="/shipstation-logo.png" alt="ShipStation" className="h-12 w-auto opacity-60" />
          <img src="/zapier-logo.png" alt="Zapier" className="h-12 w-auto opacity-60" />
        </div>
        <div className="flex items-center space-x-24 px-12 mr-24">
          <img src="/amazon-logo.png" alt="Amazon" className="h-12 w-auto opacity-60" />
          <img src="/walmart-logo.png" alt="Walmart" className="h-12 w-auto opacity-60" />
          <img src="/ebay-logo-display.png" alt="eBay" className="h-12 w-auto opacity-60" />
          <img src="/shopify-logo.png" alt="Shopify" className="h-12 w-auto opacity-60" />
          <img src="/shipstation-logo.png" alt="ShipStation" className="h-12 w-auto opacity-60" />
          <img src="/zapier-logo.png" alt="Zapier" className="h-12 w-auto opacity-60" />
        </div>
        <div className="flex items-center space-x-24 px-12">
          <img src="/amazon-logo.png" alt="Amazon" className="h-12 w-auto opacity-60" />
          <img src="/walmart-logo.png" alt="Walmart" className="h-12 w-auto opacity-60" />
          <img src="/ebay-logo-display.png" alt="eBay" className="h-12 w-auto opacity-60" />
          <img src="/shopify-logo.png" alt="Shopify" className="h-12 w-auto opacity-60" />
          <img src="/shipstation-logo.png" alt="ShipStation" className="h-12 w-auto opacity-60" />
          <img src="/zapier-logo.png" alt="Zapier" className="h-12 w-auto opacity-60" />
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}