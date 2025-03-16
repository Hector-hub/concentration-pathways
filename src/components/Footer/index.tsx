export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between px-4 py-12 mx-auto  md:flex-row bg-gradient-to-r from-gray-800 to-gray-600">
      <p className="mb-8 text-sm text-center text-white md:text-left md:mb-0">
        Open Source - Licensed under
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          className="underline"
        >
          {" "}
          CC BY-NC 4.0
        </a>
        . Contribute on <a href="">GitHub!</a>
      </p>
    </footer>
  );
};
