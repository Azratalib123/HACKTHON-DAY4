
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaChevronRight } from 'react-icons/fa';
import Navbar from "@/components/navbar"
import BlogCard from "@/components/BlogCard";
import Footer from '@/components/footer'
import styles from "../styles/Home.module.css";

const query = `*[_type == "blog"] {
  title,
  slug {
    current
  },
  date,
  author,
  content,
  "imageUrl": image.asset->url
}`;

interface BlogPost {
  title: string;
  slug: { current: string };
  date: string;
  author: string;
  content: string;
  imageUrl: string;
}

export async function generateStaticParams() {
  const posts = await client.fetch(query);
  return posts.map((post: BlogPost) => ({
    slug: post.slug.current,
  }));
}
const BlogPage = async () => {
  const posts: BlogPost[] = await client.fetch(query);

  return (
    <div className="bg-[#FCF8F3]">
      <Navbar/>
      {/* <header className="back bg-cover bg-center h-60 flex items-center justify-center"> */}
      <header className="back relative h-[300px] bg-center">
      </header>
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3 space-y-8">
            {posts.map((post: BlogPost) => (
              <div key={post.slug.current} className="flex flex-col md:flex-row-reverse items-start bg-white border rounded-md shadow-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full md:w-1/3 object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-4 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <FaCalendarAlt className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <FaUser className="ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {post.content.slice(0, 100)}...
                  </p>
                  <Link href={`/para/${post.slug.current}`} className="text-[#B88E2F] font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.category}>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <BlogCard
            image="/images/41417cd682c30a19eecaf20a549cee89.jpeg"
            title="Going all-in with millennial design"
            description="lorem ipsum dolor sit amet,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
           
            author="Admin"
            date="08 Oct 2023"
            category="Wood"
          />
          <BlogCard
            image="/images/96ed5dc3b3d01cf6cd369ef7aff2f296.jpeg"
            title="Exploring new ways of decorating"
            description="Lorem an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            author="Admin"
            date="08 Oct 2023"
            category="Handmade"
          />
           <BlogCard
            image="/images/4190307dc6c7273c0bbf5086605997e4.jpeg"
            title="Exploring new ways of decorating"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            author="Admin"
            date="08 Oct 2023"
            category="Handmade"
          />
        </div>
      </main>
    </div>
          
          <div className="w-full lg:w-1/3 bg-white border rounded-md shadow-lg p-20">
            {/* Categories Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
              <ul className="space-y-2">
                {["Furniture", "Interior Design", "Tips & Tricks", "DIY Projects"].map((category, index) => (
                  <li key={index} className="flex items-center text-gray-600 hover:text-[#B88E2F] cursor-pointer">
                    <FaChevronRight className="mr-2" />
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Posts</h2>
              <ul className="space-y-4">
              
                {[
                  { title: "5 Tips for Choosing the Right Sofa", date: "Dec 5, 2024" },
                  { title: "Top Interior Design Trends for 2024", date: "Nov 28, 2024" },
                  { title: "How to Choose Durable Furniture", date: "Oct 15, 2024" },
                ].map((post, index) => (
                  <li key={index}>
                    <p className="text-gray-800 font-semibold hover:text-[#B88E2F] cursor-pointer">
                      {post.title}
                    </p>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Search</h2>
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full border p-2 rounded-md"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {["Sofa", "Trendy", "Interior", "Design", "Durable", "Quality"].map((tag, index) => (
                  <span key={index} className="bg-[#FCF8F3] text-gray-600 px-3 py-1 rounded-full border text-sm hover:bg-[#B88E2F] hover:text-white cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
     <Footer/>
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
