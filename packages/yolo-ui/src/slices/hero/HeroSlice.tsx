"use client";

import * as React from "react";
import Image from "next/image";

import { Container, Text } from "../../components";

export const HeroSlice = () => {
  return (
    <Container outerClassName="pt-60">
      <Text size="h2-lg" className="uppercase font-bold mb-4">
        {"Nice to meet u! I'm"}
      </Text>
      <div className="flex w-full items-center flex-wrap justify-between gap-x-20 gap-y-4">
        <Text size="deco-md" className="uppercase font-impact">
          Yolodev
        </Text>
        <div className="flex gap-x-2 md:gap-x-5">
          <div className="flex">
            <Image
              width={153}
              height={153}
              alt="a person in a yellow jacket holding a pole"
              src="https://cdn.raster.app/v327tq6nmjmw2o/resume/CHCqTqv8y8z?ixlib=js-3.8.0&s=8cc3419a8ec4a4553c1c30482af732c1"
            />
          </div>
          <div className="flex -mr-[10%]">
            <Image
              width={497}
              height={153}
              alt="a man standing on a boat in the ocean"
              src="https://cdn.raster.app/v327tq6nmjmw2o/resume/c6Dvt7UmQ3C?ixlib=js-3.8.0&s=65d5669521f92af1236e8697956c87a9"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
