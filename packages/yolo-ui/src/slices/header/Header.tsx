"use client";

import * as React from "react";
import Link from "next/link";

import { Container } from "../../components";

export const Header = () => {
  return (
    <Container
      as="header"
      size="lg"
      outerClassName="w-full bg-background-primary"
      innerClassName="hidden md:flex justify-between gap-x-4 py-6 text-h2 uppercase font-bold"
    >
      <Link href="/">m. wasilewski</Link>
      <div className="flex items-center gap-x-4">
        <Link href="#portfolio">portfolio</Link>
        <span className="bg-foreground-primary w-2 h-2 rotate-45"></span>
        <Link href="#experience">experience</Link>
      </div>
      <Link href="#contact">contact</Link>
    </Container>
  );
};
