import Head from "next/head";

import { Header, Footer, HeroSlice } from "@yolo/ui";

import { Pendo } from "../components/analytics";
import * as React from "react";

const isDevelopment = process.env["NODE_ENV"] === "development";

export default function Page() {
  return (
    <>
      <Pendo />
      <Head>{!isDevelopment && <Pendo />}</Head>
      <Header />
      <HeroSlice />
      <Footer />
    </>
  );
}
