import ModeToggle from "@/components/ModeToggle";
import DestinyIcon from "@/components/DestinyIcon";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Guides, Maps, Stuff",
    href: "/resources",
  },
  {
    name: "Creators",
    href: "/creators",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="dark:border-b-white/7.5 fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b px-4 backdrop-blur-sm sm:px-6 lg:z-30 lg:px-8">
      <nav
        className="mx-auto flex w-full items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
          <h1 className="pl-4 text-2xl font-bold">Destiny 2 Tools</h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ModeToggle />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 antialiased dark:bg-zinc-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
            <h1 className="pl-4 text-2xl font-bold ">Destiny 2 Tools</h1>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            ></button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );

  return (
    <header className="dark:border-b-white/7.5 fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b px-4 backdrop-blur-sm sm:px-6 lg:z-30 lg:px-8">
      <div className="items-left flex gap-5">
        <DestinyIcon className="h-7 w-7 fill-black dark:fill-white" />
        <h1 className="pl-4 text-2xl font-bold dark:text-white">
          Destiny 2 Tools
        </h1>
      </div>
      <div className="items-right flex gap-5">
        <ModeToggle />
      </div>
    </header>
  );
}
