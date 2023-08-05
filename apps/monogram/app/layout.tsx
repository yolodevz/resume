import "@monogram/ui/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

const SCROLL_TIMELINE_POLYFILL =
  "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

export const metadata: Metadata = {
  title: "Monogram frontend test",
  description: "description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src={SCROLL_TIMELINE_POLYFILL} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
