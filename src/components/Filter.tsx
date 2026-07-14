import { cn } from "@/lib/utils";

type FilterProps = {
	filter: TCategories[];
	setFilter: (filter: TCategories[]) => void;
	categories: TCategories[];
};

export default function Filter({ filter, setFilter, categories }: FilterProps) {
	return (
		<div className="flex items-center justify-between">
			<ul className="flex flex-wrap">
				{categories.map((category) => (
					<li key={category}>
						<button
							type="button"
							className={cn([
								"font-display mb-2 mr-3 inline-flex cursor-pointer items-center rounded-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-500 ring-1 ring-inset ring-zinc-900/15 transition-colors hover:text-zinc-900 hover:ring-zinc-900/40 dark:text-zinc-400 dark:ring-white/15 dark:hover:text-white dark:hover:ring-white/40",
								{
									"bg-gold/10 text-gold-foreground ring-gold/50 hover:text-gold-foreground hover:ring-gold dark:bg-gold/15 dark:text-gold dark:ring-gold/50 dark:hover:text-gold":
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
					type="button"
					className="font-display ml-2 cursor-pointer items-center rounded-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-500 ring-1 ring-inset ring-zinc-900/15 transition-colors hover:text-zinc-900 hover:ring-zinc-900/40 dark:text-zinc-400 dark:ring-white/15 dark:hover:text-white dark:hover:ring-white/40"
					onClick={() => setFilter([])}
				>
					Clear
				</button>
			) : null}
		</div>
	);
}
