"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import gsap from "gsap";

import NavigationCard from "@/components/Navigation/components/NavigationCard/NavigationCard";

const RANGE_MULT = 50;

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  const { navigations } = useNavigationItems();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".f-title", {
        opacity: 0.2,
        y: -40,
      }).from(
        ".nav-card",
        {
          x: (i) => {
            return gsap.utils.random(-(i * RANGE_MULT), i * RANGE_MULT);
          },
          y: (i) => {
            return gsap.utils.random(-(i * RANGE_MULT), i * RANGE_MULT);
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
        },
        "+=.4",
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={"relative w-full h-full flex items-center gap-12 flex-col"}>
      {navigations.map((navigation) => {
        if (!navigation.enabled) return null;

        return (
          <div className={"flex flex-col w-full items-center gap-8"} key={navigation.label}>
            <h2 className={"font-bold text-xl md:text-3xl f-title"}>{navigation.label}</h2>
            <div className={"w-full flex justify-center flex-wrap gap-4"}>
              {navigation.content?.map((content) => {
                if (!content.enabled) return null;

                return (
                  <NavigationCard
                    key={content.label}
                    className={"nav-card"}
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
