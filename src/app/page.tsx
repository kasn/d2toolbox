import Tool from "@/components/Tool";
import { tools } from "../data";

const activeTools = tools.filter((tool) => tool.active);

export default function Index() {
  return (
    <ul
      role="list"
      className="not-focus-visible:focus:outline-hidden m-14 mt-20 grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 2xl:grid-cols-4"
    >
      {activeTools.map((tool) => (
        <Tool key={tool.name} tool={tool} />
      ))}
    </ul>
  );
}
