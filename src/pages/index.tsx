import Head from "next/head";
import Footer from "@/components/Footer";
import Tool from "@/components/Tool";
import { ModeToggle } from "@/components/ModeToggle";
import DestinyIcon from "@/components/DestinyIcon";
import { tools } from "../data";

const activeTools = tools.filter((tool) => tool.active);

export default function Home() {
  return (
    <>
      <Head>
        <title>Destiny 2 Tools</title>
        <meta
          name="description"
          content="everything every guardians needs every day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="dark:border-b-white/7.5 fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b px-4 backdrop-blur-xs sm:px-6 lg:z-30 lg:px-8">
          <div className="items-left flex gap-5">
            <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
            <h1 className="pl-4 text-2xl font-bold dark:text-white">
              Destiny 2 Tools
            </h1>
          </div>
          <div className="items-right flex gap-5">
            <ModeToggle />
          </div>
        </header>

        <ul
          role="list"
          className="m-14 mt-20 grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 2xl:grid-cols-4 not-focus-visible:focus:outline-hidden"
        >
          {activeTools.map((tool) => (
            <Tool key={tool.name} tool={tool} />
          ))}
        </ul>
        <Footer />
      </main>
    </>
  );
}
