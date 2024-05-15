export default function PageHeader({
  content,
}: Readonly<{
  content: {
    title: string;
    pronunciation: string;
    type: string;
    definition: {
      meaning: string;
      example: string;
      similar: string[];
    }[];
  };
}>) {
  return (
    <>
      <h1 className="text-4xl">{content.title}</h1>
      <p>{content.pronunciation}</p>
      <p className="text-gray-500 mt-5 italic">{content.type}</p>
      <ol>
        {content.definition.map((def, index) => (
          <li key={index} className="mt-3 pl-2">
            {def.meaning}
            <br />
            <span className="text-gray-400">"{def.example}"</span>
            <br />
            <span className="text-green-600">Similar: </span>
            {def.similar.map((sim, index) => (
              <span key={index}>{sim}, </span>
            ))}
          </li>
        ))}
      </ol>
    </>
  );
}
