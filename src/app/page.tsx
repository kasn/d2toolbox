"use client";

import Tool from "@/components/Tool";
import { tools } from "../data";
import useLocalStorageState from "use-local-storage-state";
import Filter from "./_components/filter";

const activeTools = tools.filter((tool) => tool.active);
const categories = tools.map((tool) => tool.category).flat();

const uniqueCategories = [...new Set(categories)];

export default function Index() {
  const [filter, setFilter] = useLocalStorageState<TCategories[]>("filter", {
    defaultValue: [],
  });

  return (
    <>
      <Filter
        filter={filter}
        setFilter={setFilter}
        categories={uniqueCategories}
      />
      <ul
        role="list"
        className="not-focus-visible:focus:outline-hidden m-14 mt-4 grid grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 2xl:grid-cols-4"
      >
        {activeTools
          .filter(
            (tool) =>
              filter.length === 0 ||
              tool.category?.some((cat) => filter.includes(cat)),
          )
          .map((tool) => (
            <Tool key={tool.name} tool={tool} />
          ))}
      </ul>
    </>
  );
}
