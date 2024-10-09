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
}

const useNavigationItems = (): ReturnType => {
  const t = useTranslations();

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
        content: [
          {
            label: t("url"),
            href: "/qrcode/url",
          },
          {
            label: t("text"),
            href: "/qrcode/text",
          },
          {
            label: t("email"),
            href: "/qrcode/email",
          },
          {
            label: t("phone"),
            href: "/qrcode/phone",
          },
          {
            label: t("wifi"),
            href: "/qrcode/wifi",
          },
        ],
      },
    ];
  }, [t]);

  return { navigations };
};

export default useNavigationItems;
