import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-0 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <span className="text-xl lg:text-xl tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Product Toolbox
          </span>
          {/* Spacer: pushes the links to the right on large screens */}
          <div className="lg:pl-4 lg:w-1/2" />
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <span className="mx-3">Made with 🖤 in Berlin</span>
            <a
              href="https://www.rank.health/imprint"
              className="mx-3 hover:underline hover:text-success"
            >
              Imprint
            </a>
            <a
              href="https://www.rank.health/data-privacy"
              className="mx-3 hover:underline hover:text-success"
            >
              Data Privacy
            </a>
            <a
              href="https://github.com/toolbox-rodeo/PMtoolbox"
              className="mx-3 hover:underline hover:text-success"
            >
              <img src="/github.svg" alt="Github Logo" width={32} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
