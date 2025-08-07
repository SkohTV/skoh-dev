import Link from "next/link";
import { GithubSVG, LinkedinSVG } from "./_svg";


export default function Footer() {
  return (
    <footer className="p-3 flex items-center justify-between border-t border-zinc-700/75 border-solid">
      <div className="flex">
        <FooterLink svg={GithubSVG} url="https://github.com/SkohTV" />
        <FooterLink svg={LinkedinSVG} url="https://www.linkedin.com/in/noe-lorret-despret/" />
      </div>
      <div className="text-xs text-zinc-400">Copyright © {new Date().getFullYear()} Noé LORRET-DESPRET</div>
    </footer>
  );
}


function FooterLink({ svg, url }) {
  return (
    <Link
      href={url}
      className="fill-white opacity-70 hover:opacity-100 duration-100 m-2"
      aria-label="Socials link"
    >
      { svg({ size: 20 }) }
    </Link>
  )
}
