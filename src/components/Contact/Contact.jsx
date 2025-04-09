import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const textRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleAnimation = (entry, className) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isLeft = entry.target.dataset.animation === "left";
        const className = isLeft ? styles.slideInLeft : styles.slideInRight;
        handleAnimation(entry, className);
      });
    }, { threshold: 0.3 });
  
    if (textRef.current) {
      textRef.current.dataset.animation = "left";
      observer.observe(textRef.current);
    }
  
    linkRefs.current.forEach((ref) => {
      if (ref) {
        ref.dataset.animation = "right";
        observer.observe(ref);
      }
    });
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <footer id="contact" className={styles.container}>
      <div ref={textRef} className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {[
          {
            icon: "contact/emailIcon.png",
            alt: "Email icon",
            text: "jayaddisu@gmail.com",
            href: "mailto:jayaddisu@gmail.com",
          },
          {
            icon: "contact/linkedinIcon.png",
            alt: "LinkedIn icon",
            text: "linkedin.com/jalal-geleta",
            href: "https://www.linkedin.com/jalal-geleta",
          },
          {
            icon: "contact/githubIcon.png",
            alt: "Github icon",
            text: "github.com/jaddis53",
            href: "https://www.github.com/jaddis53",
          },
        ].map((item, index) => (
          <li
            key={index}
            ref={(el) => (linkRefs.current[index] = el)}
            className={styles.link}
          >
            <img src={getImageUrl(item.icon)} alt={item.alt} />
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
