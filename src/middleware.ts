import { locales } from "@/config";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: "en",
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(ua|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
