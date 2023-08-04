"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ComputerScreen from "../../../public/computer-screen.svg";
import { Heading } from "../../components";

type ComputerProps = {
  codeString: string;
};

export const ComputerSection = ({ codeString }: ComputerProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const handleEdit = () => {
    setIsEditable(true);
    codeRef.current?.focus(); // Automatically focus the code element
  };

  useEffect(() => {
    if (isEditable && codeRef.current) {
      codeRef.current.focus();
    }
  }, [isEditable]);

  return (
    <section className="z-10 padded lg:-mb-[8%]">
      <div className="container relative mx-auto flex flex-col items-center justify-center">
        <div className="-mx-[100%]">
          <Image
            src="https://cdn.raster.app/v327tq6nmjmw2o/monogram/iBCiMpKwZPS?ixlib=js-3.8.0&s=baa61158d32bdb177729295b9186cbb4"
            className=""
            alt="a pink and yellow background with a black border"
            width={1393}
            height={893}
          />
        </div>
        <div className="absolute grid gap-y-6 md:gap-y-14 md:top-32 lg:gap-y-20">
          <Heading
            title="javascript"
            align="center"
            intent="light"
            subtitle={
              "Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js."
            }
          />
          <div className="relative mx-auto hidden h-full w-[80%] md:block xl:w-[70%] 2xl:w-[57%]">
            <div className="absolute hidden w-[80%] top-[6%] left-[10%] md:block">
              <Image
                src={ComputerScreen}
                className="w-full"
                alt="a computer screen"
                width={1620}
                height={1616}
              />
              <code
                contentEditable={isEditable}
                ref={codeRef}
                onClick={handleEdit}
                onBlur={() => setIsEditable(false)}
                className="absolute px-6 py-4 w-full h-full inset-0 text-[#44DBFF] outline-0 text-fluid-computer-screen"
              >
                <pre className="h-full w-full overflow-hidden">
                  <span>{codeString}</span>
                </pre>
              </code>
            </div>
            <Image
              src="https://cdn.raster.app/v327tq6nmjmw2o/monogram/xQT3Mlj6OAQ?ixlib=js-3.8.0&s=b04ace32fa404a82a60cd147a2e3553b"
              className=""
              alt="a computer monitor with a programming program on it"
              width={1620}
              height={1616}
              quality={100} // @todo this is weird, discuss x raster
            />
          </div>
        </div>
      </div>
    </section>
  );
};
