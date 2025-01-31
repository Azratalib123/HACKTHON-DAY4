

import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
import { WishlistProvider } from "@/components/WishlistContext"; // Ensure the path is correct for WishlistContext

import "./globals.css";
import { ComparisonProvider } from "@/components/ComparisonContext"; // Add ComparisonContext

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrapping the application with both CartProvider and WishlistProvider */}
        <CartProvider>
          <WishlistProvider>  {/* Wrapping with WishlistProvider */}
          <ComparisonProvider>
            <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}      
                  </ComparisonProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

