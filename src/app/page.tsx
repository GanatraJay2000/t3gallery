import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log(images);
  return (
    <main className="px-2">
      <div className="flex flex-wrap gap-2">
        {[...images, ...images, ...images].map((image, idx) => (
          <div key={image.id + "-" + idx} className="flex w-48 flex-col">
            <Image
              width={2048}
              height={1152}
              src={image.url}
              alt="Gallery Image"
              className="h-auto w-full rounded object-cover"
            />
            <div className="">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
