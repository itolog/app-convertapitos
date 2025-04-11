import React, { FC } from "react";

import styles from "./navigationCard.module.css";

interface NavigationCardProps {
  title: string;
  description?: string;
}

const NavigationCard: FC<NavigationCardProps> = ({ title, description }) => {
  return (
    <section className={styles["card"]}>
      <div className={styles["content"]}>
        <h3 className={styles["card-title"]}>{title}</h3>
        {description && <p className={styles["card-des"]}>{description}</p>}
      </div>
    </section>
  );
};

export default NavigationCard;
