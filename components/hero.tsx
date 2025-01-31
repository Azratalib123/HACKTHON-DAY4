
export default function Hero() {
  return (
    <section className=" container px-4 py-16 md:py-24">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
       
        <a href="/cart"> <button className="heading mt-6 bg-[#B88E2F] hover:bg-[#A17922] text-white">
          Explore More
        </button>
        </a>
      </div>
    </section>
  )
}

