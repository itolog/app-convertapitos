import { FC } from "react";

import cl from "clsx";

import CoTextWithTooltip from "@/components/ui/Tooltips/CoTextWithTooltip/CoTextWithTooltip";

import _classes from "./formError.module.css";

interface Classes {
	root?: string;
	text?: string;
}

interface FormErrorProps {
	error?: string;
	classes?: Classes;
}

const FormError: FC<FormErrorProps> = ({ error, classes }) => {
	if (!error) return null;

	return (
		<div className={cl(_classes.formError, classes?.root)}>
			<CoTextWithTooltip
				classes={{
					text: cl(_classes.text, classes?.text),
				}}
				tooltipAutoDetect
				text={error}
			/>
		</div>
	);
};

export default FormError;
