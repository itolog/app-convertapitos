"use client";

import { ComponentProps, FC } from "react";

import { Link } from "@/navigation";
import cl from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";

import _classes from "./coLink.module.scss";

interface Classes {
	root?: string;
	active?: string;
}

interface NavigationLinkProps extends ComponentProps<typeof Link> {
	classes?: Classes;
}

const NavLink: FC<NavigationLinkProps> = ({ href, classes, ...rest }) => {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
	const isActive = pathname === href;

	return (
		<Link
			data-active={isActive}
			aria-current={isActive ? "page" : undefined}
			className={cl(classes?.root, _classes.baseNavigationLink, {
				[classes?.active as string]: isActive && classes?.active,
				[_classes.baseNavigationLinkActive]: isActive,
			})}
			href={href}
			{...rest}
		/>
	);
};

export default NavLink;
