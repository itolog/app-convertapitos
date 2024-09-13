import { FC, PropsWithChildren } from "react";

import classes from "./co-card.module.css";

const CoCard: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={classes.coCard}>
			<div className={classes.coCardInner}>{children}</div>
		</div>
	);
};

export default CoCard;
