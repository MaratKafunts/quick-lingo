"use client";
import { useAppDispatch, useLanguageSelectors } from "@/hooks/reduxHooks";
import { fetchLanguages } from "@/store/slices/languagesSlice";
import React, { useEffect, useState } from "react";

interface Props {
	setIsOpen: (value: boolean) => void;
	selectedLang: string;
	onSelect: (lang: string) => void;
}

const LanguageDropdown: React.FC<Props> = ({ setIsOpen, selectedLang, onSelect }) => {
	const dispatch = useAppDispatch();
	const { languages } = useLanguageSelectors();
	const [query, setQuery] = useState(selectedLang);

	useEffect(() => {
		if (!languages.length) {
			dispatch(fetchLanguages());
		}
	}, [dispatch, languages.length]);

	return (
		<div className="fixed inset-0 bg-[#141F47]/90 z-50 flex flex-col p-6">
			<input
				autoFocus
				type="text"
				placeholder="Search language..."
				className="p-4 mb-4 rounded-lg text-white outline-none"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
			/>

			<div className="overflow-y-auto flex-1">
				{languages
					.filter((lang) => lang.language.toLowerCase().includes(query.toLowerCase()))
					.map((lang) => (
						<button
							key={lang.code}
							onClick={() => {
								onSelect(lang.language);
								setIsOpen(false);
							}}
							className="block w-full text-left px-4 py-2 text-white hover:bg-white/20 rounded"
						>
							{lang.language}
						</button>
					))}
			</div>

			<button
				onClick={() => setIsOpen(false)}
				className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
			>
				Close
			</button>
		</div>
	);
};

export default LanguageDropdown;
