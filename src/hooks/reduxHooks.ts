import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/store/index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTranslateSelectors = () => {
	const languageFrom = useAppSelector((s: RootState) => s.translate.languageFrom);
	const languageTo = useAppSelector((s: RootState) => s.translate.languageTo);
	const textFrom = useAppSelector((s: RootState) => s.translate.textFrom);
	const textTo = useAppSelector((s: RootState) => s.translate.textTo);
	const loading = useAppSelector((s: RootState) => s.translate.loading);

	return { languageFrom, languageTo, textFrom, textTo, loading };
};

export const useLanguageSelectors = () => {
	const languages = useAppSelector((s: RootState) => s.languages.languages);

	return { languages };
};
