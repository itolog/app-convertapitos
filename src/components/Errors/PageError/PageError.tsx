"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";

import { useTranslations } from "next-intl";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PageErrorProps {
	reset: () => void;
}

const PageError: FC<PageErrorProps> = ({ reset }) => {
	const t = useTranslations();

	return (
		<Alert variant="destructive">
			<ExclamationTriangleIcon className="h-4 w-4" />
			<AlertTitle>{t("Error")}</AlertTitle>
			<AlertDescription className={"flex justify-between items-center"}>
				<span>{t("Something went wrong")}</span>
				<CoButton variant={"destructive"} className={"w-fit"} onClick={reset} text={"Try again"} />
			</AlertDescription>
		</Alert>
	);
};

export default PageError;
