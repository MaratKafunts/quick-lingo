import React from "react";
import Link from "next/link";
import { Nav } from "@/types/bottomNavType";

interface Props {
	nav: Nav;
	pathname: string;
}

const BottomNavItem: React.FC<Props> = ({ nav, pathname }) => {
	const { Icon, name, to } = nav;
	return (
		<Link href={to} className="flex flex-col items-center gap-1 text-white/80">
			{pathname == to ? (
				<>
					<Icon className="!text-[30px] text-white" />
					<span className="text-xs text-white">{name}</span>
				</>
			) : (
				<>
					<Icon className="!text-[30px] text-[#556BBE]" />
					<span className="text-xs text-[#556BBE]">{name}</span>
				</>
			)}
		</Link>
	);
};

export default BottomNavItem;
