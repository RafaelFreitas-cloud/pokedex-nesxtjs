// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { global } from 'styled-jsx/css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
