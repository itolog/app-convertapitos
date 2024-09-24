"use client";

import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import CoLogo from "@/components/ui/CoLogo/CoLogo";

function CoAppBar() {
	return (
		<header className="flex mb-6 items-center justify-center h-16 shadow dark:shadow-cyan-400">
			<div className={"wrapper flex w-full items-center justify-between"}>
				<Link href="/" className="flex items-center gap-2" prefetch={false}>
					<CoLogo />
				</Link>
				<div>
					<BaseNavigation />
				</div>

				<div className="flex items-center gap-4">
					<AppSettings />
				</div>
			</div>
		</header>
	);
}

export default CoAppBar;
