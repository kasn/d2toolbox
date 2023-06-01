import DestinyIcon from "@/components/DestinyIcon";

export default function Resources() {
  return (
    <>
      <div className="mx-auto grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:max-w-2xl sm:grid-cols-1 sm:px-0 lg:grid-flow-row lg:grid-cols-1">
        <div>sidebar</div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-2 lg:col-span-2 lg:grid-cols-2 lg:gap-y-10 xl:col-span-3 xl:grid-cols-3 2xl:col-span-4 2xl:grid-cols-4 [&:not(:focus-visible)]:focus:outline-none"
      >
        resources
      </ul>
    </>
  );
}
