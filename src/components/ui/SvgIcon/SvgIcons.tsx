import { FC } from "react";

import cl from "clsx";

import { icons } from "./icons";
import styles from "./svgIcon.module.css";
import { Icons, supportedIcons } from "./types";

interface Classes {
	root?: string;
}

interface Props {
	name: Icons;
	color?: string;
	size?: string;
	classes?: Classes;
}

const SvgIcons: FC<Props> = ({ name, color = "white", classes, size = "100%" }) => {
	const containerClass = cl(styles.svgIconContainer, classes?.root);

	if (!supportedIcons.includes(name)) return null;

	return (
		<div style={{ color, width: size, height: size }} className={containerClass}>
			{icons[name]}
		</div>
	);
};

export default SvgIcons;
