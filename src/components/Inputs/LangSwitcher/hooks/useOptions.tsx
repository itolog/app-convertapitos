"use client";

import { useMemo } from "react";

import { AppLang } from "@/constants";
import { useTranslations } from "next-intl";

export interface Option {
	code: string;
	label: string;
	value: string;
}

type OptionsNormalized = {
	[k: string]: Option;
};

interface ReturnType {
	optionsNormalized: OptionsNormalized;
	options: Option[];
}

const useOptions = (): ReturnType => {
	const t = useTranslations();

	const optionsNormalized = useMemo(() => {
		return {
			[AppLang.EN]: {
				code: "US",
				label: t("United States"),
				value: AppLang.EN,
			},
			[AppLang.UA]: { code: "UA", label: t("Ukraine"), value: AppLang.UA },
		};
	}, [t]);

	const options = useMemo(() => {
		return Object.values(optionsNormalized);
	}, [optionsNormalized]);

	return {
		optionsNormalized,
		options,
	};
};

export default useOptions;
