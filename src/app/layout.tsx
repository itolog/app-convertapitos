import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import cl from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Vollkorn } from "next/font/google";
import { cookies } from "next/headers";

import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import CoAppBar from "@/components/CoAppBar/CoAppBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

import BootstrapAppProvider from "@/providers/bootstrap-app-provider";
import ProgressBarProvider from "@/providers/progressbar-provider";
import StoreProvider from "@/providers/store-provider";
import { ThemeProvider } from "@/providers/theme-provider";

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
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const htmlClass = cl(vollkorn.className, "min-h-screen antialiased");

  return (
    <html lang={locale} className={htmlClass} suppressHydrationWarning>
      <StoreProvider>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <body className={"gradient-bg h-full min-h-screen"}>
              <ThemeProvider>
                <ProgressBarProvider>
                  <BootstrapAppProvider>
                    <SidebarProvider defaultOpen={defaultOpen}>
                      <AppSidebar />
                      <SidebarInset className={"bg-[inherit]"}>
                        <CoAppBar />

                        {children}
                      </SidebarInset>
                    </SidebarProvider>
                  </BootstrapAppProvider>
                </ProgressBarProvider>
              </ThemeProvider>
              <Toaster closeButton richColors position="top-center" />
            </body>
          </SessionProvider>
        </NextIntlClientProvider>
      </StoreProvider>
    </html>
  );
}
