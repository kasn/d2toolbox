import type { ToolSlug } from "./data";

export type ChangelogEntry = {
  date: string; // ISO date, e.g. "2026-07-08"
  text: string;
  slug?: ToolSlug; // optional tool slug; entry links to that tool's URL
};

export const changelog: Array<ChangelogEntry> = [
  {
    date: "2026-07-08",
    text: "added vault of cars",
    slug: 'pete-carsons'
  },
  {
    date: "2026-07-08",
    text: "added destinyemblemcollector.com",
    slug: 'emblem-collector'
  },
];
