import React from 'react'
import Layout from '../components/Layout'
import AmpState from '../components/amp/AmpState'
import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import Home from "./home"
import article from "./offline"
import { useRouter } from 'next/router'
import Head from "next/head";
import {NextSeo} from "next-seo";
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';
export const config = { amp: false }

export default class extends React.Component {
    render() {
        return (
           <div>
               <Home></Home>
           </div>
        )
    }
}