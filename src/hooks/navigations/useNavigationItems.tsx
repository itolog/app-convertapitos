import { useMemo } from "react";

import { useTranslations } from "next-intl";

interface Content {
  label: string;
  href: string;
  description?: string;
  enabled: boolean;
}

interface NavigationItem {
  href: string;
  label: string;
  enabled: boolean;
  content?: Content[];
}

interface ReturnType {
  navigations: NavigationItem[];
}

const useNavigationItems = (): ReturnType => {
  const t = useTranslations();

  const navigations: NavigationItem[] = useMemo(() => {
    return [
      {
        href: "/",
        label: t("Convert"),
        enabled: true,
        content: [
          {
            label: t("Image"),
            href: "/",
            description: t("Image conversion"),
            enabled: true,
          },
          {
            label: t("Text"),
            href: "/text",
            description: t("Text to speech"),
            enabled: true,
          },
        ],
      },
      {
        href: "/qrcode",
        label: t("QR Code"),
        enabled: true,
        content: [
          {
            label: t("url"),
            href: "/qrcode/url",
            enabled: true,
          },
          {
            label: t("text"),
            href: "/qrcode/text",
            enabled: true,
          },
          {
            label: t("email"),
            href: "/qrcode/email",
            enabled: true,
          },
          {
            label: t("phone"),
            href: "/qrcode/phone",
            enabled: true,
          },
          {
            label: t("wifi"),
            href: "/qrcode/wifi",
            enabled: true,
          },
          {
            label: t("location"),
            href: "/qrcode/location",
            enabled: true,
          },
        ],
      },
    ];
  }, [t]);

  return { navigations };
};

export default useNavigationItems;
