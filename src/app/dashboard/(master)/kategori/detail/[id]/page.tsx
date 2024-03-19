import Image from "next/image";
import { ListCategori } from "../../functions";
import Link from "next/link";

export default async function KategoriFormPage({
  params,
}: {
  params: { id: string };
}) {
  const category = await ListCategori(params.id);

  return (
    <main className="p-5">
      <form className="max-w-lg">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          type="text"
          aria-describedby="category-name"
          className="text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name"
          value={category.data.name}
        />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <input
          type="text"
          aria-describedby="category-description"
          className="text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="description"
          value={category.data.description}
        />

        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload Icon
        </label>
        <Image
          src={category.data.img}
          width={150}
          height={150}
          className="mb-2 rounded-md bg-white"
          alt="Flowbite Logo"
        />
        <input
          type="file"
          aria-describedby="category-icon"
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />

        <div className="flex items-center mt-10">
          <Link
            href={"/dashboard/kategori"}
            data-modal-hide="default-modal"
            type="button"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            back
          </Link>
          <button
            data-modal-hide="default-modal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            save
          </button>
        </div>
      </form>
    </main>
  );
}
