import Link from "next/link";

export const metadata = {
  title: 'Contact',
  description: 'Reach out to me',
}


export default function Contact() {
  return (
    <div className="text-center pt-8">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-center italic pb-4">Reach out to me on</p>
      <div className="py-4">
        <p>Discord, at <PLink url="https://discord.com/users/373055398464323584">@skoh</PLink></p>
        <p>LinkedIn, at <PLink url="https://www.linkedin.com/in/noe-lorret-despret/">in/noe-lorret-despret</PLink></p>
        <p>Mail, at <PLink url="mailto:contact@skoh.dev">contact@skoh.dev</PLink></p>
      </div>
      <div>
        <p>Check out my <PLink url="https://blog.skoh.dev">blog</PLink></p>
        <p>More links on <PLink url='https://skoh.tv'>skoh.tv</PLink></p>
      </div>

      <div className="flex justify-center pt-8">
        <CLink url="https://github.com/SkohTV/">
          <img className='dark:hidden block' src='https://gh-readme-profile.vercel.app/api?username=SkohTV' />
          <img className='dark:block hidden' src='https://gh-readme-profile.vercel.app/api?username=SkohTV&theme=dark&border_color=00000088' />
        </CLink>
      </div>

      <div className="flex justify-center pt-4">
        <CLink url="https://leetcode.com/u/SkohTV/">
          <img className='dark:hidden block' src='https://leetcard.jacoblin.cool/skohtv?theme=light&font=JetBrains%20Mono' />
          <img className='dark:block hidden' src='https://leetcard.jacoblin.cool/skohtv?theme=transparent&font=JetBrains%20Mono' />
        </CLink>
      </div>

    </div>
  );
}



function PLink({ children, url }) {
  return (
    <Link
      target="_blank"
      href={url}
      className="dark:hover:text-violet-400 hover:text-violet-500 font-bold"
    >
      {children}
    </Link>
  );
}

function CLink({ children, url }) {
  return (
    <Link
      target="_blank"
      href={url}
    >
      {children}
    </Link>
  )
}
