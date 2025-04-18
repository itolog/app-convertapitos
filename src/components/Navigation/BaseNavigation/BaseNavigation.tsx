"use client";

import * as React from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import { cn } from "@/lib/utils";
import Link from "next/link";

import checkIsLoading from "@/utils/checkIsLoading";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Skeleton } from "@/components/ui/skeleton";

import { getAppLoading } from "@/store/app/selectors";
import { useAppSelector } from "@/store/hooks";

const BaseNavigation = () => {
  const { navigations } = useNavigationItems();
  const loading = useAppSelector(getAppLoading);
  const { animatePageOut } = usePageAnimations();

  if (checkIsLoading(loading)) {
    return <Skeleton className="h-[36px] w-[40%] rounded-sm" />;
  }

  return (
    <NavigationMenu orientation={"vertical"}>
      <NavigationMenuList>
        {navigations.map((item) => {
          if (item.children?.every((i) => !i.enabled) || !item.enabled) return null;

          if (item.children) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={"items-baseline text-base leading-normal font-semibold"}>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-1 p-1 md:w-[500px] md:grid-cols-2 md:gap-3 md:p-4 lg:w-[600px]">
                    {item.children.map((component) => {
                      if (!component.enabled) return null;

                      return (
                        <li key={component.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              className={cn(
                                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-2 leading-none no-underline outline-hidden transition-colors select-none",
                              )}
                              href={component.href}
                              onNavigate={(e) => {
                                e.preventDefault();
                                animatePageOut(component.href);
                              }}>
                              <div className="text-base leading-none font-semibold capitalize">
                                {component.label}
                              </div>
                              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                {component.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.label}>
                <Link
                  href={item.href}
                  onNavigate={(e) => {
                    e.preventDefault();
                    animatePageOut(item.href);
                  }}>
                  <NavigationMenuLink className={`font-semibold ${navigationMenuTriggerStyle()}`}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default BaseNavigation;
