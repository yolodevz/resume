import dynamic from "next/dynamic";
import Head from "next/head";

import {
  Header,
  Footer,
  HeroSlice,
  PortfolioSlice,
  TimelineSlice,
  ContactSlice,
} from "@yolo/ui";

import { Pendo } from "../components/analytics";
import * as React from "react";

const isDevelopment = process.env["NODE_ENV"] === "development";

const DynamicPendoComponent = dynamic(() =>
  import("../components/analytics").then((mod) => mod.Pendo)
);

export default function Page() {
  return (
    <>
      <Pendo />
      <Head>{!isDevelopment && <DynamicPendoComponent />}</Head>
      <Header />
      <HeroSlice />
      <PortfolioSlice />
      <TimelineSlice />
      <ContactSlice />
      <Footer />
    </>
  );
}
