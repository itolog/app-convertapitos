"use client";

import * as React from "react";
import { useCallback, useState } from "react";

import { useLocale } from "next-intl";
import Image from "next/image";

import { setUserLocale } from "@/services/locale";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import useOptions from "@/components/Inputs/LangSwitcher/hooks/useOptions";

const LangSwitcher = () => {
	const { options, optionsNormalized } = useOptions();
	const locale = useLocale();
	const [value, setValue] = useState(locale);

	const handleChange = useCallback(async (locale: string) => {
		await setUserLocale(locale);
		setValue(locale);
	}, []);

	return (
		<CoAutocomplete
			value={value}
			placeholder={"Choose a language"}
			onlyIcon
			icon={
				<div className={"w-[20px] h-[15px] relative"}>
					<Image
						src={`https://flagcdn.com/h20/${optionsNormalized[value].code}.png`}
						alt={value}
						fill
						sizes="(min-width: 808px) 50vw, 100vw"
					/>
				</div>
			}
			options={options}
			onSelect={handleChange}
		/>
	);
};

export default LangSwitcher;
