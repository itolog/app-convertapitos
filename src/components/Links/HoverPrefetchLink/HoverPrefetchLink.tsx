"use client";

import { FC, ReactNode, useState } from "react";

import Link, { type LinkProps } from "next/link";

interface HoverPrefetchLinkProps extends LinkProps {
  children: ReactNode;
}

const HoverPrefetchLink: FC<HoverPrefetchLinkProps> = ({ children, ...props }) => {
  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  return (
    <Link {...props} prefetch={active ? null : false} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
};

export default HoverPrefetchLink;
