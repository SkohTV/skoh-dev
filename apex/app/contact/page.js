import Link from "next/link";

export const metadata = {
  title: 'Contact',
  description: 'Wip',
}


export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Discord, at <PLink url="https://discord.com/users/373055398464323584">@skoh</PLink></p>
      <p>Mail, at <PLink url="mailto:contact@skoh.dev">contact@skoh.dev</PLink></p>
      <p>LinkedIn, at <PLink url="https://www.linkedin.com/in/noe-lorret-despret/">in/noe-lorret-despret</PLink></p>
      <p>Resume here [...]</p>
      <p>More links at <a href='https://skoh.tv'>https://skoh.tv</a></p>
    </div>
  );
}



function PLink({ children, url }) {
  return (
    <Link
      href={url}
      className="font-bold"
    >
      {children}
    </Link>
  );
}
