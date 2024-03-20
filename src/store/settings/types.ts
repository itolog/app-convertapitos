export type Theme = "dark" | "light" | "system-dark" | "system-light";
export type ThemeOptions = "dark" | "light" | "system";

export interface SettingsState {
	theme: Theme;
}
