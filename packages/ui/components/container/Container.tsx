"use client";

import React from "react";
import { cx } from "class-variance-authority";

const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full",
} as const;

const heights = {
  auto: "auto",
  full: "100%",
} as const;

export interface ContainerProps {
  id?: string;
  size?: keyof typeof sizes;
  height?: keyof typeof heights | number;
  innerClassName?: string;
  outerClassName?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const sizeClasses = {
  xs: "md:col-span-4 md:col-start-5",
  sm: "md:col-span-6 md:col-start-4",
  md: "md:col-span-8 md:col-start-3",
  lg: "md:col-span-10 md:col-start-2",
  full: "",
};

export const Container = ({
  size = "lg",
  height,
  innerClassName,
  outerClassName,
  id,
  children,
  as: Component = "div",
  ...props
}: ContainerProps) => {
  const style = !height
    ? {}
    : typeof height === "number"
    ? { minHeight: `${height}px` }
    : { height: heights[height] };

  return (
    <section
      id={id}
      className={cx(
        "scroll-m-[50vh] overflow-x-clip px-12 md:px-0 mx-auto grid grid-cols-12",
        outerClassName
      )}
      style={style}
      {...props}
    >
      <Component
        className={cx(
          `col-span-full max-w-screen-xl w-full mx-auto ${sizeClasses[size]}`,
          innerClassName
        )}
      >
        {children}
      </Component>
    </section>
  );
};
