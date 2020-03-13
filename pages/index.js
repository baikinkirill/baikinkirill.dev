import React from 'react'
import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import Home from "./home"
import Article from "./article-template"
import { useRouter } from 'next/router'
import Head from "next/head";
import {NextSeo} from "next-seo";
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';
export let config = { amp: false }

export default class extends React.Component {
    render() {

                config={amp:false}
                return(<Home/>)

    }
}