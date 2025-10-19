import { Link } from "@tanstack/react-router";
import DestinyIcon from "@/components/DestinyIcon";
import { ModeToggle } from "@/components/ModeToggle";

function Header() {
  return (
    <header className="dark:border-b-white/7.5 backdrop-blur-xs fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b px-4 sm:px-6 lg:z-30 lg:px-8">
      <div className="items-left flex gap-5">
        <Link to="/">
          <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
        </Link>
        <h1 className="pl-4 text-2xl font-bold dark:text-white">
          <Link to="/">Destiny 2 Tools</Link>
        </h1>
      </div>
      <div className="items-right flex gap-5">
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
