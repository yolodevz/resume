"use client";

import React, { useRef, useEffect, useState } from "react";

import { cx } from "class-variance-authority";

interface ScoreProps {
  value: number;
}

export const Score = ({ value }: ScoreProps) => {
  const scoreRef = useRef<HTMLDivElement>(null);
  const [animatedValue, setAnimatedValue] = useState(0);

  // I could use react-intersection-observer and make it look nicer, but this is the only place I'm using it, so I'm just using the native API
  useEffect(() => {
    const handleAnimation = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let start: number | null = null;

          const animate = (timestamp: number) => {
            if (start === null) start = timestamp;
            const progress = timestamp - start;
            const currentVal = (value * progress) / 1000;

            setAnimatedValue(currentVal > value ? value : currentVal);

            if (currentVal < value) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    };

    // We want to start animation slightly after the element is visible
    const observer = new IntersectionObserver(handleAnimation, {
      rootMargin: "0px 0px -10% 0px",
    });

    if (scoreRef.current) {
      observer.observe(scoreRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={scoreRef}
      className="border-4 border-[#EFFFE2]/30 rounded-full drop-shadow-score aspect-square w-full h-full"
    >
      <div
        className="radial-progress font-bold text-[#EFFFE2] text-fluid-lg"
        style={
          {
            "--value": animatedValue, // this value is used by component css to determine gradient's angle (progress)
          } as React.CSSProperties
        }
      >
        <span className="">{Math.round(animatedValue)}</span>
      </div>
    </div>
  );
};

type ScoreItem = {
  id: string;
  value: number;
};

export type ScoreGridProps = {
  className?: string;
  scores: ScoreItem[];
};

export const ScoreGrid = ({ className, scores }: ScoreGridProps) => (
  <div
    className={cx(
      "grid grid-cols-4 gap-x-2 sm:gap-x-4 lg:gap-x-16 place-items-center",
      className
    )}
  >
    {scores.map((score) => (
      <Score key={score.id} value={score.value} />
    ))}
  </div>
);

export default ScoreGrid;
