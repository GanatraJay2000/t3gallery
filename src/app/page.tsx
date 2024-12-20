import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col overflow-hidden">
          <Link href={`/img/${image.id}`}>
            <Image
              width={2048}
              height={1152}
              src={image.url}
              alt="Gallery Image"
              className="h-64 w-full rounded object-cover"
            />
          </Link>
          <div className="">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="bg-red-500 p-4 text-center text-white">
          Please Sign-in Above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
