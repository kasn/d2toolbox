import { Providers } from "@/components/Providers";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/layout/Header";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Destiny 2 Tools" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <head>
        <HeadContent />
      </head>
      <body className="page-atmosphere bg-white antialiased dark:bg-zinc-950">
        <Providers>
          <main>
            <Header />
            <div className="mx-auto max-w-screen-2xl px-6 pb-14 pt-24 lg:px-12">
              <Outlet />
            </div>
            <Footer />
          </main>
        </Providers>
        <Scripts />
      </body>
    </html>
  );
}
