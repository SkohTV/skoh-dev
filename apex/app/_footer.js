import Link from "next/link";
import { GithubSVG, LinkedinSVG } from "./_svg";


export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-between border-t dark:border-zinc-700/75 border-zinc-400/75 border-solid">
      <div className="flex">
        <FooterLink svg={GithubSVG} url="https://github.com/SkohTV" />
        <FooterLink svg={LinkedinSVG} url="https://www.linkedin.com/in/noe-lorret-despret/" />
      </div>
      <div className="text-xs dark:text-zinc-400 text-zinc-700">Copyright © {new Date().getFullYear()} Noé LORRET-DESPRET</div>
    </footer>
  );
}


function FooterLink({ svg, url }) {
  return (
    <Link
      target="_blank"
      href={url}
      className="dark:fill-white fill-black opacity-70 hover:opacity-100 m-2"
      aria-label="Socials link"
    >
      { svg({ size: 20 }) }
    </Link>
  )
}
