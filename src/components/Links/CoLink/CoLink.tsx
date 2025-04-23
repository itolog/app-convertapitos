import React, { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

type Classes = {
  root?: string;
  content?: string;
};

interface CoLinkProps extends LinkProps {
  classes?: Classes;
}

const CoLink: FC<PropsWithChildren<CoLinkProps>> = ({ children, classes, ...props }) => {
  const rootClass = cn(
    "border text-gray-50 duration-300 relative group cursor-pointer overflow-hidden h-12 w-full min-w-32 rounded-md bg-neutral-800 p-2 font-extrabold",
    "hover:bg-sky-800 hover:shadow-xl shadow-gray-800/40 dark:shadow-sky-800/40",
    classes?.root,
  );

  return (
    <Link className={rootClass} {...props}>
      <div className="absolute top-12 right-12 z-10 h-16 w-16 rounded-full bg-yellow-500 duration-700 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150" />
      <div className="absolute -top-6 right-20 z-10 h-12 w-12 rounded-full bg-orange-500 duration-700 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150" />
      <div className="absolute top-6 right-32 z-10 h-8 w-8 rounded-full bg-pink-500 duration-700 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150" />
      <div className="absolute top-12 right-2 z-10 h-4 w-4 rounded-full bg-red-600 duration-700 group-hover:-top-1 group-hover:-right-2 group-hover:scale-150" />
      <div
        className={cn([
          "absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-[rgb(5,5,34,0.6)] text-base",
          classes?.content,
        ])}>
        {children}
      </div>
    </Link>
  );
};

export default CoLink;
