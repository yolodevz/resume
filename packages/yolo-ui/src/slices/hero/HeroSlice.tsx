"use client";

import * as React from "react";
import Image from "next/image";

import { Container, Text } from "../../components";

const imagesSrcs = [
  {
    first: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/0HrAk5r-lrX?ixlib=js-3.8.0&s=9105af5800a47bec4a0012c747230d25",
      alt: "a person holding onto a pair of jeans",
    },
    second: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/7VvJlLJBKDY?ixlib=js-3.8.0&s=f06953a7c4c0815edf3df07a118dbe38",
      alt: "a man sitting on top of a bus next to a woman",
    },
  },
  {
    first: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/SF2_-qq6F9h?ixlib=js-3.8.0&s=643cb3f127d61407f514626ccb8b6db3",
      alt: "a close up of a piece of chocolate cake",
    },
    second: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/O-8jhqXZF3t?ixlib=js-3.8.0&s=aa0b0142d8ccf15a12e5706dc25a33ea",
      alt: "a close up of an ice cake on a plate",
    },
  },
  {
    first: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/SNNhpUjS9eQ?ixlib=js-3.8.0&s=475abb3587297967aec45543de539bb4",
      alt: "a close up of a man's arm with a watch on it",
    },
    second: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/IdP9VaCPV6V?ixlib=js-3.8.0&s=ea2baf4ad8ed4187657734ae98b2c81b",
      alt: "a man wearing a hoodie and smiling at the camera",
    },
  },
  {
    first: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/CHCqTqv8y8z?ixlib=js-3.8.0&s=8cc3419a8ec4a4553c1c30482af732c1",
      alt: "a person in a yellow jacket holding a pole",
    },
    second: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/c6Dvt7UmQ3C?ixlib=js-3.8.0&s=65d5669521f92af1236e8697956c87a9",
      alt: "a man standing on a boat in the ocean",
    },
  },
  {
    first: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/WdaNP1GGo4J?ixlib=js-3.8.0&s=4553619149d4a389186843469f9e7367",
      alt: "a woman with pink hair and orange eyes",
    },
    second: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/p2CpqaLuxkQ?ixlib=js-3.8.0&s=136c563eb6a77c61b59971d8ded3de5e",
      alt: "a woman with pink hair and orange eyes",
    },
  },
];

export const HeroSlice = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const imageSet = imagesSrcs[currentIndex];

  React.useEffect(() => {
    if (isHovered) return; // Do not start the interval if hovered

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesSrcs.length);
    }, 600); // Adjust the timeout value as needed (5000ms or 5s in this case)

    return () => clearInterval(timer);
  }, [isHovered]);

  const preloadImages = (
    imageSrcs: { first: { src: string }; second: { src: string } }[]
  ) => {
    imageSrcs.forEach((imageSet) => {
      const img1 = document.createElement("img");
      img1.src = imageSet.first.src;

      const img2 = document.createElement("img");
      img2.src = imageSet.second.src;
    });
  };

  React.useEffect(() => {
    preloadImages(imagesSrcs);
  }, []);

  return (
    <Container outerClassName="pt-60">
      <Text size="h2-lg" className="uppercase font-bold mb-4">
        {"Nice to meet u! I'm"}
      </Text>
      <div className="flex w-full items-center flex-wrap justify-between gap-x-20 gap-y-4">
        <Text size="deco-md" className="uppercase font-impact">
          Yolodev
        </Text>
        <div
          className="flex gap-x-2 md:gap-x-5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="flex">
            <Image
              width={153}
              height={153}
              alt={imageSet.first.alt}
              src={imageSet.first.src}
              priority
            />
          </div>
          <div className="flex -mr-[10%]">
            <Image
              width={497}
              height={153}
              alt={imageSet.second.alt}
              src={imageSet.second.src}
              priority
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
