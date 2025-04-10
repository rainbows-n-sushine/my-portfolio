import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="Me in a suit"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webapp.png")} alt="Web app icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              I'm a web developer that loves to work on both the frontend and the backend of a web app. I love building dynamic, scalable web applications and bringing ideas to life through code.
                </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mobileApp.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Mobile Developer</h3>
              <p>
                I collaborated with school friends on a passion project—a mobile
                app built from the ground up. That experience taught me how to
                think mobile-first and optimize performance across devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive and optimized web
                interfaces using modern frameworks. I’ve built intuitive UIs and
                love bringing ideas to life in the browser.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/databaseIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
              <p>
                I’ve worked on various backend systems using the MERN stack.
                From scratch-built custom systems to enhancing existing codebases,
                I’ve been strong at integrating new features and making backends efficient.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiDesignerIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
    <p>
      I’ve designed clean and user-focused interfaces for both mobile apps and complex systems. 
      Whether it's a landing page, dashboard, or full mobile flow, I aim for clarity, usability, and modern aesthetics.
    </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
