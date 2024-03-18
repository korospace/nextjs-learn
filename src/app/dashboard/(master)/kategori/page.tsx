import Image from "next/image";
import { ListCategori } from "./functions";
import Link from "next/link";

export default async function KategoriPage() {
  const categoriList = await ListCategori();

  return (
    <main className="p-5">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        kategori
      </h1>

      {categoriList.data.length > 0 &&
        categoriList.data.map((row: any) => {
          return (
            <div key={row.id} className="mb-5">
              <Link
                key={row.id}
                href={`/dashboard/kategori/detail/${row.docId}`}
              >
                <div className="block w-full p-6 bg-gray-800 rounded">
                  <Image
                    src={row.img}
                    width={100}
                    height={100}
                    className="mb-2 rounded-md"
                    alt="Flowbite Logo"
                  />
                  <h5 className="mb-2 text-2xl font-bold text-white">
                    {row.name}
                  </h5>
                  <p className="font-normal text-gray-400">{row.description}</p>
                </div>
              </Link>
            </div>
          );
        })}
    </main>
  );
}
