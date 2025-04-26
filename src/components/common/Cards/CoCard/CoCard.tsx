import { FC, HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import styles from "./co-card.module.css";

interface Classes {
  root?: string;
  inner?: string;
}

interface CoCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "className"> {
  classes?: Classes;
}

const CoCard: FC<PropsWithChildren<CoCardProps>> = ({ children, classes, ...props }) => {
  const rootClass = cn("relative flex z-1 p-[3px]", classes?.root);
  const innerClass = cn(styles.inner, classes?.inner);

  return (
    <div className={rootClass} {...props}>
      <div className={innerClass}>{children}</div>
    </div>
  );
};

export default CoCard;
