import Link from "next/link";


export const metadata = {
  title: 'Toolbox',
  description: 'Wip',
}


export default function Toolbox() {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center font-bold py-8">Toolbox</h1>

      <h2 className="text-xl">Langages</h2>
      <Box>
        <Tool img="python" url="https://www.python.org" name="Python" msg="My favorite language" />&nbsp;
        <Tool img="rust" url="https://www.rust-lang.org" name="Rust" msg="Also my favorite language" />&nbsp;
        &nbsp;&nbsp;&nbsp;
        <Tool img="lua" url="https://www.lua.org" name="Lua" msg="Simple and lightweight" />&nbsp;
        <Tool img="js" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" name="JavaScript" msg="Overkill web scripting" />&nbsp;
        <Tool img="cpp" url="https://www.cplusplus.com" name="C++" msg="Older Rust" />&nbsp;
        <Tool img="c" url="https://www.cprogramming.com" name="C" msg="Older C++" />
      </Box>

      <h2 className="text-xl">Tooling</h2>
      <Box>
        <Tool img="nix" url="https://nixos.org" name="NixOS" msg="My Linux distribution" />&nbsp;
        <Tool img="bash" url="https://www.gnu.org/software/bash/" name="Bash" msg="My shell" />&nbsp;
        <Tool img="aws" url="https://aws.amazon.com" name="AWS" msg="DevOps's dream (but $$)" />&nbsp;
        <Tool img="docker" url="https://www.docker.com" name="Docker" msg="Deployement made easy" />
      </Box>

      <h2 className="text-xl">Software</h2>
      <Box>
        <Tool img="neovim" url="https://neovim.io" name="Neovim" msg="My text editor" />&nbsp;
        <Tool img="obsidian" url="https://obsidian.md" name="Obsidian" msg="My knowledge database" />
      </Box>
    </div>
  );
}



function Box({ children }) {
  return (
    <div className="flex items-center h-20 mb-4">
      {children}
    </div>
  );
}


function Tool({ img, url, name, msg }) {
  return (
    <div className="
      flex items-center
      rounded-md !duration-300 border-2 bg-black/10 overflow-hidden outline-[0px]
      hover:border-indigo-600 hover:h-18 hover:w-68 hover:p-2
      border-transparent h-[48px] w-[48px]
    ">
        <img src={`https://skillicons.dev/icons?i=${img}`} className="h-full" alt={msg} />
        <div className="m-2 text-start">
          <Link href={url} className="font-bold hover:text-violet-400">{name}</Link>
          <p className="text-nowrap">{msg}</p>
        </div>
    </div>
  );
}
