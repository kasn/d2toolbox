import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { cn } from "@/lib/utils";
import { quickLinks } from "../data";

const OPEN_BY_DEFAULT_MAX = 3;

function hostLabel(url: string) {
	const { hostname, pathname, searchParams } = new URL(url);
	const host = hostname.replace(/^www\./, "");

	if (host.endsWith("reddit.com")) {
		const sub = pathname.match(/\/(r\/[^/]+)/)?.[1];
		return sub ? `reddit · ${sub}` : "reddit";
	}
	if (host.endsWith("youtube.com") || host === "youtu.be") {
		const channel = pathname.match(/\/(@[^/]+)/)?.[1];
		if (channel) {
			return `youtube · ${channel}`;
		}
		return searchParams.has("v") ? "youtube · video" : "youtube";
	}
	return host;
}

function QuickLinks() {
	const [open, setOpen] = useState(quickLinks.length <= OPEN_BY_DEFAULT_MAX);

	if (quickLinks.length === 0) {
		return null;
	}

	const newest = quickLinks[0];

	return (
		<section className="mb-6">
			<button
				type="button"
				onClick={() => setOpen((value) => !value)}
				aria-expanded={open}
				className="group flex w-full items-center gap-x-3 border border-zinc-400/60 bg-zinc-100/60 px-3 py-2 text-left transition-colors duration-75 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] hover:border-white hover:bg-white focus-visible:border-white focus-visible:bg-white focus-visible:outline-none dark:border-white/20 dark:bg-zinc-900/60"
			>
				<span className="font-display flex shrink-0 items-center gap-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-black group-focus-visible:text-black dark:text-zinc-300">
					<span aria-hidden="true" className="text-[0.6rem]">
						◆
					</span>
					Postmaster ({quickLinks.length})
				</span>
				{!open && (
					<span className="min-w-0 flex-1 truncate text-xs italic text-zinc-500 group-hover:text-black/60 group-focus-visible:text-black/60 dark:text-zinc-500">
						&ldquo;{newest.description}&rdquo;
					</span>
				)}
				{open && <span className="flex-1" />}
				<span
					aria-hidden="true"
					className={cn(
						"shrink-0 text-[0.6rem] text-zinc-500 transition-transform duration-75 group-hover:text-black group-focus-visible:text-black dark:text-zinc-400",
						open && "rotate-180",
					)}
				>
					▼
				</span>
			</button>

			<ul
				className={cn(
					"mt-3 gap-3 md:grid-cols-2",
					open ? "grid grid-cols-1" : "hidden",
				)}
			>
				{quickLinks.map((link, index) => (
					<li
						key={link.url}
						style={{ "--card-index": index } as React.CSSProperties}
						className="card-in"
					>
						<a
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className="group flex items-center gap-x-4 border border-zinc-400/60 bg-zinc-100/60 p-3 transition-colors duration-75 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] hover:border-white hover:bg-white focus-visible:border-white focus-visible:bg-white focus-visible:outline-none dark:border-white/20 dark:bg-zinc-900/60"
						>
							<span className="grid size-10 shrink-0 place-items-center border border-zinc-400/60 text-zinc-600 group-hover:border-black/40 group-hover:text-black group-focus-visible:border-black/40 group-focus-visible:text-black dark:border-white/20 dark:text-zinc-300">
								<SocialIcon
									as="span"
									url={link.url}
									bgColor="transparent"
									fgColor="currentColor"
									style={{ width: "28px", height: "28px" }}
								/>
							</span>
							<span className="min-w-0">
								<span className="font-display block truncate text-sm font-semibold text-zinc-800 group-hover:text-black group-focus-visible:text-black dark:text-white">
									{link.description}
								</span>
								<span className="block truncate text-xs italic text-zinc-500 group-hover:text-black/60 group-focus-visible:text-black/60 dark:text-zinc-500">
									&ldquo;{hostLabel(link.url)}&rdquo;
								</span>
							</span>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}

export default QuickLinks;
