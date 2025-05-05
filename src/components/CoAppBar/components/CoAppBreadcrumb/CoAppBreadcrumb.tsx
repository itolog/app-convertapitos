"use client";

import * as React from "react";
import { useMemo } from "react";

import usePageAnimations from "@/hooks/animations/usePageAnimations";
import Link from "next/link";
import { usePathname } from "next/navigation";

import CoLogo from "@/components/CoLogo/CoLogo";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ITEMS_TO_DISPLAY = 3;

const CoAppBreadcrumb = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const { animatePageOut } = usePageAnimations();

  const items = useMemo(() => {
    if (pathname === "/") {
      return [];
    }

    const items = pathname.slice(1).split("/");

    return items.map((item, index, array) => {
      if (array.length === index + 1) {
        return { label: item || "Home" };
      }
      return { href: `/${item}`, label: item || "Home" };
    });
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={"/"}
              onNavigate={(e) => {
                e.preventDefault();
                animatePageOut("/");
              }}
              className={"capitalize"}>
              <CoLogo classes={{ root: "size-7" }} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {Boolean(items.length) && <BreadcrumbSeparator />}

        {items.length > ITEMS_TO_DISPLAY ? (
          <>
            <BreadcrumbItem>
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1" aria-label="Toggle menu">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {items.slice(1, -2).map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <Link
                        href={item.href ? item.href : "#"}
                        onNavigate={(e) => {
                          e.preventDefault();
                          animatePageOut(item.href ? item.href : "#");
                        }}
                        className={"capitalize"}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}

        {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => {
          return (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                    <Link
                      href={item.href}
                      onNavigate={(e) => {
                        e.preventDefault();
                        animatePageOut(item.href);
                      }}
                      className={"capitalize"}>
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate capitalize md:max-w-none">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CoAppBreadcrumb;
