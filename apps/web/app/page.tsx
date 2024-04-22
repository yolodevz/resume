"use client";

import {
  Header,
  Footer,
  HeroSlice,
  PortfolioSlice,
  TimelineSlice,
  ContactSlice,
} from "@yolo/ui";
import Head from "next/head";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import * as React from "react";
import { imagesSrcs } from "@yolo/ui/src/slices/hero/HeroSlice";
import { Fragment } from "react";

export default function Page() {
  return (
    <>
      <Head>
        {imagesSrcs.map((imageSrc, index) => (
          <Fragment key={imageSrc.first.src}>
            <Link key={index} href={imageSrc.first.src} prefetch />
            <Link key={index} href={imageSrc.second.src} prefetch />
          </Fragment>
        ))}
      </Head>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.66 }}
        >
          <Header />
          <HeroSlice />
          <PortfolioSlice />
          <TimelineSlice />
          <ContactSlice />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
