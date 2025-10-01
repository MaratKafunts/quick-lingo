import "@/globals.css";
import { Providers } from "./Providers";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-[#141F47]">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Providers>{children}</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
