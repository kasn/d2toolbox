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
            <li>
              <a href={tool.url} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default Tool;
