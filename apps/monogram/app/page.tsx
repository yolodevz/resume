import dynamic from "next/dynamic";

import {
  ContentSection,
  ComputerSection,
  BlocksSection,
  SquigglyDivider,
  Heading,
  // Sphere,
} from "@monogram/ui";
import React from "react";

import {
  TOP_CONTENT_SECTION,
  BOTTOM_CONTENT_SECTION,
  PRESENTATION_SECTION,
  COMPUTER_SECTION,
  FOOTER_PROPS,
} from "@/fixtures";

const DynamicScoreGrid = dynamic(
  () => import("@monogram/ui/src/components/animated/logos/LogosGrid")
);

const DynamicFooter = dynamic(() =>
  import("@monogram/ui/src/slices/footer/Footer").then((mod) => mod.Footer)
);

// function ThreeJSSphere() {
//   return (
//     <div className="relative z-40 mx-auto mt-16 aspect-square max-w-[70%] -mb-[50%] lg:mt-32">
//       <Sphere />
//     </div>
//   );
// }

function LogosSection() {
  return (
    <section className="bg-[#151515] relative padded">
      <div className="container">
        <DynamicScoreGrid />
      </div>
    </section>
  );
}

function PresentationSection() {
  return (
    <section className="bg-[#151515] padded -mb-px">
      <div className="mx-auto max-w-7xl">
        <Heading {...PRESENTATION_SECTION} />
        {/*<ThreeJSSphere />*/}
      </div>
    </section>
  );
}

function HeaderSection() {
  return <ContentSection {...TOP_CONTENT_SECTION} className="md:mt-40" />;
}

function MainContent() {
  return (
    <>
      <ComputerSection {...COMPUTER_SECTION} />
      <LogosSection />
      <PresentationSection />
      <SquigglyDivider />
    </>
  );
}

function BottomSection() {
  return (
    <ContentSection
      {...BOTTOM_CONTENT_SECTION}
      className="mt-[20vh] sm:mt-[50vh] 3xl:mt-[30vh]"
    />
  );
}

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden min-h-[100svh]">
      <HeaderSection />
      <MainContent />
      <BottomSection />
      <BlocksSection />
      <DynamicFooter {...FOOTER_PROPS} />
    </main>
  );
}
