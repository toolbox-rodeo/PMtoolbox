import Alert from "./alert";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="py-4">
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
