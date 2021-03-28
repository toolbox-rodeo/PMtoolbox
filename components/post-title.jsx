export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl font-bold tracking-tighter leading-tight md:leading-none mt-12 mb-4 text-center md:text-left">
      {children}
    </h1>
  );
}
