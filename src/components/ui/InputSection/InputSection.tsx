"use client";
import React, { useRef } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import useSpeak from "@/hooks/useSpeak";
import { setTextFrom, clearTextTo } from "@/store/slices/translateSlice";
import { useAppDispatch, useTranslateSelectors } from "@/hooks/reduxHooks";

interface Props {
	languageFrom: string;
}

const InputSection: React.FC<Props> = ({ languageFrom }) => {
	const { textFrom } = useTranslateSelectors();
	const speak = useSpeak();
	const dispatch = useAppDispatch();
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const setAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value;
		if (!value.trim()) dispatch(clearTextTo());
		dispatch(setTextFrom(value));
	};

	return (
		<div className="relative box-content bg-gradient-to-r from-[#001252] to-[#56659A] text-white font-semibold rounded-2xl p-[0.5px] w-full h-full max-h-[300px] mb-5">
			<div
				onClick={() => textareaRef.current?.focus()}
				className="mb-5 p-5 flex w-full bg-gradient-to-br from-[#1C2D6B] via-transparent to-[#1C2D6B] border-none text-white rounded-2xl h-full max-h-[300px]"
			>
				<span className="absolute text-white/80 text-sm pointer-events-none">{languageFrom}</span>

				<textarea
					ref={textareaRef}
					onChange={setAreaValue}
					value={textFrom}
					className="mt-8 mb-10 outline-none flex w-full border-none text-white"
				/>

				<span
					className="absolute bottom-6 right-4 text-white/80 text-sm cursor-pointer"
					onClick={(e) => {
						e.stopPropagation();
						speak(textFrom);
					}}
				>
					<VolumeUpIcon />
				</span>
			</div>
		</div>
	);
};

export default InputSection;
