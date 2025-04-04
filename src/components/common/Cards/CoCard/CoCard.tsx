import { FC, PropsWithChildren } from "react";

import cl from "clsx";

import styles from "./co-card.module.css";

interface Classes {
  root?: string;
}

interface CoCardProps {
  classes?: Classes;
}

const CoCard: FC<PropsWithChildren<CoCardProps>> = ({ children, classes }) => {
  const rootClass = cl("relative flex z-1 p-[3px]", classes?.root);

  return (
    <div className={rootClass}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default CoCard;
