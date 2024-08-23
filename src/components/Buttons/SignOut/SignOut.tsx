import { signOut } from "next-auth/react";
import React, { FC } from "react";

import CoButton from "@/components/Buttons/CoButton/CoButton";

interface SignOutProps {
	onClick?: () => void;
}

const SignOut: FC<SignOutProps> = ({ onClick }) => {
	const handleLogOut = async () => {
		await signOut();

		if (onClick) {
			onClick();
		}
	};

	return (
		<CoButton
			onClick={handleLogOut}
			fullWidth
			type={"button"}
			text={"Sign Out"}
			textProps={{ target: "Auth" }}
		/>
	);
};

export default SignOut;
