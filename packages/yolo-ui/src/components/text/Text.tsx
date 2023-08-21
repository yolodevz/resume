"use client";

import React from "react";
import { cx, cva } from "class-variance-authority";

const sizes = {
  // H1
  h1: "text-h1",
  "h1-lg": "text-h1-lg",
  // H2
  "h2-xs": "text-h2-xs",
  "h2-sm": "text-h2-sm",
  h2: "text-h2",
  "h2-md": "text-h2-md",
  "h2-lg": "text-h2-lg",
  // Body
  "body-sm": "text-body-sm",
  body: "text-body",
  // Deco
  "deco-xs": "text-deco-xs",
  "deco-sm": "text-deco-sm",
  deco: "text-deco",
  "deco-md": "text-deco-md",
  "deco-lg": "text-deco-lg",
} as const;

const intents = {
  black: "font-black",
  "black-outlined": "font-black-outlined",
  bold: "font-bold",
  regular: "font-regular",
};

export interface ContainerProps {
  size?: keyof typeof sizes;
  intent?: keyof typeof intents;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const styledText = cva("leading-none", {
  variants: {
    size: sizes,
    intent: intents,
  },
  defaultVariants: {
    size: "body",
    intent: "regular",
  },
});

export const Text = ({
  size = "body",
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
