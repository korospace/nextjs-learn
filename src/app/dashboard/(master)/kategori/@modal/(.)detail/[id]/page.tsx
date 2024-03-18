import Modal from "@/components/Modal";
import KategoriFormPage from "../../../detail/[id]/page";

export default async function KategoriFormModal({
  params,
}: {
  params: { id: string };
}) {
  // interceptin route
  return (
    <Modal title="Form Category">
      <KategoriFormPage params={{ id: params.id }} />
    </Modal>
  );
}
