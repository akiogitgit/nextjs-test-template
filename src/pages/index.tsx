import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-24 items-center justify-between'>
      <h1>Welcome to Next.js</h1>
      <div className='font-mono text-sm w-full max-w-5xl z-10 items-center justify-between lg:flex'>
        <p className='bg-gradient-to-b border-b flex from-zinc-200 border-gray-300 w-full pt-8 pb-6 top-0 left-0 fixed justify-center backdrop-blur-2xl lg:border lg:rounded-xl lg:bg-gray-200 lg:w-auto lg:p-4  lg:static dark:from-inherit dark:bg-zinc-800/30 dark:border-neutral-800 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/pages/index.tsx</code>
        </p>
        <div className='bg-gradient-to-t from-white via-white flex h-48 w-full bottom-0 left-0 fixed items-end justify-center lg:bg-none lg:h-auto lg:w-auto lg:static dark:from-black dark:via-black'>
          <a
            className='flex p-8 gap-2 pointer-events-none place-items-center lg:p-0 lg:pointer-events-auto'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex relative place-items-center before:bg-gradient-radial before:from-white before:to-transparent before:rounded-full before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:absolute before:blur-2xl ''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className='relative dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='text-center mb-32 grid lg:text-left lg:mb-0 lg:grid-cols-4'>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
          className='border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className='transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
          className='border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className='transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
          className='border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className='transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
          className='border border-transparent rounded-lg py-4 px-5 transition-colors group hover:bg-gray-100 hover:border-gray-300 hover:dark:bg-neutral-800/30 hover:dark:border-neutral-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className='transition-transform inline-block group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
