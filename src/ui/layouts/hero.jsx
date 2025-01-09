import React from "react";

import styles from "./hero.module.scss";
import Image from "next/image";

const hero = () => {
  return (
    // <div className={styles.container}>
    // </div>
    <div className={styles.heroContainer}>
      <div className={styles.contextContainer}>
        <h1>Better Solutions For Your Business</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <div className={styles.BTNConatiner}>
          <button> Get Started </button>
          <button>
            {" "}
            <Image
              src="/assets/icons/playicon.svg"
              width="32"
              height="32"
              color="#fff"
            />{" "}
            Watch Video{" "}
          </button>
        </div>
      </div>

      <div className={styles.imgConatiner}>
        <Image src="/assets/images/hero-img.png" width="650" height="550" />
      </div>
    </div>
  );
};

export default hero;
