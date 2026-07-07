import { SocialIcon } from "react-social-icons";
import { responsiveImage } from "../lib/images";

type ToolProps = {
  tool: TTool;
};

function Tool({ tool }: ToolProps) {
  const image = responsiveImage(tool.image.src);

  return (
    <li className="border-white/7.5 dark:border-1 relative rounded-2xl border pb-7 shadow-lg dark:border-zinc-900">
      <a href={tool.url} target="_blank" rel="noreferrer"></a>
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="aspect-5/4 relative block w-full overflow-hidden rounded-t-2xl shadow-lg"
      >
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
          alt={tool.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <h2 className="bg-linear-to-t absolute left-0 right-0 top-0 rounded-xl from-transparent to-zinc-900 px-6 pb-10 pt-3 text-3xl font-bold leading-8 tracking-tight text-white">
          {tool.name}
        </h2>
      </a>

      <p className="m-3 dark:text-white">{tool.description}</p>

      {tool.additionalLinks && (
        <ul role="list" className="absolute bottom-0 right-0 m-3 flex gap-x-3">
          {tool.additionalLinks.map((link) => (
            <li key={link}>
              <SocialIcon
                url={link}
                label={`${tool.name}`}
                style={{ width: "25px", height: "25px" }}
                bgColor="#ccc"
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
