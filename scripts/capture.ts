import { chromium, type BrowserContext } from "playwright";
import { tools } from "./../src/data";

const toolsToScan = tools
  .filter((tool: TTool) => tool.active)
  .filter((tool: TTool) => tool.crawl)
;

const PROFILE = "./d2-profile";
const VIEWPORT = { width: 1280, height: 800 };
const SCALE = 2; // retina-crisp; same for every shot


async function open(headless: boolean): Promise<BrowserContext> {
  return chromium.launchPersistentContext(PROFILE, {
    headless,
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
  console.log("Log into Steam + Bungie, authorize the tools, then Ctrl-C.");
  await page.waitForTimeout(10 * 60_000); // 10 min of you clicking
  await ctx.close();
}

// 2) REPEATABLE: `node shot.js`
async function capture() {
  const ctx = await open(false);
  const page = await ctx.newPage();
  for (const t of toolsToScan) {
    console.log(t)
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 30_000 });
    if (t.wait) await page.waitForSelector(t.wait, { timeout: 15_000 }).catch(() => {});

    // Guard against silently shooting a logged-out state:
    if (t.auth) {
      const signin = await page.getByText(/sign in with bungie/i).count();
      if (signin > 0) { console.warn(`⚠️  ${t.slug}: session expired, re-run --login`); continue; }
    }
    await page.screenshot({ path: `screenshots/${t.slug}.png` });
    console.log(`✓ ${t.slug}`);
  }
  await ctx.close();
}

process.argv.includes("--login") ? bootstrap() : capture();
