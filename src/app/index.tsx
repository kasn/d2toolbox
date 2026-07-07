import { createFileRoute } from "@tanstack/react-router";
import Tool from "@/components/Tool";
import { tools } from "../data";
import useLocalStorageState from "use-local-storage-state";
import Filter from "@/components/Filter";

const activeTools = tools.filter((tool) => tool.active);
const categories = tools.map((tool) => tool.category).flat();

const uniqueCategories = [...new Set(categories)];

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [filter, setFilter] = useLocalStorageState<TCategories[]>("filter", {
    defaultValue: [],
  });

  const visibleTools = activeTools.filter(
    (tool) =>
      filter.length === 0 ||
      tool.category?.some((cat) => filter.includes(cat)),
  );

  return (
    <>
      <Filter
        filter={filter}
        setFilter={setFilter}
        categories={uniqueCategories}
      />
      <p className="font-display mt-6 text-xs font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
        {visibleTools.length} / {activeTools.length}
      </p>
      <ul
        role="list"
        className="not-focus-visible:focus:outline-hidden mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleTools.map((tool, index) => (
          <Tool key={tool.name} tool={tool} index={index} />
        ))}
      </ul>
    </>
  );
}
