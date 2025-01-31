
'use client';

import React, { useState } from "react";
import PriceFilter from "@/components/PriceFilter";
import Pagination from "@/components/Pagination";
// import { Sidebar } from "lucide-react";
import Navbar from "@/components/navbar"
import Footer from "./footer";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
}

const ShopClient = ({ products, productsPerPage, totalPages }: { products: Product[], productsPerPage: number, totalPages: number }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle filter changes
  const handleFilterChange = (priceRange: [number, number]) => {
    const [minPrice, maxPrice] = priceRange;
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-6">
    <Navbar/>
    <br />
    <br />
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        <span className="">Premium</span> Collection
      </h1>

      <div className="mb-2 ">
        <PriceFilter onFilterChange={handleFilterChange} />
      </div>
      <Pagination products={filteredProducts} totalPages={totalPages} />
      <br />
      <br />
      <Footer/>
    </div>
    
  );
};

export default ShopClient;
