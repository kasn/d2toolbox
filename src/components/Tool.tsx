import { SocialIcon } from "react-social-icons";
import { responsiveImage } from "../lib/images";

type ToolProps = {
  tool: TTool;
  index?: number;
};

function Tool({ tool, index = 0 }: ToolProps) {
  const image = responsiveImage(tool.image.src);
  const kicker = tool.category[0] ?? "tool";

  return (
    <li
      style={{ "--card-index": index } as React.CSSProperties}
      className="card-in group relative aspect-[16/10] overflow-hidden rounded-md shadow-lg outline-offset-4 transition duration-200 has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-white/90 hover:outline hover:outline-2 hover:outline-white/90 dark:shadow-black/50"
    >
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 block focus:outline-none"
      >
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
          alt={tool.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.55] transition duration-300 group-hover:brightness-90"
        />

        {/* Portal-style scrim: darker toward the top-left where the text sits */}
        <div className="bg-linear-to-b absolute inset-0 from-zinc-950/70 via-zinc-950/25 to-zinc-950/60" />

        <div className="absolute inset-x-0 top-0 p-5">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {kicker}
          </p>
          <h2 className="font-display mt-1 text-2xl font-bold leading-7 text-white [text-shadow:0_1px_8px_rgb(0_0_0/0.6)]">
            {tool.name}
          </h2>
        </div>

        <p className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-sm leading-snug text-white/90 opacity-0 transition duration-300 [text-shadow:0_1px_6px_rgb(0_0_0/0.8)] group-hover:translate-y-0 group-hover:opacity-100">
          {tool.description}
        </p>
      </a>

      {tool.additionalLinks && (
        <ul
          role="list"
          className="absolute right-0 top-0 m-4 flex gap-x-2 opacity-0 transition duration-300 group-hover:opacity-100"
        >
          {tool.additionalLinks.map((link) => (
            <li key={link}>
              <SocialIcon
                url={link}
                label={`${tool.name}`}
                style={{ width: "25px", height: "25px" }}
                bgColor="rgb(255 255 255 / 0.85)"
                fgColor="#000"
                rel="noopener noreferrer"
                target="_blank"
              />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Tool;
