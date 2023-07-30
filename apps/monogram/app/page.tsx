import { Text, ImageStack } from "@monogram/ui";
import Image from "next/image";
import mouseIcon from "../public/mouse-with-line.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-8 sm:px-16 lg:px-32 pt-40 overflow-hidden">
      <header className="grid grid-cols-4 max-w-7xl relative mx-auto w-full">
        <Text
          as="h1"
          size="2xl"
          intent="black"
          className="z-10 w-full col-span-full sm:col-span-3 whitespace-nowrap"
        >
          jamstack 101
        </Text>
        <Text
          as="p"
          intent="light"
          className="z-10 mt-4 lg:ml-14 md:mt-10 col-span-full md:col-span-2 text-stone-600/80 mb-16"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue
          massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus
          vel pretium tempor ut dui vivamus sit.
        </Text>
        <div className="col-span-full sm:col-span-2 !col-start-1 flex justify-center z-10">
          <Image
            priority
            src={mouseIcon}
            alt="computer mouse with line"
            className="-ml-12 text-current"
          />
        </div>
        <div className="hidden sm:block col-span-full lg:col-span-2 absolute right-0 lg:right-5 top-0 h-full">
          <ImageStack />
        </div>
      </header>
    </main>
  );
}
