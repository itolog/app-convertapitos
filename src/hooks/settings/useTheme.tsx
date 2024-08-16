"use client";

import { useEffect } from "react";

import { useAppSelector } from "@/store/hooks";
import { getTheme } from "@/store/settings/selectors";

const useTheme = () => {
	const theme = useAppSelector(getTheme);
	useEffect(() => {
		const root = document.querySelector("html");
		if (root) {
			root.dataset.theme = theme;
		}
	}, [theme]);
};

export default useTheme;
