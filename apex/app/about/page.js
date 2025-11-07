import Image from "next/image";

import logo_pic from "@/assets/logo_pic.jpg";
import Link from "next/link";
import { UQAC_BOX, ISEN_BOX, MTI_BOX, Line } from "./_timeline";

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
        <div className="flex justify-center md:float-right">
          <Image src={logo_pic} className="rounded-lg w-96 md:float-right border-3 dark:border-zinc-800 border-zinc-200 md:ml-24 mb-4" alt="My picture" />
        </div>
        <h2 className="text-xl">Who am I</h2>
        <p>
          My name is <u>Noé</u>, but I&apos;m also known as <u>Skoh</u> on some socials.<br />
          I&apos;m a French computer science student at <InnerLink text="ISEN" url="https://www.isen.fr/" /> (<i>an engineering school</i>), going into my 4th year.<br />
          However, I&apos;m not currently in France but in Canada, pursuing a double diploma at <InnerLink text="UQAC" url="https://www.uqac.ca/" /> (<i>master of computer science</i>).<br />
          <br />
          I&apos;ve been loving my programming journey so far. I&apos;ve tried plenty of languages (<i>Python and Rust being my favourites</i>),
          dabbled in a lot of fields and interacted with a bunch of communities.<br />
          <br />
          Most recently I&apos;ve started to get into Open-source, a great way for me to challenge myself,
          learn more and help contribute to projects used by lots of people every day!
        </p>
      </div>

      <div className="py-4"> 
        <h2 className="text-xl">Passions</h2>
        <h3 className="font-bold pt-3"><InnerLink text="Gaming" url="https://steamcommunity.com/id/SkohTV/" /></h3>
        <p>
          Ex-competitive Overwatch and Fortnite tryhard.<br />
          Currently discovering indie games and hidden gems on Steam, with my Steamdeck.
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Content creation" url="https://www.youtube.com/@skoh" /></h3>
        <p>
          Small gaming Youtuber and Streamer, aspiring to share my love of video games with the world.<br />
          One day, I&apos;ll be famous on french Youtube.
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Coding" url="https://github.com/SkohTV" /></h3>
        <p>
          Low Level developper, DevOps enthusiast and in love with Open-source.<br />
          Always amazed to see how cleverly things are implemented.
        </p>
      </div>

      <div className="pt-4">
        <h2 className="text-xl pb-8 lg:pt-8 lg:text-left text-center">Timeline</h2>

        {/* For large screens */}
        <div className="hidden lg:flex justify-center w-100%" >
          <div id="left">
            <UQAC_BOX />
            <ISEN_BOX />
          </div>

          <Line />

          <div id="right" className="translate pt-38">
            <MTI_BOX />
          </div>
        </div>


        {/* For small screens */}
        <div className="flex flex-col lg:hidden">
          <UQAC_BOX />
          <MTI_BOX />
          <ISEN_BOX />
        </div>
        

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
