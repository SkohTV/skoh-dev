import Link from "next/link";

export const metadata = {
  title: 'Contact',
  description: 'Wip',
}


export default function Contact() {
  return (
    <div className="text-center pt-8">
      <h1 className="text-2xl font-bold">Contact me on</h1>
      <div className="py-4">
        <p>Discord, at <PLink url="https://discord.com/users/373055398464323584">@skoh</PLink></p>
        <p>LinkedIn, at <PLink url="https://www.linkedin.com/in/noe-lorret-despret/">in/noe-lorret-despret</PLink></p>
        <p>Mail, at <PLink url="mailto:contact@skoh.dev">contact@skoh.dev</PLink></p>
      </div>
      <div>
        <p>Download my <PLink url="/resume.pdf">resume</PLink></p>
        <p>More links at <PLink url='https://skoh.tv'>https://skoh.tv</PLink></p>
      </div>
    </div>
  );
}



function PLink({ children, url }) {
  return (
    <Link
      href={url}
      className="hover:text-violet-400 font-bold"
    >
      {children}
    </Link>
  );
}
