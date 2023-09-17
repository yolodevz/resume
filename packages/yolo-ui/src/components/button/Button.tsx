import * as React from "react";
import Link from "next/link";
import { cva } from "class-variance-authority";

const buttonStyle = cva(
  [
    "border border-current px-5 py-2.5 rounded-full w-max text-sm",
    "disabled:opacity-70 disabled:pointer-events-none",
  ],
  {
    variants: {
      funky: {
        true: "hover:btn-gradient-primary hover:border-transparent [background-clip:padding-box,_border-box] bg-origin-border",
      },
    },
    defaultVariants: {
      funky: true,
    },
  }
);

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

  const { className, children, ...rest } = props as ButtonAsButton;
  return (
    <button
      className={buttonStyle({
        className,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export const ButtonGroup = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-x-3 md:gap-x-5">{children}</div>
);
