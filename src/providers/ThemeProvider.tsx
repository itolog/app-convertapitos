"use client";

import React, { ReactNode } from "react";

import useTheme from "@/hooks/settings/useTheme";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	useTheme();

	return <>{children}</>;
};

export default ThemeProvider;
