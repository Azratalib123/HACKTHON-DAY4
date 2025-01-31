// import { Button } from "/components/ui/button"
// // import "./globals.css";

export function HeroSection() {
    return (
      <section className="main">
      <div className="relative h-full px-4 md:px-6">
          <div className="grid h-full items-center lg:grid-cols-2 gap-6">
            <div className="absolute right-0 top-0 h-full w-full lg:relative lg:w-auto">
            </div>
            
            <div className="boxs">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm uppercase tracking-wide text-black/80">
                    New Arrival
                  </h3>
                  <h1 className="text-4xl font-bold tracking-tight text-[#B88E2F] sm:text-5xl xl:text-6xl">
                    Discover Our
                    <br />
                    New Collection
                  </h1>
                  <p className="max-w-[600px] text-black/60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                  </p>
                </div>
                <a href="/cart"><button className="button bg-[#B88E2F] text-white hover:bg-[#A17B2C] py-6 h-auto text-base">
                  BUY NOW
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    )
  }
   
