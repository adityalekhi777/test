import React from "react";
import Navbar from "../components/Navbar";
import img from "../assests/hero_img.png";
import rocket from "../assests/rocket.svg";
import Carousel from "../components/Carousel";
import AccordionSection from "../components/AccordionSection";
import PrimaryCTA from "../components/PrimaryCTA";
import Footer from "../components/Footer";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.header}>
        <div className={styles.success}>Success stories</div>
        <h1 className={styles.description}>
          Every success journey
          <br /> we've encountered
        </h1>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles["hero-container"]}>
          <img className={styles["hero-image"]} src={img} alt="hero_image" />
          <div className={styles.boxOne}>
            <h3>40%</h3>
            <p>
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>
          <div className={styles.boxTwo}>
            <div><img src={rocket} width="32px" height="32px" alt="rocket"/></div>
            <div>
            <h3>10 DAYS</h3>
            <p>Staff Deployment</p>
            </div>
          </div>
          <div className={styles.boxThree}>
            <h3>
              $0.5 <span>MILLION</span>
            </h3>
            <p>
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </div>
        </div>
        <div>
          <Carousel />
          <PrimaryCTA text="Explore More" width={"245px"} height="88px" />
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div>
          <p>what's on your mind</p>
          <p>Ask Questions</p>
        </div>
        <div>
          <AccordionSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
