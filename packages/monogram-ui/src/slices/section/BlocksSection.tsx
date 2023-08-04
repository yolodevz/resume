import React from "react";
import { cx } from "class-variance-authority";

const colors = ["bg-[#D12510]", "bg-[#0165B1]", "bg-[#FEC05C]", "bg-black"];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const BlockLine: React.FC<{
  blocks: number;
  opacity: number;
  offsetLeft?: boolean;
}> = ({ blocks, opacity, offsetLeft }) => (
  <div className="flex justify-center" style={{ opacity }}>
    {Array.from({ length: blocks }).map((_, idx) => {
      const shouldOffsetLeft = idx === 0 && offsetLeft;

      return (
        <div
          key={idx}
          className={cx(
            shouldOffsetLeft ? "ml-[50%]" : "",
            getRandomColor(),
            "rounded-sm min-w-[120px] h-[25px] max-h-[60px]",
            "md:rounded-lg md:min-w-[320px] md:h-[60px]"
          )}
          style={{
            aspectRatio: "320/60",
          }}
        />
      );
    })}
  </div>
);

export const BlocksSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center">
    <BlockLine blocks={2} opacity={1} offsetLeft />
    <BlockLine blocks={4} opacity={0.6} />
    <BlockLine blocks={7} opacity={0.3} />
    <BlockLine blocks={10} opacity={0.2} />
  </section>
);
