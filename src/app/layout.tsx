import "./assets/css/globals.css";
import AuthProvider from "./authProvider";

import type { Metadata } from "next";
import { Inter, Roboto, Geostar } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const geostar = Geostar({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nextjs Learn",
  description: "Learn Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      {/* <body className={roboto.className}> */}
      <body className={geostar.className}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
