import Image from "next/image";

import quantum from "@/assets/project_quantum.png";
import oclrs from "@/assets/project_ocl-rs.png";
import opensource from "@/assets/project_opensource.png";
import Link from "next/link";

export const metadata = {
  title: 'Projects',
  description: 'Cool projects that I\'ve worked on',
}


export default function Projects() {
  return (
    <div className="px-4">
      <div className="py-8">
        <h1 className="text-2xl text-center font-bold">Projects</h1>
        <p className="text-center italic">Cool projects that I&apos;ve worked on</p>
      </div>

      <div className="pb-4">
        <h2 className="text-xl">Featured</h2>
        <BigBox name="Quantum" img={quantum} url="https://github.com/SkohTV/quantum" text="All-in-one Discord bot managing my discord and Youtube channel" />
        <BigBox name="ocl-rs" img={oclrs} url="https://github.com/ISENLabs/ocl-rs" text="High-performance, fault-tolerant CDN for https://lazy.isenlabs.fr" />
        <BigBox name="Open Source" img={opensource} url="https://github.com/SkohTV?tab=repositories&type=fork" text="Nixpkgs maintainer and active bpfilter contributor" />
      </div>

      <div className="pt-4">
        <h2 className="text-xl pb-2">All</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SmallBox name="Dotfiles" url="https://github.com/SkohTV/dotfiles" text="Personnal NixOS configuration files" />
          <SmallBox name="Remote Desktop" url="https://github.com/SkohTV/remote-desktop/" text="Desktop-in-cloud setup, using AWS & other automations" />
          <SmallBox name="skoh-dev" url="https://github.com/SkohTV/skoh-dev/" text="Personnal website & portfolio (this website)" />
          <SmallBox name="skoh-tv" url="https://github.com/SkohTV/skoh-tv" text="Personnal linktree" />
          <SmallBox name="gps-graph" url="https://github.com/SkohTV/gps_graph" text="Locally hosted GPS" />
          <SmallBox name="excalidraw-exporter" url="https://github.com/SkohTV/excalidraw-exporter" text="Convert excalidraw files into svg via Github Actions" />
          <SmallBox name="rbuild" url="https://github.com/SkohTV/rbuild" text="Work in progress" />
        </div>
      </div>

    </div>
  );
}



function BigBox({ name, img, text, url }) {
  return (
    <Link target="_blank" href={url} className="flex dark:bg-zinc-800/30 bg-zinc-200/30 p-2 my-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-400 rounded-md md:w-150">
      <div className="dark:bg-zinc-800 bg-zinc-200 p-1.5 rounded-md min-w-[68px]">
        <Image alt={name} src={img} width={56} height={56}/>
      </div>
      <div className="flex flex-col px-4 justify-around py-1">
        <div className="font-bold">{name}</div>
        <div className="line-clamp-2">{text}</div>
      </div>
    </Link>
  )
}


function SmallBox({ name, text, url }) {
  return (
    <Link target="_blank" href={url} className="flex dark:bg-zinc-800/30 bg-zinc-200/30 p-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-400 rounded-md">
      <div className="flex flex-col px-4 justify-center">
        <div className="font-bold pb-1">{name}</div>
        <div className="">{text}</div>
      </div>
    </Link>
  )
}
