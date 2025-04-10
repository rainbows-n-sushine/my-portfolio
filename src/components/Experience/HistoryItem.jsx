// components/Experience/HistoryItem.js

import React from "react";
import { useInView } from "../../hooks/useInView";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

export const HistoryItem = ({ historyItem }) => {
  const [ref, inView] = useInView();

  return (
    <li
      ref={ref}
      className={`${styles.historyItem} ${inView ? styles.fadeIn : ""}`}
    >
      <img
        src={getImageUrl(historyItem.imageSrc)}
        alt={`${historyItem.organisation} Logo`}
      />
      <div className={styles.historyItemDetails}>
        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
        <ul>
          {historyItem.experiences.map((experience, index) => (
            <li key={index}>{experience}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};
