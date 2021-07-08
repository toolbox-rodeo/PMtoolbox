import {
Button,
Box
 } from '@chakra-ui/react';
import Link from 'next/link';
import styles from "../public/404.module.css";


function Error({ statusCode }) {
  return (

    <Box align="center" backgroundColor='black'>
    <div className={styles.title}>
      <p>
      <img src="/404.gif" alt="Laika in Space" className={styles.img}/>
        {statusCode
          ? `Seems like you're lost in ${statusCode}`
          : 'Seems like you are lost in'}
      </p>
      <br/><br/>

      <div>
        <Link href="/">
          <Button>
          Back to Earth
          </Button>
        </Link>
      </div>
      <br/><br/><br/>
    </div>
    </Box>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
