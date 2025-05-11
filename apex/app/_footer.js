import Link from "next/link";
import Image from "next/image";

export default Footer;


function Footer() {
  return (
    <footer className="p-5 flex items-center justify-between border-t border-zinc-700/75 border-solid">
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
    >
      { svg({ size: 20 }) }
    </Link>
  )
}


// https://react-svgr.com/playground/

const GithubSVG = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
    />
  </svg>
)

const LinkedinSVG = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM11 19h1a1 1 0 0 0 1-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z" />
    <path
      fillRule="evenodd"
      d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z"
    />
  </svg>
)
