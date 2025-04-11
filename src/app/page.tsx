"use client";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import Link from "next/link";

import NavigationCard from "@/components/Navigation/components/NavigationCard/NavigationCard";

export default function Home() {
  const { navigations } = useNavigationItems();

  return (
    <div className={"relative w-full h-full flex items-center gap-12 flex-col"}>
      {navigations.map((navigation) => {
        return (
          <div className={"flex flex-col w-full items-center gap-8"} key={navigation.label}>
            <h2 className={"font-bold text-xl md:text-3xl"}>{navigation.label}</h2>
            <div className={"w-full flex flex-wrap gap-4"}>
              {navigation.content?.map((content) => {
                return (
                  <Link key={content.label} href={content.href}>
                    <NavigationCard title={content.label} description={content.description} />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
