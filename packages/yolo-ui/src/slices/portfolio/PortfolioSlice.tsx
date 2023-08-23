import * as React from "react";

import Image from "next/image";

import { Container, Text, Button, ButtonGroup } from "../../components";

import AsteriskIcon from "../../../public/icons/asterisk.svg";

// @todo inherit this and handle globally
type ImageType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

interface Project {
  name: string;
  image: ImageType;
  type: string;
  description: string;
  link?: {
    src: string;
    title?: string;
  };
  index?: number;
}

const projects = [
  {
    name: "The Fabricant",
    image: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/TEsv-gObIDD?ixlib=js-3.8.0&s=63084bffdb446856f8cee7a22cca9e24",
      alt: "a woman with long pink hair and a mask",
      width: 670,
      height: 570,
    },
    type: "website - UI",
    description:
      "igniting a fashion revolution through co-⁠creation. rip the status quo.",
    link: {
      src: "https://www.thefabricant.com/",
      title: "thefabricant.com",
    },
  },
  {
    name: "Helly Hansen",
    image: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/-EdwhCmrByR?ixlib=js-3.8.0&s=adf7d57df60e3c8b5c625f551a76ac89",
      alt: "a couple of people walking up a hill",
      width: 670,
      height: 570,
    },
    type: "website - ecommerce",
    description:
      "Helly Hansen is a Norwegian company that produces sailing clothing. The products are characterized by durability, resistance to harsh weather conditions. The brand is appreciated and has a very good reputation all over the world.",
    link: {
      src: "https://www.hellyhansen.com/",
      title: "hellyhansen.com",
    },
  },
  {
    name: "4F",
    image: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/Mb1YVEvbsyD?ixlib=js-3.8.0&s=3e16f3ac142833b87853f726f6484263",
      alt: "a man in a hoodie looking at his cell phone",
      width: 670,
      height: 570,
    },
    type: "website - ecommerce",
    description:
      "The 4F brand is one of the most recognizable brands in the sports and travel apparel market in Poland. It promotes an active lifestyle and sports competition in the spirit of fair play.",
    link: {
      src: "https://4fstore.com/",
      title: "4fstore.com",
    },
  },
  {
    name: "Graeters",
    image: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/boAYEpbzyYE?ixlib=js-3.8.0&s=f11640584ed52bac099e4e69d30bd1b6",
      alt: "a couple of pies sitting on top of a table",
      width: 670,
      height: 570,
    },
    type: "website - ecommerce",
    description:
      "One of the most famous chains serving ice cream and desserts. Since 1870, four generations of the Graeter family have been committed to handcrafting only the most luxurious ice cream on the market.",
    link: {
      src: "https://www.graeters.com/",
      title: "graeters.com",
    },
  },
  {
    name: "A.P.C Store",
    image: {
      src: "https://cdn.raster.app/v327tq6nmjmw2o/resume/yPtfOqAboXQ?ixlib=js-3.8.0&s=b689ed0b462e4e6b52cdcfdea8c9ad1c",
      alt: "a couple of people that are sitting on a bus",
      width: 670,
      height: 570,
    },
    type: "website - ecommerce",
    description:
      "A.P.C. is a french ready-to-wear brand founded in 1987 by the fashion designer jean touitou in PARIS.",
    link: {
      src: "https://www.apc-us.com/",
      title: "apc-us.com",
    },
  },
] satisfies Project[];

export const Project = ({
  name,
  image,
  type,
  description,
  link,
  index,
}: Project) => (
  <div className="relative flex flex-wrap lg:flex-nowrap mb-10 lg:mb-40 last:mb-0">
    <Text
      size="deco-xs"
      className="uppercase font-impact absolute px-5 md:px-10 mt-4 md:pt-8"
    >
      {name}
    </Text>
    <Image className="rounded-2.5xl md:rounded-[30px]" {...image} />
    <div className="flex flex-col justify-end mt-5 lg:mt-0 lg:ml-12 gap-y-4 md:gap-y-5 max-w-xs w-full relative">
      {index ? (
        <Text
          size="h2"
          className="hidden lg:block absolute top-0 -left-8 text-foreground-tertiary"
        >
          {`0${index}`}
        </Text>
      ) : null}
      <div className="flex">
        <Image
          src={AsteriskIcon}
          alt="copyright icon"
          className="w-4 h-4 mr-2"
        />
        <Text size="h2" className="uppercase font-bold">
          {type}
        </Text>
      </div>
      <Text size="body-sm" className="uppercase opacity-80 leading-tight">
        {description}
      </Text>
      <ButtonGroup>
        <Button disabled>details soon</Button>
        {link ? (
          <Button href={link.src} target="_blank">
            website
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  </div>
);

export const PortfolioSlice = () => (
  <Container
    outerClassName="bg-background-secondary text-foreground-secondary rounded-section pt-6 lg:pt-24 pb-20 lg:pb-40"
    innerClassName="max-w-screen-lg"
  >
    <div className="space-y-2 text-right mb-8 lg:mb-16">
      <Text size="deco-sm" className="uppercase font-impact">
        portfolio
      </Text>
      <Text size="h2" className="uppercase text-right">
        selected work
      </Text>
    </div>
    {projects.map((project, index) => (
      <Project key={project.name} {...project} index={index + 1} />
    ))}
  </Container>
);
