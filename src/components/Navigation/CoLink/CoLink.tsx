import { Link } from "@tanstack/react-router";
import type { FC } from "react";

import { NavigationItem } from "@/hooks/navigations/types.ts";
import cl from "classnames";

import _classes from "./coLink.module.scss";

interface Classes {
	root?: string;
	active?: string;
}

interface CoLinkProps extends Omit<NavigationItem, "className"> {
	classes?: Classes;
}

const CoLink: FC<CoLinkProps> = ({ label, classes, ...props }) => {
	return (
		<Link
			className={cl(classes?.root, _classes.baseNavigationLink)}
			activeProps={{
				className: cl(classes?.active, _classes.baseNavigationLinkActive),
			}}
			{...props}>
			{label}
		</Link>
	);
};

export default CoLink;
