import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

import cl from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Vollkorn } from "next/font/google";

import AppFooter from "@/components/AppFooter/AppFooter";
import CoAppBar from "@/components/CoAppBar/CoAppBar";
import { Toaster } from "@/components/common/ui/sonner";

import BootstrapAppProvider from "@/providers/bootstrap-app-provider";
import FeatureProvider from "@/providers/feature-provider";
import StoreProvider from "@/providers/store-provider";

import "./globals.css";

const vollkorn = Vollkorn({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConvertApiTos",
  description: "File generation and conversion",
  keywords: ["File", "generation", "conversion convert", "text-to-speech", "qrcode generation"],
};

export default async function LocaleLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  const bodyClass = cl(vollkorn.className, "h-full min-h-screen");

  return (
    <html lang={locale} className={"min-h-screen"} suppressHydrationWarning>
      <StoreProvider>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <body className={bodyClass}>
              <BootstrapAppProvider>
                <div
                  className={
                    "antialiased grid grid-rows-[auto_1fr_auto] app-font min-h-screen relative"
                  }>
                  <CoAppBar />
                  <main
                    className={
                      "flex w-full h-full items-center justify-center wrapper p-4 md:p-10"
                    }>
                    <FeatureProvider>{children}</FeatureProvider>
                  </main>
                  <AppFooter />
                  <Toaster richColors position="top-center" />
                </div>
              </BootstrapAppProvider>
            </body>
          </SessionProvider>
        </NextIntlClientProvider>
      </StoreProvider>
    </html>
  );
}
