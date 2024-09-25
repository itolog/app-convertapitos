"use client";

import * as React from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const BaseNavigation = () => {
	const { navigations } = useNavigationItems();

	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navigations.map((item) => {
					if (item.content) {
						return (
							<NavigationMenuItem key={item.label}>
								<NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-full gap-1 p-1 md:gap-3 md:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
										{item.content.map((component) => (
											<ListItem key={component.label} title={component.label} href={component.href}>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						);
					} else {
						return (
							<NavigationMenuItem key={item.label}>
								<Link href={item.href} legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{item.label}
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						);
					}
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className,
						)}
						{...props}>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	},
);
ListItem.displayName = "ListItem";

export default BaseNavigation;
