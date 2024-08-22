"use client";

import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

import { useAppDispatch } from "@/store/hooks";
import { User } from "@/store/user/types";
import { setUser } from "@/store/user/userSlice";

const BootstrapAppProvider = ({ children }: { children: ReactNode }) => {
	const session = useSession();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (session?.data?.user) {
			const user: User = session.data.user;

			dispatch(setUser(user));
		}
	}, [dispatch, session]);

	return <>{children}</>;
};

export default BootstrapAppProvider;
