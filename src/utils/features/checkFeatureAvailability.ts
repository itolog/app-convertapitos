import { NavigationItem } from "@/hooks/navigations/useNavigationItems";

export const checkFeatureAvailability = (item: NavigationItem) => {
  return !item.enabled || item.children?.every((i) => !i.enabled);
};
