export const supportedIcons = ["git", "google", "logo"] as const;

export type Icons = (typeof supportedIcons)[number];
