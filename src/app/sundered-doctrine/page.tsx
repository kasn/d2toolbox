import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import symbols from "./_components/symbols";
import allpaths from "./_assets/riddle-all.png";
import kerrev from "./_assets/kerrev.png";

const subject = [
  "witness",
  "hive",
  "guardian",
  "pyramid",
  "traveller",
  "worm",
  "darkness",
  "light",
  "savathun",
] as const;

const predicate = ["drink", "stop", "give", "kill", "worship"] as const;

const toSymbolId = (ids: Array<string>): Array<TSymbol["id"]> =>
  ids as TSymbol["id"][];

// in a perfect word the this would be types as fixed length array with possible keys from symbols
const truths: [
  (typeof subject)[number],
  (typeof predicate)[number],
  (typeof subject)[number],
][] = [
  ["traveller", "give", "guardian"],
  ["traveller", "give", "light"],
  ["pyramid", "give", "darkness"],
  ["pyramid", "kill", "worm"],
  ["guardian", "kill", "witness"],
  ["guardian", "worship", "traveller"],
];

const relevantHere = toSymbolId([...subject, ...predicate]);

// glyph image source https://www.reddit.com/r/raidsecrets/comments/t7kea1/vow_callout_images_non_potato_quality/
export default function SunderingDoctrine() {
  return (
    <article className="not-focus-visible:focus:outline-hidden m-14 mt-20">
      <h1 className="m-3 text-2xl dark:text-white">Sundered Doctrine</h1>

      <div className="flex flex-wrap justify-start gap-1">
        {symbols
          .filter((symbol) => relevantHere.includes(symbol.id))
          .map((symbol) => (
            <div
              key={symbol.id}
              className="mx-3 mb-1 max-w-24 text-wrap transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={symbol.icon}
                alt={symbol.name}
                width={120}
                height={120}
                className="aspect-square h-24 w-24 shadow-2xl"
              />
              <h2 className="p-2 text-center font-bold uppercase">
                {symbol.name}
              </h2>
            </div>
          ))}
      </div>

      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="m-3 text-xl dark:text-white">Riddle</h2>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <Image src={allpaths} alt="all paths" width={1000} />
            <span className="text-right">
              map made by{" "}
              <a href="https://www.reddit.com/r/raidsecrets/comments/1ikwarh/sundered_doctrine_1st_encounter_map/">
                CyanicKenshi
              </a>
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="m-3 text-xl dark:text-white">Kerrev the Erased</h2>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <Image src={kerrev} alt="Kerrev the Erased" width={1000} />
            <span className="text-right">map made by DIGIPHOENIX</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
}
