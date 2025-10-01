"use client";
import React, { useEffect, useState } from "react";
import SunnyIcon from "@mui/icons-material/Sunny";
import { useTheme } from "next-themes";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const ThemeSwitcher = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const isDark = resolvedTheme === "dark";

	return (
		<button
			aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
			aria-pressed={isDark}
			title={`Switch to ${isDark ? "light" : "dark"} theme`}
			type="button"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="focus:outline-none
			focus-visible:ring-2 focus-visible:ring-white/70
			focus-visible:ring-offset-2 focus-visible:ring-offset-[#141F47]
			cursor-pointer box-content bg-gradient-to-r from-[rgb(101,115,169)] to-[#001252] text-white font-semibold rounded-2xl p-[0.5px] w-14 h-5"
		>
			<div className="relative flex w-14 h-5 bg-gradient-to-r from-[#1F347D] to-[#1C2D6B] text-white rounded-2xl p-2">
				<div
					className={`transition-all duration-300 pointer-events-none inset-shadow-sm inset-shadow-indigo-500/50 flex justify-center items-center absolute ease-out
    						${isDark ? "translate-x-[14px]" : "translate-x-0"}	
					} top-1/2 -translate-y-1/2
					 w-[28px] h-[28px] rounded-full bg-[#152F8D]`}
				>
					{isDark ? <BedtimeIcon className="!text-[17px]" /> : <SunnyIcon className="!text-[17px]" />}
				</div>
			</div>
		</button>
	);
};

export default ThemeSwitcher;
