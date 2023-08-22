"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import CopyrightIcon from "../../../public/icons/copyright.svg";
import AsteriskIcon from "../../../public/icons/asterisk.svg";

import { Container } from "../../components";

const Copyright = () => (
  <div className="inline-grid grid-cols-[auto_1fr] gap-x-3 order-1 lg:order-none">
    <Image src={CopyrightIcon} alt="copyright icon" className="w-7 h-7" />
    <div className="text-h2-sm uppercase font-bold">
      <span className="block">curriculum vitae</span>
      <span className="block">persoanal website</span>
      <span className="block text-foreground-tertiary mt-4">
        2023© Copyright michał.wasilewski
      </span>
    </div>
  </div>
);

const Text = () => (
  <div className="inline-grid grid-cols-[auto_1fr] gap-x-3 max-w-xs">
    <Image src={AsteriskIcon} alt="copyright icon" className="w-5 h-5" />
    <div className="uppercase font-bold">
      <span className="block text-h2-md">Michał.Wasilewski</span>
      <span className="block text-h2-sm mt-3">
        Senior Creative Frontend Developer CSS Connoisseur & Tech Transitioner
        Butterfly Breeder on the Side
      </span>
    </div>
  </div>
);

export const Footer = () => {
  return (
    <Container
      as="footer"
      outerClassName="bg-background-secondary text-foreground-secondary mt-12 rounded-t-[30px] lg:rounded-t-[75px]"
      innerClassName="max-w-screen-xl py-8 lg:pt-14 lg:pb-20 divide-y divide-foreground-tertiary lg:divide-none"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-y-10 mb-8">
        <Copyright />
        <Text />
      </div>
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
