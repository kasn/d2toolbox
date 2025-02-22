"use client";

import { useState } from "react";
import symbols from "./symbols";
import Image from "next/image";
import clsx from "clsx";

const subject = [
  "witness",
  "hive",
  "guardian",
  "pyramid",
  "traveller",
  "worm",
  "darkness",
  "light",
  "savathun",
] as const;

const predicate = ["drink", "stop", "give", "kill", "worship"] as const;

const toSymbolId = (ids: Array<string>): Array<TSymbol["id"]> =>
  ids as TSymbol["id"][];

// in a perfect word the this would be types as fixed length array with possible keys from symbols
const truths: [
  (typeof subject)[number],
  (typeof predicate)[number],
  (typeof subject)[number],
][] = [
  ["traveller", "give", "guardian"],
  ["traveller", "give", "light"],
  ["pyramid", "give", "darkness"],
  ["pyramid", "kill", "worm"],
  ["guardian", "kill", "witness"],
  ["guardian", "worship", "traveller"],
];

const relevantHere = toSymbolId([...subject, ...predicate]);

function canSelect(selected: TSymbol["id"][], symbol: TSymbol["id"]): boolean {
  if (selected.includes(symbol)) {
    return false;
  }
  if (selected.length === 3) {
    return false;
  }

  return true;
}

function Symbol({ symbol }: { symbol: TSymbol }) {
  return (
    <>
      <Image
        src={symbol.icon}
        alt={symbol.name}
        width={120}
        height={120}
        className="aspect-square h-24 w-24 shadow-2xl"
      />
      <h2 className="p-2 text-center font-bold uppercase">{symbol.name}</h2>
    </>
  );
}

export const Truths = () => {
  const [selected, setSelected] = useState<string[]>([]);

  console.log(selected);

  return (
    <>
      <div className="flex flex-wrap justify-start gap-1">
        {symbols
          .filter((symbol) => relevantHere.includes(symbol.id))
          .map((symbol) => {
            const selectable = canSelect(selected, symbol.name);
            return (
              <div
                key={symbol.id}
                className="mx-3 mb-1 max-w-24 text-wrap transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <button
                  className={clsx(
                    selectable ? "cursor-pointer" : "cursor-default opacity-40",
                  )}
                  onClick={() =>
                    selectable && setSelected([...selected, symbol.id])
                  }
                >
                  <Symbol symbol={symbol} />
                </button>
              </div>
            );
          })}
      </div>
      {selected.length > 0 &&
        truths
          .filter((truth) => truth.some((symbol) => selected.includes(symbol)))
          .map((truth, index) => {
            return (
              <div
                key={index}
                className="mt-4 flex flex-wrap justify-start gap-1"
              >
                {truth.map((symbol) => {
                  const symbolData = symbols.find((s) => s.id === symbol);
                  if (!symbolData) {
                    return null;
                  }
                  return (
                    <div
                      key={symbolData.id}
                      className="mx-3 mb-1 max-w-24 text-wrap transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Symbol key={symbolData.id} symbol={symbolData} />
                    </div>
                  );
                })}
              </div>
            );
          })}
    </>
  );
};
