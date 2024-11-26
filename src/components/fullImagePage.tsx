import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <Image
      width={2048}
      height={1152}
      src={image.url}
      className="w-96"
      alt="Modal Photo"
    />
  );
}
