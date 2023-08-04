import Image from "next/image";
import { cx } from "class-variance-authority";

interface ImageProps {
  src: string;
}

interface PillProps {
  className?: string;
}

interface ImageStackProps {
  images: ImageProps[];
  className?: string;
}

const Pill = ({ className }: PillProps) => (
  <div
    className={cx(
      "rounded-[7vw] md:rounded-[5vw] 2xl:rounded-[2.5vw] bg-white/50 backdrop-blur-md lg:backdrop-blur-3xl w-[17.5rem]",
      className
    )}
  />
);

// This component works in tandem with the ContentSection component only.
export const ImageStack = ({ images, className }: ImageStackProps) => {
  return (
    <>
      {images.map((image, index) => {
        const isFirst = index === 0;

        return (
          <div
            key={index}
            className={cx(
              "flex flex-col self-baseline mb-[10%] md:mb-[50%] justify-end ml-6 w-full col-span-1 -z-10",
              isFirst
                ? "col-start-2 md:col-start-3 z-0 mt-[40%] md:mt-0"
                : "col-start-3 md:col-start-4 row-start-3 md:row-start-2 lg:row-start-1 absolute top-0",
              className
            )}
          >
            <div className="relative w-full max-w-max">
              <Image
                src={image.src}
                width={280}
                height={629}
                quality={100}
                alt="a multicolored pattern of lines on a white background"
                priority
              />
              <Pill
                className={cx(
                  "aspect-[5.8/10] absolute z-10 w-full",
                  index === 1
                    ? "top-[45%] -right-[56%]"
                    : "-right-[58%] top-[50%]"
                )}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
