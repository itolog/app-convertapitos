import React from "react";

import { useTranslations } from "next-intl";

const Api = () => {
	const t = useTranslations();

	return <div>{t("Welcome to React")}</div>;
};

export default Api;
