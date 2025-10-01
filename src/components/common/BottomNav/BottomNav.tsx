"use client";
import BottomNavItem from "@/components/ui/BottomNavItem/BottomNavItem";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Nav } from "@/types/bottomNavType";
import { usePathname } from "next/navigation";

const navs: Nav[] = [
	{ to: "/home", name: "Home", Icon: HomeIcon },
	{ to: "/typing", name: "Typing", Icon: KeyboardIcon },
	{ to: "/audio", name: "Audio", Icon: VolumeUpIcon },
	{ to: "/capture", name: "Capture", Icon: PhotoCameraIcon },
];

export default function BottomNav() {
	const pathname = usePathname();
	return (
		<div className="h-16 mt-5 w-full bg-[#122053] px-5 flex items-center justify-around gap-6">
			{navs.map((nav) => (
				<BottomNavItem key={nav.to} nav={nav} pathname={pathname} />
			))}
		</div>
	);
}
