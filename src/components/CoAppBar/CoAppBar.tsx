"use client";

import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import CoLogo from "@/components/ui/CoLogo/CoLogo";

function CoAppBar() {
	return (
		<header className="flex items-center justify-center h-16 shadow dark:shadow-cyan-400 mb-6">
			<div
				className={
					"wrapper grid grid-cols-headerMobile md:grid-cols-header w-full items-center justify-between"
				}>
				<Link href="/" className="flex items-center gap-2" prefetch={false}>
					<CoLogo />
				</Link>
				<div className={"hidden md:flex items-center justify-center"}>
					<BaseNavigation />
				</div>

				<div className="flex items-center justify-end gap-4 w-full">
					<AppSettings />
				</div>
			</div>
		</header>
	);
}

export default CoAppBar;
