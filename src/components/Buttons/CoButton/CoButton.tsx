"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import { FC } from "react";

import cl from "clsx";
import { useTranslations } from "next-intl";

import { CoButtonProps } from "@/components/Buttons/CoButton/types";
import SvgIcons from "@/components/common/SvgIcon/SvgIcons";
import { Button } from "@/components/ui/button";

const CoButton: FC<CoButtonProps> = ({
  children,
  icon,
  text,
  iconSize = "24px",
  className,
  type = "button",
  textProps = {
    target: undefined,
  },
  disabled,
  loading,
  ...props
}) => {
  const { target, ...textOption } = textProps;
  const t = useTranslations(target);

  const rootClass = cl("flex gap-2 w-full font-semibold", className);

  return (
    <Button disabled={loading || disabled} className={rootClass} type={type} {...props}>
      {loading && (
        <div className="flex h-[18px] w-[18px]">
          <ReloadIcon className="h-[18px] w-[18px] animate-spin" />
        </div>
      )}
      {icon && <SvgIcons color={"var(--primary)"} size={iconSize} name={icon} />}
      {text && !children && (
        <span className={"truncate leading-normal hover:text-clip"}>{t(text, textOption)}</span>
      )}
      {!text && children && (
        <span className={"truncate leading-normal hover:text-clip"}>{children}</span>
      )}
    </Button>
  );
};

export default CoButton;
