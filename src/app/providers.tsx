"use client";

import { createContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function usePrevious<T>(value: T) {
  let ref = useRef<T>(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const queryClient = new QueryClient();

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let media = window.matchMedia("(prefers-color-scheme: dark)");

    function onMediaChange() {
      let systemTheme = media.matches ? "dark" : "light";
      if (resolvedTheme === systemTheme) {
        setTheme("system");
      }
    }

    onMediaChange();
    media.addEventListener("change", onMediaChange);

    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}

export const AppContext = createContext<{ previousPathname?: string }>({});

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();
  let previousPathname = usePrevious(pathname);

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <QueryClientProvider client={queryClient}>
          <ThemeWatcher />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </AppContext.Provider>
  );
}
