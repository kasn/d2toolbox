import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/app/providers";

import "@/styles/globals.css";

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
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
