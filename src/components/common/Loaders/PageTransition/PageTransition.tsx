import React from "react";

import cl from "clsx";

const baseBannerClass = "min-h-screen bg-background z-100 fixed top-0 w-1/4";

const PageTransition = () => {
  return (
    <div>
      <div id="banner-1" className={cl(baseBannerClass, "left-0")} />
      <div id="banner-2" className={cl(baseBannerClass, "left-1/4")} />
      <div id="banner-3" className={cl(baseBannerClass, "left-2/4")} />
      <div id="banner-4" className={cl(baseBannerClass, "left-3/4")} />
    </div>
  );
};

export default PageTransition;
