"use client";

import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import CoDrawer from "@/components/CoDrawer/CoDrawer";
import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import CoLogo from "@/components/ui/CoLogo/CoLogo";

function CoAppBar() {
	return (
		<header className="absolute left-0 right-0 flex items-center justify-center h-16 shadow dark:shadow-cyan-400">
			<div
				className={
					"wrapper grid grid-cols-headerMobile md:grid-cols-header w-full items-center justify-between"
				}>
				<div className={"flex gap-2"}>
					<CoDrawer />

					<Link href="/" className="flex items-center gap-2" prefetch={false}>
						<CoLogo />
					</Link>
				</div>

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
