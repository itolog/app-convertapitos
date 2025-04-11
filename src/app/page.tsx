"use client";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";

import NavigationCard from "@/components/Navigation/components/NavigationCard/NavigationCard";

export default function Home() {
  const { navigations } = useNavigationItems();

  return (
    <div className={"relative w-full h-full flex items-center gap-12 flex-col"}>
      {navigations.map((navigation) => {
        return (
          <div className={"flex flex-col w-full items-center gap-8"} key={navigation.label}>
            <h2 className={"font-bold text-xl md:text-3xl"}>{navigation.label}</h2>
            <div className={"w-full flex justify-center flex-wrap gap-4"}>
              {navigation.content?.map((content) => {
                return (
                  <NavigationCard
                    key={content.label}
                    title={content.label}
                    href={content.href}
                    description={content.description}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
