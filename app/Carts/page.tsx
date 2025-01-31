'use client'

import { useState } from 'react'
// import Image from 'next/image'
import { useToast } from '@/components/ui/use-toast'
import Link from "next/link"
import Features from '@/components/features'
import Footer from '@/components/footer'

// import { Button } from "../components/ui/button"


export default function CustomizePage() {
// const { dispatch } = useCart()
  const { toast } = useToast()
  const [customization, setCustomization] = useState({
    text: '',
    font: 'Arial',
    color: '#000000',
    size: 24,
    position: 'center',
  })
  return (

    <div className="container mx-auto px-4 py-8">
    
      <div className="grid md:grid-cols-2 gap-8">
        {/* Preview Area */}
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <p className='text-lr text-muted-foreground mb-5'>Our furniture collection is a blend of contemporary design, craftsmanship, and functionality, offering pieces that will transform any space into a stylish and comfortable environment. Designed with attention to detail and an emphasis on durability, each item in our collection is crafted from high-quality materials, ensuring that it not only looks elegant but also withstands the test of time.

We understand that furniture is more than just an aesthetic choice—it plays a pivotal role in creating an atmosphere and functionality that suits your lifestyle. Whether you are furnishing your home, office, or commercial space, our versatile range includes everything from sofas and armchairs to tables, storage units, and accessories, each designed to complement a variety of interior styles.

For living rooms, we offer a selection of sleek, modern sofas, ranging from minimalist designs to plush sectional sofas that provide ample seating and comfort for family gatherings. Each sofa is built with ergonomic cushions and high-quality fabrics that are soft to the touch yet resilient enough to last for years. The sleek, minimalist lines and neutral colors of our furniture make them easy to integrate into any decor, allowing you to create a relaxed and stylish lounge area.

Dining areas are elevated with our range of dining tables, chairs, and storage units. Whether you’re hosting a dinner party or enjoying a casual meal with family, our dining tables come in a variety of materials, such as wood, glass, and metal, offering a balance between elegance and practicality. Paired with comfortable dining chairs, some of which feature cushioned seating, others have sleek wooden or metal frames, these sets are designed for both comfort and style. Additionally, our storage units provide functional and chic solutions for organizing kitchenware, utensils, and linens, helping to keep your dining space tidy while enhancing its visual appeal.For the bedroom, we offer a range of beds, dressers, and nightstands that are both stylish and functional. Our beds feature sturdy frames and supportive bases to ensure a good night’s sleep. The bed frames come in a variety of finishes, including wood, upholstered fabric, and metal, providing multiple options to match your preferred aesthetic. Paired with spacious dressers and nightstands, you can easily keep your bedroom organized while enjoying easy access to essentials like books, lamps, and personal items. The modern designs of our bedroom furniture bring a touch of elegance, transforming your bedroom into a calming retreat.</p>
         
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              color: customization.color,
              fontSize: `${customization.size}px`,
              fontFamily: customization.font,
            }}
          >
            {customization.text}
          </div>
        </div>

        {/* Customization Controls */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Customize Your Product</h2>
            <p className="text-gray-600 mb-6">
              Add your personal touch to create a unique design.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Text
              </label>
              <input
                type="text"
                value={customization.text}
                onChange={(e) =>
                  setCustomization({ ...customization, text: e.target.value })
                }
                placeholder="Enter your text"
                className="w-full border p-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Font
              </label>
              <select
                value={customization.font}
                onChange={(e) =>
                  setCustomization({ ...customization, font: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Helvetica">Helvetica</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Color
              </label>
              <input
                type="color"
                value={customization.color}
                onChange={(e) =>
                  setCustomization({ ...customization, color: e.target.value })
                }
                className="h-10 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Size
              </label>
        <input
                type="range"
                min="12"
                max="60"
                value={customization.size}
                onChange={(e) =>
                  setCustomization({...customization, size: parseInt(e.target.value) })
                }
                className="w-full border p-2 rounded"
              />
              <div className="mt-1 text-sm text-gray-500">
                {customization.size}px
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Position
              </label>
              <select
                value={customization.position}
                onChange={(e) =>
                  setCustomization({ ...customization, position: e.target.value })
                }
                className="w-full border p-2 rounded"
              >
                <option value="top">Top</option>
                <option value="center">Center</option>
                <option value="bottom">Bottom</option>
              </select>
            </div>
            <br />
            <Link href="/shop" className="text-black hover:text-[#B88E2F] transition-colors">
            Add Products
          </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
         <main>

            <Features />
            <Footer />
          </main>
    </div>
  )
}
