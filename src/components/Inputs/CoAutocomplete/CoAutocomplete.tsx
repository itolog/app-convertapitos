"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { FC, useCallback, useState, useTransition } from "react";

import { cn } from "@/lib/utils";
import cl from "clsx";
import { useTranslations } from "next-intl";

import FormError from "@/components/Errors/FormError/FormError";
import { CoAutocompleteProps } from "@/components/Inputs/CoAutocomplete/types";
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

const CoAutocomplete: FC<CoAutocompleteProps> = ({
	options,
	onSelect,
	classes,
	defaultValue = "",
	placeholder = "Select",
	icon,
	disabled,
	onlyIcon = false,
	error,
}) => {
	const t = useTranslations();
	const [, startTransition] = useTransition();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(defaultValue);

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

	const contentClass = cl("w-[200px] p-0", classes?.content);
	const triggerClass = cl("justify-between w-full ", classes?.trigger);

	return (
		<div className={"relative flex w-full"}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger disabled={disabled} asChild>
					<Button variant="outline" role="combobox" aria-expanded={open} className={triggerClass}>
						<div className={"flex gap-1 relative overflow-hidden overflow-ellipsis"}>
							{icon && icon}
							{onlyIcon
								? null
								: value
									? options.find((option) => option.value === value)?.label
									: t(placeholder)}
						</div>

						<CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className={contentClass}>
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
			<FormError error={error} />
		</div>
	);
};

export default CoAutocomplete;
