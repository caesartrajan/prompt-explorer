"use client"
import Link from 'next/link'
import { usePathname} from 'next/navigation';

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 py-4 px-4 border-r-2 border-zinc-900">
      <Link href='/builder/research' className={pathname == `/builder/research` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Research</h3>
        <p class="text-sm text-zinc-300">Craft detailed, topical questions.</p>
      </Link>
      <Link href='/builder/creative-writing' className={pathname == `/builder/creative-writing` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Creative Writing</h3>
        <p class="text-sm text-zinc-300">Use the AI as your own ghost writer.</p>
      </Link>
      <Link href='/builder/learn' className={pathname == `/builder/learn` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Learn a Discipline</h3>
        <p class="text-sm text-zinc-300">Prod GPT4 to go deep on topics.</p>
      </Link>
      <Link href='/builder/debate' className={pathname == `/builder/debate` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Debate a Topic</h3>
        <p class="text-sm text-zinc-300">Use the AI as your own ghost writer.</p>
      </Link>
      <Link href='/builder/historical-figures' className={pathname == `/builder/historical-figures` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Chat with Historical Figures</h3>
        <p class="text-sm text-zinc-300">Coax the AI into representing real people.</p>
      </Link>
      <Link href='/builder/time-travel' className={pathname == `/builder/time-travel` ? 'p-2 border-solid border-2 border-zinc-800 rounded' : 'p-2 border-solid border-2 border-zinc-900 rounded'}>
        <h3 className='text-md font-bold'>Role Play</h3>
        <p class="text-sm text-zinc-300">Travel back in time or create your own world.</p>
      </Link>
    </div>
  )
}