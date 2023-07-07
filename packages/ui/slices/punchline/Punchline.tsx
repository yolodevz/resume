"use client";

import { Text } from "../../components";

import Marquee from "react-fast-marquee";

export const Punchline = () => (
  <div className="relative flex-auto flex justify-center align-center overflow-hidden">
    <div className="rotate-90 w-[100vh] flex">
      <Marquee className="uppercase" speed={70} direction="right">
        <Text as="span" intent="black-outlined" size="3xl" className="ml-8">
          Bake
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          Good
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          St*ff
        </Text>
        <Text as="span" intent="black-outlined" size="3xl" className="ml-8">
          Or
        </Text>
        <Text as="span" intent="black" size="3xl" className="ml-8">
          skedaddle.
        </Text>
      </Marquee>
    </div>
  </div>
);
