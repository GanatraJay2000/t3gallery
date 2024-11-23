import Image from "next/image";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={idx} className="w-48 p-2">
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
