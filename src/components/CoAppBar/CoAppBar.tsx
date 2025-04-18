"use client";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import Link from "next/link";

import AppSettings from "@/components/AppSettings/AppSettings";
import CoLogo from "@/components/CoLogo/CoLogo";
import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import CoDrawer from "@/components/Navigation/CoDrawer/CoDrawer";

function CoAppBar() {
  const { animatePageOut } = usePageAnimations();

  return (
    <header className="relative flex h-16 items-center justify-center shadow-sm dark:shadow-cyan-400">
      <div
        className={
          "wrapper grid w-full grid-cols-[80px_1fr] items-center justify-between md:grid-cols-[40px_1fr_170px]"
        }>
        <div className={"flex gap-2"}>
          <CoDrawer />

          <Link
            href="/"
            onNavigate={(e) => {
              e.preventDefault();
              animatePageOut("/");
            }}
            className="flex items-center gap-2"
            prefetch={false}>
            <CoLogo />
          </Link>
        </div>

        <div className={"hidden items-center justify-center md:flex"}>
          <BaseNavigation />
        </div>

        <div className="flex w-full items-center justify-end gap-4">
          <AppSettings />
        </div>
      </div>
    </header>
  );
}

export default CoAppBar;
