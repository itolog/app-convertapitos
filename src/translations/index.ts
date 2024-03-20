import { initReactI18next } from "react-i18next";

import { APP_ENV, AppLang } from "@/constants";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/en.json";
import ua from "./ua/ua.json";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			[AppLang.EN]: {
				translation: en,
			},
			[AppLang.UA]: {
				translation: ua,
			},
		},
		fallbackLng: AppLang.EN,
		debug: process.env.NODE_ENV === APP_ENV.DEV,
		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},
	});

export default i18n;
