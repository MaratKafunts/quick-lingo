"use client";
import { useAppDispatch, useTranslateSelectors } from "@/hooks/reduxHooks";
import { useDebouncedText } from "@/hooks/useDebouncedText";
import { translateText } from "@/store/slices/translateSlice";
import InputSection from "@/components/ui/InputSection/InputSection";
import OutputSection from "@/components/ui/OutputSection/OutputSection";
import React, { useEffect } from "react";

const TranslateTypingSection = () => {
	const { languageFrom, languageTo, textFrom, textTo } = useTranslateSelectors();
	const dispatch = useAppDispatch();
	const fromLanguage = languageFrom?.language ?? "Choose Language";
	const toLanguage = languageTo?.language ?? "";
	const fromCode = languageFrom?.code ?? "";
	const toCode = languageTo?.code ?? "";

	const debouncedText = useDebouncedText(textFrom, 400);

	useEffect(() => {
		if (!debouncedText.trim() || !fromCode || !toCode) return;
		const id = setTimeout(() => {
			dispatch(translateText({ from: fromCode, to: toCode, text: textFrom }));
		}, 400);
		return () => clearTimeout(id);
	}, [dispatch, textFrom, fromCode, toCode, debouncedText]);

	return (
		<>
			<InputSection languageFrom={fromLanguage} />
			<OutputSection languageTo={toLanguage} translatedResult={textTo} />
		</>
	);
};

export default TranslateTypingSection;
