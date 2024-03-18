const ListCategori = async (id?: string) => {
  const url = `http://localhost:3000/api/kategori${id ? `?id=${id}` : ""}`;
  const res = await fetch(url, {
    method: "GET",
    // cache: "no-store",
    next: {
      // revalidate: 5,
      tags: ["category"],
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res.json();
};

export { ListCategori };
