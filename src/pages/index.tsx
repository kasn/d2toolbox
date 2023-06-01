import Tool from "@/components/Tool";
import { tools } from "../data";
import DestinyIcon from "@/components/DestinyIcon";

function Introduction() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <DestinyIcon className="h-28 w-28 fill-gray-900 dark:fill-white" />
      </div>
      <h2 className="mt-6 whitespace-normal text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-center ">
        Destiny 2 Tools
      </h2>
      <p className="mt-6 whitespace-normal text-xl leading-8 text-gray-600 dark:text-white lg:text-center">
        A list of valuable resources for every Guardian.
      </p>
      <p className="text mt-6 whitespace-normal leading-8 text-gray-600 dark:text-white">
        Destiny 2 is an enourmous game that can be overwhelming for new players.
        <br />
        We aim to create an exhaustive list of all the tools that will help to
        make the most out of the game.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="mx-auto grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:max-w-2xl sm:grid-cols-1 sm:px-0 lg:grid-flow-row lg:grid-cols-1">
        <Introduction />
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2 lg:col-span-2 lg:grid-cols-2 lg:gap-y-10 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
      >
        {tools.map((tool) => (
          <Tool key={tool.name} tool={tool} />
        ))}
      </ul>
    </>
  );
}
