import LostInSpace from "../components/lost-in-space";

// Statically generated; also used for posts that don't exist.
export default function NotFound() {
  return <LostInSpace statusCode={404} />;
}
