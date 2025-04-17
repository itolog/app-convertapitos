"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import gsap from "gsap";

import NavigationCard from "@/components/common/Cards/NavigationCard/NavigationCard";

const RANGE_MULTI = 50;

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  const { navigationItems } = useNavigationItems();

  useGSAP(
    () => {
      gsap.from(".nav-card", {
        x: (i) => {
          return gsap.utils.random(-(i * RANGE_MULTI), i * RANGE_MULTI);
        },
        y: (i) => {
          return gsap.utils.random(-(i * RANGE_MULTI), i * RANGE_MULTI);
        },
        skewX: (i) => {
          return gsap.utils.random(-(i * 10), i * 10);
        },
        skewY: (i) => {
          return gsap.utils.random(-(i * 10), i * 10);
        },
        scale: 0.5,
        opacity: 0,
        stagger: {
          each: 0.1,
          from: "random",
        },
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className={"w-full h-full"}>
      <div className={"flex flex-wrap w-full"}>
        {navigationItems.map((navigation) => {
          if (!navigation.enabled || !navigation.parentId) return null;

          return (
            <NavigationCard
              key={navigation.id}
              classes={{
                root: "nav-card max-w-[180px]",
              }}
              title={navigation.label}
              href={navigation.href}
              description={navigation.description}
            />
          );
        })}
      </div>
    </div>
  );
}
