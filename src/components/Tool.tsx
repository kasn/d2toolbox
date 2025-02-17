import Image, { getImageProps } from "next/image";
import { SocialIcon } from "react-social-icons";

type ToolProps = {
  tool: TTool;
};

function Tool({ tool }: ToolProps) {
  const {
    props: { src },
  } = getImageProps({
    alt: "",
    width: tool.image.width,
    height: tool.image.height,
    src: tool.image.src,
  });

  return (
    <li className="border-white/7.5 dark:border-1 relative rounded-2xl border pb-7 shadow-lg dark:border-zinc-900">
      <a href={tool.url} target="_blank" rel="noreferrer"></a>
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="aspect-5/4 block w-full rounded-t-2xl bg-cover bg-center object-cover shadow-lg"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <h2 className="bg-linear-to-t left-0 right-0 top-0 rounded-xl from-transparent to-zinc-900 px-6 pb-10 pt-3 text-3xl font-bold leading-8 tracking-tight text-white">
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
