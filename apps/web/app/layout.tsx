import type { Metadata } from "next";

import { impact, helvetica } from "../fonts/local";

import "@yolo/ui/styles/global.css";

export const metadata: Metadata = {
  title: "YOLODEV Frontend Developer",
  description: `Senior Creative Frontend Developer,
CSS Connoisseur & Tech Transitioner`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-background-primary ${impact.variable} ${helvetica.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
