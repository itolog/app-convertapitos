import { useMemo } from "react";

import { useTranslations } from "next-intl";

interface Content {
	label: string;
	href: string;
	description?: string;
}

interface NavigationItem {
	href: string;
	label: string;
	content?: Content[];
}

interface ReturnType {
	navigations: NavigationItem[];
	flatNavigations: Omit<NavigationItem, "content">[];
}

const useNavigationItems = (): ReturnType => {
	const t = useTranslations("Navigation");

	const navigations = useMemo(() => {
		return [
			{
				href: "/",
				label: t("Convert"),
				content: [
					{
						label: t("Image"),
						href: "/",
						description: t("Image conversion"),
					},
					{
						label: t("Text"),
						href: "/text",
						description: t("Text to speech"),
					},
				],
			},
			{
				href: "/qrcode",
				label: t("QR Code"),
			},
		];
	}, [t]);

	const flatNavigations = useMemo(() => {
		return [
			{
				label: t("Image"),
				href: "/",
			},
			{
				label: t("Text"),
				href: "/text",
			},
			{
				href: "/qrcode",
				label: t("QR Code"),
			},
		];
	}, [t]);

	return { navigations, flatNavigations };
};

export default useNavigationItems;
