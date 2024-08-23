import React from "react";

import { useTranslations } from "next-intl";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/CoCard/CoCard";
import CoText from "@/components/UI/CoText/CoText";

import styles from "./styles.module.scss";

const Page = () => {
	const t = useTranslations("Auth");

	return (
		<div className={styles.SignIn}>
			<CoCard>
				<div className={styles.SignInContainer}>
					<CoText component={"h1"}>{t("Sign In")}</CoText>

					<div>
						<CoButton
							icon={"git"}
							label={"GitHub"}
							text={t("Continue with", {
								provider: "GitHub",
							})}
						/>
					</div>
				</div>
			</CoCard>
		</div>
	);
};

export default Page;
