import "@/assets/css/globals.css";
import AuthProvider from "./authProvider";

import type { Metadata } from "next";
import { Inter, Roboto, Geostar } from "next/font/google";
import { Toaster } from "react-hot-toast";

/* Fonts */
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const geostar = Geostar({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/* Meta data */
export const metadata: Metadata = {
  title: "Nextjs Learn",
  description: "Learn Nextjs",
  icons: {
    icon: "images/next.png",
  },
  openGraph: {
    title: "Nextjs Learn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
