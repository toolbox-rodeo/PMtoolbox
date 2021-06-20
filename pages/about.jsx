import Container from "../components/container";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

function About() {
  return <div>
    <container>

      {/* https://chakra-ui.com/docs/typography/text . somehow 2nd paragraph is not sized properly and not in same row. */}
      <Text fontSize="6xl">
        <h1>
          ABOUT THIS PROJECT
        </h1>
      </Text>

      <Text fontSize="2xl" as="i">"A PM is only as good as their toolbox."</Text>
      <Text fontSize="2xl">A former product lead of mine used to say that. He mentioned that what distinguishes a mid-level PM from a Junior is the breadth of their toolbox. And what distinguishes a senior from a mid-level is to know which tool to apply in a certain situation.</Text>
      <Text fontSize="2xl">Of course, there is more to a good PM than knowing their toolbox. But let's face it: It's a pretty big part of it.</Text>
      <Text fontSize="2xl">When I started as PO I read every book, blog, article and asked every senior on how to get stuff done right. And all of them where helpful. All of them cite their fair share of methods to validate hypotheses, techniques to organize and prioritize your backlog, or discover solution spaces with your team. But I could not find a central repository in which all of these awesome approaches, workshop methods, techniques and tools were stored in one place. That's why we decided to build it.</Text>
      <Text fontSize="2xl">Make sure to regularly come back and visit. We will continually add more articles and functions to this toolbox. And if you're missing your favorite tool, hit us up: Maybe it will end up here as well at some point.</Text>

      {/* https://chakra-ui.com/docs/media-and-icons/image . somehow, src won't work */}
      <Image
        borderRadius="full"
        boxSize="150px"
        src="Max.jpg"
        fallbackSrc="https://via.placeholder.com/150"
        alt="Max"
      />
      <Text fontSize="2xl">Hi! My name's Max. I am a product guy passionate about helping teams building kick-ass products that users actually love🖤 to use. I spend my days helping incredible teams find and solve problems in health tech. Although I’m more handy with product strategy and the big picture, I have no problem getting my hands dirty and be knees-deep in the tech stack with the team. Currently, I work as a freelancer, regulatory consultant for DiGAs, and product wizard 🧙‍♂️. In my spare time I’m also coding on own projects - such as this - although it’s a bit of a stretch to call dirty hacking coding. Feel free to check out my →GitHub or contact me on →linkedin.</Text>

    </container>
  </div>
}

export default About
