import KategoriFormPage from "../../../detail/[id]/page";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/components/Modal"), {
  loading: () => (
    <p className="fixed top-0 bottom-0 left-0 right-0 bg-red-500">Loading...</p>
  ),
});

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
