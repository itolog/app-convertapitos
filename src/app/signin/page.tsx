import React from "react";

import { signIn } from "@/auth";
import { providerData } from "@/data/auth/providers";

import CoCard from "@/components/Cards/CoCard/CoCard";
import CoText from "@/components/ui/CoText/CoText";

const Page = () => {
	return (
		<div>
			<CoCard>
				<div>
					<CoText textProps={{ target: "Auth" }}>Sign In</CoText>

					<div>
						{providerData.map((item) => {
							return (
								<form
									key={item.provider}
									action={async () => {
										"use server";

										await signIn(item.provider, { redirectTo: "/" });
									}}>
									{/* <CoButton */}
									{/* 	type={"submit"} */}
									{/* 	text={"Continue with"} */}
									{/* 	textProps={{ provider: item.providerMessage, target: "Auth" }} */}
									{/* 	icon={item.icon} */}
									{/* /> */}
								</form>
							);
						})}
					</div>
				</div>
			</CoCard>
		</div>
	);
};

export default Page;
