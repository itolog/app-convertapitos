"use client";

import { FC } from "react";

import cl from "clsx";
import { useTranslations } from "next-intl";

import { CoButtonProps } from "@/components/Buttons/CoButton/types";
import { Button } from "@/components/ui/button";
import SvgIcons from "@/components/ui/SvgIcon/SvgIcons";

const CoButton: FC<CoButtonProps> = ({
	icon,
	text,
	iconSize = "24px",
	className,
	textProps = {
		target: undefined,
	},
	...props
}) => {
	const { target, ...textOption } = textProps;
	const t = useTranslations(target);

	const rootClass = cl("flex gap-2 w-full", {
		className: className,
	});

	return (
		<Button className={rootClass} {...props}>
			{icon && <SvgIcons color={"var(--primary)"} size={iconSize} name={icon} />}
			{text && <span>{t(text, textOption)}</span>}
		</Button>
	);
};

export default CoButton;
