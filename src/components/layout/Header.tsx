import { Link } from "@tanstack/react-router";
import DestinyIcon from "@/components/DestinyIcon";
import { ModeToggle } from "@/components/ModeToggle";

function Header() {
	return (
		<header className="dark:border-b-white/7.5 fixed inset-x-0 top-0 z-50 border-b bg-white/70 backdrop-blur-md lg:z-30 dark:bg-zinc-950/70">
			<div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between gap-12 px-6 lg:px-12">
				<div className="items-left flex items-center gap-4">
					<Link to="/" className="group">
						<DestinyIcon className="group-hover:fill-gold h-7 w-7 fill-black transition-colors duration-300 dark:fill-white" />
					</Link>
					<h1 className="font-display text-xl font-bold uppercase tracking-[0.2em] dark:text-white">
						<Link to="/">
							Destiny 2 <span className="text-gold-foreground">Tools</span>
						</Link>
					</h1>
				</div>
				<div className="items-right flex gap-5">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

export default Header;
