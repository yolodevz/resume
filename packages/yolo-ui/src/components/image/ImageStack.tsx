import * as React from "react";

import Image from "next/image";
import { Text } from "../text";

type ImageSet = {
  heading: string;
  imageSet: {
    first: {
      src: {
        desktop: string;
        mobile: string;
      };
      alt: string;
      width: {
        desktop: number;
        mobile: number;
      };
      height: {
        desktop: number;
        mobile: number;
      };
    };
    second: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
};

export const ImageStack = ({ imageSet, heading }: ImageSet) => (
  <div className="grid grid-cols-[auto_1fr] sm:grid-cols-[1fr_auto] md:grid-cols-[2fr_1fr] xl:grid-cols-[auto_auto_1fr] gap-2 lg:gap-5 xl:gap-y-0">
    <Text as="h2" size="deco" className="uppercase font-impact col-span-1">
      {heading}
    </Text>
    <div className="flex justify-center col-span-1 sm:row-span-2 xl:h-[160px] ml-5 sm:ml-0 xl:ml-10">
      <Image
        className="hidden sm:block w-full xl:w-auto object-cover rounded-xl md:rounded-2.5xl"
        width={imageSet.first.width.desktop}
        height={imageSet.first.height.desktop}
        alt={imageSet.first.alt}
        src={imageSet.first.src.desktop}
        priority
      />
      <Image
        className="sm:hidden object-cover rounded-xl md:rounded-2.5xl"
        width={imageSet.first.width.mobile}
        height={imageSet.first.height.mobile}
        alt={imageSet.first.alt}
        src={imageSet.first.src.mobile}
        priority
      />
    </div>
    <div className="flex w-full col-span-2 sm:col-span-1 xl:h-[160px]">
      <Image
        className="w-full object-cover rounded-xl md:rounded-2.5xl"
        width={imageSet.second.width}
        height={imageSet.second.height}
        alt={imageSet.second.alt}
        src={imageSet.second.src}
        priority
      />
    </div>
  </div>
);
