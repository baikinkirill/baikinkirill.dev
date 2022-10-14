import Head from 'next/head';

export default function getSeo(title: string, desc: string) {
 return (
  <Head>
   <meta
    name='keywords'
    content='baikinkirill.dev, кириешка.рф, Баикин Кирилл, Baikin Kirill'
   />
   <meta name='description' content={desc} />
   <meta property='og:title' content={title} />
   <meta property='og:type' content='website' />
   <meta property='og:url' content='https://baikinkirill.dev' />
   {/*<meta property='og:image' content='./images/cover.webp' />*/}
   <meta name='og:description' content={desc} />
   <meta name='twitter:card' content='summary' />
   <meta name='twitter:description' content={desc} />
   <meta name='twitter:title' content={title} />
   {/*<meta name='twitter:image' content='./images/cover.webp' />*/}
   <meta name='twitter:site' content='https://baikinkirill.dev' />
   <link rel='canonical' href='https://baikinkirill.dev' />
   {/*<link rel='apple-touch-icon' href='images/logo.png' />*/}
   <meta name='mobile-web-app-capable' content='yes' />
   <meta name='apple-mobile-web-app-capable' content='yes' />
   <meta name='yandex-verification' content='66c80ae5f659ee57' />
   <title>{title}</title>
  </Head>
 );
}
