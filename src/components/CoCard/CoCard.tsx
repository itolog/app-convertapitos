import { FC, PropsWithChildren } from "react";

import cl from "classnames";

import _classes from "./coCard.module.scss";

const CoCard: FC<PropsWithChildren> = ({ children }) => {
	const root = cl(_classes.CoCard);
	const inner = cl(_classes.CoCardInner);

	return (
		<div className={root}>
			<div className={inner}>{children}</div>
		</div>
	);
};

export default CoCard;
