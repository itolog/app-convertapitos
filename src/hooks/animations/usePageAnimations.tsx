"use client";

import { useCallback, useRef } from "react";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

const usePageAnimations = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tl = useRef(
    gsap.timeline({
      defaults: {
        stagger: {
          from: "random",
          amount: 0.3,
        },
      },
    }),
  );

  const animatePageIn = useCallback(() => {
    const boxes = gsap.utils.toArray(".page-transition--box");

    tl.current
      .set(boxes, {
        opacity: 1,
        scale: 1,
        y: (i) => {
          return gsap.utils.random(-40 * i, 40 * i);
        },
        x: (i) => {
          return gsap.utils.random(-40 * i, 40 * i);
        },
      })
      .to(boxes, {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
      })
      .to(".page-transition", {
        yPercent: -100,
      });
  }, []);

  const animatePageOut = useCallback(
    (href: string) => {
      if (pathname === href) return;

      tl.current
        .set(".page-transition--box", {
          opacity: 0,
          scale: 0,
          y: (i) => {
            return gsap.utils.random(-40 * i, 40 * i);
          },
          x: (i) => {
            return gsap.utils.random(-40 * i, 40 * i);
          },
        })
        .to(".page-transition", {
          yPercent: 0,
        })
        .to(".page-transition--box", {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,

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
