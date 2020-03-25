import React from 'react'
import Link from 'next/link'
import Header1 from "../../components/Header"
import Footer1 from "../../components/Footer"
import ampFooter1 from "../../components/ampFooter"
import ampHeader1 from "../../components/ampHeader"
import Layout from '../../components/Layout'
import Fade from 'react-reveal/Fade';
import AmpState from '../../components/amp/AmpState'
import { useAmp } from 'next/amp'

import Head from 'next/head'

import AmpScript from '../../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../../components/amp/AmpCustomElement'
import {useRouter} from "next/router";

export const config={amp:false}

export default class extends React.Component {

    state = {
        fontSize: 55
    }

    componentDidMount() {


    }
    getHead(title,description){
        return(
            <Head>
                {title===""?(<title>FineBot</title>):(<title>{title} | FineBot</title>)}
                <meta name="description" content={description}/>
                {title===""?(<meta property="og:title" content="FineBot"/>):(<meta property="og:title" content={title+" | FineBot"}/>)}
                <meta property="og:description" content={description}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`
                "@context": "https://schema.org",
  "@type": "Project",
  "name": "FineBot",
  "alternateName": "FineBot",
  "url": "https://cs2.finebot.site",
  "logo": "https://cs2.finebot.site/static/images/ic_launcher.png"`}}></script>
                <meta property="og:site_name" content="FineBot"/>
                <meta property="og:image" content="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta name="twitter:image" content="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <meta property="vk:image" content="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
                <link rel="mask-icon" href="https://cs2.finebot.site/static/images/logo.png" color="#FFF"/>
                <link rel="image_src" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>
            </Head>
        )
    }
    render() {



        return (

            <>

                <Layout>
                    {this.getHead("","Страница авторизации")}
                    <Header1/>


                    <Footer1/>

                </Layout>
            </>
        )
    }
}
