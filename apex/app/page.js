import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_bg.png";
import { GithubSVG, LinkedinSVG, DiscordSVG } from "./_svg";


export const metadata = {
  title: 'Home',
  description: 'Wip',
}



export default async function Home() {

  let location = 'Unknown'

  try {
    let github_data = await fetch("https://api.github.com/users/skohtv")
    let json_data = await github_data.json()
    location = json_data['location']
  } catch { }

  return (
    <div className="flex flex-col justify-center h-3/4">
      <div className="m-2 h-fit w-fit rounded-full border-8 border-purple-700 place-self-center">
        <Image src={logo} width={300} height={300} className="rounded-full" alt="Skoh logo" />
      </div>
      <div className="flex justify-center">
        <SocialLink svg={GithubSVG} url="https://github.com/SkohTV" />
        <SocialLink svg={LinkedinSVG} url="https://www.linkedin.com/in/noe-lorret-despret/" />
        <SocialLink svg={DiscordSVG} url="https://discord.com/users/373055398464323584" />
      </div>
      <p className="text-center m-12">
        I&apos;m a 21yo French student in my 4th year of Computer Science, in love with Low-level programming and Open-source.<br />
        In my free time, I work on personal <InnerLink url="/projects" text="coding projects" />, contribute to <InnerLink url="https://github.com/SkohTV?tab=repositories&type=fork" text="Open-source" /> and create videos for my <InnerLink url="https://www.youtube.com/@skoh" text="YouTube channel" />.
      </p>
      <p className="text-center mb-2">
        🌎 <InnerLink url={`https://www.openstreetmap.org/search?query=${encodeURIComponent(location)}`} text={location} />
      </p>
      <p className="text-center">I&apos;m currently <InnerLink url="https://www.isen.fr/" text="studying" /> and looking for <InnerLink url="/resume.pdf" text="an internship" /></p>
    </div>
  );
}


function SocialLink({ svg, url }) {
  return (
    <Link
      href={url}
      className="fill-white opacity-70 hover:opacity-100 duration-100 m-2"
      aria-label="Socials link"
    >
      { svg({ size: 24 }) }
    </Link>
  )
}


function InnerLink({ text, url }) {
  return <Link
    href={url}
    className="hover:text-violet-400 duration-100 font-bold"
  >
    {text}
  </Link>
}
