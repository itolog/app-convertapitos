"use client";

import { useCallback, useRef } from "react";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

const PAGE_DURATION = 0.2;

const BOX_ANIM = {
  scale: 0,
  opacity: 0,
  y: (i) => i * 40,
};

const usePageAnimations = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tl = useRef(
    gsap.timeline({
      defaults: {
        ease: "back.out(1.7)",
        stagger: {
          grid: "auto",
          from: "center",
          amount: 0.4,
        },
      },
    }),
  );

  const animatePageIn = useCallback(() => {
    const boxes = gsap.utils.toArray(".page-transition--box");

    tl.current.to(boxes, BOX_ANIM).to(".page-transition", {
      yPercent: -100,
      duration: PAGE_DURATION,
      ease: "power1.in",
    });
  }, []);

  const animatePageOut = useCallback(
    (href: string) => {
      if (pathname === href) return;

      tl.current
        .set(".page-transition--box", BOX_ANIM)
        .to(".page-transition", {
          yPercent: 0,
          duration: PAGE_DURATION,
          ease: "power1.out",
        })
        .to(".page-transition--box", {
          scale: 1,
          opacity: 1,
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
