import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  title?: string
  children: React.ReactNode
}

export const Layout: FC<Props> = ({ title = 'Next.js', children }) => {
  return (
    <div className='flex flex-col font-serif min-h-screen justify-center items-center'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className='bg-gray-800 w-screen'>
          <div className='flex h-14 pl-8 items-center'>
            <div className='flex space-x-4'>
              <Link href='/'>
                <div
                  data-testid='home-nav' // testで指定する
                  className='rounded py-2 px-3 text-gray-300 hover:bg-gray-700'
                >
                  Home
                </div>
              </Link>
              <Link href='/blog'>
                <div
                  data-testid='blog-nav' // testで指定する
                  className='rounded py-2 px-3 text-gray-300 hover:bg-gray-700'
                >
                  Blog
                </div>
              </Link>
              <Link href='/users'>
                <div
                  data-testid='users-nav' // testで指定する
                  className='rounded py-2 px-3 text-gray-300 hover:bg-gray-700'
                >
                  Users
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* flex-1はこれ＝＞ flex-grow:1, flex-shrink:1, flex-basis:0 */}
      {/* flex-growは、親の余っている場所を奪う */}
      {/* flex-shrink: 1は、growではみ出た分を戻す */}
      <main className='flex flex-col flex-1 w-screen justify-center items-center'>
        {children}
      </main>
    </div>
  )
}
