import Alert from "./alert";

export default function Layout({ preview, children }) {
  return (
    <div className="py-4">
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </div>
  );
}
