import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer";
import Tool from "@/components/Tool";
import { ModeToggle } from "@/components/ModeToggle";
import DestinyIcon from "@/components/DestinyIcon";

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
      "https://twitter.com/BraytechHelp",
      "https://discord.com/invite/8jESWWX",
      "https://www.patreon.com/braytech",
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
    additionalLinks: [
      "https://twitter.com/ThisIsDIM",
      "https://www.reddit.com/r/DestinyItemManager/",
      "https://github.com/DestinyItemManager/DIM/",
      "https://discord.com/invite/UK2GWC7",
    ],
  },
  {
    name: "D2ArmorPicker",
    url: "https://d2armorpicker.com/#/",
    image: "/images/d2armorpicker.png",
    description:
      "D2ArmorPicker (or short D2AP) is a small web-app to quickly find armor that fits your desired stat requirements. It uses the armor in your vault, inventory and postmaster, calculates every possible variation and shows only those that fulfill the given requirements.",
    requiresLogin: true,
    additionalLinks: [
      "https://twitter.com/MijagoCoding/",
      "https://ko-fi.com/mijago",
      "https://discord.com/invite/7eFjeVbz2V",
    ],
  },
  {
    name: "D2Checkpoint.com",
    url: "https://d2checkpoint.com/",
    image: "/images/d2checkpoint.png",
    requiresLogin: false,
    description: <>Find checkpoits for raid and dungeon encouters</>,
    additionalLinks: [
      "https://discord.com/invite/d2checkpoint",
      "https://ko-fi.com/d2checkpoint",
    ],
  },
  {
    name: "light.gg",
    url: "https://www.light.gg/",
    image: "/images/light.gg.png",
    requiresLogin: false,
    description:
      "home of the most powerful Destiny 2 Database & Tools on the Internet",
    additionalLinks: [
      "https://twitter.com/lightdotgg",
      "https://discord.com/invite/pmHRd5U",
      "https://www.light.gg/account/patreon",
      "https://www.youtube.com/c/lightggdb",
    ],
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
    additionalLinks: ["https://discord.com/invite/Kfuqcw4msG"],
  },
  {
    name: "Destiny Recipes",
    description:
      "You can find here a list of helpful tools for Destiny 2. I like to call them recipes for success.",
    url: "https://destinyrecipes.com/",
    requiresLogin: true,
    image: "/images/destinyrecipes.png",
    additionalLinks: [
      "https://twitter.com/D2Recipes",
      "https://discord.com/invite/cX8R6wPRB8",
      "https://ko-fi.com/alanbalbo",
    ],
  },
  {
    name: "D2 Checklist",
    url: "https://www.d2checklist.com/",
    image: "/images/d2checklist.png",
    requiresLogin: true,
    description:
      "D2Checklist uses the Bungie API to help make achieving your goals in Destiny easier and more fun.",
    additionalLinks: [
      "https://www.reddit.com/r/destinychecklistnet/",
      "https://github.com/dcaslin/d2-checklist/",
      "https://twitter.com/D2Checklist",
      "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VBASBDZD7HAHS",
    ],
  },
  {
    name: "Ishtar Collective",
    url: "https://www.ishtar-collective.net/",
    image: "/images/ishtar-collective.png",
    requiresLogin: false,
    description:
      "Our goal is to collect, organize and summarize any information that could be useful to the research being carried out by Ishtar Collective personnel.",
    additionalLinks: [
      "https://twitter.com/IshtarColl",
      "https://www.patreon.com/ishtarcollective",
      "https://commons.ishtar-collective.net/",
      "https://errata.ishtar-collective.net/",
      "https://discord.com/invite/R33Wncn",
      "https://ishtar-collective.tumblr.com/",
    ],
  },
  {
    name: "raid.report",
    url: "https://raid.report",
    image: "/images/raid.report.png",
    description: "Show raid completions and stats",
    requiresLogin: false,
    additionalLinks: [
      "https://twitter.com/RaidReport",
      "https://dungeon.report/",
    ],
  },

  {
    name: "TodayInDestiny",
    url: "https://todayindestiny.com/",
    description: "What should we do today Guardian?",
    image: "/images/todayindestiny.png",
    requiresLogin: false,
    additionalLinks: [
      "https://www.patreon.com/todayindestiny",
      "https://ko-fi.com/JpDeathBlade",
    ],
  },
  {
    name: "Where is Xur?",
    url: "https://whereisxur.com/",
    image: "/images/whereisxur.png",
    description: 'Nobody ever asks "How is Xur?"',
    requiresLogin: false,
    additionalLinks: [
      "https://twitter.com/xurwatchlive",
      "https://www.twitch.tv/whereisxur",
      "https://www.youtube.com/whereisxurnow",
      "https://discord.com/invite/ZgudXPZ",
    ],
  },
  {
    name: "bungie.net",
    url: "https://www.bungie.net/7",
    image: "/images/bungie.png",
    description: "the home of destiny 2",
    requiresLogin: true,
    additionalLinks: [
      "https://twitter.com/bungie",
      "https://twitter.com/destinythegame",
    ],
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
        <header className="backdrop-blur-sm fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 sm:px-6 lg:z-30 lg:px-8 border-b dark:border-b-white/7.5">
          <div className="flex items-left gap-5">
            <DestinyIcon className="h-7 w-7 dark:fill-white fill-black" />
            <h1 className="pl-4 text-2xl font-bold dark:text-white">
              Destiny 2 Tools
            </h1>
          </div>
          <div className="flex items-right gap-5">
            <ModeToggle />
          </div>
        </header>

        <div className="m-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <div className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 mx-auto sm:max-w-2xl sm:grid-cols-1 sm:px-0 lg:grid-flow-row lg:grid-cols-1">
            <div>
              <div className="flex justify-center items-center">
                <DestinyIcon className="w-28 h-28 dark:fill-white fill-gray-900" />
              </div>
              <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-center tracking-tight whitespace-normal ">
                Destiny 2 Tools
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-white whitespace-normal lg:text-center">
                A list of valuable resources for every Guardian.
              </p>
              <p>
                <p className="mt-6 text leading-8 text-gray-600 dark:text-white whitespace-normal">
                  Destiny 2 is an enourmous game that can be overwhelming for
                  new players.
                  <br />
                  We aim to create an exhaustive list of all the tools that will
                  help to make the most out of the game.
                </p>
              </p>
            </div>
          </div>
          <ul
            role="list"
            className="lg:col-span-2 xl:col-span-3 2xl:col-span-4 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
          >
            {tools.map((tool) => (
              <Tool key={tool.name} tool={tool} />
            ))}
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
}
