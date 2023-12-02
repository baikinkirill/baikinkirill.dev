import { Metadata } from 'next';
import { KEYWORDS, SITE_NAME, SITE_URL } from '@/shared/constants';

const images = [{
    url: '/images/cover.png',
    alt: SITE_NAME,
    width: 1280,
    height: 640
}];

export const defaultMetadata: Metadata = {
    title: 'Hi there!',
    metadataBase: new URL(SITE_URL),
    keywords: KEYWORDS,
    description: null,
    openGraph: {
        images,
        title: 'Hi there!',
        type: 'website',
        url: SITE_URL
    },
    twitter: {
        images,
        card: 'summary',
        title: 'Hi there!',
        site: SITE_URL
    },
    appleWebApp: {
        capable: true
    },
    verification: {
        yandex: '66c80ae5f659ee57'
    },
    other: {
        'msapplication-TileColor': '#da532c',
        'theme-color': '#ffffff',
        canonical: SITE_URL,
        'apple-touch-icon': '/images/apple-touch-icon.png',
        'favicon-32x32': '/images/favicon-32x32.png',
        'favicon-16x16': '/images/favicon-16x16.png',
        'site.webmanifest': '/site.webmanifest'
    }
};
