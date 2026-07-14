"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "@/components/providers/ThemeProvider";

function usePrevious<T>(value: T) {
	const ref = useRef<T>(value);

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
}

const queryClient = new QueryClient();

function ThemeWatcher() {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)");

		function onMediaChange() {
			const systemTheme = media.matches ? "dark" : "light";
			if (theme === systemTheme) {
				setTheme("system");
			}
		}

		onMediaChange();
		media.addEventListener("change", onMediaChange);

		return () => {
			media.removeEventListener("change", onMediaChange);
		};
	}, [theme, setTheme]);

	return null;
}

export const AppContext = createContext<{ previousPathname?: string }>({});

export function Providers({ children }: { children: React.ReactNode }) {
	// let pathname = usePathname();
	const pathname = "";
	const previousPathname = usePrevious(pathname);

	return (
		<AppContext.Provider value={{ previousPathname }}>
			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<QueryClientProvider client={queryClient}>
					<ThemeWatcher />
					{children}
				</QueryClientProvider>
			</ThemeProvider>
		</AppContext.Provider>
	);
}
