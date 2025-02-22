import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import allpaths from "./_assets/riddle-all.png";
import kerrev from "./_assets/kerrev.png";
import { Truths } from "./_components/truths";

// glyph image source https://www.reddit.com/r/raidsecrets/comments/t7kea1/vow_callout_images_non_potato_quality/
export default function SunderingDoctrine() {
  return (
    <article className="not-focus-visible:focus:outline-hidden m-14 mt-20">
      <h1 className="m-3 text-5xl font-black dark:text-white">
        Sundered Doctrine
      </h1>

      <Truths />

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
