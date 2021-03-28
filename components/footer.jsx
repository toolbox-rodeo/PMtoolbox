import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-0 border-t border-accent-2">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Product toolbox&trade;
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/toolbox-rodeo/PMtoolbox"
              className="mx-3 hover:underline hover:text-success"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}