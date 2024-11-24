import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/GwkyXx3MczUvnQRNDDlvpWEzbdJNVZAuP2ma1T7LCstwRjgK",
  "https://utfs.io/f/GwkyXx3MczUvORfx9FS95yO1erXlpMKmaRcStsTbIjinCBfx",
  "https://utfs.io/f/GwkyXx3MczUvhMqI32xSnbwMciChDqo930BTpfWasrlQHF1j",
  "https://utfs.io/f/GwkyXx3MczUvkAoX8v4KH9yImnNDUhFY8jC16sZLB7wGbgQa",
  "https://utfs.io/f/GwkyXx3MczUvVNNuBzofNzFVUuK5LTsfXoJHYrBa0PqkbAD6",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="px-2">
      <div className="flex flex-wrap gap-2">
        {posts.map((post) => (
          <div key={post.id} className="">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <Image
              width={2048}
              height={1152}
              src={image.url}
              alt="Gallery Image"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
