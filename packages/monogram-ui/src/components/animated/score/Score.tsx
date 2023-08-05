"use client";

import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import { cx } from "class-variance-authority";

interface ScoreProps {
  value: number;
}

export const Score = ({ value }: ScoreProps) => {
  const [inViewRef, inView] = useInView({ rootMargin: "0px 0px -10% 0px" });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (inView) {
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
    }
  }, [inView, value]);

  return (
    <div
      ref={inViewRef}
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
