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
      <p>Phone, at <PLink url="tel:+330695654352">+33 6 95 65 43 52</PLink></p>
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
