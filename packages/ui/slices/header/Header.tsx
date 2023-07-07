"use client";

import * as React from "react";

import { Container } from "../../components";
import { Logo } from "../logo";

export const Header = () => {
  return (
    <Container as="header" size="lg" outerClassName="w-full bg-black !p-4">
      <Logo />
    </Container>
  );
};
