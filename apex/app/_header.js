import Link from "next/link";

import { AboutSVG, ToolboxSVG, ProjectsSVG, ContactSVG } from "./_svg";


export default function Header() {
  return (
    <header className="font-bold flex justify-between items-center border-b border-zinc-700/75 border-solid">
      <div className="flex space-x-4 p-5">
        <Link href="/" className="hover:bg-violet-600 duration-100 px-1 stroke-white text-xl">Skøh</Link>
      </div>
      <div className="flex space-x-4 p-5">
        <HeaderLink name="About" icon={AboutSVG({ size: 24 })} url="/about" />
        <HeaderLink name="Toolbox" icon={ToolboxSVG({ size: 24 })} url="/toolbox" />
        <HeaderLink name="Projects" icon={ProjectsSVG({ size: 24 })} url="/projects" />
        <HeaderLink name="Contact" icon={ContactSVG({ size: 24 })} url="/contact" />
      </div>
      <div className="hidden sm:flex space-x-4 p-5"></div>
    </header>
  );
}



function HeaderLink({ name, icon, url }) {
  return (
    <Link
      href={url}
      className="hover:bg-violet-600 duration-100 px-1 stroke-white"
    >
      <span className="block sm:hidden">{icon}</span>
      <span className="hidden sm:block">{name}</span>
    </Link>
  );
}
