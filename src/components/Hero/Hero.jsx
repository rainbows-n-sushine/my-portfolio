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
            text="Hi, I'm Jalal"
            className={styles.title}
          />
        </h1>
        <p className={styles.description}>
  I'm a full-stack developer with 3 years of hands-on experience working with the MERN stack. 
  I've built everything from custom systems to feature-rich applications, both from scratch and on top of existing codebases. 
  I'm always excited to collaborate, solve real problems, and bring new ideas to life—feel free to reach out!
</p>
        <a href="mailto:jayaddisu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      {/* Wrap only the image for hearts but preserve original layout */}
      <div className={styles.imageWrapper} onClick={handleImageClick}>
      <span className={styles.hoverText}>Click me</span>
        <img
          src={getImageUrl("hero/heroImage.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />

         {/* Hover text */}
    {/* <span className={styles.hoverText}>Click me</span> */}

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
