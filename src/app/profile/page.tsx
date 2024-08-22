import { auth } from "@/auth";

const Page = async () => {
	const session = await auth();

	if (!session?.user) return null;

	return <div>prof</div>;
};

export default Page;
