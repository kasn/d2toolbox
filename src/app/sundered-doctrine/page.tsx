import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import symbols from "./_components/symbols";
// glyph image source https://www.reddit.com/r/raidsecrets/comments/t7kea1/vow_callout_images_non_potato_quality/

export default function SunderingDoctrine() {
  return (
    <article className="not-focus-visible:focus:outline-hidden m-14 mt-20">
      <h1 className="m-3 text-2xl dark:text-white">Sundered Doctrine</h1>

      <div className="flex flex-wrap justify-start gap-1">
        {symbols.map((symbol) => (
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
            <img src="/images/sd/IMG_5098.PNG" alt="" width={1000} />
            <span className="text-right">
              map made by{" "}
              <a href="https://www.youtube.com/c/FalloutPlays">Fallout Plays</a>
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="m-3 text-xl dark:text-white">Kerrev the Erased</h2>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <img src="/images/sd/IMG_5097.PNG" alt="" width={1000} />
            <span className="text-right">map made by DIGIPHOENIX</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
}
