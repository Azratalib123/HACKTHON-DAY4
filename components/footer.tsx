// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Funiro.</h3>
            <p className="text-sm text-muted-foreground mb-2">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="text-sm text-muted-foreground">FL 33134 USA</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="http://localhost:3000" className="text-sm text-muted-foreground hover:text-foreground">Home</a>
              <a href="/shop" className="text-sm text-muted-foreground hover:text-foreground">Shop</a>
              <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground">About</a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Payment Options</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Returns</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policies</a>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" />
              <button >SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

