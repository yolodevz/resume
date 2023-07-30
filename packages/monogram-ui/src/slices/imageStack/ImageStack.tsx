import { cx } from "class-variance-authority";

import Image from "next/image";

const Pill = ({ className }: { className?: string }) => (
  <div
    className={cx(
      "rounded-[4.25rem] bg-white/50 backdrop-blur-3xl w-[17.5rem]",
      className
    )}
  />
);

export const ImageStack = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex gap-x-4 lg:gap-x-10 w-full h-full">
        <div className="flex flex-col justify-center">
          <Image
            src="https://cdn.raster.app/v327tq6nmjmw2o/monogram/O15fTcZblSh?ixlib=js-3.8.0&s=b3e079d6bb0764077b173e165cb24522"
            width={280}
            height={629}
            quality={100}
            alt="a multicolored pattern of lines on a white background"
            priority
          />
        </div>
        <div>
          <Image
            src="https://cdn.raster.app/v327tq6nmjmw2o/monogram/LcQwOp6mG2o?ixlib=js-3.8.0&s=378d5cb9f54756905d0e965a3de379b4"
            width={278}
            height={670}
            quality={100}
            alt="a multicolored pattern of lines on a white background"
            priority
          />
        </div>
      </div>
      {/*<div className="flex items-end gap-x-10 absolute bottom-0 -right-[20%] h-full w-full">*/}
      <div className="flex items-end gap-x-4 lg:gap-x-10 absolute -bottom-[20%] sm:bottom-0 right-0 z-10 text-white/10 inset-y-0 -mr-[20%] w-full h-full">
        <Pill className="aspect-[5.8/10]" />
        <Pill className="aspect-[4.2/10]" />
      </div>
    </div>
  );
};
