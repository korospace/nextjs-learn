"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
}) {
  const path = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();
  const userRole = session?.user.role;

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <p className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                src={`/assets/images/next.png`}
                width={40}
                height={40}
                className="bg-white rounded-md"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Nextjs Learn
              </span>
            </p>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                className={`block ml-3 ${
                  path === "/dashboard/article" ? "text-blue-700" : "text-white"
                } rounded md:bg-transparent`}
                aria-current="page"
              >
                <Link href={"/dashboard/article"}>Article</Link>
              </li>
              <li
                className={`block ml-3 ${
                  path === "/dashboard/kategori"
                    ? "text-blue-700"
                    : "text-white"
                } ${
                  userRole !== "admin" ? "hidden" : ""
                } rounded md:bg-transparent`}
                aria-current="page"
              >
                <Link href={"/dashboard/kategori"}>Kategori</Link>
              </li>
              <li
                className={`block ml-3 ${
                  path === "/dashboard/sampah" ? "text-blue-700" : "text-white"
                } rounded md:bg-transparent`}
                aria-current="page"
              >
                <Link href={"/dashboard/sampah"}>Sampah</Link>
              </li>
              <li className={`block`} aria-current="page">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={() => {
                    signOut();
                  }}
                >
                  logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center">
        {/* <div className="max-w-screen-xl w-full">{analytics}</div> */}
        <div className="max-w-screen-xl w-full">{children}</div>
      </div>
    </>
  );
}
