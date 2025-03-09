"use client";

import Tool from "@/components/Tool";
import { tools } from "../data";
import useLocalStorageState from "use-local-storage-state";
import { cn } from "@/lib/utils";

const activeTools = tools.filter((tool) => tool.active);
const categories = tools.map((tool) => tool.category).flat();

const uniqueCategories = [...new Set(categories)];

export default function Index() {
  const [filter, setFilter] = useLocalStorageState<categories[]>("filter", {
    defaultValue: [],
  });

  return (
    <>
      <div className="mx-14 mt-20 flex items-center justify-between">
        <ul className="flex flex-wrap">
          {uniqueCategories.map((category) => (
            <li key={category}>
              <button
                className={cn([
                  "mr-4 inline-flex cursor-pointer items-center rounded-md px-4 py-2 text-sm font-medium shadow-2xl ring-1 ring-inset ring-gray-500/10 dark:text-white dark:ring-gray-400/20 bg-gray-50 text-gray-600 hover:bg-gray-200 dark:bg-gray-400/10 dark:hover:bg-gray-400",
                  {"bg-blue-500 text-white dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-600": filter.includes(category)}
                ])}
                onClick={() => {
                  if (filter.includes(category)) {
                    setFilter(filter.filter((item) => item !== category));
                    return;
                  }

                  setFilter([...filter, category]);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        {filter.length > 0 ? (
          <button className="ml-2" onClick={() => setFilter([])}>
            Clear
          </button>
        ) : null}
      </div>
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
