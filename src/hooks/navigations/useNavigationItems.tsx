import { useMemo } from "react";

import { useTranslations } from "next-intl";

import { useAppSelector } from "@/store/hooks";
import { getFeatures } from "@/store/settings/features/selectors";

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
  const featuresState = useAppSelector(getFeatures);

  const navigations: NavigationItem[] = useMemo(() => {
    return [
      {
        href: "/",
        label: t("Convert"),
        enabled: featuresState["convert"],
        content: [
          {
            label: t("Image"),
            href: "/",
            description: t("Image conversion"),
            enabled: featuresState["convert:image"],
          },
          {
            label: t("Text"),
            href: "/text",
            description: t("Text to speech"),
            enabled: featuresState["convert:text"],
          },
        ],
      },
      {
        href: "/qrcode",
        label: t("QR Code"),
        enabled: featuresState["qrcode"],
        content: [
          {
            label: t("url"),
            href: "/qrcode/url",
            enabled: featuresState["qrcode:url"],
          },
          {
            label: t("text"),
            href: "/qrcode/text",
            enabled: featuresState["qrcode:text"],
          },
          {
            label: t("email"),
            href: "/qrcode/email",
            enabled: featuresState["qrcode:email"],
          },
          {
            label: t("phone"),
            href: "/qrcode/phone",
            enabled: featuresState["qrcode:phone"],
          },
          {
            label: t("wifi"),
            href: "/qrcode/wifi",
            enabled: featuresState["qrcode:wifi"],
          },
          {
            label: t("location"),
            href: "/qrcode/location",
            enabled: featuresState["qrcode:location"],
          },
        ],
      },
    ];
  }, [featuresState, t]);

  return { navigations };
};

export default useNavigationItems;
