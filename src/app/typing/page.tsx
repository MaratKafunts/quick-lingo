import Header from "@/components/common/Header/Header";
import BottomNav from "@/components/common/BottomNav/BottomNav";
import TranslateTypingSection from "@/features/TranslateTypingSection/TranslateTypingSection";
import LanguageSelector from "@/components/ui/LanguageSecetor/LanguageSelector";
import React from "react";

export default function Page() {
	return (
		<div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto] bg-[#141F47]">
			<header className="p-5">
				<Header />
			</header>
			<main className="mt-[5px] px-5 flex flex-col justify-evenly">
				<TranslateTypingSection />
				<LanguageSelector />
			</main>
			<BottomNav />
		</div>
	);
}
