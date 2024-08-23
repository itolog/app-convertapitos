export const supportedIcons = ["git", "google"] as const;
export type Icons = (typeof supportedIcons)[number];
