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
        <div className="flex flex-col justify-center md:float-right md:ml-24 mb-4 items-center">
          <Image src={logo_pic} className="rounded-lg w-96 md:float-right border-3 dark:border-zinc-800 border-zinc-200" alt="My picture" />
          <div className="text-center italic">Take a look at my <InnerLink text="resume" url="/resume.pdf" /></div>
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
          Ex- Overwatch/Fortnite player, used to be pretty good.<br />
          Currently discovering indie games and hidden gems on Steam, with my Steamdeck.
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Content creation" url="https://www.youtube.com/@skoh" /></h3>
        <p>
          Small gaming Youtuber and Streamer, aspiring to share my love of video games with the world.<br />
          One day, I&apos;ll be famous on french Youtube.
        </p>
        <h3 className="font-bold pt-3"><InnerLink text="Coding" url="https://github.com/SkohTV" /></h3>
        <p>
          Proficient in Low Level coding, DevOps enthusiast and in love with Open-source.<br />
          Always amazed to see how cleverly things are implemented.
        </p>
      </div>

      <div className="pt-4">
        <h2 className="text-xl pb-8 lg:pt-8 lg:text-left text-center">Timeline</h2>
        <p className="text-xs italic absolute -translate-x-1/2 -translate-y-1/1">Today</p>

        <div className="flex pt-2">
          <div className="h-[235px] w-px dark:bg-zinc-600/70 bg-zinc-300/70 rounded-full" />

          <div className="w-full sm:w-auto">
            <TimeBox
              title="UQAC"
              url="https://uqac.ca/"
              subtitle="Master of Computer Science"
              date="Sep 2025 - Jun 2026"
              location="Chicoutimi, Canada"
              active={true}
              color={{ high: "bg-green-500", low: "bg-green-400" }}
              text="One year abroad studying CS, for a double diploma"
            />
            <TimeBox
              title="MTI France"
              url="https://fr.mti.com/"
              subtitle="Cloud Engineering Intern"
              date="Aug 2024"
              location="Paris, France"
              active={false}
              color={{ }}
              text="Writing Powershell scripts to interact with on-site servers and VMs"
            />
            <TimeBox
              title="ISEN"
              url="https://www.isen.fr/"
              subtitle="Engineering degree"
              date="Sep 2022 - Nov 2027"
              location="Caen, France"
              active={true}
              color={{ high: "bg-red-500", low: "bg-red-400" }}
              text="Becoming an engineer with a specialization in Software Engineering"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

function TimeBox({ title, url, subtitle, date, location, active, color, text }) {
  return (
    <div className="relative py-3 px-4">

      <span className={"absolute flex -left-[7px] top-[14px] size-3"}>
        { active ? <span className={"absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 " + color.high}></span> : ''}
        <span className={"relative inline-flex size-3 rounded-full " + (active ? color.low : "dark:bg-zinc-700 bg-zinc-300")}></span>
      </span>

      <div className="flex justify-between">
        <InnerLink text={title} url={url} />
        <p className="text-xs">{date}</p>
      </div>
      <div className="flex justify-between pb-1">
        <p className="italic">{subtitle}</p>
        <p className="text-xs hidden sm:block">{location}</p>
      </div>
      <p>{text}</p>
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
