import { chromium, type BrowserContext } from "playwright";
import { tools } from "./../src/data";

const toolsToScan = tools
  .filter((tool: TTool) => tool.active)
  .filter((tool: TTool) => tool.crawl)
;

const PROFILE = "./d2-profile";
const VIEWPORT = { width: 1500, height: 1000 };
const SCALE = 2; // retina-crisp; same for every shot


async function open(headless: boolean): Promise<BrowserContext> {
  return chromium.launchPersistentContext(PROFILE, {
    headless,
    channel: "chrome", // real Chrome — Steam login can reject bundled Chromium
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
  });
}

// 1) ONE-TIME: `node shot.js --login`
// Opens headed, you log into Steam + Bungie, then click-authorize each tool once.
async function bootstrap() {
  const ctx = await open(false);
  const page = await ctx.newPage();
  await page.goto("https://www.bungie.net/en/User/SignIn");
  console.log("Log into Steam + Bungie, authorize the tools.");
  console.log("When done, come back here and press Enter (do NOT Ctrl-C — profile won't flush).");
  await new Promise<void>((resolve) => process.stdin.once("data", () => resolve()));
  await ctx.close(); // clean shutdown = cookies + localStorage written to disk
  process.exit(0);
}

function waitForEnter(msg: string): Promise<string> {
  console.log(msg);
  return new Promise((resolve) =>
    process.stdin.once("data", (d) => resolve(d.toString().trim())),
  );
}

// 2) REPEATABLE: `node shot.js`
// Opens each tool, you log in / navigate wherever you want, then press Enter to shoot.
async function capture() {
  const ctx = await open(false);
  const page = await ctx.newPage();
  for (const t of toolsToScan) {
    console.log(`\n→ ${t.slug}: ${t.url}`);
    // Some SPAs abort the initial navigation (redirects) — not fatal, page still loads.
    await page
      .goto(t.url, { waitUntil: "domcontentloaded", timeout: 30_000 })
      .catch((e) => console.warn(`  (goto: ${e.message.split("\n")[0]} — continuing)`));
    if (t.wait) await page.waitForSelector(t.wait, { timeout: 15_000 }).catch(() => {});

    const input = await waitForEnter(`  Navigate/log in as needed, then press Enter to capture ${t.slug} (s+Enter to skip)…`);
    if (input.toLowerCase() === "s") {
      console.log(`⤳ skipped ${t.slug}`);
      continue;
    }

    await page.screenshot({ path: `src/images/${t.slug}.png` });
    console.log(`✓ ${t.slug}`);
  }
  await ctx.close();
  process.exit(0);
}

process.argv.includes("--login") ? bootstrap() : capture();
