import '../styles/globals.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
