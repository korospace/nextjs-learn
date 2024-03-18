import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag");

    if (!tag) {
        return NextResponse.json({
          status: false,
          message: "missing param 'tag'",
        });
    }

    revalidateTag(tag);

    return NextResponse.json({
      status: true,
      message: "revalidate successfully",
    });
}