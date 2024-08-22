"use client";

import { useTranslations } from "next-intl";

import styles from "./page.module.scss";

export default function Home() {
	const t = useTranslations();

	return <div className={styles.main}>{t("title")}</div>;
}
