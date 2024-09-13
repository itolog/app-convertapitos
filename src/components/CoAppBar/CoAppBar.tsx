"use client";

import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import CoLogo from "@/components/ui/CoLogo/CoLogo";

function CoAppBar() {
	return (
		<header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<CoLogo />
			</Link>
			<div className="flex items-center gap-4">
				<h2 className="text-lg font-medium">Dashboard</h2>
				<AppSettings />
			</div>
		</header>
	);
}

export default CoAppBar;
