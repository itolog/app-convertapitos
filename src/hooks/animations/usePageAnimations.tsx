"use client";

import { useCallback } from "react";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";

const usePageAnimations = () => {
  const router = useRouter();
  const pathname = usePathname();

  const animatePageIn = useCallback(() => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
      const tl = gsap.timeline();

      tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0,
      }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 100,
        stagger: 0.2,
      });
    }
  }, []);

  const animatePageOut = useCallback(
    (href: string) => {
      if (pathname === href) return;

      const bannerOne = document.getElementById("banner-1");
      const bannerTwo = document.getElementById("banner-2");
      const bannerThree = document.getElementById("banner-3");
      const bannerFour = document.getElementById("banner-4");

      if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: -100,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: 0,
          stagger: 0.2,
          onComplete: () => {
            router.push(href);
          },
        });
      }
    },
    [pathname, router],
  );

  return { animatePageIn, animatePageOut };
};

export default usePageAnimations;
