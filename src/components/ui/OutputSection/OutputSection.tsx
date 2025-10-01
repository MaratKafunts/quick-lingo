import { useTranslateSelectors } from "@/hooks/reduxHooks";
import React from "react";

interface Props {
	languageTo: string;
	translatedResult: string;
}

const OutputSection: React.FC<Props> = ({ languageTo, translatedResult }) => {
	const { loading } = useTranslateSelectors();
	return (
		<div className="relative box-content bg-gradient-to-r from-[#001252] to-[#56659A] text-white font-semibold rounded-2xl p-[0.5px] w-full h-full max-h-[300px]">
			<div className="p-5 flex w-full bg-[#556BBE] text-white rounded-2xl h-full max-h-[300px]">
				<span className="absolute text-white/80 text-sm pointer-events-none">{languageTo}</span>

				{loading ? (
					<div className="mt-8">
						<span className="loading loading-dots loading-md"></span>
					</div>
				) : (
					<textarea
						readOnly
						className="mt-8 mb-10 outline-none flex w-full text-white"
						value={translatedResult}
					/>
				)}
			</div>
		</div>
	);
};

export default OutputSection;
