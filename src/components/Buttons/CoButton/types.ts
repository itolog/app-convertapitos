import { TextProps } from "@/types/buttonsTypes";

import { ButtonProps } from "@/components/ui/button";
import { Icons } from "@/components/ui/SvgIcon/types";

export interface CoButtonProps extends ButtonProps {
  icon?: Icons;
  text?: string;
  textProps?: TextProps;
  iconSize?: string;
  loading?: boolean;
}
