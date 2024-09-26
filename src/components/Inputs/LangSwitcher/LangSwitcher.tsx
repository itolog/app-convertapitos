"use client";

import { CaretSortIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useCallback, useState } from "react";

import { useLocale } from "next-intl";
import Image from "next/image";

import { setUserLocale } from "@/services/locale";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import useOptions from "@/components/Inputs/LangSwitcher/hooks/useOptions";
import { Button } from "@/components/ui/button";

const LangSwitcher = () => {
	const { options, optionsNormalized } = useOptions();
	const locale = useLocale();

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(locale);

	const handleChange = useCallback(
		async (locale: string) => {
			await setUserLocale(locale);

			setValue(locale === value ? "" : locale);
			setOpen(false);
		},
		[value],
	);

	return (
		<CoAutocomplete
			trigger={
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
			}
			options={options}
			onSelect={handleChange}
		/>
	);
};

export default LangSwitcher;
