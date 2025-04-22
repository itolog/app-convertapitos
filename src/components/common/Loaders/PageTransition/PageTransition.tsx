import React from "react";

import cl from "clsx";

const PageTransition = () => {
  return (
    <div
      className={cl(
        "fixed top-0 left-0 z-100 h-screen min-h-screen w-full overflow-hidden bg-[rgba(0,0,0,0.8)]",
        "grid grid-cols-8 grid-rows-8",
        "page-transition",
      )}>
      {Array.from({ length: 64 }, (_value, index) => index).map((value) => {
        return (
          <div
            key={value}
            className={cl(
              "bg-card shadow-[inset_2px_0px_10px_5px_rgba(0,0,0,0.85)] dark:shadow-[inset_2px_0px_10px_5px_rgba(135,42,141,0.85)]",
              "page-transition--box",
            )}
          />
        );
      })}
    </div>
  );
};

export default PageTransition;
