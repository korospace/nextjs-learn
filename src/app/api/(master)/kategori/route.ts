import { retriveData, retriveDataById } from "@/lib/firebase/services";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const arr_category: any = [
  {
    img: "http://localhost:3000/assets/images/next.png",
    name: "kategori 1",
    description: "ini description of kategori 1",
    id: "1",
  },
  {
    img: "http://localhost:3000/assets/images/next.png",
    name: "kategori 2",
    description: "ini description of kategori 2",
    id: "2",
  },
  {
    img: "http://localhost:3000/assets/images/next.png",
    name: "kategori 3",
    description: "ini description of kategori 3",
    id: "3",
  },
  {
    img: "http://localhost:3000/assets/images/next.png",
    name: "kategori 4",
    description: "ini description of kategori 4 xx",
    id: "4",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category_id = searchParams.get("id");

  let data: any;

  if (category_id) {
    // data = arr_category.find((c: any) => c.id == category_id);
    data = await retriveDataById("category", category_id);
  } else {
    // data = arr_category
    data = await retriveData("category");
  }

  return NextResponse.json({
    status: true,
    message: "list kategori " + category_id,
    data,
  });
}

export async function POST(request: NextRequest) {
  const req = await request.json();

  const prisma = new PrismaClient();

  try {
    await prisma.category.create({
      data: {
        Name: req.name,
      },
    });
    prisma.$disconnect(); // Disconnect from Prisma after usage
    return new Response(JSON.stringify({ message: "ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    prisma.$disconnect(); // Disconnect from Prisma in case of error
    return new Response(JSON.stringify({ message: "error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
