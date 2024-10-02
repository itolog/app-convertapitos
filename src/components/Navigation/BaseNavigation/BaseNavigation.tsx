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
		<NavigationMenu orientation={"vertical"}>
			<NavigationMenuList>
				{navigations.map((item) => {
					if (item.content) {
						return (
							<NavigationMenuItem key={item.label}>
								<NavigationMenuTrigger className={"font-semibold leading-normal items-baseline"}>
									{item.label}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-full gap-1 p-1 md:gap-3 md:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{item.content.map((component) => (
											<li key={component.label}>
												<NavigationMenuLink asChild>
													<Link
														className={cn(
															"block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
														)}
														href={component.href}>
														<div className="text-sm font-semibold leading-none">
															{component.label}
														</div>
														<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
															{component.description}
														</p>
													</Link>
												</NavigationMenuLink>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						);
					} else {
						return (
							<NavigationMenuItem key={item.label}>
								<Link href={item.href}>
									<NavigationMenuLink className={`font-semibold ${navigationMenuTriggerStyle()}`}>
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

export default BaseNavigation;
