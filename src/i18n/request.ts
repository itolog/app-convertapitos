import { defaultLocale } from "@/configs/locales";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

import { LOCALE } from "@/constants/appConstants";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE)?.value ?? defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
