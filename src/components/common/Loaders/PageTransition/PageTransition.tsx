import React from "react";

import cl from "clsx";

const PageTransition = () => {
  return (
    <div
      className={cl(
        "absolute top-0 left-0 z-100 h-full min-h-screen w-full bg-[rgba(0,0,0,0.7)]",
        "grid grid-cols-8 grid-rows-8",
        "page-transition",
      )}>
      {Array.from({ length: 64 }, (_value, index) => index).map((value) => {
        return (
          <div
            key={value}
            className={cl(
              "bg-card rounded-md shadow-[inset_-9px_-8px_17px_0px_rgba(96,_168,_21,_0.50)]",
              "page-transition--box",
            )}
          />
        );
      })}
    </div>
  );
};

export default PageTransition;
