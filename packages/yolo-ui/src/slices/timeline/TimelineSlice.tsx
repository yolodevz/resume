"use client";

import React, { useState } from "react";

import {
  Container,
  Text,
  TagsList,
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../../components";

import { cx } from "class-variance-authority";
import { motion, AnimatePresence } from "framer-motion";

type CompanyInfo = {
  date: string;
  position: string;
  title: string;
  company: string;
  responsibilities: string;
  skills: string[];
};

const data: Record<string, CompanyInfo[]> = {
  "2024": [
    {
      date: "November 2023 - Present",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "Coinshift",
      responsibilities: `I developed the V3 core application using Next.js, 
                         incorporating the app router to enhance modularity. 
                         My roles encompassed architectural design, API integration, 
                         implementation of the design system, and comprehensive documentation. 
                         I found integrating onboarding screens and Auth0 exceptionally rewarding.
                         Scalability and security were my primary concerns.`,
      skills: [
        "react",
        "typescript",
        "zustand",
        "framer-motion",
        "Auth0",
        "UX/UI",
        "next.js",
        "blockchain",
        "vitest",
        "design system",
        "storybook",
        "chromatic",
      ],
    },
  ],
  "2023": [
    {
      date: "November 2023 - Present",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "Coinshift",
      responsibilities: `I developed the V3 core application using Next.js, 
                         incorporating the app router to enhance modularity. 
                         My roles encompassed architectural design, API integration, 
                         implementation of the design system, and comprehensive documentation. 
                         I found integrating onboarding screens and Auth0 exceptionally rewarding.
                         Scalability and security were my primary concerns.`,
      skills: [
        "react",
        "typescript",
        "zustand",
        "framer-motion",
        "Auth0",
        "UX/UI",
        "next.js",
        "blockchain",
        "vitest",
        "design system",
        "storybook",
        "chromatic",
      ],
    },
    {
      date: "December 2022 - September 2023",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "The Fabricant",
      responsibilities: `I've frolicked on the creative side of UI implementations, managing
                         to lend a hand in crafting collection pages for brands like Weekday
                         and Highsnobiety. My main playground was UI implementations,
                         core component crafting, and doing it all with a dash of style.`,
      skills: [
        "react",
        "typescript",
        "UX/UI",
        "next.js",
        "GSAP",
        "jotai",
        "blockchain",
        "design system",
        "storybook",
      ],
    },
  ],
  "2022": [
    {
      date: "December 2022 - September 2023",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "The Fabricant",
      responsibilities: `I've frolicked on the creative side of UI implementations, managing
                         to lend a hand in crafting collection pages for brands like Weekday
                         and Highsnobiety. My main playground was UI implementations, building
                         block component crafting, and doing it all with a dash of style.`,
      skills: [
        "react",
        "typescript",
        "UX/UI",
        "next.js",
        "GSAP",
        "jotai",
        "blockchain",
        "design system",
        "storybook",
      ],
    },
    {
      date: "October 2020 - December 2022",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "Vaimo",
      responsibilities: `I had the opportunity to work with our premier client. 
                         My role involved a blend of UI implementations and component crafting, but with a twist.
                         As part of a dedicated team, we embarked on the complex task of transitioning a legacy 
                         Magento store to a fresh React implementation, 
                         a feat not commonly seen in the industry at the time.`,
      skills: ["react", "typescript", "UX/UI", "javascript", "magento 2"],
    },
  ],
  "2021": [
    {
      date: "October 2020 - December 2022",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "Vaimo",
      responsibilities: `I had the opportunity to work with our premier client. 
                         My role involved a blend of UI implementations and component crafting, but with a twist.
                         As part of a dedicated team, we embarked on the complex task of transitioning a legacy 
                         Magento store to a fresh React implementation, 
                         a feat not commonly seen in the industry at the time.`,
      skills: ["react", "typescript", "UX/UI", "javascript", "magento 2"],
    },
  ],
  "2020": [
    {
      date: "October 2020 - December 2022",
      position: "Fulltime",
      title: "Senior Frontend Engineer",
      company: "Vaimo",
      responsibilities: `I had the opportunity to work with our premier client. 
                         My role involved a blend of UI implementations and component crafting, but with a twist.
                         As part of a dedicated team, we embarked on the complex task of transitioning a legacy 
                         Magento store to a fresh React implementation, 
                         a feat not commonly seen in the industry at the time.`,
      skills: ["react", "typescript", "UX/UI", "javascript", "magento 2"],
    },
    {
      date: "January 2020 - October 2020",
      position: "Fulltime",
      title: "Frontend Engineer",
      company: "Fast White Cat",
      responsibilities: `I dove headfirst into Magento implementations for our VIP clients. Always with an eye on the horizon, 
                         I nudged us towards different technologies - like React. 
                         Sure, it was a bit risky then, but hey, who doesn't love a good tech adventure?.`,
      skills: ["react", "typescript", "javascript", "magento 2", "code review"],
    },
    {
      date: "August 2018 - January 2020",
      position: "Fulltime",
      title: "Frontend Engineer",
      company: "Web Solutions NYC",
      responsibilities: `At the onset of my career, I embraced the challenge of working with Magento implementations
                         for a diverse array of clients. Despite being new to the field, 
                         I was undeterred by the complexity of the technology. 
                         This early experience underscored my commitment to learning 
                         and my readiness to tackle demanding tasks from the very beginning.`,
      skills: [
        "HTML",
        "CSS",
        "javascript",
        "magento 1",
        "magento 2",
        "code review",
      ],
    },
  ],
  "2019": [
    {
      date: "August 2018 - January 2020",
      position: "Fulltime",
      title: "Frontend Engineer",
      company: "Web Solutions NYC",
      responsibilities: `At the onset of my career, I embraced the challenge of working with Magento implementations
                         for a diverse array of clients. Despite being new to the field, 
                         I was undeterred by the complexity of the technology. 
                         This early experience underscored my commitment to learning 
                         and my readiness to tackle demanding tasks from the very beginning.`,
      skills: [
        "HTML",
        "CSS",
        "javascript",
        "magento 1",
        "magento 2",
        "code review",
      ],
    },
  ],
  "2018": [
    {
      date: "August 2018 - January 2020",
      position: "Fulltime",
      title: "Frontend Engineer",
      company: "Web Solutions NYC",
      responsibilities: `At the onset of my career, I embraced the challenge of working with Magento implementations
                         for a diverse array of clients. Despite being new to the field, 
                         I was undeterred by the complexity of the technology. 
                         This early experience underscored my commitment to learning 
                         and my readiness to tackle demanding tasks from the very beginning.`,
      skills: [
        "HTML",
        "CSS",
        "javascript",
        "magento 1",
        "magento 2",
        "code review",
      ],
    },
    {
      date: "December 2016 - August 2018",
      position: "Fulltime",
      title: "Junior Frontend Engineer",
      company: "Skymaze",
      responsibilities: `Junior doing junior things.`,
      skills: ["HTML", "CSS", "javascript", "magento 1"],
    },
  ],
  "2017": [
    {
      date: "December 2016 - August 2018",
      position: "Fulltime",
      title: "Junior Frontend Engineer",
      company: "Skymaze",
      responsibilities: `Junior doing junior things.`,
      skills: ["HTML", "CSS", "javascript", "magento 1"],
    },
  ],
  "2016": [
    {
      date: "December 2016 - August 2018",
      position: "Fulltime",
      title: "Junior Frontend Engineer",
      company: "Skymaze",
      responsibilities: `Junior doing junior things.`,
      skills: ["HTML", "CSS", "javascript", "magento 1"],
    },
  ],
};

const Headline = () => (
  <div className="mb-12 md:mb-25">
    <div className="mx-auto">
      <Text size="deco-lg" className="uppercase font-impact -ml-1 lg:-ml-2">
        M.Wasilewski
      </Text>
      <div className="hidden md:flex gap-x-6 mt-4">
        <Text as="h1" size="h1" className="uppercase font-bold">
          Michał.Wasilewski
        </Text>
        <Text size="h2-sm" className="uppercase font-bold max-w-xs">
          Senior Frontend Engineer / CSS Connoisseur / Butterfly Breeder on the
          Side
        </Text>
      </div>
    </div>
  </div>
);

export const TimelineSlice: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const yearData = data[selectedYear];

  return (
    <AnimatePresence initial={false}>
      <Container
        id="experience"
        outerClassName="theme-light pt-5 md:pt-20 pb-16 md:pb-32 rounded-section"
        innerClassName="max-w-screen-xl"
      >
        <Headline />
        <Text
          size="h2-md"
          className="uppercase font-bold text-right mb-8 md:mb-20"
        >
          work experience timeline
        </Text>
        <div className="overflow-x-scroll no-scrollbar pr-5 -mr-5">
          <div className="flex gap-x-16 md:gap-x-32 w-max relative pr-5 -mr-5">
            <div className="border-b border-foreground-primary h-px w-full absolute bottom-[2.5px] pr-5 -mr-5 right-10" />
            {Object.keys(data)
              .reverse()
              .map((year) => (
                <label
                  key={year}
                  className={cx(
                    "cursor-pointer relative flex pb-8 justify-center transition-colors duration-[460ms]",
                    "hover:text-foreground-primary",
                    selectedYear === year
                      ? "text-foreground-primary"
                      : "text-foreground-secondary/50"
                  )}
                >
                  <input
                    className="hidden"
                    type="radio"
                    value={year}
                    checked={selectedYear === year}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  />
                  <Text size="deco-xs" className="font-impact">
                    {`'${year.slice(2)}`}
                  </Text>
                  <motion.span
                    className={cx(
                      "block h-1.5 w-4/5 bg-foreground-primary absolute bottom-0 rounded-full",
                      selectedYear === year ? "opacity-100" : "opacity-0"
                    )}
                    layoutId={`underline-${year}`}
                    animate={{
                      width: selectedYear === year ? "100%" : "0%",
                      transition: { duration: 0.36 },
                    }}
                  />
                </label>
              ))}
          </div>
        </div>

        <Container>
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="w-full mt-10 md:mt-16 md:cursor-grab"
          >
            <CarouselContent className="-mt-1 h-[600px] md:h-[440px] items-center">
              {yearData.map((info, index) => (
                <CarouselItem
                  key={index}
                  className="flex flex-col md:grid md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 max-w-screen-lg"
                >
                  <Timeline key={index} info={info} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="theme-dark left-full right-0 bottom-full top-auto" />
            <CarouselNext
              variant="outline"
              className="theme-dark left-full right-0 top-full"
            />
          </Carousel>
        </Container>
      </Container>
    </AnimatePresence>
  );
};

interface TimelineSliceProps {
  info: CompanyInfo;
}

export const Timeline: React.FC<TimelineSliceProps> = ({ info }) => {
  return (
    <>
      <div>
        <div className="space-x-4 mb-6">
          <Text className="inline-block font-bold text-sm">{info.date}</Text>
          <Text className="inline-block font-bold uppercase text-foreground-secondary text-xs">
            {info.position}
          </Text>
        </div>
        <div className="space-y-1 md:space-y-2">
          <Text size="h1" className="font-bold">
            {info.title}
          </Text>
          <Text className="font-inter text-lg text-foreground-secondary font-bold">
            {info.company}
          </Text>
        </div>
      </div>
      <div className="space-y-3 md:space-y-6">
        <Text size="h2" className="uppercase font-bold">
          Responsibilities
        </Text>
        <Text size="body" className="leading-normal">
          {info.responsibilities}
        </Text>
        <Text size="h2" className="uppercase font-bold">
          Skills
        </Text>
        <TagsList tags={info.skills} />
      </div>
    </>
  );
};
