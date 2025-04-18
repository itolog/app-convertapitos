import { FileBox, QrCode } from "lucide-react";
import { ReactNode, useMemo } from "react";

import { useTranslations } from "next-intl";

import { FEATURE } from "@/types/features";

import { buildTree } from "@/utils/buildTree";
import { genFeatureRoute } from "@/utils/features";

import { getFeatures } from "@/store/features/selectors";
import { useAppSelector } from "@/store/hooks";

export type NavigationItem = {
  id: string;
  parentId: string | null;
  href: string;
  label: string;
  enabled: boolean;
  description?: string;
  icon?: ReactNode;
  children?: NavigationItem[];
};

const iconClassName = "stroke-current";

const useNavigationItems = () => {
  const t = useTranslations();
  const featuresState = useAppSelector(getFeatures);

  const navigationItems: NavigationItem[] = useMemo(() => {
    return [
      {
        id: FEATURE.CONVERT,
        parentId: null,
        label: t("Convert"),
        href: genFeatureRoute(FEATURE.CONVERT),
        description: t("File Conversion and Generation"),
        enabled: featuresState[FEATURE.CONVERT],
        icon: <FileBox className={iconClassName} />,
      },
      {
        id: FEATURE.CONVERT_IMAGE,
        parentId: FEATURE.CONVERT,
        label: t("Image"),
        href: genFeatureRoute(FEATURE.CONVERT_IMAGE),
        description: t("Image conversion"),
        enabled: featuresState[FEATURE.CONVERT_IMAGE],
      },
      {
        id: FEATURE.CONVERT_TEXT,
        parentId: FEATURE.CONVERT,
        label: t("Text"),
        href: genFeatureRoute(FEATURE.CONVERT_TEXT),
        description: t("Text to speech"),
        enabled: featuresState[FEATURE.CONVERT_TEXT],
      },
      // qr code
      {
        id: FEATURE.QRCODE,
        parentId: null,
        label: t("QR Code"),
        href: genFeatureRoute(FEATURE.QRCODE),
        description: t("QR Code generator"),
        enabled: featuresState[FEATURE.QRCODE],
        icon: <QrCode className={iconClassName} />,
      },

      {
        id: FEATURE.QRCODE_URL,
        parentId: FEATURE.QRCODE,
        label: t("url"),
        href: genFeatureRoute(FEATURE.QRCODE_URL),
        enabled: featuresState[FEATURE.QRCODE_URL],
      },
      {
        id: FEATURE.QRCODE_TEXT,
        parentId: FEATURE.QRCODE,
        label: t("text"),
        href: genFeatureRoute(FEATURE.QRCODE_TEXT),
        enabled: featuresState[FEATURE.QRCODE_TEXT],
      },
      {
        id: FEATURE.QRCODE_EMAIL,
        parentId: FEATURE.QRCODE,
        label: t("email"),
        href: genFeatureRoute(FEATURE.QRCODE_EMAIL),
        enabled: featuresState[FEATURE.QRCODE_EMAIL],
      },
      {
        id: FEATURE.QRCODE_PHONE,
        parentId: FEATURE.QRCODE,
        label: t("phone"),
        href: genFeatureRoute(FEATURE.QRCODE_PHONE),
        enabled: featuresState[FEATURE.QRCODE_PHONE],
      },
      {
        id: FEATURE.QRCODE_WIFI,
        parentId: FEATURE.QRCODE,
        label: t("wifi"),
        href: genFeatureRoute(FEATURE.QRCODE_WIFI),
        enabled: featuresState[FEATURE.QRCODE_WIFI],
      },
      {
        id: FEATURE.QRCODE_LOCATION,
        parentId: FEATURE.QRCODE,
        label: t("location"),
        href: genFeatureRoute(FEATURE.QRCODE_LOCATION),
        enabled: featuresState[FEATURE.QRCODE_LOCATION],
      },
    ];
  }, [featuresState, t]);

  const navigations = useMemo(() => {
    return buildTree(navigationItems);
  }, [navigationItems]);

  return { navigations, navigationItems };
};

export default useNavigationItems;
