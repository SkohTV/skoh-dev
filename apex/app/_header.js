import Image from "next/image";
import Link from "next/link";

import "@/styles/globals.css";
import logo from "@/assets/logo.png";


export default Header;


function Header() {
  return (
    <header className="font-bold flex justify-between items-center border-b border-zinc-700/75 border-solid">
      <div className="m-2 h-fit w-fit rounded-full border-2 border-purple-700 bg-zinc-900">
        <Link href="/">
          <Image src={logo} width={44} height={44} className="min-w-[44px]" alt="Skoh's logo" />
        </Link>
      </div>
      <div className="flex space-x-4 p-5">
        <HeaderLink name="About" url="/about" />
        <HeaderLink name="Skills" url="/skills" />
        <HeaderLink name="Toolbox" url="/toolbox" />
        <HeaderLink name="Projects" url="/projects" />
      </div>
      <div className="flex space-x-4 p-5">
        <BlogLink name="Blog" url="https://blog.skoh.dev" />
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


function BlogLink({ name, url }) {
  return (
    <Link
      href={url}
      className="hover:bg-red-600 duration-100 px-1"
    >
      {name}
    </Link>
  );
}
