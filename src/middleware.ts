import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export function Middleware(request: NextRequest) {
  // const login = true;
  // const path = request.nextUrl.pathname;
  // if (path.startsWith("/dashboard/")) {
  //   if (!login) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  // } else if (path == "/login" || path == "/register") {
  //   if (login) {
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   }
  // }

  const res = NextResponse.next();
  return res;
}

// export const config = {
//   matcher: ["/dashboard/:path*", "/login", "/register"],
// };

export default withAuth(Middleware, [
  "/login",
  "/register",
  "/dashboard",
  "/dashboard/kategori",
  "/dashboard/profile",
]);
