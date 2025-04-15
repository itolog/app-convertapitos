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
    return <Skeleton className="w-[40%] h-[36px] rounded-sm" />;
  }

  return (
    <NavigationMenu orientation={"vertical"}>
      <NavigationMenuList>
        {navigations.map((item) => {
          if (item.content?.every((i) => !i.enabled) || !item.enabled) return null;

          if (item.content) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger
                  className={"text-base font-semibold leading-normal items-baseline"}>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-full gap-1 p-1 md:gap-3 md:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.content.map((component) => {
                      if (!component.enabled) return null;

                      return (
                        <li key={component.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href={component.href}
                              onNavigate={(e) => {
                                e.preventDefault();
                                animatePageOut(component.href);
                              }}>
                              <div className="text-base font-semibold leading-none capitalize">
                                {component.label}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
