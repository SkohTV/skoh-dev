import Image from "next/image";
import Link from "next/link";

import "@/styles/globals.css";
import logo from "@/assets/logo.png";


export default Header;


function Header() {
  return (
    <header className="font-bold flex justify-center content-center border-b border-zinc-700/75 border-solid">
      <div className="sm:absolute sm:left-0 sm:top-0 m-2 h-12 w-12 rounded-full border-2 border-purple-700 bg-zinc-900">
        <Link href="/">
          <Image src={logo} width={44} height={44} alt="Skoh's logo" />
        </Link>
      </div>
      <div className="flex space-x-4 p-5">
        <HeaderLink name="About" url="/about" />
        <HeaderLink name="Skills" url="/skills" />
        <HeaderLink name="Toolbox" url="/toolbox" />
        <HeaderLink name="Projects" url="/projects" />
      </div>
    </header>
  );
}


function HeaderLink({ name, url }) {
  return (
    <Link
      href={url}
      className="hover:bg-violet-600 duration-100 px-1"
    >
      {name}
    </Link>
  );
}
