import React from "react";
import AnimatedText from "../Animation/AnimatedText";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { UseFlyingHearts } from "../../hooks/UseFlyingHearts";

export const Hero = () => {
  const { hearts, triggerHeart } = UseFlyingHearts();

  const handleImageClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    triggerHeart(x, y);
  };

  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1>
          <AnimatedText
            text="Hello, I'm Jalal Addisu"
            className={styles.title}
          />
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using
          <br />
          React and NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:jayaddisu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      {/* Wrap only the image for hearts but preserve original layout */}
      <div className={styles.imageWrapper} onClick={handleImageClick}>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className={styles.heart}
            style={{ left: heart.x, top: heart.y }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
