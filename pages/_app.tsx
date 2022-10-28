import '../styles/globals.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/perspective-subtle.css'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'

function MyApp ({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
