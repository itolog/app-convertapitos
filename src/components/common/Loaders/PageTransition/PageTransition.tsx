import React from "react";

import cl from "clsx";

const PageTransition = () => {
  return (
    <div
      className={cl(
        "page-transition absolute top-0 left-0 z-100 h-full min-h-screen w-full bg-[rgba(0,0,0,0.5)]",
        "grid grid-cols-5 grid-rows-5",
      )}>
      {Array.from({ length: 25 }, (value, index) => index).map((value) => {
        return <div key={value} className={"page-transition--box bg-background"} />;
      })}
    </div>
  );
};

export default PageTransition;
