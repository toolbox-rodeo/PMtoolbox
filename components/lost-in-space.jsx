import { Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import styles from "../styles/404.module.css";

export default function LostInSpace({ statusCode }) {
  return (
    <Box align="center" backgroundColor="black">
      <div className={styles.title}>
        <p>
          <img src="/404.gif" alt="Laika in Space" className={styles.img} />
          {statusCode
            ? `Seems like you're lost in ${statusCode}`
            : "Seems like you are lost in"}
        </p>
        <br />
        <br />

        <div>
          <Button as={NextLink} href="/">
            Back to Earth
          </Button>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Box>
  );
}
