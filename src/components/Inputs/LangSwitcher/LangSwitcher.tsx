"use client";

import { FC, HTMLAttributes, SyntheticEvent, useCallback, useState, useTransition } from "react";

import { Locale } from "@/configs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { setUserLocale } from "@/services/locale";

import useOptions, { Option } from "@/components/Inputs/LangSwitcher/hooks/useOptions";

interface LangSwitcherProps {
	width?: string | number;
	close?: () => void;
}

interface RenderOptionProps extends HTMLAttributes<HTMLLIElement> {
	key: string;
}

const IMAGE_SIZE = 20;

const LangSwitcher: FC<LangSwitcherProps> = ({ width = 200, close }) => {
	const t = useTranslations();
	const localActive = useLocale();
	const [isPending, startTransition] = useTransition();

	const { options, optionsNormalized } = useOptions();

	const [value, setValue] = useState<Option>(optionsNormalized[localActive]);

	const handleChange = async (
		_e: SyntheticEvent<Element, Event>,
		value: (string | Option)[] | NonNullable<string | Option> | null,
	) => {
		const val = value as Option;
		if (val) {
			const nextLocale = val.value as Locale;
			setValue(val);

			startTransition(() => {
				setUserLocale(nextLocale);
				if (close) {
					close();
				}
			});
		}
	};

	return <div>auto</div>;
};

export default LangSwitcher;
