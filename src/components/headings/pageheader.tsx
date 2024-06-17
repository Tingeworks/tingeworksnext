export default function PageHeader({
  content,
}: Readonly<{
  content: {
    title: string;
    pronunciation: string;
  };
}>) {
  return (
    <>
      <h1 className="text-4xl">{content.title}</h1>
      <p aria-hidden="true">{content.pronunciation}</p>
    </>
  );
}
