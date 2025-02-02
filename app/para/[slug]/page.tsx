import { ReactElement } from 'react';
import { client } from '@/sanity/lib/client';  // Ensure you have the correct import path for your Sanity client
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

// Define the PageProps interface with params wrapped in a Promise
export interface PageProps {
  params: Promise<{ slug: string }>; // Ensure params is wrapped in a Promise
}

// Define the blog post structure
interface BlogPost {
  title: string;
  slug: { current: string };
  date: string;
  author: string;
  content: string;
  imageUrl: string;
}

// Generate static parameters for dynamic routing (this function pre-renders pages at build time)
export async function generateStaticParams(): Promise<PageProps['params'][]> {
  const posts = await client.fetch('*[_type == "blog"]{slug}');
  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}

// Query to fetch the specific blog post data based on the slug
const query = `*[_type == "blog" && slug.current == $slug][0] {
  title,
  slug,
  date,
  author,
  content,
  "imageUrl": image.asset->url
}`;

// Main page component for the blog post
export default async function BlogPostPage({ params }: PageProps): Promise<ReactElement> {
  const { slug } = await params;  // Await the params as it's wrapped in a Promise

  // Fetch the post data based on the slug
  const post: BlogPost | null = await client.fetch(query, { slug });

  // If the post is not found, redirect to a 404 page
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FCF8F3] min-h-screen">
      {/* Header section with background image and post title */}
      <header className="bg-cover bg-center h-60 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            {/* Blog content with image and text */}
            <div className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full md:w-1/3 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4 md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <FaUser className="ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <p className="text-gray-600 mb-4">{post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
