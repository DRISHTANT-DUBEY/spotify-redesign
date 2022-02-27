import '../styles/globals.css'
import { RecoilRoot } from "recoil";

// pages/_app.js
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}