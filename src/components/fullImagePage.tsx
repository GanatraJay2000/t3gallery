import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <Image
          width={2048}
          height={1152}
          src={image.url}
          className="max-h-screen object-contain"
          alt="Modal Photo"
        />
      </div>
      <div className="flex w-96 flex-shrink-0 flex-col border-l">
        <div className="overflow-hidden text-wrap text-xl font-bold">
          {image.name}
        </div>
      </div>
    </div>
  );
}
