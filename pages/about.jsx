import Head from "next/head";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "../styles/about.module.css";

const ICONS = {
  github: { src: "/github.svg", alt: "GitHub" },
  linkedin: { src: "/linkedin.svg", alt: "LinkedIn" },
  website: { src: "/www.svg", alt: "Website" },
};

const TEAM = [
  {
    name: "Christos",
    image: "/Christos.png",
    bio: "Works on projects with positive impact and decided to work on this project to help teams and organizations improve their processes and therefore their products. He loves eating cherries 🍒",
    links: [
      { type: "github", href: "https://github.com/paschalidi" },
      {
        type: "linkedin",
        href: "https://www.linkedin.com/in/christos-paschalidis/",
      },
    ],
  },
  {
    name: "Oliver",
    image: "/Oliver.png",
    bio: "Product person with a background in design and web development. Cares about words. Favors outcomes over outputs. Asks why for a living.",
    links: [
      { type: "github", href: "https://github.com/oliverwehn" },
      { type: "linkedin", href: "https://www.linkedin.com/in/oliverwehn/" },
    ],
  },
  {
    name: "Duong",
    image: "/Duong.png",
    bio: "Enjoys creating user-centric, delightful, and human experiences. In their free time, they do art, DIYs, and projects like this one.",
    links: [
      { type: "website", href: "https://www.duongpham.design/" },
      { type: "linkedin", href: "https://www.linkedin.com/in/dngphm/" },
    ],
  },
  {
    name: "Max",
    image: "/Max.png",
    bio: "Product wizard 🧙‍♂️ passionate about helping teams build kick-ass products users love to use. Also codes on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding.",
    links: [
      { type: "github", href: "https://github.com/maxra3209" },
      { type: "linkedin", href: "https://www.linkedin.com/in/max-rank/" },
    ],
  },
];

function TeamMember({ name, image, bio, links }) {
  return (
    <div className={styles.card}>
      <Box align="center">
        <Image borderRadius="full" boxSize="200px" src={image} alt={name} />
      </Box>
      <Text maxWidth="400" margin="13">
        {bio}
      </Text>
      <Text align="center" fontSize="xl">
        {name}
      </Text>
      {/* mt="auto" keeps the links of cards in the same row aligned */}
      <Box mt="auto">
        <Flex margin="13" justify="center">
          {links.map(({ type, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 hover:underline hover:text-success"
            >
              <img
                src={ICONS[type].src}
                alt={`${name} on ${ICONS[type].alt}`}
                width={32}
              />
            </a>
          ))}
        </Flex>
      </Box>
    </div>
  );
}

export default function About() {
  return (
    <div>
      <Head>
        <title>About | PM Toolbox</title>
      </Head>
      <Box align="center">
        <br />
        <br />
        <Text as="h1" fontSize="6xl">
          ABOUT THIS PROJECT
        </Text>
        <br />
        <Text as="i" color="grey">
          &quot;A PM is only as good as their toolbox.&quot;
        </Text>
      </Box>
      <br />
      <Box margin="auto" maxWidth="700px">
        <br />
        <Text>
          A former product lead of mine used to say that. Probably, there&apos;s
          more to a good PM. But definitely, the more tools you&apos;ve got in
          your box, the better you can support your teams to build kick-ass
          products 🐱‍💻.
        </Text>
        <br />
        <Text>
          Unfortunately, there&apos;s no great resource out there where all the
          useful techniques & workshop methods on prioritization, roadmapping,
          discovery, etc. are centrally kept. That&apos;s why we built PM
          Toolbox.
        </Text>
        <br />
        <Text>
          Make sure to regularly come back and visit. We continually add more
          articles and functionalities. And if you&apos;re missing your favorite
          tool, hit us up: Maybe it will end up here as well.
        </Text>
        <br />
        <br />
      </Box>

      <Box align="center">
        <div className={styles.grid}>
          {TEAM.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </Box>

      <br />
      <br />
    </div>
  );
}
