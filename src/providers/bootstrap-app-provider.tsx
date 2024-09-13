"use client";

import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";
import { User } from "@/store/user/types";
import { setUser } from "@/store/user/userSlice";

import { ThemeProvider } from "@/providers/theme-provider";

const BootstrapAppProvider = ({ children }: { children: ReactNode }) => {
	const session = useSession();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const user: User = session?.data?.user ?? null;

		dispatch(
			setUser({
				user,
				status: session.status,
			}),
		);
	}, [dispatch, session]);

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			{children}
		</ThemeProvider>
	);
};

export default BootstrapAppProvider;
