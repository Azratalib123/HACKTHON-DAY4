import React from "react";
import styles from "@/app/styles/Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.section}>
        <div className="sidebar">
        <h3>Categories</h3>
        <ul>
          <li>Design</li>
          <li>Handmade</li>
          <li>Wood</li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Recent Posts</h3>
        <ul>
          <li>Going all-in with millennial design</li>
          <li>Exploring new ways of decorating</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
