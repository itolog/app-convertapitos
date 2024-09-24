export const supportedIcons = ["git", "google", "logo", "anonymous"] as const;
export type Icons = (typeof supportedIcons)[number];
