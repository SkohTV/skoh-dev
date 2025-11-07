import Link from "next/link"


export const UQAC_BOX = () => (
  <TimeBox title="UQAC" url="https://uqac.ca/" date="Sep 2025 - Jun 2026" subtitle="Master of computer science (double diploma)" flow="left">
    <p className="pb-2"><b>Concentration:</b> Software Engineering</p>
    <p><b>Related coursework:</b></p>
    <ul>
      <li>- Cloud infrastructures</li>
      <li>- Advanced data structures</li>
      <li>- Multi-threading & parallelism</li>
    </ul>
  </TimeBox>
)

export const ISEN_BOX = () => (
  <TimeBox title="ISEN" url="https://www.isen.fr/" date="Sep 2022 - Nov 2027" subtitle="Engineering degree" flow="left">
    <p className="pb-2"><b>Concentration:</b> Computer Science</p>
    <p><b>Related coursework:</b></p>
    <ul>
      <li>- Low level programming</li>
      <li>- Network and infrastructures</li>
      <li>- Full stack web development</li>
      <li>- Agile project management</li>
    </ul>
  </TimeBox>
)

export const MTI_BOX = () => (
  <TimeBox title="MTI France" url="https://fr.mti.com/" date="Aug 2024" subtitle="IT Engineer Intern" flow="right">
    <ul>
      <li className="pb-1">- Implemented storage-optimization workflow to identify and purge unused/orphans VMDK files</li>
      <li className="pb-1">- Built scripts to execute PowerShell and SQL commands in guest VMs, for repeatable pipeline operations</li>
      <li>- Automated VMware/Veeam VM management with PowerShell</li>
    </ul>
  </TimeBox>
)




function TimeBox({ title, subtitle, date, flow, url, children }) {
  return (
    <div className="flex items-center flex-col lg:flex-row lg:pb-0 pb-16">
      {flow === 'right' ? <Linker date={date} flow={flow} /> : ''}
      <div className="flex lg:hidden italic text-xs">{date}</div>
      <Link href={url} target="_blank" className="
        w-256 max-w-128 lg:my-12 w-fit
        flex flex-col justify-center items-center
        p-4 rounded-lg border
        dark:bg-zinc-800/50 dark:border-zinc-700 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/50
        bg-zinc-200/50 border-zinc-300 hover:border-zinc-400 hover:bg-zinc-300/50
      ">
        <div className="text-base font-bold">{title}</div>
        <p className="italic pb-4">{subtitle}</p>
        <div>
          {children}
        </div>
      </Link>
      {flow === 'left' ? <Linker date={date} flow={flow} /> : ''}
    </div>
  )
}


function Linker({ date, flow }) {
  return (
    <div className="hidden lg:flex flex-grow flex-col">
      <p className={(flow === 'left' ? 'text-right pr-1 pl-4' : 'text-left pr-4 pl-1') + ' italic text-xs min-w-[148px]'}>
        {date}
      </p>
      <div className="border-1 border-purple-500 min-w-32 h-0 flex flex-grow"></div>
    </div>
  )
}


export function Line() {
  return (
    <div className="h-100% pl-4 lg:pl-0">
      <p className="italic absolute -translate-x-1/2 -translate-y-1/1">Today</p>
      <div className="h-full w-0 border-1 border-purple-500 rounded-full"></div>
    </div>
  )
}
