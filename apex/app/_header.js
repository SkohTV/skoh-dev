import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { AboutSVG, ToolboxSVG, ProjectsSVG, ContactSVG } from "./_svg";


export default function Header() {
  return (
    <header className="font-bold flex justify-between items-center border-b border-zinc-700/75 border-solid">
      <div className="m-2 h-fit w-fit rounded-full border-2 border-purple-700 bg-zinc-900">
        <Link href="/">
          <Image src={logo} width={44} height={44} className="min-w-[44px]" alt="Skoh logo" />
        </Link>
      </div>
      <div className="flex space-x-4 p-5">
        <HeaderLink name="About" icon={AboutSVG({ size: 24 })} url="/about" />
        <HeaderLink name="Toolbox" icon={ToolboxSVG({ size: 24 })} url="/toolbox" />
        <HeaderLink name="Projects" icon={ProjectsSVG({ size: 24 })} url="/projects" />
        <HeaderLink name="Contact" icon={ContactSVG({ size: 24 })} url="/contact" />
      </div>
      <div className="flex space-x-4 p-5">
        <BlogLink name="wip" url="https://skoh.dev" />
      </div>
    </header>
  );
}



function HeaderLink({ name, icon, url }) {
  return (
    <Link
      href={url}
      className="hover:bg-violet-600 duration-100 px-1 fill-black stroke-white"
    >
      <span className="block sm:hidden">{icon}</span>
      <span className="hidden sm:block">{name}</span>
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
