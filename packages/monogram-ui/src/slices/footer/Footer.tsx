import dynamic from "next/dynamic";

import { type ScoreGridProps, Text } from "../../components";

const DynamicScoreGrid = dynamic(
  () => import("../../components/animated/score/Score")
);

type FooterProps = {
  scores: ScoreGridProps["scores"];
  texts: string[];
  title: string;
  footerNote: string;
};

export const Footer = ({ scores, title, texts, footerNote }: FooterProps) => (
  <footer className="bg-[#151515] padded space-y-32 lg:space-y-60 pb-24 lg:pb-60">
    <div className="mx-auto max-w-7xl lg:px-10">
      <div
        className="container relative overflow-hidden bg-red-200 px-6 pt-8 pb-20 backdrop-blur-2xl -mt-[5%] rounded-[68px] lg:px-20 lg:pt-32 lg:pb-56"
        style={{
          background:
            "linear-gradient(346deg, rgba(255, 255, 255, 0.02) 0%, rgba(123, 245, 93, 0.11) 100%)",
        }}
      >
        <Text
          as="h2"
          className="text-fluid-xl text-[#EFFFE2] text-center mb-8 lg:mb-20"
          intent="black"
        >
          {title}
        </Text>
        <DynamicScoreGrid scores={scores} />
        <div className="text-[#C7C7C7] mx-auto prose mt-10 sm:mt-16 lg:mt-24 opacity-50 mix-blend-color-dodge sm:max-w-xl lg:max-w-3xl">
          {texts.map((text, index) => (
            <Text key={index} size="md">
              {text}
            </Text>
          ))}
        </div>
      </div>
    </div>

    <div className="overflow-hidden">
      <Text className="text-center text-white" size="md">
        {footerNote}
      </Text>
      <div className="mx-auto mt-12 heart lg:animate-heart-beat" />
    </div>
  </footer>
);
