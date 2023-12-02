import { Metadata } from 'next';

const images = [{
    url: './images/cover.png',
    alt: 'baikinkirill.dev',
    width: 1280,
    height: 640
}];

export const defaultMetadata: Metadata = {
    title: 'Hi there!',
    keywords: 'baikinkirill.dev, кириешка.рф, Баикин Кирилл, Baikin Kirill',
    description: null,
    openGraph: {
        images,
        title: 'Hi there!',
        type: 'website',
        url: 'https://baikinkirill.dev'
    },
    twitter: {
        images,
        card: 'summary',
        title: 'Hi there!',
        site: 'https://baikinkirill.dev'
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
        canonical: 'https://baikinkirill.dev',
        'apple-touch-icon': './images/apple-touch-icon.png',
        'favicon-32x32': './images/favicon-32x32.png',
        'favicon-16x16': './images/favicon-16x16.png',
        'site.webmanifest': './site.webmanifest'
    }
};
