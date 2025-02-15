import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SunderingDoctrine() {
  return (
    <article className="not-focus-visible:focus:outline-hidden m-14 mt-20">
      <h1 className="m-3 text-xl dark:text-white">Sundering Doctrine</h1>
      <h2 className="m-3 text-xl dark:text-white">symbols</h2>
      <img
        src="/images/sd/vow-of-the-disciple-symbols.jpg"
        alt=""
        width={1000}
      />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2 className="m-3 text-xl dark:text-white">encounter 1</h2>
          </AccordionTrigger>
          <AccordionContent>
            <img src="/images/sd/IMG_5098.PNG" alt="" width={1000} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h2 className="m-3 text-xl dark:text-white">encounter 3</h2>
          </AccordionTrigger>
          <AccordionContent>
            <img src="/images/sd/IMG_5097.PNG" alt="" width={1000} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
}
