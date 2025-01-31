import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import ProductClient from "@/components/ProductClient";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Features from "@/components/features";
import { Metadata } from "next";


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

// ✅ Fetch product data from Sanity
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

// ✅ Fix: Correct Type for generateMetadata function
export async function generateMetadata({
  params,
}: { params: { id: string } }): Promise<Metadata> {
  const product = await fetchProduct(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: product.title,
    description: product.description.slice(0, 150),
  };
}

// ✅ Fix: Correct Type for ProductPage function
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    notFound(); // Redirect to 404 page if the product is not found
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-slate-200">
      <Navbar />
      <nav className="text-gray-600 mb-6 text-sm">
        <span className="text-gray-900 font-semibold text-xl">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
          <p className="text-lg text-primary font-semibold">${product.price.toFixed(2)}</p>

          {product.discountPercentage && (
            <p className="text-sm text-red-500 font-bold">
              -{product.discountPercentage}% Off
            </p>
          )}
          <p>{product.description}</p>

          {product.colors && product.colors.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Available Colors:</h3>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Sizes:</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="border border-gray-300 px-3 py-1 rounded-lg text-sm font-semibold"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <ProductClient product={product} />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <Features />
      <Footer />
    </div>
  );
};

export default ProductPage;
