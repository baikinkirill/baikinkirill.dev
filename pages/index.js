import React from 'react'
import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import Home from "./home"
import article from "./article-template"
import { useRouter } from 'next/router'
import Head from "next/head";
import {NextSeo} from "next-seo";
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';

export default class extends React.Component {
    static async getInitialProps({ req, query }) {
        const amp = query.amp
        const url = req ? req.url : window.location.href
        const ampUrl = url
        return { amp, ampUrl }
    }
    render() {
        const {amp}=this.props
        switch(amp){
            case "article":
                return(<div><article/></div>)
                break;
            default:
                return(<Home></Home>)
                break;
        }
    }
}