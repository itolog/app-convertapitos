"use client";

import React, { FC } from "react";

import { useTranslations } from "next-intl";

interface PageErrorProps {
	reset: () => void;
}

const PageError: FC<PageErrorProps> = ({ reset }) => {
	const t = useTranslations();

	return (
		<div>
			<div>
				<div>
					<span>{t("Something went wrong")}</span>
				</div>
				<div>
					<button onClick={() => reset()}>Try again</button>
				</div>
			</div>
		</div>
	);
};

export default PageError;
