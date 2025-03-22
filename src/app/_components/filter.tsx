import { cn } from "@/lib/utils";

type FilterProps = {
  filter: TCategories[];
  setFilter: (filter: TCategories[]) => void;
  categories: TCategories[];
};

export default function Filter({ filter, setFilter, categories }: FilterProps) {
  return (
    <div className="mx-14 mt-20 flex items-center justify-between">
      <ul className="flex flex-wrap">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={cn([
                "mr-4 inline-flex cursor-pointer items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 shadow-2xl ring-1 ring-inset ring-gray-500/10 hover:bg-gray-200 dark:bg-gray-400/10 dark:text-white dark:ring-gray-400/20 dark:hover:bg-gray-400",
                {
                  "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-600":
                    filter.includes(category),
                },
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
        <button
          className="ml-2 cursor-pointer items-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600 shadow-2xl ring-1 ring-inset ring-gray-500/10 hover:bg-gray-200 dark:bg-gray-400/10 dark:text-white dark:ring-gray-400/20 dark:hover:bg-gray-400"
          onClick={() => setFilter([])}
        >
          Clear
        </button>
      ) : null}
    </div>
  );
}
