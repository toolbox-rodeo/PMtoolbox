import { Button } from '@chakra-ui/react';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div>
      <p>
      <img src="/404.gif" alt="Laika in Space"/>
        {statusCode
          ? `Seems like you're lost in ${statusCode}`
          : 'Seems like you are lost in'}
      </p>

      <div>
        <Link href="/">
          <Button>
          Back to Earth
          </Button>
        </Link>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
