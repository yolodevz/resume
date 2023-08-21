import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@yolo/ui/styles/global.css";

export const metadata: Metadata = {
  title: "YOLODEV Frontend Developer",
  description: `Senior Creative Frontend Developer,
CSS Connoisseur & Tech Transitioner`,
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-background-primary ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
