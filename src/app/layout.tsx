import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ModeToggle } from "@/components/ModeToggle";
import DestinyIcon from "@/components/DestinyIcon";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

import "../styles/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destiny 2 Toolbox",
  description: "everything every guardians needs every day",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <head />
      <body className="bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <main>
            <header className="dark:border-b-white/7.5 backdrop-blur-xs fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b px-4 sm:px-6 lg:z-30 lg:px-8">
              <div className="items-left flex gap-5">
                <Link href="/">
                  <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
                </Link>
                <h1 className="pl-4 text-2xl font-bold dark:text-white">
                  <Link href="/">Destiny 2 Tools</Link>
                </h1>
              </div>
              <div className="items-right flex gap-5">
                <ModeToggle />
              </div>
            </header>
            <div className="m-14 mt-20">{children}</div>
            <Footer />
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
