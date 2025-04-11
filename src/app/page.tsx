"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import gsap from "gsap";

import NavigationCard from "@/components/Navigation/components/NavigationCard/NavigationCard";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  const { navigations } = useNavigationItems();

  useGSAP(
    () => {
      gsap.fromTo(
        ".nav-card",
        { scale: 0.1, y: 40 },
        {
          scale: 1,
          y: 0,

          ease: "power1.inOut",
          stagger: {
            each: 0.1,
            from: "random",
            ease: "power2.inOut",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className={"relative w-full h-full flex items-center gap-12 flex-col"}>
      {navigations.map((navigation) => {
        return (
          <div className={"flex flex-col w-full items-center gap-8"} key={navigation.label}>
            <h2 className={"font-bold text-xl md:text-3xl"}>{navigation.label}</h2>
            <div className={"w-full flex justify-center flex-wrap gap-4"}>
              {navigation.content?.map((content) => {
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
