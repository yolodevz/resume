import * as React from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";

import CopyrightIconLight from "../../../public/icons/copyright-light.svg";
import AsteriskIconLight from "../../../public/icons/asterisk-light.svg";

import CopyrightIconDark from "../../../public/icons/copyright-dark.svg";
import AsteriskIconDark from "../../../public/icons/asterisk-dark.svg";

type Theme = "light" | "dark";

const Copy = ({ theme }: { theme: Theme }) => (
  <div className="inline-grid grid-cols-[auto_1fr] gap-x-3 order-1 lg:order-none">
    <Image
      src={theme === "dark" ? CopyrightIconLight : CopyrightIconDark}
      alt="copyright icon"
      className="w-7 h-7"
    />
    <div className="text-h2-sm uppercase font-bold">
      <span className="block">curriculum vitae</span>
      <span className="block">personal website</span>
      <span className="block text-foreground-secondary mt-4">
        {new Date().getFullYear()} © Copyright michał.wasilewski
      </span>
    </div>
  </div>
);

const Info = ({ theme }: { theme: Theme }) => (
  <div className="inline-grid grid-cols-[auto_1fr] gap-x-3 max-w-xs">
    <Image
      src={theme === "dark" ? AsteriskIconLight : AsteriskIconDark}
      alt="asterisk icon"
      className="w-5 h-5"
    />
    <div className="uppercase font-bold">
      <span className="block text-h2-md">Michał.Wasilewski</span>
      <span className="block text-h2-sm mt-3">
        Senior Creative Frontend Developer / CSS Connoisseur / Butterfly Breeder
        on the Side
      </span>
    </div>
  </div>
);

export const Copyright = ({
  className,
  theme = "dark",
}: {
  className?: string;
  theme?: Theme;
}) => (
  <div
    className={cx(
      "flex flex-col lg:flex-row justify-between gap-y-10 mb-8",
      className
    )}
  >
    <Copy theme={theme} />
    <Info theme={theme} />
  </div>
);
