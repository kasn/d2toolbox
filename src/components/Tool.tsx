import { SocialIcon } from "react-social-icons";

type ToolProps = {
  tool: TTool;
};

function Tool({ tool }: ToolProps) {
  return (
    <li>
      <a href={tool.url} target="_blank" rel="noreferrer">
        <img
          className="aspect-[5/4] w-full rounded-xl object-cover"
          src={tool.image}
          alt={tool.name}
        />
      </a>
      <h2 className="mt-6 text-3xl font-bold leading-8 tracking-tight text-gray-900">
        <a href={tool.url} target="_blank" rel="noreferrer">
          {tool.name}
        </a>
      </h2>
      <p className="text-base mt-6 leading-7 text-gray-600">
        {tool.description}
      </p>
      {tool.additionalLinks ? (
        <ul role="list" className="mt-6 flex gap-x-6">
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
