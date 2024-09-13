import { FC, PropsWithChildren } from "react";

import styles from "./co-card.module.css";

const CoCard: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.card}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
};

export default CoCard;
