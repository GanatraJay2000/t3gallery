import FullPageImageView from "~/components/fullImagePage";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photoId = Number(id);
  if (Number.isNaN(id)) throw new Error("Invalid photo id");
  return <FullPageImageView id={photoId} />;
}
