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
      <Text fontSize="l">A former product lead of mine used to say that. Of course, there is more to a good PM than knowing their toolbox. But let's face it: It's a pretty big part of it.</Text>
      <br />
      <Text fontSize="l">And whne browsing through all the books and other resources, they all mention a handful of them. But there are so many more they leave out. And instead of reading all those books to get to know all those methods, we thought it might be more useful to have them at hand in one central resource. That's why we decided to build this PM Toolbox.</Text>
      <br />
      <Text fontSize="l">Make sure to regularly come back and visit. We will continually add more articles and functions. And if you're missing your favorite tool, hit us up: Maybe it will end up here as well.</Text>
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
        <Text maxWidth="400" margin="13" fontSize="l">Christos works on projects with positive impact and decided to work on this project to help teams and organizations improve their processes and therefore their products. He loves eating cherries 🍒</Text>
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
          src="/Max.png"
          alt="Max"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding.</Text>
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

        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Max.png"
          alt="Max"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
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

        <a className={styles.card}>
        <Box align="center">
        <Image
          borderRadius="full"
          boxSize="200px"
          src="/Max.png"
          alt="Max"
        />
        </Box>
        <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
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
