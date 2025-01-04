import Image, { getImageProps } from "next/image";
import { SocialIcon } from "react-social-icons";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

type ToolProps = {
  tool: TTool;
};

function Tool({ tool }: ToolProps) {
  // const {
  //   props: { src },
  // } = getImageProps({
  //   alt: "",
  //   width: tool.image.width,
  //   height: tool.image.height,
  //   src: tool.image.src,
  // });

  // console.log(src);

  // const backgroundImage = getBackgroundImage(srcSet);
  // console.log(backgroundImage);
  // const style = { backgroundImage };
  // const c = `aspect-[5/4] w-full rounded-xl object-cover shadow-lg bg-[url(${src})] bg-cover bg-center`;
  // console.log(c);
  return (
    <li>
      <a
        href={tool.url}
        target="_blank"
        rel="noreferrer"
        className="aspect-[5/4] w-full rounded-xl object-cover shadow-lg bg-cover bg-center"
        // className={`aspect-[5/4] w-full rounded-xl object-cover shadow-lg bg-[url(${src})] bg-cover bg-center`}
      >
        {/* <Image
          alt={tool.name}
          src={tool.image.src}
          width={tool.image.width}
          height={tool.image.height}
        /> */}
        <h2 className="mb-3 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white">
          {tool.name}
        </h2>
        <p className="mt-3 text-base leading-7 text-gray-600 dark:text-white">
          {tool.description}
        </p>
      </a>

      {tool.additionalLinks && (
        <ul role="list" className="mt-3 flex gap-x-3">
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
