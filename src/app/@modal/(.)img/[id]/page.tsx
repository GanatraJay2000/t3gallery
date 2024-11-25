import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photoId = Number(id);
  if (Number.isNaN(id)) throw new Error("Invalid photo id");
  const image = await getImage(photoId);
  return (
    <div>
      <Image
        width={2048}
        height={1152}
        src={image.url}
        className="w-96"
        alt="Modal Photo"
      />
    </div>
  );
}
