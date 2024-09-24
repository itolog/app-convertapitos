"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useCallback, useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { setUserLocale } from "@/services/locale";

import useOptions from "@/components/Inputs/LangSwitcher/hooks/useOptions";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const LangSwitcher = () => {
	const { options, optionsNormalized } = useOptions();
	const locale = useLocale();
	const t = useTranslations();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(locale);
	const [, startTransition] = useTransition();

	const handleChange = useCallback(
		async (locale: string) => {
			startTransition(async () => {
				await setUserLocale(locale);

				setValue(locale === value ? "" : locale);
				setOpen(false);
			});
		},
		[value],
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[80px] justify-between">
					<div className={"w-[20px] h-[15px] relative"}>
						<Image
							src={`https://flagcdn.com/h20/${optionsNormalized[value].code}.png`}
							alt={value}
							fill
							sizes="(min-width: 808px) 50vw, 100vw"
						/>
					</div>

					<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={t("Search")} className="h-9" />
					<CommandList>
						<CommandEmpty>{t("No Options")}</CommandEmpty>
						<CommandGroup>
							{options.map((framework) => (
								<CommandItem key={framework.value} value={framework.value} onSelect={handleChange}>
									{framework.label}
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											value === framework.value ? "opacity-100" : "opacity-0",
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default LangSwitcher;
