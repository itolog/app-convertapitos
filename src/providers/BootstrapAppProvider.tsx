"use client";

import { useSession } from "next-auth/react";
import React, { ReactNode, useEffect } from "react";

import { snackbar } from "@/configs";
import { SnackbarProvider } from "notistack";

import { useAppDispatch } from "@/store/hooks";
import { User } from "@/store/user/types";
import { setUser } from "@/store/user/userSlice";

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

	return <SnackbarProvider {...snackbar}>{children}</SnackbarProvider>;
};

export default BootstrapAppProvider;
