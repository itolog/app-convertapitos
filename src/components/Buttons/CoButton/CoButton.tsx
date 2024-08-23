import { FC } from "react";

import cl from "classnames";

import Button from "@mui/material/Button";

import { CoButtonProps } from "@/components/Buttons/CoButton/types";
import SvgIcons from "@/components/UI/SvgIcon/SvgIcons";

import _classes from "./coButton.module.scss";

const CoButton: FC<CoButtonProps> = ({ icon, text, classes, iconSize = "24px", label }) => {
	const rootClass = cl(_classes.CoButton, classes?.root, {
		[_classes.CoButtonWithLabel]: label,
	});

	const textClass = cl(_classes.CoButtonText, classes?.text);

	return (
		<Button
			classes={{
				root: rootClass,
			}}
			data-label={label}
			variant="outlined">
			{icon && <SvgIcons color={"var(--primary-color)"} size={iconSize} name={icon} />}
			{text && <span className={textClass}>{text}</span>}
		</Button>
	);
};

export default CoButton;
