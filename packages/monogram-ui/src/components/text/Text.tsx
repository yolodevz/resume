"use client";

import React from "react";
import { cx, cva } from "class-variance-authority";

const sizes = {
  base: "base",
  md: "md",
  lg: "lg",
  xl: "xl",
  "2xl": "2xl",
} as const;

export type Size = keyof typeof sizes;
export type Intent =
  | "black"
  | "black-outlined"
  | "bold"
  | "medium"
  | "regular"
  | "light"
  | "thin"
  | "special";

export interface ContainerProps {
  size?: Size;
  intent?: Intent;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const styledText = cva("", {
  variants: {
    size: {
      base: "text-fluid-base lg:leading-loose",
      md: "text-fluid-md leading-relaxed",
      lg: "text-fluid-lg leading-relaxed",
      xl: "text-fluid-xl leading-relaxed",
      "2xl": "text-fluid-2xl leading-tight tracking-tight",
    },
    intent: {
      black: "font-black",
      "black-outlined": "font-black-outlined",
      bold: "font-bold",
      medium: "font-medium",
      regular: "font-regular",
      light: "font-light",
      thin: "font-thin",
      special: "font-special",
    },
  },
  defaultVariants: {
    size: "base",
    intent: "regular",
  },
});

export const Text = ({
  size = "base",
  intent = "regular",
  className,
  children,
  as: Component = "p",
  ...props
}: ContainerProps) => {
  return (
    <Component
      className={cx(styledText({ intent, size }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
