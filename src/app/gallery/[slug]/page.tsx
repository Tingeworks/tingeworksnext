import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: params.slug + " | Tingeworks",
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="mt-28">
      <h1>{params.slug}</h1>
    </div>
  );
}
