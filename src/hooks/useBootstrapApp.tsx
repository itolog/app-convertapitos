import useTheme from "@/hooks/settings/useTheme.tsx";
import useCurrentLocale from "@/hooks/translations/useCurrentLocale.tsx";

const useBootstrapApp = () => {
	useTheme();
	useCurrentLocale();
};

export default useBootstrapApp;
