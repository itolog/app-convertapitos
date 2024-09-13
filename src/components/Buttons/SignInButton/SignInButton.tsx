"use client";

import React, { FC, useCallback } from "react";

import { useRouter } from "next/navigation";

import CoButton from "@/components/Buttons/CoButton/CoButton";

interface SignInButtonProps {
	onClick?: () => void;
}

const SignInButton: FC<SignInButtonProps> = ({ onClick }) => {
	const router = useRouter();

	const handleSignIn = useCallback(async () => {
		router.push("signin");

		if (onClick) {
			onClick();
		}
	}, [onClick, router]);

	return (
		<CoButton
			onClick={handleSignIn}
			type={"button"}
			text={"Sign In"}
			textProps={{ target: "Auth" }}
		/>
	);
};

export default SignInButton;
