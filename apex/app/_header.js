import Link from "next/link";
import "@/styles/globals.css";

export default Header;


function Header() {
  return (
    <header className="font-bold p-4">
      <Link href="/home">Home</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/toolbox">Toolbox</Link>
      <Link href="/projects">Projects</Link>
      <a href="bloh.skoh.dev">Blog</a>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
