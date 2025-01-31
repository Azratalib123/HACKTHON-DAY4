'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Button } from "@/components/ui/button"

const rooms = [
  {
    id: 1,
    title: "Inner Peace",
    type: "Bed Room",
    image: "/images/immage.png",
  },
  {
    id: 2,
    title: "Minimal Style",
    type: "Living Room",
    image: "/images/imgee.png",
  },
  {
    id: 3,
    title: "Work Space",
    type: "Office",
    image: "/images/image.png",
  },
]

export default function RoomShowcase() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length)
  }

  return (
  
    <section className="container px-4 py-16">
      <div className="relative">
        <div className=" rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {rooms.map((room) => (
               
              <div key={room.id} className="w-full flex-shrink-0">
                <div className="relativeimage">
                  <Image
                    src={room.image}
                    alt={room.title}
                    width={900}
                    height={300}
                    className="image"
                  />
                  <div className="absolute bottom-6 left-6 bg-white p-4">
                    <span className="text-sm text-muted-foreground">
                      {String(room.id).padStart(2, '0')} — {room.type}
                    </span>
                    <h3 className="text-xl font-semibold">{room.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
        
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
         
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <div className="mt-4 flex justify-center gap-2">
          {rooms.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-[#B88E2F]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

