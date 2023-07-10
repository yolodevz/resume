import { Header, Punchline, PunchlineV2, Footer, Container } from "ui";
import Head from "next/head";

import { Pendo } from "../components/analytics";
import { ListWithComments } from "ui/slices/lists";

const isDevelopment = process.env["NODE_ENV"] === "development";

export default function Page() {
  return (
    <>
      <Pendo />
      <Head>{!isDevelopment && <Pendo />}</Head>
      <Header />
      <ListWithComments className="rotate-1 w-full" />
      <PunchlineV2 />
      <Footer />
    </>
  );
}
