
"use client";

import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";
const ProductClient = ({ product }: { product: any }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <AddToCartButton product={product} />
      <Link href="/compare" className="flex-1 border-2 border-gray-400 text-white-200 px-5 py-2 text-center text-md rounded-lg font-semibold hover:bg-neutral-800 hover:text-white transition ">
        Compare
      </Link>
    </div>
  );
};

export default ProductClient;
