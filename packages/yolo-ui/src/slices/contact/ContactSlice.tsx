import Image from "next/image";

import { ImageStack, Text, Container } from "../../components";

const imageSet = {
  first: {
    src: {
      desktop:
        "https://cdn.raster.app/v327tq6nmjmw2o/resume/LZVN6hdc8GW?ixlib=js-3.8.0&s=95ae11be5d090dee21b293a61a5dcb00",
      mobile:
        "https://cdn.raster.app/v327tq6nmjmw2o/resume/jDMrJ0QK2GK?ixlib=js-3.8.0&s=8267bdda82f317146ec6e96ebc1e838b",
    },
    alt: "a woman with long hair wearing a denim jacket",
    width: {
      desktop: 304,
      mobile: 280,
    },
    height: {
      desktop: 268,
      mobile: 96,
    },
  },
  second: {
    src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/xAGb52zMkal?ixlib=js-3.8.0&s=03aead11bdecd5a29b6c43b218a62800",
    alt: "a person sitting in a chair holding a pair of skis",
    width: 586,
    height: 140,
  },
};

export const ContactSlice = () => (
  <Container innerClassName="flex flex-col gap-y-2 md:gap-y-5">
    <ImageStack imageSet={imageSet} heading="contact" />
    <div className="grid grid-cols-[1fr_auto] items-center gap-x-2 md:gap-x-5 xl:gap-x-8">
      <div className="overflow-hidden rounded-xl lg:rounded-2.5xl">
        <Image
          className="w-full object-cover h-full max-h-[80px]"
          src="https://cdn.raster.app/v327tq6nmjmw2o/resume/GE9l0YhQbJA?ixlib=js-3.8.0&s=c55ef18f9be07385174bce09804c573f"
          alt="two hikers walking in the mountains"
          width={325}
          height={80}
        />
      </div>
      <Text
        size="deco-sm"
        className="uppercase font-impact text-right w-full lg:w-auto truncate"
      >
        hi@yolodev.com
      </Text>
    </div>
  </Container>
);
