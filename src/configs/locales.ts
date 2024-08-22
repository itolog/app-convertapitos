import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en";
export const locales = ["en", "ua"];
export type Locale = (typeof locales)[number];

export const pathnames: Pathnames<typeof locales> = {
	"/": "/",
	"/pathnames": {
		en: "/pathnames",
		ua: "/pathnames",
	},
};

export const localePrefix: LocalePrefix<typeof locales> = "always";
