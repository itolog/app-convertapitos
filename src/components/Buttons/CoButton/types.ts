import { TextProps } from "@/types/buttonsTypes";

import { Icons } from "@/components/common/SvgIcon/types";
import { ButtonProps } from "@/components/common/ui/button";

export interface CoButtonProps extends ButtonProps {
  icon?: Icons;
  text?: string;
  textProps?: TextProps;
  iconSize?: string;
  loading?: boolean;
}
