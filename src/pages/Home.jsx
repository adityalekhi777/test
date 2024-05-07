import React from "react";
import Navbar from "../components/Navbar";
import img from "../assests/home_image.svg";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.heading}>
        <div>Success stories</div>
        <div>
          Every success journey
          <br /> we've encountered
        </div>
      </div>
      <div className={styles.sectionOne}>
        <img className={styles.hero_image} src={img} alt="hero_image" />
      </div>
      <div className={styles.sectionTwo}>
        <div>
            <p>what's on your mind</p>
            <p>Ask Questions</p>
        </div>
      </div>
    </>
  );
}
