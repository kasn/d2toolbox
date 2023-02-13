import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { ReactElement } from "react";
import Footer from "@/components/Footer";
import Tool from "@/components/Tool";
import Destiny from "@/components/svg/destiny.svg";

const inter = Inter({ subsets: ["latin"] });

const tools: Array<TTool> = [
  {
    name: "BRAYTECH",
    url: "https://bray.tech/",
    image: "/images/braytech.png",
    requiresLogin: true,
    description: (
      <>
        Explore Destiny through Braytech for sweet gains and insight into your
        fights against the forces of Darkness
      </>
    ),
    additionalLinks: [
      {
        url: "https://twitter.com/BraytechHelp",
        type: "twitter",
      },
    ],
  },
  {
    name: "Destiny Item Manager",
    url: "https://app.destinyitemmanager.com/",
    image: "/images/dim.png",
    requiresLogin: true,
    description: (
      <>
        Control Your Items Your Way.
        <br />
        Swap items, check stats, and build the loadout to Become Legend with
        Destiny Item Manager.
      </>
    ),
  },
  {
    name: "D2Checkpoint.com",
    url: "https://d2checkpoint.com/",
    image: "/images/d2checkpoint.png",
    requiresLogin: false,
    description: <>Find checkpoits for raid and dungeon encouters</>,
  },
  {
    name: "light.gg",
    url: "https://www.light.gg/",
    image: "/images/light.gg.png",
    requiresLogin: false,
    description:
      "home of the most powerful Destiny 2 Database & Tools on the Internet",
  },
  {
    name: "engram.blue",
    url: "https://engram.blue/",
    image: "/images/engram.blue.png",
    requiresLogin: true,
    description: (
      <>
        Track your progress for weapon pattern unlocks and crafted weapon levels
        <br />
        King’s Fall Deepsight puzzle helper
        <br />
        Vow of the Disciple Deepsight puzzle helper
        <br />
        How well do you know your vault?
        <br />
        Browse Wishlist recommendations for weapons
      </>
    ),
  },
  {
    name: "Ishtar Collective",
    url: "https://www.ishtar-collective.net/",
    image: "/images/ishtar-collective.png",
    requiresLogin: false,
    description:
      "Our goal is to collect, organize and summarize any information that could be useful to the research being carried out by Ishtar Collective personnel.",
  },
  {
    name: "raid.report",
    url: "https://raid.report",
    image: "/images/raid.report.png",
    description: "Show raid completions and stats",
    requiresLogin: false,
  },
  {
    name: "today in Destiny",
    url: "https://todayindestiny.com/",
    description: "What should we do today Guardian?",
    image: "/images/todayindestiny.png",
    requiresLogin: false,
  },
  {
    name: "Where is Xur?",
    url: "https://whereisxur.com/",
    image: "/images/whereisxur.png",
    description: 'Nobody ever asks "How is Xur?"',
    requiresLogin: false,
  },
  {
    name: "D2ArmorPicker",
    url: "https://d2armorpicker.com/#/",
    image: "/images/d2armorpicker.png",
    description:
      "D2ArmorPicker (or short D2AP) is a small web-app to quickly find armor that fits your desired stat requirements. It uses the armor in your vault, inventory and postmaster, calculates every possible variation and shows only those that fulfill the given requirements.",
    requiresLogin: true,
  },
  {
    name: "bungie.net",
    url: "https://www.bungie.net/7",
    image: "/images/bungie.png",
    description: "the home of destiny 2",
    requiresLogin: true,
  },
];

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
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <Destiny
                  fill="#000"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
                Destiny 2 Tools
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A list of valuable tools for every Guardian.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {tools.map((tool) => (
                <Tool key={tool.name} tool={tool} />
              ))}
            </ul>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
