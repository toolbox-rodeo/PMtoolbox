import Container from "../components/container";
import {
  Text,
  Image,
  Divider,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Flex,
  Center
} from "@chakra-ui/react";
import styles from "../public/about.module.css";

function About() {
  return <div>
      {/* https://chakra-ui.com/docs/typography/text . somehow 2nd paragraph is not sized properly and not in same row. */}
    <Box align="center">
      <br /><br />
      <Text fontSize="6xl">
        <h1>
          ABOUT THIS PROJECT
        </h1>
      </Text>
      <br />
      <Text fontSize="l" as="i" color="grey">"A PM is only as good as their toolbox."</Text>
    </Box>
    <br />
    <Box margin="auto" maxWidth="700px">
      <br />
      <Text fontSize="l">A former product lead of mine used to say that. Probably, there's more to a good PM. But definitely, the more tools you've got in your box, the better you can support your teams to build kick-ass products 🐱‍💻.</Text>
      <br />
      <Text fontSize="l">Unfortunately, there's no great resource out there where all the useful techniques & workshop methods on prioritzation, roadmapping, discovery, etc. are centrally kept. That's why we built PM Toolbox.</Text>
      <br />
      <Text fontSize="l">Make sure to regularly come back and visit. We continually add more articles and functionalities. And if you're missing your favorite tool, hit us up: Maybe it will end up here as well.</Text>
      <br /><br />
    </Box>

    <Box align="center">
      <div className={styles.grid}>
        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Christos.png"
          alt="Christos"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Works on projects with positive impact and decided to work on this project to help teams and organizations improve their processes and therefore their products. He loves eating cherries 🍒</Text>
        <Text align="center" fontSize="xl">Christos</Text>

        <Flex margin="13" justify="center" >
            <a
              href="https://github.com/paschalidi"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/github.svg" alt="Github Logo" width={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/christos-paschalidis/"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
            </a>
        </Flex>
        </a>

        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Oliver.png"
          alt="Oliver"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Product person with a background in design and web development. Cares about words. Favors outcomes over outputs. Asks why for a living.</Text>
        <Text align="center" fontSize="xl">Oliver</Text>
        <Text fontSize="l"> <br /> </Text>
        <Flex margin="13" justify="center" >
            <a
              href="https://github.com/oliverwehn"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/github.svg" alt="Github Logo" width={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/oliverwehn/"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
            </a>
        </Flex>
        </a>

        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Duong.png"
          alt="Duong"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Enjoys creating user-centric, delightful, and human experiences. In their free time, they do art, DIYs, and projects like this one.</Text>
        <Text align="center" fontSize="xl">Duong</Text>
        <Text fontSize="l"> <br /> <br /> </Text>
        <Flex margin="13" justify="center" >
            <a
              href="https://www.duongpham.design/"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/www.svg" alt="Website Logo" width={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/dngphm/"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
            </a>
        </Flex>
        </a>

        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Max.png"
          alt="Max"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Product wizard 🧙‍♂️ passionate about helping teams build kick-ass products users love to use. Also codes on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding.</Text>
        <Text align="center" fontSize="xl">Max</Text>
        <Flex margin="13" justify="center" >
            <a
              href="https://github.com/maxra3209"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/github.svg" alt="Github Logo" width={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/max-rank/"
              target="_blank"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
            </a>
        </Flex>
        </a>

      </div>
    </Box>

    <br /><br />
  </div>
}

export default About
