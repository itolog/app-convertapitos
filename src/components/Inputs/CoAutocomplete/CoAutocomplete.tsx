"use client";

import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { FC, useCallback, useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

import { CoAutocompleteProps } from "@/components/Inputs/CoAutocomplete/types";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const CoAutocomplete: FC<CoAutocompleteProps> = ({ options, trigger, onSelect }) => {
	const locale = useLocale();
	const t = useTranslations();
	const [, startTransition] = useTransition();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(locale);

	const handleChange = useCallback(
		(value: string) => {
			startTransition(() => {
				setValue(value);
				setOpen(false);

				if (onSelect) {
					onSelect(value);
				}
			});
		},
		[onSelect],
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder={t("Search")} className="h-9" />
					<CommandList>
						<CommandEmpty>{t("No Options")}</CommandEmpty>
						<CommandGroup>
							{options.map((item) => (
								<CommandItem key={item.value} value={item.value} onSelect={handleChange}>
									{item.label}
									<CheckIcon
										className={cn(
											"ml-auto h-4 w-4",
											value === item.value ? "opacity-100" : "opacity-0",
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

export default CoAutocomplete;
