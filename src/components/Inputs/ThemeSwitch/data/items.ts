import { Item } from "@/components/Inputs/ThemeSwitch/types";

const className = "text-lg p-2 cursor-pointer";

export const items: Item[] = [
  {
    label: "Light",
    value: "light",
    className,
    divider: true,
  },
  {
    label: "Dark",
    value: "dark",
    className,
    divider: true,
  },
  {
    label: "System",
    value: "system",
    className,
  },
];
