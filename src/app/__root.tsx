import { Providers } from "@/app/providers";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
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
      { title: "Destiny 2 Tools" }
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <head>
        <HeadContent />
      </head>
      <body className="bg-white antialiased dark:bg-zinc-900">
        <main>
          <Header />        
          {/* <Providers> */}
          <div className="m-14 mt-20">
            <Outlet />
          </div>
          <Footer />
        </main>          
        {/* </Providers> */}
        <Scripts />
      </body>
    </html>
  );
}
