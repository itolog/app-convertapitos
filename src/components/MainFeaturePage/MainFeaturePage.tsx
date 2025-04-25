"use client";

import React, { useMemo } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import { usePathname } from "next/navigation";

import NavigationCard from "@/components/common/Cards/NavigationCard/NavigationCard";
import UnavailableFeature from "@/components/UnavailableFeature/UnavailableFeature";

const MainFeaturePage = () => {
  const pathname = usePathname();
  const { navigations } = useNavigationItems();

  const feature = useMemo(() => {
    return navigations.find((i) => i.href === pathname);
  }, [navigations, pathname]);

  if (!feature || !feature.enabled || feature.children?.every((i) => !i.enabled)) {
    return <UnavailableFeature />;
  }

  return (
    <div className="container flex h-full w-full items-center justify-center">
      <NavigationCard
        classes={{
          root: "w-full md:w-lg",
        }}
        item={feature}
        key={feature.id}
      />
    </div>
  );
};

export default MainFeaturePage;
