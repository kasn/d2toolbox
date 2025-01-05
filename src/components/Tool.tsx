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
    <li className="rounded-2xl shadow-lg">
      <a href={tool.url} target="_blank" rel="noreferrer"></a>
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="aspect-[5/4] w-full rounded-t-2xl object-cover shadow-lg bg-cover block"
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <h2 className="text-3xl font-bold leading-8 tracking-tight text-white px-6 pt-3 top-0 left-0 right-0 bg-gradient-to-t from-transparent to-zinc-900 rounded-xl pb-10">
          {tool.name}
        </h2>
      </a>
      <p className="m-3  dark:text-white">{tool.description}</p>

      {tool.additionalLinks && (
        <ul role="list" className="m-3 flex gap-x-3">
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
