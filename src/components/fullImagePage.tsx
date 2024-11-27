import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await (await clerkClient()).users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <Image
          width={2048}
          height={1152}
          src={image.url}
          className="max-h-full object-contain"
          alt="Modal Photo"
        />
      </div>
      <div className="flex w-64 flex-shrink-0 flex-col border-l">
        <div className="overflow-hidden text-wrap border-b text-center text-lg">
          {image.name.split("").splice(0, 15).join("")}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded by</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button
              type="submit"
              variant="destructive"
              size="sm"
              className="rounded-sm"
            >
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
