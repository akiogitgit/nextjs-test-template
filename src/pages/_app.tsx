import '@/styles/globals.css'
import type { AppProps } from 'next/app'

if (process.env.NODE_ENV === 'development') {
  const MockServer = () => import('@/mocks/worker')
  MockServer()
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
