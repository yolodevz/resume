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
        <a
          href="https://www.linkedin.com/in/yolodev/"
          rel="noopener noreferrer"
          target="_blank"
          className="uppercase font-bold text-h2-md"
        >
          linkedin
        </a>
        <a
          href="https://github.com/yolodevz/"
          rel="noopener noreferrer"
          target="_blank"
          className="uppercase font-bold text-h2-md"
        >
          github
        </a>
      </div>
    </Container>
  );
};
