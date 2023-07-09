import "ui/styles/global.css";
import Head from "next/head";

import { Pendo } from "../components/analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDevelopment = process.env["NODE_ENV"] === "development";

  return (
    <html lang="en">
      <Head>{!isDevelopment && <Pendo />}</Head>
      <body className="bg-neutral-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
