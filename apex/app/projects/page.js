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
        <BigBox name="Quantum" img={quantum} url="https://github.com/SkohTV/quantum" text="All-in-one Discord bot managing my discord and Youtube channel" tags={['rust', 'gRPC', 'docker']} />
        <BigBox name="ocl-rs" img={oclrs} url="https://github.com/ISENLabs/ocl-rs" text="High-performance, fault-tolerant CDN for https://lazy.isenlabs.fr" tags={['rust', 'REST']}/>
        <BigBox name="Open Source" img={opensource} url="https://github.com/SkohTV?tab=repositories&type=fork" text="Nixpkgs maintainer and active bpfilter contributor" tags={['nixos', 'bpfilter']} />
      </div>

      <div className="pt-4">
        <h2 className="text-xl pb-2">All</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SmallBox name="Dotfiles" url="https://github.com/SkohTV/dotfiles" text="Personnal NixOS configuration files" tags={['nixos', 'neovim', 'hyprland']} />
          <SmallBox name="Remote Desktop" url="https://github.com/SkohTV/remote-desktop/" text="Desktop-in-cloud setup, using AWS & other automations" tags={['AWS', 'bash']} />
          <SmallBox name="skoh-dev" url="https://github.com/SkohTV/skoh-dev/" text="Personnal website & portfolio (this website)" tags={['nextjs', 'nginx', 'docker']} />
          <SmallBox name="skoh-tv" url="https://github.com/SkohTV/skoh-tv" text="Personnal linktree" tags={['nextjs', 'typescript']} />
          <SmallBox name="gps-graph" url="https://github.com/SkohTV/gps_graph" text="Locally hosted Google Maps" tags={['python', 'data-structures']} />
          <SmallBox name="excalidraw-exporter" url="https://github.com/SkohTV/excalidraw-exporter" text="Convert excalidraw files into svg via Github Actions" tags={['github-actions']} />
          <SmallBox name="rbuild" url="https://github.com/SkohTV/rbuild" text="Build & test packages on a matrix of VPS easily" tags={['python', 'ansible']} />
        </div>
      </div>

    </div>
  );
}



function BigBox({ name, img, text, url, tags = [ ] }) {
  return (
    <Link target="_blank" href={url} className="flex dark:bg-zinc-800/30 bg-zinc-200/30 p-2 my-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-400 rounded-md md:w-150">
      <div className="dark:bg-zinc-800 bg-zinc-200 p-1.5 rounded-md min-w-[68px]">
        <Image alt={name} src={img} width={56} height={56}/>
      </div>
      <div className="flex flex-col px-4 justify-around py-1 w-full">
        <div className="flex justify-between">
          <div className="font-bold">{name}</div>
          <div className="flex">{tags.map((x) => <Tag key={x} text={x} />)}</div>
        </div>
        <div className="line-clamp-2">{text}</div>
      </div>
    </Link>
  )
}


function SmallBox({ name, text, url, tags = [ ] }) {
  return (
    <Link target="_blank" href={url} className="flex dark:bg-zinc-800/30 bg-zinc-200/30 p-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-400 rounded-md">
      <div className="flex flex-col px-4 justify-center w-full">
        <div className="pb-1 flex justify-between">
          <div className="font-bold">{name}</div>
          <div className="flex">{tags.map((x) => <Tag key={x} text={x} />)}</div>
        </div>
        <div className="">{text}</div>
      </div>
    </Link>
  )
}

function Tag({ text }) {
  return (
    <div className="
      dark:bg-zinc-900/20 dark:border-zinc-700/60 dark:text-white/20
      bg-zinc-100/20 border-zinc-400/40 text-zinc-900/30
      mx-1 rounded-full px-2 border
    ">
      {'#' + text}
    </div>
  )
}
