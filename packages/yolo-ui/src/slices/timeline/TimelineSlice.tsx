"use client";

import React, { useState } from "react";
import { Container, Text, TagsList } from "../../components";

import { cx } from "class-variance-authority";

type CompanyInfo = {
  date: string;
  position: string;
  title: string;
  company: string;
  responsibilities: string;
  skills: string[];
};

const data: Record<string, CompanyInfo[]> = {
  "2023": [
    {
      date: "December 2022 - present",
      position: "Fulltime",
      title: "Senior Creative Frontend Developer",
      company: "The Fabricant",
      responsibilities: `I've frolicked on the creative side of UI implementations, managing
                         to lend a hand in crafting collection pages for brands like Weekday
                         and Highsnobiety. My main playground was UI implementations, building
                         block component crafting, and doing it all with a dash of style.`,
      skills: [
        "react",
        "typescript",
        "UX/UI",
        "nextJS",
        "blockchain",
        "design system",
        "storybook",
      ],
    },
  ],
  "2022": [
    {
      date: "December 2022 - present",
      position: "Fulltime",
      title: "Senior Creative Frontend Developer",
      company: "The Fabricant",
      responsibilities: `I've frolicked on the creative side of UI implementations, managing
                         to lend a hand in crafting collection pages for brands like Weekday
                         and Highsnobiety. My main playground was UI implementations, building
                         block component crafting, and doing it all with a dash of style.`,
      skills: [
        "react",
        "typescript",
        "UX/UI",
        "nextJS",
        "blockchain",
        "design system",
        "storybook",
      ],
    },
    {
      date: "October 2020 - December 2022",
      position: "Fulltime",
      title: "Senior Frontend Developer",
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
      title: "Senior Frontend Developer",
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
      title: "Senior Frontend Developer",
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
      title: "Frontend Developer",
      company: "Fast White Cat",
      responsibilities: `I dove headfirst into Magento implementations for our VIP clients. Always with an eye on the horizon, 
                         I nudged us towards different technologies - like React. 
                         Sure, it was a bit risky then, but hey, who doesn't love a good tech adventure?.`,
      skills: ["react", "typescript", "javascript", "magento 2", "code review"],
    },
    {
      date: "August 2018 - January 2020",
      position: "Fulltime",
      title: "Frontend Developer",
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
      title: "Frontend Developer",
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
      title: "Frontend Developer",
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
      title: "Junior Frontend Developer",
      company: "Skymaze",
      responsibilities: `desc`,
      skills: ["HTML", "CSS", "javascript", "magento 1"],
    },
  ],
  "2017": [
    {
      date: "December 2016 - August 2018",
      position: "Fulltime",
      title: "Junior Frontend Developer",
      company: "Skymaze",
      responsibilities: `desc`,
      skills: ["HTML", "CSS", "javascript", "magento 1"],
    },
  ],
  "2016": [
    {
      date: "December 2016 - August 2018",
      position: "Fulltime",
      title: "Junior Frontend Developer",
      company: "Skymaze",
      responsibilities: `desc`,
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
          Senior Creative Frontend Developer CSS Connoisseur & Tech Transitioner
          Butterfly Breeder on the Side
        </Text>
      </div>
    </div>
  </div>
);

export const TimelineSlice: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const yearData = data[selectedYear];

  return (
    <Container
      outerClassName="pt-5 md:pt-20 mb-16 md:mb-48 bg-background-primary rounded-section"
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
                className="cursor-pointer relative flex pb-8 justify-center"
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
                <span
                  className={cx(
                    "block h-1.5 w-4/5 bg-background-secondary absolute bottom-0 rounded-full",
                    selectedYear === year ? "opacity-100" : "opacity-0"
                  )}
                />
              </label>
            ))}
        </div>
      </div>
      <div className="space-y-16 md:space-y-24 mt-10 md:mt-16">
        {yearData.map((info, index) => (
          <Timeline key={index} info={info} />
        ))}
      </div>
    </Container>
  );
};

interface TimelineSliceProps {
  info: CompanyInfo;
}

export const Timeline: React.FC<TimelineSliceProps> = ({ info }) => {
  return (
    <Container
      outerClassName="!px-0"
      innerClassName="grid md:grid-cols-2 gap-x-16 max-w-screen-lg gap-y-6 md:gap-y-0 animate-fade-in"
    >
      <div>
        <div className="space-x-4 mb-6">
          <Text className="inline-block font-bold text-sm">{info.date}</Text>
          <Text className="inline-block font-bold uppercase text-foreground-tertiary text-xs">
            {info.position}
          </Text>
        </div>
        <div className="space-y-1 md:space-y-2">
          <Text size="h1" className="font-bold">
            {info.title}
          </Text>
          <Text className="font-inter text-lg text-foreground-tertiary font-bold">
            {info.company}
          </Text>
        </div>
      </div>
      <div className="space-y-3 md:space-y-6">
        <Text as="h3" size="h2" className="uppercase font-bold">
          Responsibilities
        </Text>
        <Text size="body" className="leading-normal">
          {info.responsibilities}
        </Text>
        <Text as="h3" size="h2" className="uppercase font-bold">
          Skills
        </Text>
        <TagsList tags={info.skills} />
      </div>
    </Container>
  );
};
