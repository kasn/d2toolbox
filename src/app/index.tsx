import { createFileRoute } from "@tanstack/react-router";
import useLocalStorageState from "use-local-storage-state";
import FieldLog from "@/components/FieldLog";
import Filter from "@/components/Filter";
import QuickLinks from "@/components/QuickLinks";
import Tool from "@/components/Tool";
import { tools } from "../data";

const activeTools = tools.filter((tool) => tool.active);
const categories = activeTools.flatMap((tool) => tool.category);

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
			filter.length === 0 || tool.category?.some((cat) => filter.includes(cat)),
	);

	return (
		<>
			<QuickLinks />
			<Filter
				filter={filter}
				setFilter={setFilter}
				categories={uniqueCategories}
			/>
			<div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
				<p className="font-display text-xs font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
					{visibleTools.length} / {activeTools.length}
				</p>
				<FieldLog />
			</div>
			<ul className="not-focus-visible:focus:outline-hidden mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{visibleTools.map((tool, index) => (
					<Tool key={tool.name} tool={tool} index={index} />
				))}
			</ul>
		</>
	);
}
