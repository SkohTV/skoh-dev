'use client';

import Link from "next/link";

import { AboutSVG, ToolboxSVG, ProjectsSVG, ContactSVG, SunSVG, MoonSVG } from "./_svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function Header() {
  let pathname = usePathname()

  return (
    <header className="font-bold flex sm:justify-between justify-between items-center border-b dark:border-zinc-700/75 border-zinc-400/75 border-solid">
      <div className="flex space-x-4 p-5">
        <Link href="/" className={
          (pathname === '/' ? 'dark:bg-violet-600 bg-violet-400' : '') + ' dark:hover:bg-violet-600 hover:bg-violet-400 px-1 stroke-white text-xl rounded-xs'}
        >
          Skøh
        </Link>
      </div>
      <div className="sm:absolute left-1/2 sm:transform-[translateX(-50%)] flex transform-none">
        <div className="flex space-x-4 p-5">
          <HeaderLink name="About" icon={AboutSVG({ size: 24 })} url="/about" />
          <HeaderLink name="Toolbox" icon={ToolboxSVG({ size: 24 })} url="/toolbox" />
          <HeaderLink name="Projects" icon={ProjectsSVG({ size: 24 })} url="/projects" />
          <HeaderLink name="Contact" icon={ContactSVG({ size: 24 })} url="/contact" />
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}



function HeaderLink({ name, icon, url }) {
  let pathname = usePathname()

  return (
    <Link
      href={url}
      className={
        (pathname === url ? 'dark:bg-violet-600 bg-violet-400' : '') + ' dark:hover:bg-violet-600 hover:bg-violet-400 px-1 pt-1 dark:stroke-white stroke-black rounded-xs'
      }
    >
      <span className="block sm:hidden">{icon}</span>
      <span className="hidden sm:block">{name}</span>
    </Link>
  );
}

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setDarkTheme(theme === 'dark')
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkTheme]);

  return (
  <div className="p-4 dark:stroke-white stroke-black">
    <button onClick={() => setDarkTheme(!darkTheme)}>
      <div className="cursor-pointer p-1.5 dark:bg-zinc-800 bg-zinc-100 rounded-full border dark:border-zinc-700 border-zinc-300">
        {darkTheme ? <MoonSVG size={24} /> : <SunSVG size={24} /> }
      </div>
    </button>
  </div>
  );
};

