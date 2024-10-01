import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

import cl from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Vollkorn } from "next/font/google";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import { Toaster } from "@/components/ui/sonner";

import BootstrapAppProvider from "@/providers/bootstrap-app-provider";
import StoreProvider from "@/providers/store-provider";

import "./globals.css";

const vollkorn = Vollkorn({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function LocaleLayout({
	children,
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	const locale = await getLocale();
	const messages = await getMessages();

	const bodyClass = cl(vollkorn.className, "h-full");

	return (
		<html lang={locale} className={"h-full"} suppressHydrationWarning>
			<StoreProvider>
				<NextIntlClientProvider messages={messages}>
					<SessionProvider>
						<body className={bodyClass}>
							<BootstrapAppProvider>
								<div className={"antialiased app-font h-full relative"}>
									<CoAppBar />
									<main className={"wrapper h-full pt-28"}>{children}</main>
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
