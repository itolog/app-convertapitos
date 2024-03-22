import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { AppLang } from "@/constants";
import useErrors from "@/hooks/errors/useErrors.tsx";

const useCurrentLocale = () => {
	const { i18n } = useTranslation();
	const { logError } = useErrors();

	useEffect(() => {
		const lang = i18n.language;
		const parsedLang = lang?.split("-")?.[0] ?? AppLang.EN;
		const supportedLanguages = Object.keys(i18n.store.data ?? {});

		if (!supportedLanguages.includes(parsedLang)) {
			i18n.changeLanguage(AppLang.EN).catch(logError);
		}
	}, [i18n, logError]);
};

export default useCurrentLocale;
