import { FC } from "react";

import { cn } from "@/lib/utils";

import SvgIcons from "@/components/common/SvgIcon/SvgIcons";

type Classes = {
  root?: string;
  icon?: string;
};

interface CoLogoProps {
  classes?: Classes;
}

const CoLogo: FC<CoLogoProps> = ({ classes }) => {
  return (
    <div className={cn("h-9 w-9", classes?.root)}>
      <SvgIcons name={"logo"} classes={{ root: classes?.icon }} />
    </div>
  );
};

export default CoLogo;
