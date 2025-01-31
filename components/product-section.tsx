'use client'
import Image from 'next/image'
import styles from '@/app/styles/products.module.css';
import { useRouter } from 'next/navigation';



const products = [
 
  {
    id: 1,
    name: 'Syltherine',
    description: 'Stylish cafe chair',
    price: 2500000,
    oldPrice: 3500000,
    image: '/images/dinig.jpg',
    tag: 'sale',
    discount: '-30%',
  },
  {
    id: 2,
    name: 'Leviosa',
    description: 'Stylish cafe chair',
    price: 2500000,
    image: '/images/chair.jpg',
  },
  {
    id: 3,
    name: 'Lolito',
    description: 'Luxury big sofa',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/chairs.webp',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 4,
    name: 'Respira',
    description: 'Outdoor bar table and stool',
    price: 500000,
    image: '/images/imaggg.jpeg',
    tag: 'new',
  },
  {
    id: 5,
    name: 'Grifo',
    description: 'Night lamp',
    price: 1500000,
    image: '/images/dd3df051-9d4b-4a97-bd16-61576e1fea63.jpeg',
  },
  {
    id: 6,
    name: 'Muggo',
    description: 'Small mug',
    price: 150000,
    image: '/images/img.png',
    tag: 'new',
  },
  {
    id: 7,
    name: 'Pingky',
    description: 'Cute bed set',
    price: 7000000,
    oldPrice: 14000000,
    image: '/images/imge.jpeg',
    tag: 'sale',
    discount: '-50%',
  },
  {
    id: 8,
    name: 'Potty',
    description: 'Minimalist flower pot',
    price: 500000,
    image: '/images/double.jpg',
    tag: 'new',
  },
  
]

export function ProductsSection() {

    const router = useRouter()
  
    const handleImageClick = () => {
      router.push(`/Carts`)
    }

return (
  
  <section className={styles.section}>
    <h2 className={styles.title}>Our Products</h2>
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <div
            className={styles.imageWrapper}
            onClick={() => handleImageClick()}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
            {product.tag && (
              <span
                className={`${styles.tag} ${
                  product.tag === 'new' ? styles.new : styles.sale
                }`}
              >
                {product.discount || 'New'}
              </span>
            )}
          </div>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.price}>
              Rp {product.price.toLocaleString()}
              {product.oldPrice && (
                <span className={styles.oldPrice}>
                  Rp {product.oldPrice.toLocaleString()}
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
)
}







// return (
//   <section className={styles.section}>
//     <h2 className={styles.title}>Our Products</h2>
//     <div className={styles.grid}>
//       {products.map((product) => (
//         <Link key={product.id} href={`/product/${product.id}`} passHref>
//           <div className={styles.card}>
//             <div className={styles.imageWrapper}>
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 priority
//                 className="object-cover"
//               />
//               {product.tag && (
//                 <span
//                   className={`${styles.tag} ${
//                     product.tag === 'new' ? styles.new : styles.sale
//                   }`}
//                 >
//                   {product.discount || 'New'}
//                 </span>
//               )}
//             </div>
//             <div className={styles.productInfo}>
//               <h3 className={styles.productName}>{product.name}</h3>
//               <p className={styles.productDescription}>{product.description}</p>
//               <p className={styles.price}>
//                 Rp {product.price.toLocaleString()}
//                 {product.oldPrice && (
//                   <span className={styles.oldPrice}>
//                     Rp {product.oldPrice.toLocaleString()}
//                   </span>
//                 )}
//               </p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </section>
// );
// }