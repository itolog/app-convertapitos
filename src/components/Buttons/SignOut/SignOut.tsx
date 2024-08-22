import { signOut } from "next-auth/react";

const SignOut = () => {
	const handleLogOut = async () => {
		await signOut();
	};

	return <button onClick={handleLogOut}>Sign Out</button>;
};

export default SignOut;
