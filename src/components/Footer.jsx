export default function Footer() {
  return (
    <footer className="bottom-0 flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-gray-50 py-6 text-center md:mx-auto md:justify-between ">
      <div className="mx-auto flex w-full flex-row items-center justify-between md:max-w-[90%]">
        <h1>&copy; 2023 Lior</h1>
        <ul className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 md:flex md:flex-row md:flex-wrap md:items-center">
          <li>
            <h1>About</h1>
          </li>
          <li>
            <h1>Contact</h1>
          </li>
          <li>
            <h1>Github</h1>
          </li>
          <li>
            <h1>Projects</h1>
          </li>
        </ul>
      </div>
    </footer>
  );
}
