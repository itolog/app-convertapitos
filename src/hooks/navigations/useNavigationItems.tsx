import { useMemo } from "react";

import { useTranslations } from "next-intl";

interface Content {
	title: string;
	href: string;
	description?: string;
}

interface NavigationItem {
	href: string;
	label: string;
	content?: Content[];
}

const useNavigationItems = (): NavigationItem[] => {
	const t = useTranslations("Navigation");

	return useMemo(() => {
		return [
			{
				href: "/",
				label: t("Convert"),
				content: [
					{
						title: t("Image"),
						href: "/",
						description: t("Image conversion"),
					},
					{
						title: t("Text"),
						href: "/text",
						description: t("Text to speech"),
					},
				],
			},
			{
				href: "/qrcode",
				label: t("QR code"),
			},
		];
	}, [t]);
};

export default useNavigationItems;
