import { Modal } from "./modal";
import FullPageImageView from "~/components/fullImagePage";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photoId = Number(id);
  if (Number.isNaN(id)) throw new Error("Invalid photo id");
  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
