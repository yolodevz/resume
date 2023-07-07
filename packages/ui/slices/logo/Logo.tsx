"use client";

import * as React from "react";

import { Text } from "../../components";

import { cva, cx } from "class-variance-authority";

interface ILogo {
  className?: string;
  intent?: "light" | "dark";
  variant?: "short" | "long";
}

const styledLogo = cva("", {
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
  const text = variant === "short" ? "Yd" : "Yolodev";

  return (
    <Text
      as="span"
      intent="special"
      className={cx(
        "text-neutral-50 !text-5xl tracking-wider",
        styledLogo({ intent }),
        className
      )}
    >
      {text}
    </Text>
  );
};
