import Image from "next/image";

import logo_pic from "@/assets/logo_pic.jpg";
import Link from "next/link";

export const metadata = {
  title: 'About',
  description: 'More informations about me',
}


export default function About() {
  return (
    <div className="px-4">
      <div className="py-8">
        <h1 className="text-2xl text-center font-bold">About me</h1>
        <p className="text-center italic">More informations about me</p>
      </div>

      <div className="pb-4">
        <Image src={logo_pic} className="rounded-lg w-96 float-right border-3 dark:border-zinc-800 border-zinc-200" alt="My picture" />
        <h2 className="text-xl">Who am I</h2>
        <p>Blabla</p>
      </div>

      <div className="py-4"> 
        <h2 className="text-xl">Passions</h2>
        <h3 className="font-bold pt-3"><InnerLink text="Gaming" url="https://steamcommunity.com/id/SkohTV/" /></h3>
        <p>
          Ex-competitive Overwatch and Fortnite tryhard<br />
          Currently discovering indie games and hidden gems on Steam, with my Steamdeck
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Content creation" url="https://www.youtube.com/@skoh" /></h3>
        <p>
          Small gaming Youtuber and Streamer, aspiring to share my love of video games with the world.<br />
          One day, I'll be famous on french Youtube
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Coding" url="https://github.com/SkohTV" /></h3>
        <p>
          Low Level developper, DevOps enthusiast and in love with Open-source<br />
          Always amazed to see how cleverly things are implemented.
        </p>
      </div>

      <div className="pt-4">
        <h2 className="text-xl">Timeline</h2>
        <p>todo</p>
      </div>

    </div>
  );
}




function InnerLink({ text, url }) {
  return <Link
    target="_blank"
    href={url}
    className="dark:hover:text-violet-400 hover:text-violet-500 font-bold"
  >
    {text}
  </Link>
}
