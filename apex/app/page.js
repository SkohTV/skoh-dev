import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_bg.png";
import logo_pic from "@/assets/logo_pic.jpg";
import { GithubSVG, LinkedinSVG, DiscordSVG } from "./_svg";


export const metadata = {
  title: 'Home',
  description: 'Personnal website of Skoh',
}



export default async function Home() {

  let location = 'Unknown'

  try {
    let github_data = await fetch("https://api.github.com/users/skohtv")
    let json_data = await github_data.json()
    location = json_data['location']
  } catch { }

  return (
    <div className="flex flex-col justify-center">
      <div className="m-2 mx-16 h-fit w-fit rounded-full border-8 dark:border-purple-700 border-purple-500 place-self-center max-w-xs relative">
        <Image src={logo} className="rounded-full dark:hover:opacity-0" alt="Skoh logo" />
        <Image src={logo_pic} className="rounded-full absolute top-0 left-0 opacity-0 opacity-100 hover:opacity-0 dark:opacity-0 dark:hover:opacity-100 !duration-300" alt="My picture" />
      </div>
      <div className="flex justify-center">
        <SocialLink svg={GithubSVG} url="https://github.com/SkohTV" />
        <SocialLink svg={LinkedinSVG} url="https://www.linkedin.com/in/noe-lorret-despret/" />
        <SocialLink svg={DiscordSVG} url="https://discord.com/users/373055398464323584" />
      </div>
      <p className="text-center my-12 mx-2">
        I&apos;m a 21yo French student in my 4th year of Computer Science, in love with Low-level programming and Open-source.<br />
        In my free time, I work on personal <InnerLink outgoing={false} url="/projects" text="coding projects" />, contribute to <InnerLink url="https://github.com/SkohTV?tab=repositories&type=fork" text="Open-source" /> and create videos for my <InnerLink url="https://www.youtube.com/@skoh" text="YouTube channel" />.
      </p>
      <div className="flex justify-center items-center mb-18 flex-col sm:flex-row" >
        <InnerButton text="More about me" url="/about" />
        <InnerButton text="Check my projects" url="/projects" />
        <InnerButton text="Contact me" url="/contact" />
      </div>
      <p className="text-center mb-2">
        🌎 <InnerLink url={`https://www.openstreetmap.org/search?query=${encodeURIComponent(location)}`} text={location} />
      </p>
      <p className="text-center">I&apos;m currently studying (<InnerLink url="https://www.isen.fr/" text="ISEN" /> & <InnerLink url="https://www.uqac.ca/" text="UQAC" />) and seeking <InnerLink url="/resume.pdf" text="an apprenticeship" /></p> 
    </div>
  );
}


function SocialLink({ svg, url }) {
  return (
    <Link
      target="_blank"
      href={url}
      className="dark:fill-white fill-black opacity-70 hover:opacity-100 m-2"
      aria-label="Socials link"
    >
      { svg({ size: 24 }) }
    </Link>
  )
}


function InnerLink({ text, url, outgoing = true }) {
  return <Link
    target={outgoing ? "_blank" : "_self"}
    href={url}
    className="dark:hover:text-violet-400 hover:text-violet-500 font-bold"
  >
    {text}
  </Link>
}


function InnerButton({ text, url }) {
  return (
    <Link
      href={url}
      className="
        w-fit p-3 m-2 rounded-lg border-2
        dark:border-zinc-700 dark:bg-zinc-700/50 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/50
        border-zinc-300 bg-zinc-200/50 hover:border-zinc-400 hover:bg-zinc-300/50
      "
    >
      {text}
    </Link>
  )
}
