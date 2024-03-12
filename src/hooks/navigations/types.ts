import { LinkProps } from "@tanstack/react-router";

export type Label = "Home" | "Api";
export interface NavigationItem extends LinkProps {
  label: Label;
}
