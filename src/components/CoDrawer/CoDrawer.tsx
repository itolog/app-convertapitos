"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React, { FC, useState } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems";
import Link from "next/link";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

interface CoDrawerProps {}

const CoDrawer: FC<CoDrawerProps> = () => {
	const { flatNavigations } = useNavigationItems();

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(false);
	};

	return (
		<div className={"flex md:hidden"}>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger>
					<HamburgerMenuIcon width={36} height={36} />
				</SheetTrigger>
				<SheetContent side={"left"}>
					<SheetHeader>
						<SheetTitle />
						<SheetDescription />
					</SheetHeader>
					<div className="grid gap-4 p-2">
						{flatNavigations.map((item) => {
							return (
								<Link
									onClick={handleClick}
									key={item.label}
									href={item.href}
									className="text-sm font-medium hover:underline underline-offset-4"
									prefetch={false}>
									{item.label}
								</Link>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default CoDrawer;
