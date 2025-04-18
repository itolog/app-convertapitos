"use client";

import { useCallback } from "react";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

const usePageAnimations = () => {
  const router = useRouter();
  const pathname = usePathname();

  const animatePageIn = useCallback(() => {
    const tl = gsap.timeline();
    const boxes = gsap.utils.toArray(".page-transition--box");

    tl.set(boxes, {
      opacity: 1,
      scale: 1,
    })
      .to(boxes, {
        opacity: 0,
        scale: 0,
        stagger: {
          from: "random",
          amount: 0.4,
        },
      })
      .to(".page-transition", {
        yPercent: -100,
      });
  }, []);

  const animatePageOut = useCallback(
    (href: string) => {
      if (pathname === href) return;

      const tl = gsap.timeline();

      tl.set(".page-transition--box", {
        opacity: 0,
        scale: 0,
      })
        .to(".page-transition", {
          yPercent: 0,
        })
        .to(".page-transition--box", {
          opacity: 1,
          scale: 1,
          stagger: {
            from: "random",
            amount: 0.4,
          },
          onComplete: () => {
            router.push(href);
          },
        });
    },
    [pathname, router],
  );

  return { animatePageIn, animatePageOut };
};

export default usePageAnimations;
