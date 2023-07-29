"use client";
import { cva, cx } from "class-variance-authority";
import { Container, Text } from "../../../components";

interface Activity {
  id: number;
  type: "completed" | "ongoing" | "planned";
  description: string;
}

const activity = [
  {
    id: 1,
    type: "completed",
    description: "Deploy MVP personal portfolio project",
  },
  {
    id: 2,
    type: "ongoing",
    description: "Hook up CMS integration to save up on maintenance time",
  },
  {
    id: 3,
    type: "ongoing",
    description:
      "Spin up Storybook integration to showcase design system skills",
  },
  {
    id: 4,
    type: "planned",
    description: "Expand portfolio page to showcase the most interesting work",
  },
  {
    id: 5,
    type: "planned",
    description: "Remember to go for a walk",
  },
] satisfies Activity[];

const styledDot = cva("h-1.5 w-1.5 rounded-full ring-1 z-1", {
  variants: {
    intent: {
      completed: "bg-emerald-400 ring-emerald-500",
      ongoing: "bg-blue-400 ring-blue-500",
      planned: "bg-gray-100 ring-gray-300",
    },
  },
  defaultVariants: {
    intent: "planned",
  },
});

const styledStatus = cva("font-medium", {
  variants: {
    intent: {
      completed: "text-emerald-400",
      ongoing: "text-blue-400",
      planned: "text-gray-100",
    },
  },
  defaultVariants: {
    intent: "planned",
  },
});

interface IListWithComments {
  className?: string;
}

export const ListWithComments = ({ className }: IListWithComments) => {
  return (
    <Container
      size="lg"
      outerClassName={className}
      innerClassName="flex mt-[30vh] items-center justify-center"
    >
      <div className="w-full lg:w-auto">
        <div className="prose prose-slate mb-8 w-full max-w-max">
          <pre className="!bg-zinc-900">
            <code className="text-gray-500">
              <p className="m-0">{`/**`}</p>
              <p className="m-0">
                *
                <span className="text-amber-200 ml-2 pr-4">{`@TODO - find time to bake a good portfolio page`}</span>
              </p>
              <p className="m-0">{`/*`}</p>
            </code>
          </pre>
        </div>
        <ul role="list" className="space-y-6 max-w-max">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id} className="relative flex gap-x-4">
              <div
                className={cx(
                  activityItemIdx === activity.length - 1 ? "h-6" : "-bottom-6",
                  "absolute left-0 top-0 flex w-6 justify-center"
                )}
              >
                <div className="w-px bg-gray-200 opacity-30" />
              </div>

              <>
                <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                  <div
                    className={cx(styledDot({ intent: activityItem.type }))}
                  />
                </div>
                <p className="flex-auto py-0.5 text-xs leading-5 text-gray-400">
                  <span
                    className={cx(styledStatus({ intent: activityItem.type }))}
                  >
                    {activityItem.type}
                  </span>{" "}
                  {activityItem.description}
                </p>
              </>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
