import cn from "classnames";
import Container from "./container";

export default function Alert({ preview }) {
  return preview ? (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            This page is a preview.{" "}
            {/* An API route needs a full page load, not client-side navigation */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{" "}
            to exit preview mode.
          </>
        </div>
      </Container>
    </div>
  ) : null;
}
