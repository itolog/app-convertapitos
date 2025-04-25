export const supportedIcons = ["git", "google", "logo", "linkedin"] as const;

export type Icons = (typeof supportedIcons)[number];
