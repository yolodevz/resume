"use client";

import Image from "next/image";
import { cx, cva } from "class-variance-authority";
import { Text } from "../../components";
import { ImageStack } from "./ImageStack";

type ImageProps = {
  src: string;
};

type SupplementImageProps = {
  src: string;
};

type ContentSectionProps = {
  title: {
    text: string;
    gradientText?: string;
  };
  description: {
    text: string;
    indent?: boolean;
  };
  images: ImageProps[];
  supplementImage?: SupplementImageProps;
  className?: string;
};

const GRADIENT_CLASSES =
  "bg-gradient-to-r from-[#fce18e] via-[#fe8573] to-[#cd5e9a] bg-clip-text text-transparent";

type TitleProps = ContentSectionProps["title"];
const Title = ({ text, gradientText }: TitleProps) => (
  <Text
    as="h1"
    size="2xl"
    intent="black"
    className="col-span-full w-full lg:text-current"
  >
    <span>{text}</span>{" "}
    {gradientText && <span className={GRADIENT_CLASSES}>{gradientText}</span>}
  </Text>
);

const description = cva(
  "z-20 col-span-full text-stone-600/80 md:col-span-3 lg:mt-10 lg:mb-20",
  {
    variants: {
      indent: {
        true: ["ml-6 sm:ml-[10%] lg:col-span-2"],
        false: ["lg:col-span-1"],
      },
    },
    defaultVariants: {
      indent: false,
    },
  }
);

type DescriptionProps = { text: string; indent?: boolean };
const Description = ({ text, indent }: DescriptionProps) => (
  <Text as="p" intent="light" className={cx(description({ indent }))}>
    {text}
  </Text>
);

const SupplementImage = ({ src }: SupplementImageProps) => (
  <div className="col-span-2 col-start-1 row-start-3 mt-16 -ml-20 hidden justify-center lg:mt-0 lg:flex">
    <Image
      priority
      src={src}
      alt="computer mouse with line"
      className="relative left-4 text-current mix-blend-exclusion invert"
    />
  </div>
);

const descriptionWrapper = cva(
  "col-span-full grid grid-cols-3 md:grid-cols-4 lg:col-span-2",
  {
    variants: {
      indent: {
        true: ["lg:grid-cols-2"],
        false: ["lg:grid-cols-[1fr_0.25fr]"],
      },
    },
    defaultVariants: {
      indent: false,
    },
  }
);

export const ContentSection = ({
  title,
  description,
  images,
  supplementImage,
  className,
}: ContentSectionProps) => (
  <section
    className={cx(
      "min-h-[100svh] padded flex flex-col justify-center",
      className
    )}
  >
    <div className="container relative grid w-full max-w-7xl grid-cols-3 gap-x-4 gap-y-4 pb-10 grid-rows-[auto_auto_1fr] md:grid-cols-4 md:gap-x-6 lg:gap-y-0 lg:pb-12">
      <Title {...title} />
      <div className={cx(descriptionWrapper({ indent: description.indent }))}>
        <Description {...description} />
        {supplementImage && <SupplementImage src={supplementImage.src} />}
      </div>
      <ImageStack images={images} />
    </div>
  </section>
);
