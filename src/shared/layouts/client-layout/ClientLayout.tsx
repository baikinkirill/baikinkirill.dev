import React from 'react';
import { ClientLayoutProps } from './ClientLayout.types';
import Head from 'next/head';
import { KEYWORDS, SITE_NAME, SITE_URL } from '@/shared/constants';

export const ClientLayout: React.FC<ClientLayoutProps> = (props) => {
    const { children, desc = '', title = 'Hi there!' } = props;

    return (
        <>
            <Head>
                <meta
                    name='keywords'
                    content={KEYWORDS}
                />
                <meta name='description' content={desc}/>
                <meta property='og:title' content={title}/>
                <meta property='og:type' content='website'/>
                <meta property='og:url' content={SITE_URL}/>
                <meta property='og:image' content='./images/cover.png'/>
                <meta property='og:image:alt' content={SITE_NAME}/>
                <meta property='og:image:width' content='1280'/>
                <meta property='og:image:height' content='640'/>
                <meta name='og:description' content={desc}/>
                <meta name='twitter:card' content='summary'/>
                <meta name='twitter:description' content={desc}/>
                <meta name='twitter:title' content={title}/>
                <meta name='twitter:image' content='./images/cover.png'/>
                <meta name='twitter:image:src' content='./images/cover.png'/>
                <meta name='twitter:image:alt' content={SITE_NAME}/>
                <meta name='twitter:image:width' content='1280'/>
                <meta name='twitter:image:height' content='640'/>
                <meta name='twitter:site' content={SITE_URL}/>
                <link rel='canonical' href={SITE_URL}/>
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
};

export default ClientLayout;
