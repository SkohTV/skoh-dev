import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";


export default Header;


function Header() {
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



const AboutSVG = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round"
      d="M9 17h4m-4-4h4M9 9h1m7 9v3m0-6h.01M13 3H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 21 7.08 21 8.2 21H13m0-18 6 6m-6-6v4.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 9 14.04 9 14.6 9H19m0 0v2.5"
    />
  </svg>
)

const ToolboxSVG = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill="#fff"
      strokeWidth={0}
      d="m2 8.654 2.813 2.822 6.332-6.35-2.814-2.823-6.332 6.35zm4.441 8.128 2.11-2.117a.993.993 0 0 1 1.408 0 1 1 0 0 1 0 1.411l-2.11 2.117a1 1 0 0 1 0 1.411L6.44 21.015a.993.993 0 0 1-1.407 0l-1.407-1.41a1 1 0 0 1 0-1.412l1.407-1.411a.993.993 0 0 1 1.407 0zm9.146-6.35 6.331-6.35-1.407-1.412-6.331 6.35c-.777-.78-.912-1.907-.302-2.52L19.406.956c.61-.612 1.735-.477 2.512.303l1.407 1.41c.778.78.913 1.909.302 2.52l-5.528 5.545c-.61.612-1.735.477-2.512-.303zm-.924 3.866L9.738 9.36l-.704.706 4.925 4.939.704-.706zm1.407 1.412-.704.705 1.759 1.764c.194.195.51.195.703 0a.5.5 0 0 0 0-.705L16.07 15.71zM2.06 5.77a1.5 1.5 0 0 1 .291-1.704l1.407-1.41a1.49 1.49 0 0 1 1.699-.293L6.924.892a1.986 1.986 0 0 1 2.814 0l2.814 2.823a2 2 0 0 1 0 2.822l-1.407 1.411 8.09 8.114a2.5 2.5 0 0 1 0 3.528 2.482 2.482 0 0 1-3.517 0l-8.09-8.114-1.408 1.411c-.777.78-2.037.78-2.814 0L.592 10.065a2 2 0 0 1 0-2.823l1.467-1.47z" />
  </svg>
)

const ProjectsSVG = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round"
      d="M20.5 7.278 12 12m0 0L3.5 7.278M12 12v9.5m2-.611-1.223.68c-.284.157-.425.236-.575.267a.998.998 0 0 1-.403 0c-.15-.031-.292-.11-.576-.268l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.06V7.942c0-.343 0-.514.05-.667a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111c.284-.158.425-.237.576-.267a1 1 0 0 1 .402 0c.15.03.292.11.576.267l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.153.05.324.05.667V12.5m-13.5-8 9 5M19 21v-6m-3 3h6"
    />
  </svg>
);

const ContactSVG = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M14.05 6A5 5 0 0 1 18 9.95M14.05 2A9 9 0 0 1 22 9.94M18.5 21C9.94 21 3 14.06 3 5.5c0-.386.014-.77.042-1.148.032-.435.048-.653.162-.851a1.06 1.06 0 0 1 .432-.402C3.842 3 4.082 3 4.562 3h2.817c.404 0 .606 0 .779.066a1 1 0 0 1 .396.278c.122.14.191.33.329.71l1.166 3.206c.16.442.24.662.227.872a1 1 0 0 1-.182.513c-.121.171-.323.292-.725.534L8 10a12.1 12.1 0 0 0 6 6l.821-1.369c.242-.402.363-.604.534-.725a1 1 0 0 1 .513-.182c.21-.014.43.066.872.227l3.207 1.166c.38.138.569.207.709.329a.999.999 0 0 1 .277.396c.067.173.067.375.067.779v2.817c0 .48 0 .72-.1.926a1.06 1.06 0 0 1-.401.432c-.198.114-.416.13-.85.162-.38.028-.763.042-1.149.042Z"
    />
  </svg>
)
