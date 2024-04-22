"use client";

import {
  Header,
  Footer,
  HeroSlice,
  PortfolioSlice,
  TimelineSlice,
  ContactSlice,
} from "@yolo/ui";

import { AnimatePresence, motion } from "framer-motion";

import * as React from "react";

export default function Page() {
  return (
    <>
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
