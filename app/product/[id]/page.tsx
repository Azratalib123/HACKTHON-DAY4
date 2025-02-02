import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductClient from "@/components/ProductClient"; // Import client-side wrapper

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
  colors?: string[];
  sizes?: string[];
}

// Fetch product from Sanity by its id
const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    description,
    price,
    discountPercentage,
    isNew,
    tags,
    "imageUrl": productImage.asset->url,
    colors,
    sizes
  }`;
  const product = await client.fetch(query, { id });
  return product || null;
};

// ProductPage component
const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Await params here to resolve the Promise
  const { id } = await params;

  // Fetch the product based on the slug
  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-slate-200 font-sans">
      <nav className="text-black mb-6 text-sm">
        <Link href="/" className="hover:underline text-xl text-black">Home</Link> &gt;
        <Link href="/shop" className="hover:underline text-xl text-black">Shop</Link> &gt;
        <span className="text-black font-semibold text-xl">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img src={product.imageUrl} alt={product.title} className="rounded-lg shadow-lg w-full max-w-md object-cover" />
        </div>

        <div className="space-y-6 text-black">
          <h1 className="text-4xl font-extrabold">{product.title}</h1>
          <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          {product.discountPercentage && (
            <p className="text-sm text-red-500 font-bold">-{product.discountPercentage}% Off</p>
          )}
          <p className="text-black font-bold italic">{product.description}</p>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Available Colors:</h3>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Sizes:</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="border border-gray-300 px-3 py-1 rounded-lg text-sm font-semibold">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <ProductClient product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// ====================

export interface PageProps {
  params?: Promise<{ id: string }>
  searchParams?: Promise<any>
}

export interface LayoutProps {
  children?: React.ReactNode
  params?: Promise<{ id: string }>
}
