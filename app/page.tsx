
import { HeroSection } from "@/components/hero-section"
import {BrowseSection} from "@/components/browse-section"
import {ProductsSection} from "@/components/product-section"
import Hero from '@/components/hero'
import RoomShowcase from '@/components/room-showcase'
import Gallery from '@/components/Gallery'
import Footer from '@/components/footer'
import Navbar from "@/components/navbar"



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
     
      <main className="flex-1">
        <HeroSection />
      </main>
      <BrowseSection />
      <ProductsSection/>

      <Hero />
      <RoomShowcase />
      <Gallery />
      <Footer />

    </div>
  )
}

