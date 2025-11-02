import Image from "next/image";

import quantum from "@/assets/project_quantum.png";
import oclrs from "@/assets/project_ocl-rs.png";
import opensource from "@/assets/project_opensource.png";
import Link from "next/link";

export const metadata = {
  title: 'Projects',
  description: 'Wip',
}


export default function Projects() {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-center font-bold py-8">Projects</h1>

      <div className="pb-4">
        <h2 className="text-xl">Featured</h2>
        <BigBox name="Quantum" img={quantum} url="https://github.com/SkohTV/quantum" text="All-in-one Discord bot managing my discord and Youtube channel" />
        <BigBox name="ocl-rs" img={oclrs} url="https://github.com/ISENLabs/ocl-rs" text="High-performance, fault-tolerant CDN for https://lazy.isenlabs.fr" />
        <BigBox name="Open Source" img={opensource} url="https://github.com/SkohTV?tab=repositories&type=fork" text="Nixpkgs maintainer and active bpfilter contributor" />
      </div>

      <div className="pt-4">
        <h2 className="text-xl">Smaller</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SmallBox name="Dotfiles" url="https://github.com/SkohTV/dotfiles" text="Personnal NixOS configuration files" />
          <SmallBox name="Remote Desktop" url="https://github.com/SkohTV/remote-desktop/" text="Desktop-in-cloud setup, using AWS & other automations" />
          <SmallBox name="skoh-dev" url="https://github.com/SkohTV/skoh-dev/" text="Personnal website & portfolio (this website)" />
          <SmallBox name="skoh-tv" url="https://github.com/SkohTV/skoh-tv" text="Personnal linktree" />
          <SmallBox name="excalidraw-exporter" url="https://github.com/SkohTV/excalidraw-exporter" text="Convert excalidraw files into svg via Github Actions" />
          <SmallBox name="rbuild" url="https://github.com/SkohTV/rbuild" text="Work in progress" />
        </div>
      </div>

    </div>
  );
}



function BigBox({ name, img, text, url }) {
  return (
    <Link href={url} className="flex bg-zinc-800/30 p-2 m-2 border border-transparent hover:border-zinc-700 duration-100 rounded-md md:w-150">
      <div className="bg-zinc-800 p-1.5 rounded-md">
        <Image alt={name} src={img} width={48} height={48}/>
      </div>
      <div className="flex flex-col px-4 justify-around py-1">
        <div className="font-bold">{name}</div>
        <div>{text}</div>
      </div>
    </Link>
  )
}


function SmallBox({ name, text, url }) {
  return (
    <Link href={url} className="flex bg-zinc-800/30 p-2 m-2 border border-transparent hover:border-zinc-700 duration-100 rounded-md">
      <div className="flex flex-col px-4">
        <div className="font-bold pb-1">{name}</div>
        <div className="">{text}</div>
      </div>
    </Link>
  )
}
