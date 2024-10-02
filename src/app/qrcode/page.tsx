import React from "react";

import type { Metadata } from "next";

import DevPlaceholder from "@/components/ui/DevPlaceholder/DevPlaceholder";

export const metadata: Metadata = {
	title: "Qrcode generation",
	description: "Generation and customization of qrcode",
	keywords: ["qrcode generation", "qrcode customization", "qrcode"],
};

const Page = () => {
	return (
		<div className={"flex items-center justify-center"}>
			<DevPlaceholder />
		</div>
	);
};

export default Page;
