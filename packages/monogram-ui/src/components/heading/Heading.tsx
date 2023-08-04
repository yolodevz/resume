import React from "react";

import { cva, cx, type VariantProps } from "class-variance-authority";

import { Text, Size, Intent } from "../text";

const heading = cva(
  "container grid grid-cols-4 space-y-4 lg:space-y-12 relative z-50",
  {
    variants: {
      align: {
        center: ["text-center"],
        left: ["text-left"],
      },
      indent: {
        true: ["md:col-span-2", "md:col-start-2"],
      },
    },
    defaultVariants: {
      align: "left",
      indent: false,
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof heading> {
  title: string;
  subtitle: string;
  size?: Size;
  intent?: Intent;
  className?: string;
}

export const Heading = ({
  title,
  subtitle,
  align = "center",
  size = "base",
  intent,
  className,
  ...props
}: HeadingProps) => (
  <div className={cx(heading({ align }), className)} {...props}>
    <Text
      as="h2"
      size="2xl"
      intent="black"
      className="col-span-full text-white"
    >
      {title}
    </Text>
    <Text
      size={size}
      intent={intent}
      className="col-span-full text-white md:col-span-2 md:col-start-2"
    >
      {subtitle}
    </Text>
  </div>
);
