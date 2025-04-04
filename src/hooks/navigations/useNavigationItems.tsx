import { useMemo } from "react";

import { FEATURE } from "@/constants";
import { genFeatureRoute } from "@/helpers/features";
import { useTranslations } from "next-intl";

import { getFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

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
        label: t("Convert"),
        href: genFeatureRoute(FEATURE.CONVERT),
        enabled: featuresState[FEATURE.CONVERT],
        content: [
          {
            label: t("Image"),
            href: genFeatureRoute(FEATURE.CONVERT_IMAGE),
            description: t("Image conversion"),
            enabled: featuresState[FEATURE.CONVERT_IMAGE],
          },
          {
            label: t("Text"),
            href: genFeatureRoute(FEATURE.CONVERT_TEXT),
            description: t("Text to speech"),
            enabled: featuresState[FEATURE.CONVERT_TEXT],
          },
        ],
      },
      {
        label: t("QR Code"),
        href: genFeatureRoute(FEATURE.QRCODE),
        enabled: featuresState[FEATURE.QRCODE],
        content: [
          {
            label: t("url"),
            href: genFeatureRoute(FEATURE.QRCODE_URL),
            enabled: featuresState[FEATURE.QRCODE_URL],
          },
          {
            label: t("text"),
            href: genFeatureRoute(FEATURE.QRCODE_TEXT),
            enabled: featuresState[FEATURE.QRCODE_TEXT],
          },
          {
            label: t("email"),
            href: genFeatureRoute(FEATURE.QRCODE_EMAIL),
            enabled: featuresState[FEATURE.QRCODE_EMAIL],
          },
          {
            label: t("phone"),
            href: genFeatureRoute(FEATURE.QRCODE_PHONE),
            enabled: featuresState[FEATURE.QRCODE_PHONE],
          },
          {
            label: t("wifi"),
            href: genFeatureRoute(FEATURE.QRCODE_WIFI),
            enabled: featuresState[FEATURE.QRCODE_WIFI],
          },
          {
            label: t("location"),
            href: genFeatureRoute(FEATURE.QRCODE_LOCATION),
            enabled: featuresState[FEATURE.QRCODE_LOCATION],
          },
        ],
      },
    ];
  }, [featuresState, t]);

  return { navigations };
};

export default useNavigationItems;
