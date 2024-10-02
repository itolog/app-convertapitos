import { FC } from "react";

import cl from "clsx";

import CoTextWithTooltip from "@/components/ui/CoTextWithTooltip/CoTextWithTooltip";

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
		<div className={cl("absolute bottom-[-20px] ", classes?.root)}>
			<CoTextWithTooltip
				classes={{
					text: cl("text-sm text-red-500", classes?.text),
				}}
				tooltipAutoDetect>
				{error}
			</CoTextWithTooltip>
		</div>
	);
};

export default FormError;
