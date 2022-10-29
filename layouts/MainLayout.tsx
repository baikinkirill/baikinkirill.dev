import Head from 'next/head';
import React, { ReactElement } from 'react';
import { MainLayoutProps } from '../types/MainLayout';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective-subtle.css';

export default function MainLayout ({ children, desc, title }: MainLayoutProps): ReactElement {
  return (
	<>
	 <Head>
		<meta
		 name='keywords'
		 content='baikinkirill.dev, кириешка.рф, Баикин Кирилл, Baikin Kirill'
		/>
		<meta name='description' content={desc}/>
		<meta property='og:title' content={title}/>
		<meta property='og:type' content='website'/>
		<meta property='og:url' content='https://baikinkirill.dev'/>
		<meta property='og:image' content='./images/cover.webp'/>
		<meta property='og:image:alt' content='baikinkirill.dev'/>
		<meta property='og:image:width' content='1258'/>
		<meta property='og:image:height' content='617'/>

		<meta name='og:description' content={desc}/>
		<meta name='twitter:card' content='summary'/>
		<meta name='twitter:description' content={desc}/>
		<meta name='twitter:title' content={title}/>
		<meta name='twitter:image' content='./images/cover.webp'/>
		<meta name='twitter:image:alt' content='baikinkirill.dev'/>
		<meta name='twitter:image:width' content='1258'/>
		<meta name='twitter:image:height' content='617'/>
		<meta name='twitter:site' content='https://baikinkirill.dev'/>
		<link rel='canonical' href='https://baikinkirill.dev'/>
		<link rel='apple-touch-icon' href='./images/apple-touch-icon.png'/>
		<meta name='mobile-web-app-capable' content='yes'/>
		<meta name='apple-mobile-web-app-capable' content='yes'/>
		<meta name='yandex-verification' content='66c80ae5f659ee57'/>

		<link rel='icon' type='image/png' sizes='32x32' href='./images/favicon-32x32.png'/>
		<link rel='icon' type='image/png' sizes='16x16' href='./images/favicon-16x16.png'/>
		<link rel='manifest' href='./site.webmanifest'/>
		<meta name='msapplication-TileColor' content='#da532c'/>
		<meta name='theme-color' content='#ffffff'/>

		<title>{title}</title>
	 </Head>
	 {children}
	</>
  );
}
