"use client";

import * as React from "react";
import Link from "next/link";

import { Container } from "../../components";
import { Copyright } from "../copyright";

export const Footer = () => {
  return (
    <Container
      as="footer"
      outerClassName="bg-background-secondary text-foreground-secondary rounded-section"
      innerClassName="max-w-screen-xl py-8 lg:pt-14 lg:pb-20 divide-y divide-foreground-tertiary lg:divide-none"
    >
      <Copyright />
      <div className="flex flex-col lg:flex-row items-start gap-y-4 gap-x-10 pt-6">
        <Link href="#portfolio" className="uppercase font-bold text-h2-md">
          linkedin
        </Link>
        <Link href="#portfolio" className="uppercase font-bold text-h2-md">
          github
        </Link>
      </div>
    </Container>
  );
};
