import {
  LogosGrid,
  ContentSection,
  ComputerSection,
  BlocksSection,
  SquigglyDivider,
  Heading,
  Footer,
  Sphere,
} from "@monogram/ui";
import React from "react";

import {
  TOP_CONTENT_SECTION,
  BOTTOM_CONTENT_SECTION,
  PRESENTATION_SECTION,
  COMPUTER_SECTION,
  FOOTER_PROPS,
} from "@/fixtures";

function HeaderSection() {
  return <ContentSection {...TOP_CONTENT_SECTION} />;
}

function BottomSection() {
  return (
    <ContentSection
      {...BOTTOM_CONTENT_SECTION}
      className="mt-[20vh] sm:mt-[40vh] md:mt-[30vh]"
    />
  );
}

function ThreeJSSphere() {
  return (
    <div className="relative z-40 mx-auto mt-16 aspect-square max-w-[70%] -mb-[50%] lg:mt-32">
      <Sphere />
    </div>
  );
}

function PresentationSection() {
  return (
    <section className="bg-[#151515] padded -mb-px">
      <div className="mx-auto max-w-7xl">
        <Heading {...PRESENTATION_SECTION} />
        <ThreeJSSphere />
      </div>
    </section>
  );
}

function LogosSection() {
  return (
    <section className="bg-[#151515] relative padded">
      <div className="container">
        <LogosGrid />
      </div>
    </section>
  );
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

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden min-h-[100svh]">
      <HeaderSection />
      <MainContent />
      <BottomSection />
      <BlocksSection />
      <Footer {...FOOTER_PROPS} />
    </main>
  );
}
