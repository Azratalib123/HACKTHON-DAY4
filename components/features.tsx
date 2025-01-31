import { Trophy, Clock, Truck, Headphones } from 'lucide-react'
import styles from '@/app/styles/features.module.css'

const features = [
  {
    icon: Trophy,
    title: 'High Quality',
    description: 'Crafted from top materials'
  },
  {
    icon: Clock,
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Order over 150 $'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated support'
  }
]

export default function Features() {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <feature.icon size={24} />
              </div>
              <div className={styles.content}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



