export const tools: Array<TTool> = [
  {
    name: "Reminder",
    url: "https://www.light.gg/db/items/472776702/starfarer-7m/",
    image: { src: "/images/starfarer.png", width: 700, height: 527 },
    requiresLogin: false,
    description: <>Equip the Starfarer 7M for extra dawning spirit</>,
    active: false,
  },
  {
    name: "BRAYTECH",
    url: "https://bray.tech/",
    image: { src: "/images/braytech.png", width: 700, height: 527 },
    requiresLogin: true,
    description: (
      <>
        Explore Destiny through Braytech for sweet gains and insight into your
        fights against the forces of Darkness
      </>
    ),
    additionalLinks: [
      "https://www.threads.net/@braytechapp",
      "https://discord.com/invite/8jESWWX",
      "https://www.patreon.com/braytech",
      "https://www.paypal.com/paypalme/braytechltd",
    ],
    active: true,
  },
  {
    name: "Destiny Item Manager",
    url: "https://app.destinyitemmanager.com/",
    image: { src: "/images/dim.png", width: 700, height: 552 },
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
      "https://mstdn.games/@ThisIsDIM",
      "https://www.reddit.com/r/DestinyItemManager/",
      "https://github.com/DestinyItemManager/DIM/",
      "https://discord.com/invite/UK2GWC7",
    ],
    active: true,
  },
  {
    name: "D2ArmorPicker",
    url: "https://d2armorpicker.com/#/",
    image: { src: "/images/d2armorpicker.png", width: 700, height: 552 },
    description:
      "D2ArmorPicker (or short D2AP) is a small web-app to quickly find armor that fits your desired stat requirements. It uses the armor in your vault, inventory and postmaster, calculates every possible variation and shows only those that fulfill the given requirements.",
    requiresLogin: true,
    additionalLinks: [
      "https://twitter.com/MijagoCoding/",
      "https://ko-fi.com/mijago",
      "https://discord.com/invite/7eFjeVbz2V",
    ],
    active: true,
  },
  {
    name: "D2Checkpoint.com",
    url: "https://d2checkpoint.com/",
    image: { src: "/images/d2checkpoint.png", width: 700, height: 627 },
    requiresLogin: false,
    description: <>Find checkpoits for raid and dungeon encouters</>,
    additionalLinks: [
      "https://discord.com/invite/d2checkpoint",
      "https://ko-fi.com/d2checkpoint",
    ],
    active: true,
  },
  {
    name: "light.gg",
    url: "https://www.light.gg/",
    image: { src: "/images/light.gg.png", width: 700, height: 552 },
    requiresLogin: false,
    description:
      "home of the most powerful Destiny 2 Database & Tools on the Internet",
    additionalLinks: [
      "https://twitter.com/lightdotgg",
      "https://discord.com/invite/pmHRd5U",
      "https://www.light.gg/account/patreon",
      "https://www.youtube.com/c/lightggdb",
    ],
    active: true,
  },
  {
    name: "Foundry",
    url: "https://d2foundry.gg/",
    image: { src: "/images/d2foundry.png", width: 700, height: 472 },
    requiresLogin: true,
    description: "Your companion to Destiny 2 weapons and perks.",
    active: true,
    additionalLinks: [
      "https://bsky.app/profile/gothfem.me",
      "https://discord.com/invite/dzW2DZBBQH",
      "https://ko-fi.com/gothfemme",
    ],
  },
  {
    name: "engram.blue",
    url: "https://engram.blue/",
    image: { src: "/images/engram.blue.png", width: 700, height: 552 },
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
    active: true,
  },
  {
    name: "Destiny Recipes",
    description:
      "You can find here a list of helpful tools for Destiny 2. I like to call them recipes for success.",
    url: "https://destinyrecipes.com/",
    requiresLogin: true,
    image: { src: "/images/destinyrecipes.png", width: 700, height: 627 },
    additionalLinks: [
      "https://twitter.com/D2Recipes",
      "https://discord.com/invite/cX8R6wPRB8",
      "https://ko-fi.com/alanbalbo",
    ],
    active: true,
  },
  {
    name: "D2 Checklist",
    url: "https://www.d2checklist.com/",
    image: { src: "/images/d2checklist.png", width: 700, height: 627 },
    requiresLogin: true,
    description:
      "D2Checklist uses the Bungie API to help make achieving your goals in Destiny easier and more fun.",
    additionalLinks: [
      "https://www.reddit.com/r/destinychecklistnet/",
      "https://github.com/dcaslin/d2-checklist/",
      "https://twitter.com/D2Checklist",
      "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=VBASBDZD7HAHS",
    ],
    active: true,
  },
  {
    name: "Ishtar Collective",
    url: "https://www.ishtar-collective.net/",
    image: { src: "/images/ishtar-collective.png", width: 700, height: 527 },
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
    active: true,
  },
  {
    name: "raid.report",
    url: "https://raid.report",
    image: { src: "/images/raid.report.png", width: 700, height: 552 },
    description: "Show raid completions and stats",
    requiresLogin: false,
    additionalLinks: [
      "https://twitter.com/RaidReport",
      "https://dungeon.report/",
    ],
    active: true,
  },

  {
    name: "TodayInDestiny",
    url: "https://todayindestiny.com/",
    description: "What should we do today Guardian?",
    image: { src: "/images/todayindestiny.png", width: 700, height: 552 },
    requiresLogin: false,
    additionalLinks: [
      "https://www.patreon.com/todayindestiny",
      "https://ko-fi.com/JpDeathBlade",
    ],
    active: true,
  },
  {
    name: "D2 Synergy",
    url: "https://d2synergy.com/",
    image: { src: "/images/d2synergy.png", width: 700, height: 552 },
    description:
      "Synergy groups progressions together and gives recommendations for optimal progression.",
    requiresLogin: true,
    additionalLinks: [
      "https://github.com/dev-brendanprice/D2-Synergy",
      "https://twitter.com/_brendanprice",
    ],
    active: true,
  },
  {
    name: "Aegis Spreadsheets",
    url: "https://drive.google.com/drive/folders/1AL3GM6rSSrm4LtSZeayxpSUsvSJdsiU3",
    image: { src: "/images/aegis.png", width: 700, height: 527 },
    description:
      "Boss Damage, Boss Health and endgame analysis. Exhaustive and detailed breakdown of all possible damage numbers",
    requiresLogin: false,
    additionalLinks: [
      "https://www.youtube.com/@TheAegisRelic",
      "twitch.tv/TheAegisRelic",
    ],
    active: true,
  },
  {
    name: "Where is Xur?",
    url: "https://whereisxur.com/",
    image: { src: "/images/whereisxur.png", width: 700, height: 552 },
    description: 'Nobody ever asks "How is Xur?"',
    requiresLogin: false,
    additionalLinks: [
      "https://twitter.com/xurwatchlive",
      "https://www.twitch.tv/whereisxur",
      "https://www.youtube.com/whereisxurnow",
      "https://discord.com/invite/ZgudXPZ",
    ],
    active: true,
  },
  {
    name: "bungie.net",
    url: "https://www.bungie.net/7",
    image: { src: "/images/bungie.png", width: 700, height: 527 },
    description: "the home of destiny 2",
    requiresLogin: true,
    additionalLinks: [
      "https://twitter.com/bungie",
      "https://twitter.com/destinythegame",
    ],
    active: true,
  },
];
