
"use client"
// import { Heart, Search, ShoppingCart, Menu, User } from "lucide-react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser, CiMenuBurger  } from "react-icons/ci"
import Link from "next/link";
import { Button } from "./ui/button";
import { useCart } from "@/components/CartContext"; // Assuming you have CartContext
import { useWishlist } from "@/components/WishlistContext"; // Import WishlistContext
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const { cartCount } = useCart();  // Get the cart count from the context
  const { wishlist } = useWishlist();  // Get wishlist data from the context

  return (
    <nav className="w-full border-b border-gray-300 p-4">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpeg" alt="" className="h-8" />
          <h1 className="text-2xl font-bold text-gray-700"></h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-24 text-sm font-medium">
          <Link href="/" className="text-black hover:text-[#B88E2F] transition-colors">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:text-[#B88E2F] transition-colors">
            Shop
          </Link>
          <Link href="/blog" className="text-black hover:text-[#B88E2F] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-black hover:text-[#B88E2F] transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <CiUser className="h-5 w-5"/>
          </Button>
          <Link href="/wishlist">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <CiHeart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="outline" size="icon" className="rounded-full relative">
              <CiShoppingCart className="h-5 w-5"  />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>

          <Button variant="outline" size="icon" className="rounded-full">
            <CiSearch className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
          <CiMenuBurger className="h-5 w-5"/>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <div className=" flex flex-col gap-4 mt-4">
              <Link href="/" className="text-md font-medium text-gray-600">
                Home
              </Link>
              <Link href="/shop" className="text-md font-medium text-gray-600">
                Shop
              </Link>
              <Link href="/blog" className="text-md font-medium text-gray-600">
                Blog
              </Link>
              <Link href="/contact" className="text-md font-medium text-gray-600">
                Contact
              </Link>
              <div className="flex mt-6 gap-4">
                <Link href="/wishlist">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <CiHeart />
                    {wishlist.length > 0 && (
                      <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link href="/cart">
                  <Button variant="outline" size="icon" className="rounded-full relative">
                    <CiShoppingCart />
                    {cartCount > 0 && (
                      <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Button variant="outline" size="icon" className="rounded-full">
                  <CiSearch />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;