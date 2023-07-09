import { Header, Punchline, Footer } from "ui";
import Head from "next/head";

import { Pendo } from "../components/analytics";

const isDevelopment = process.env["NODE_ENV"] === "development";

export default function Page() {
  return (
    <>
      <Head>{isDevelopment && <Pendo />}</Head>
      <Header />
      <Punchline />
      <Footer />
    </>
  );
}
