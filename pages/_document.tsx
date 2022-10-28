import { Head, Html, Main, NextScript } from 'next/document';
import React, { ReactElement } from 'react';

export default function Document (): ReactElement {
  return (
  <Html lang={'ru'}>
   <Head>
    <title>Hi there</title>
   </Head>
   <body>
   <Main />
   <NextScript />
   </body>
  </Html>
  );
}
