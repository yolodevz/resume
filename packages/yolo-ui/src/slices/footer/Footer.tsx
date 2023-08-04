"use client";

import * as React from "react";

import { cx } from "class-variance-authority";

import { Container, Text } from "../../components";
import { Logo } from "../logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialLinkProps {
  name: string;
  url: string;
  icon: any; // using `any` for simplicity, but you should replace with the actual type
}

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yolodev/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />,
  },
  {
    name: "Github",
    url: "https://github.com/yolodevz",
    icon: <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />,
  },
];

const SocialLinks = ({
  links,
  onHover,
  onLeave,
}: {
  links: SocialLinkProps[];
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <div
      className="inline-flex items-center gap-4"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="inline-flex items-center justify-center text-rose-500 hover:text-white"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export const Footer = () => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Container
      as="footer"
      size="lg"
      outerClassName="w-full !p-4 mt-auto sticky bottom-0 after:absolute after:inset-0 after:-z-[1] after:bg-gradient-to-t after:from-black"
      innerClassName="flex justify-between items-center"
    >
      <div className="inline-flex -rotate-2 items-baseline gap-2 group">
        <Logo variant="long" />
        <Text
          size="xxs"
          className={cx(
            "text-white select-none",
            hovered ? "opacity-100 font-bold" : "opacity-50"
          )}
        >
          Creative Frontend
        </Text>
      </div>
      <SocialLinks
        links={socialLinks}
        onHover={() => setHovered(true)}
        onLeave={() => setHovered(false)}
      />
    </Container>
  );
};
