import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo_bg.png";
import logo_pic from "@/assets/logo_pic.jpg";
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
    <div className="flex flex-col justify-center">
      <div className="m-2 h-fit w-fit rounded-full border-8 border-purple-700 place-self-center max-w-xs relative">
        <Image src={logo} className="rounded-full" alt="Skoh logo" />
        <Image src={logo_pic} className="rounded-full absolute top-0 left-0 opacity-0 hover:opacity-100 duration-300" alt="Skoh logo" />
      </div>
      <div className="flex justify-center">
        <SocialLink svg={GithubSVG} url="https://github.com/SkohTV" />
        <SocialLink svg={LinkedinSVG} url="https://www.linkedin.com/in/noe-lorret-despret/" />
        <SocialLink svg={DiscordSVG} url="https://discord.com/users/373055398464323584" />
      </div>
      <p className="text-center my-12 mx-2">
        I&apos;m a 21yo French student in my 4th year of Computer Science, in love with Low-level programming and Open-source.<br />
        In my free time, I work on personal <InnerLink url="/projects" text="coding projects" />, contribute to <InnerLink url="https://github.com/SkohTV?tab=repositories&type=fork" text="Open-source" /> and create videos for my <InnerLink url="https://www.youtube.com/@skoh" text="YouTube channel" />.
      </p>
      <p className="text-center mb-2">
        🌎 <InnerLink url={`https://www.openstreetmap.org/search?query=${encodeURIComponent(location)}`} text={location} />
      </p>
      <p className="text-center">I&apos;m currently studying (<InnerLink url="https://www.isen.fr/" text="ISEN" /> & <InnerLink url="https://www.uqac.ca/" text="UQAC" />) and looking for <InnerLink url="/resume.pdf" text="an internship" /></p>
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
