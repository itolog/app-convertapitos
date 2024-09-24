"use client";

import { ComponentProps, FC } from "react";

import { Link } from "@/navigation";
import cl from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";

interface Classes {
	root?: string;
	active?: string;
}

interface NavigationLinkProps extends ComponentProps<typeof Link> {
	classes?: Classes;
}

const NavLink: FC<NavigationLinkProps> = ({ href, className, ...rest }) => {
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
	const isActive = pathname === href;

	const rootClass = cl(className, "text-sky-400 no-underline hover:underline", {
		"text-pink-400": isActive,
	});

	return (
		<Link
			data-active={isActive}
			aria-current={isActive ? "page" : undefined}
			className={rootClass}
			href={href}
			{...rest}
		/>
	);
};

export default NavLink;
