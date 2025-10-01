"use client";
import CachedIcon from "@mui/icons-material/Cached";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { setLanguageFrom, setLanguageTo, setSwapLanguages } from "@/store/slices/translateSlice";
import { useAppDispatch, useLanguageSelectors, useTranslateSelectors } from "@/hooks/reduxHooks";

type ActiveField = "from" | "to";

const LanguageSelector = () => {
	const dispatch = useAppDispatch();
	const { languageFrom, languageTo } = useTranslateSelectors();
	const { languages } = useLanguageSelectors();
	const [isOpen, setIsOpen] = useState(false);
	const [activeField, setActiveField] = useState<ActiveField>("from");

	return (
		<div className="flex relative">
			<div className="w-1/2 h-[51px] bg-[#1A254F] rounded-tl-4xl rounded-bl-4xl flex items-center mt-9">
				<input
					type="text"
					value={languageFrom?.language}
					onClick={() => {
						setActiveField("from");
						setIsOpen(true);
					}}
					readOnly
					placeholder="Choose"
					className="w-full flex justify-center items-center bg-transparent outline-none text-center text-white placeholder-white/70 cursor-pointer"
				/>
			</div>

			<div
				onClick={() => dispatch(setSwapLanguages())}
				className="inset-shadow-sm inset-shadow-indigo-500/50 flex justify-center items-center absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 w-[65px] h-[65px] rounded-full bg-[#152F8D]"
			>
				<CachedIcon className="text-white" />
			</div>

			<div className=" w-1/2 h-[51px] bg-[#1A254F] rounded-tr-4xl rounded-br-4xl flex items-center mt-9">
				<input
					type="text"
					value={languageTo?.language}
					onClick={() => {
						setActiveField("to");
						setIsOpen(true);
					}}
					readOnly
					placeholder="Choose"
					className="w-full flex justify-center items-center bg-transparent outline-none text-center text-white placeholder-white/70 cursor-pointer"
				/>
			</div>

			{isOpen && (
				<LanguageDropdown
					setIsOpen={setIsOpen}
					selectedLang={(activeField === "from" ? languageFrom?.language : languageTo?.language) || ""}
					onSelect={(langName) => {
						const selected = languages.find((l) => l.language === langName);
						if (activeField === "from") {
							if (selected?.language === languageTo?.language) {
								const filtered = languages.filter((l) => l.language !== langName);
								const randomLang = filtered[Math.floor(Math.random() * filtered.length)];
								dispatch(setLanguageFrom(randomLang));
							} else {
								dispatch(setLanguageFrom(selected));
							}
						} else {
							if (selected?.language === languageFrom?.language) {
								const filtered = languages.filter((l) => l.language !== langName);
								const randomLang = filtered[Math.floor(Math.random() * filtered.length)];
								dispatch(setLanguageTo(randomLang));
							} else {
								dispatch(setLanguageTo(selected));
							}
						}
					}}
				/>
			)}
		</div>
	);
};

export default LanguageSelector;
