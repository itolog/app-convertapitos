import { useGSAP } from "@gsap/react";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import cl from "clsx";
import gsap from "gsap";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Vollkorn } from "next/font/google";

import AppFooter from "@/components/AppFooter/AppFooter";
import CoAppBar from "@/components/CoAppBar/CoAppBar";
import { Toaster } from "@/components/ui/sonner";

import BootstrapAppProvider from "@/providers/bootstrap-app-provider";
import ProgressBarProvider from "@/providers/progressbar-provider";
import StoreProvider from "@/providers/store-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

gsap.registerPlugin(useGSAP);

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

  const htmlClass = cl(vollkorn.className, "min-h-screen antialiased");

  return (
    <html lang={locale} className={htmlClass} suppressHydrationWarning>
      <StoreProvider>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <body className={"h-full min-h-screen"}>
              <ThemeProvider>
                <ProgressBarProvider>
                  <BootstrapAppProvider>
                    <CoAppBar />
                    <main className={"flex w-full h-full gradient-bg"}>{children}</main>
                    <AppFooter />
                    <Toaster closeButton richColors position="top-center" />
                  </BootstrapAppProvider>
                </ProgressBarProvider>
              </ThemeProvider>
            </body>
          </SessionProvider>
        </NextIntlClientProvider>
      </StoreProvider>
    </html>
  );
}
