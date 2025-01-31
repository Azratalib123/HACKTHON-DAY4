"use client"
import Image from 'next/image';
import styles from '@/app/styles/browse.module.css';


const categories = [
  {
    name: 'Dining',
    image: '/images/dinning.jpg',
  },
  {
    name: 'Living',
    image: '/images/living.jpg',
  },
  {
    name: 'Bedroom',
    image: '/images/bedroom.jpg',
  },
]
 
export function BrowseSection() {
  return (

    <section className={styles.section}>
      <h2 className={styles.title}>Browse The Range</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.name} className={styles.card}>
            <div className={styles.imageWrapper}>
            <Image
                src={category.image} // Use the dynamic image source from the category object
                alt={category.name} // Set the alt text to the category name
                fill
                className="object-cover"
              />
            </div>
            <h3 className={styles.categoryName}>{category.name}</h3>
          </div>
        ))}
      
        
      </div>
    </section>
  )
}