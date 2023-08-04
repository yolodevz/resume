"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";
import Script from "next/script";

import { isMobile } from "react-device-detect"; // it's not ideal to use this, but it's a quick solution. Doesn't seem to have nice support for NextJs 13 yet though.

import { cx } from "class-variance-authority";

// @todo handle public path better
import NextLogo from "../../../../public/next-logo.svg";
import ReactLogo from "../../../../public/react-logo.svg";
import SvelteLogo from "../../../../public/svelte-logo.svg";
import VueLogo from "../../../../public/vue-logo.svg";

const SCROLL_TIMELINE_POLYFILL =
  "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

// @todo support getting images from CMS instead of defining them here
const MAPPED_LOGOS = {
  next: NextLogo,
  react: ReactLogo,
  svelte: SvelteLogo,
  vue: VueLogo,
};

const LOGOS_KEYS: (keyof typeof MAPPED_LOGOS)[] = [
  "next",
  "react",
  "svelte",
  "vue",
  "next",
  "react",
  "svelte",
  "vue",
  "next",
  "react",
  "svelte",
  "vue",
];

interface LogoProps {
  imageUrl: string;
}

const Logo: React.FC<LogoProps> = ({ imageUrl }) => {
  return (
    <div className="odd:last:hidden sm:odd:last:block md:odd:last:hidden">
      <Image
        src={imageUrl}
        width={100}
        height={50}
        alt=""
        className={cx(
          "image min-h-full max-h-full object-contain md:falling-shadow max-w-[6rem] md:max-w-[8rem] lg:max-w-[10rem] w-full"
        )}
      />
    </div>
  );
};

/**
 * @description Logos that fly up and down the screen (desktop only).
 * There is also a slight randomized parallax effect.
 */
export const LogosGrid: React.FC = () => {
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!columnsRef.current) return;

    // smooth fade in
    columnsRef.current.style.transition = "opacity .6s ease";
    columnsRef.current.style.opacity = "1";

    // animating on mobile isn't necessary, it's better to keep things simple
    if (isMobile) return;

    const elements = columnsRef.current.querySelectorAll(".image"); // Select individual elements

    elements.forEach((element: Element, index) => {
      const randomY = `${Math.floor(Math.random() * 15) + 1}vw`;
      const randomYFly = `${Math.floor(Math.random() * 0.75) + 1}rem`;
      const randomDuration = Math.floor(Math.random() * 5000) + 10000;
      const randomDelay = Math.floor(Math.random() * 10000);

      // creates a randomized parallax effect
      element.animate(
        {
          transform: [`translateY(${index % 2 === 0 ? randomY : 0})`],
          opacity: [0, 1, 0.5, 0, 0, 0, 0],
        },
        {
          // @ts-ignore - using a polyfill just in case
          timeline: new (window as any).ScrollTimeline(),
        }
      );

      // adding one more animation to include hovering effect.
      // I could have used tailwind based keyframes alternatively, but it's simpler this way.
      element.animate(
        {
          transform: [
            `translateY(0)`,
            `translateY(${randomYFly})`,
            "translateY(0)",
          ],
        },
        {
          easing: "ease-out",
          direction: "alternate",
          iterations: Infinity,
          duration: randomDuration,
          delay: randomDelay,
          composite: "add",
        }
      );
    });
  }, []);

  return (
    <div
      className={cx(
        "opacity-0 relative flex flex-wrap justify-center place-items-center lg:grid",
        "w-full max-w-7xl mx-auto mt-16 mb-24 md:mb-60 lg:min-h-[100svh] ",
        "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
        "gap-x-8 md:gap-x-10 lg:gap-x-24",
        "gap-y-8 md:gap-y-10 lg:gap-y-[5vw]"
      )}
      ref={columnsRef}
    >
      {/*This script isn't added globally, because it's only used by this component so far*/}
      <Script src={SCROLL_TIMELINE_POLYFILL} />
      {LOGOS_KEYS.map((key, index) => (
        <Logo key={index} imageUrl={MAPPED_LOGOS[key].src} />
      ))}
    </div>
  );
};
