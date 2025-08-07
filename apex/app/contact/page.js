import Link from "next/link";

export default Contact;

export const metadata = {
  title: 'Contact',
  description: 'Wip',
}


function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Discord, at <PLink url="https://discord.com/users/373055398464323584">@skoh</PLink></p>
      <p>Mail, at <PLink url="mailto:contact@skoh.dev">contact@skoh.dev</PLink></p>
      <p>Phone, at <PLink url="tel:+330601020304">+33 6 01 02 03 04</PLink> (fake number, wip)</p>
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
