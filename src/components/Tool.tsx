import { SocialIcon } from "react-social-icons";

type ToolProps = {
  tool: TTool;
};

function Tool({ tool }: ToolProps) {
  return (
    <li>
      <h2 className="mb-3 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white">
        <a href={tool.url} target="_blank" rel="noreferrer">
          {tool.name}
        </a>
      </h2>
      <a href={tool.url} target="_blank" rel="noreferrer">
        <img
          className="aspect-[5/4] w-full rounded-xl object-cover shadow-lg"
          src={tool.image}
          alt={tool.name}
        />
      </a>
      <p className="mt-3 text-base leading-7 text-gray-600 dark:text-white">
        {tool.description}
      </p>
      {tool.additionalLinks ? (
        <ul role="list" className="mt-3 flex gap-x-6">
          {tool.additionalLinks.map((link) => (
            <li key={link}>
              <SocialIcon
                url={link}
                label={`${tool.name}`}
                style={{ width: "25px", height: "25px" }}
                bgColor="#ccc"
                rel="noopener noreferrer"
                target="_blank"
              />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default Tool;
