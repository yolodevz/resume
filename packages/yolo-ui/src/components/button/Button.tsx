import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";

const buttonStyle = cva("border px-5 py-2.5 rounded-full w-max", {
  variants: {
    isDisabled: {
      false: null,
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
});

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsExternal = BaseProps & {
  href: string;
  target: "_blank";
};

type ButtonAsLink = BaseProps & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink;

export const Button = (props: ButtonProps) => {
  if ("target" in props && "href" in props && props.target === "_blank") {
    const { href, target, className, children, ...rest } = props;
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={buttonStyle({ className })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if ("href" in props && !("target" in props)) {
    const { href, className, children, ...rest } = props;
    return (
      <Link href={href} className={buttonStyle({ className })} {...rest}>
        {children}
      </Link>
    );
  }

  const { className, children, disabled, ...rest } = props as ButtonAsButton;
  return (
    <button
      className={buttonStyle({
        isDisabled: disabled,
        className,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export const ButtonGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-x-5">{children}</div>
);
