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

function About() {
  return <div>
      {/* https://chakra-ui.com/docs/typography/text . somehow 2nd paragraph is not sized properly and not in same row. */}
      <Text fontSize="6xl">
        <h1>
          ABOUT THIS PROJECT
        </h1>
      </Text>

      <Text fontSize="l" as="i" color="grey">"A PM is only as good as their toolbox."</Text>
      <Text fontSize="l">A former product lead of mine used to say that. Of course, there is more to a good PM than knowing their toolbox. But let's face it: It's a pretty big part of it.</Text>
      <br />
      <Text fontSize="l">Lots of POs start their career by reading lots of books, blog articles and asking Seniors on how to get stuff done right. And all of them are helpful. All of them cite their fair share of methods to validate hypotheses, techniques to organize and prioritize your backlog, or discover solution spaces with your team. But somehow a central repository in which all of these awesome approaches, workshop methods, techniques and tools were stored in one place is missing. That's why we decided to build it.</Text>
      <br />
      <Text fontSize="l">Make sure to regularly come back and visit. We will continually add more articles and functions. And if you're missing your favorite tool, hit us up: Maybe it will end up here as well.</Text>
      <br /><br />

      <Box align="center">
      <Divider maxWidth="50%" />
      </Box>
      <br /><br />

      <SimpleGrid columns={2} spacing={10}>
        <Box align="center">
          <Image
            borderRadius="full"
            boxSize="200px"
            src="/Max.png"
            alt="Max"
            margin="13"
          />
          <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
          <Flex margin="13" justify="center" >
              <a
                href="https://github.com/maxra3209"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/github.svg" alt="Github Logo" width={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-rank/"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
              </a>
          </Flex>
          <Divider margin="26" maxWidth="50%" />
        </Box>

        <Box align="center">
          <Image
            borderRadius="full"
            boxSize="200px"
            src="/Max.png"
            alt="Max"
            margin="13"
          />
          <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
          <Flex margin="13" justify="center" >
              <a
                href="https://github.com/maxra3209"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/github.svg" alt="Github Logo" width={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-rank/"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
              </a>
          </Flex>
          <Divider margin="26" maxWidth="50%" />
        </Box>

        <Box align="center">
          <Image
            borderRadius="full"
            boxSize="200px"
            src="/Max.png"
            alt="Max"
            margin="13"
          />
          <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
          <Flex margin="13" justify="center" >
              <a
                href="https://github.com/maxra3209"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/github.svg" alt="Github Logo" width={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-rank/"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
              </a>
          </Flex>
        </Box>

        <Box align="center">
          <Image
            borderRadius="full"
            boxSize="200px"
            src="/Max.png"
            alt="Max"
            margin="13"
          />
          <Text maxWidth="400" margin="13" fontSize="l">Hi! My name's Max. I am a product guy passionate about helping teams to build kick-ass products users love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my GitHub or contact me on linkedin.</Text>
          <Flex margin="13" justify="center" >
              <a
                href="https://github.com/maxra3209"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/github.svg" alt="Github Logo" width={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/max-rank/"
                className="mx-3 hover:underline hover:text-success"
              >
                <img src="/linkedin.svg" alt="Linkedin Logo" width={32} />
              </a>
          </Flex>
        </Box>
      </SimpleGrid>
    <br /><br />
  </div>
}

export default About
