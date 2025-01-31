import React from "react";
import styles from "@/app/styles/BlogCard.module.css";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, author, date, category }) => {
  return (
    <div className={styles.blogCard}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <p className={styles.meta}>
          <span>{author}</span> | <span>{date}</span> | <span>{category}</span>
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href="https://www.lipsum.com" className={styles.readMore}>Read more</a>
      </div>
    </div>
  );
};

export default BlogCard;
