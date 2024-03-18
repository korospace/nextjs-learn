"use client";

// import { useEffect } from "react";
import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";

export default function DashboardPage() {
  // const route = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     route.push("/login");
  //   } else {
  //     if (session !== undefined && session?.user.role !== "admin") {
  //       route.push("/login");
  //     }
  //   }
  // }, [route, session, status]);

  return (
    <main className="p-5">
      <h2>Hai, {session?.user.full_name}</h2>
      <p>dashboard</p>
    </main>
  );
}
