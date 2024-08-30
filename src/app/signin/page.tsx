import React from "react";

import { signIn } from "@/auth";
import { providerData } from "@/data/auth/providers";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import CoText from "@/components/UI/CoText/CoText";

import styles from "./styles.module.scss";

const Page = () => {
	return (
		<div className={styles.SignIn}>
			<CoCard>
				<div className={styles.SignInContainer}>
					<CoText component={"h1"} textProps={{ target: "Auth" }}>
						Sign In
					</CoText>

					<div className={styles.Providers}>
						{providerData.map((item) => {
							return (
								<form
									key={item.provider}
									action={async () => {
										"use server";

										await signIn(item.provider, { redirectTo: "/" });
									}}>
									<CoButton
										fullWidth
										type={"submit"}
										text={"Continue with"}
										textProps={{ provider: item.providerMessage, target: "Auth" }}
										icon={item.icon}
									/>
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
