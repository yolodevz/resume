"use client";

import * as React from "react";

import { Text } from "../../components";

import { cva, cx } from "class-variance-authority";

interface ILogo {
  className?: string;
  intent?: "light" | "dark";
  variant?: "short" | "long";
}

const styledLogo = cva("uppercase", {
  variants: {
    intent: {
      light: "text-white",
      dark: "text-black",
    },
  },
  defaultVariants: {
    intent: "light",
  },
});

export const Logo = ({
  intent = "light",
  variant = "short",
  className,
}: ILogo) => {
  const text =
    variant === "short" ? (
      <>
        <Text as="span" intent="black" className="tracking-wider">
          Y
        </Text>
        <Text as="span" intent="black" className="tracking-wider text-rose-500">
          .
        </Text>
      </>
    ) : (
      <>
        <Text as="span" intent="black" className="tracking-wider">
          Yolo
        </Text>
        <Text
          as="span"
          size="xxs"
          intent="black"
          className="tracking-wider text-rose-500"
        >
          dev
        </Text>
      </>
    );

  return <div className={cx(styledLogo({ intent }), className)}>{text}</div>;
};
