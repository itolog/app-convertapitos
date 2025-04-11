export const supportedIcons = ["git", "google", "logo", "anonymous", "linkedin"] as const;

export type Icons = (typeof supportedIcons)[number];
