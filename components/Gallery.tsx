
import Image from 'next/image'
import styles from "@/app/styles/Home.module.css"


const images = [
  '/images/pic.png',
  '/images/pi.png',
  '/images/pii.png',
  '/images/im.png',
  '/images/imgee.png',
  '/images/2f4aae4edaceced4645de9ad49216504.png',
  '/images/imaged.png',
]

export default function gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index}>
          <Image
            src={src}
            alt={`Furniture image ${index + 1}`}
            width={300}
            height={300}
            className={styles.galleryImage}
          />
        </div>
      ))}
    </div>
  )
}