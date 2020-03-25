import React from 'react'
import Layout from './Layout'
import ampFooter1 from "./ampFooter"
import ampHeader1 from "./ampHeader"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=props=> (
    <>


        <Head>

            <link rel="amphtml" href={props.url}/>



            <title>{props.header}</title>
            <meta name="description" content={props.description}/>
            <meta property="og:title" content={props.header}/>
            <meta property="og:description" content={props.description}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\":\"http://schema.org\",\"@type\":\"NewsArticle\",\"mainEntityOfPage\":\"/\",\"headline\":\""+props.description+"\",\"description\":\""+props.description+"\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"FineBot\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://cs2.finebot.site/static/images/ic_launcher.png\",\"width\":286,\"height\":60}},\"datePublished\":\"2020-03-16T15:21:31Z\",\"dateModified\":\"2020-03-16T15:49:12Z\",\"author\":{\"@type\":\"Organization\",\"name\":\"FineBot\"},\"image\":\"https://cs2.finebot.site/static/images/ic_launcher.png\"}"}}></script>
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
            <link rel="mask-icon" href="https://cs2.finebot.site/static/images/logo.png" color="B88B58"/>
            <link rel="image_src" href="https://cs2.finebot.site/static/images/ic_launcher.png"/>



        </Head>


        <Layout title={props.header}>
            {ampHeader1()}


            <div className="parent">
                <div className="hdblock">

                    <div amp-custom style={{textAlign:"left",display:"block",marginTop:"20px",marginRight:"10px",marginLeft:"10px"}}>

                        <div style={{maxWidth:"800px",margin:"auto",display:"block"}}>

                            <h1 className="h1">
                                {props.title}
                            </h1>
                            <h5>{props.creator} • {props.date}</h5>
                            <div className="text" dangerouslySetInnerHTML={{__html:props.text}}>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {ampFooter1()}

        </Layout>
    </>


)
function generateInlineScript(script) {
    if (typeof script === 'function') {
        return `${script.toString()}()`
    }
    return String(script)
}
export default Post