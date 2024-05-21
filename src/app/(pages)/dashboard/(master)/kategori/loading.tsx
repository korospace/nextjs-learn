export default function LoadingKategoriPage() {
  const arrSkeleton = [1, 2, 3];

  return (
    <main className="p-5">
      <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        kategori
      </h1>

      {arrSkeleton.map((v, i) => {
        return (
          <div key={i} className="mb-5">
            <div className="block w-full h-48 bg-gray-700 animate-pulse rounded"></div>
          </div>
        );
      })}
    </main>
  );
}
