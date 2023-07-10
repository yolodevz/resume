"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text } from "../../components";

const sectionsCount = 3;

export const PunchlineV2: React.FC = () => {
  const wrapperRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  wrapperRefs.current = Array(sectionsCount)
    .fill(null)
    .map((ref, index) => wrapperRefs.current[index] || React.createRef());

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const gsapContext = gsap.context(() => {
      wrapperRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const [initialX, finalX] =
            index % 2
              ? [
                  "100%",
                  (ref.current.scrollWidth - ref.current.offsetWidth) * -1,
                ]
              : [ref.current.scrollWidth * -1, 0];

          gsap.fromTo(
            ref.current,
            { x: initialX, opacity: 0 },
            {
              x: finalX,
              opacity: 1,
              scrollTrigger: { trigger: ref.current, scrub: 1 },
            }
          );
        }
      });

      return () => {
        gsapContext.revert();
      };
    });
  }, []);

  return (
    <div className="overflow-x-hidden py-16 min-h-screen flex flex-col justify-center gap-8 text-white">
      {Array.from({ length: sectionsCount }, (_, index) => (
        <section key={index}>
          <div
            ref={wrapperRefs.current[index]}
            className="opacity-0 transition-opacity"
          >
            <div className="-rotate-1 w-full flex">
              <div className="uppercase animate-fade-in h-max">
                <Text
                  as="span"
                  intent="black"
                  size="3xl"
                  className="whitespace-nowrap"
                >
                  Bake Good St<span className="text-rose-500">*</span>ff Or
                  Skedaddle<span className="text-rose-500">.</span>
                </Text>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
