import Head from "next/head";
import React from "react";


export default class extends React.Component {
        render() {
                return (
                    <Head>
                            {this.props.title === "" ? (<title>FineBot</title>) : (<title>{this.props.title} | FineBot</title>)}
                            <meta name="description" content={this.props.description}/>
                            {this.props.title === "" ? (<meta property="og:title" content="FineBot"/>) : (
                                <meta property="og:title" content={this.props.title + " | FineBot"}/>)}
                            <meta property="og:description" content={this.props.description}/>
                            <script type="application/ld+json" dangerouslySetInnerHTML={{
                                    __html: `
                "@context": "https://schema.org",
  "@type": "Project",
  "name": "FineBot",
  "alternateName": "FineBot",
  "url": "https://finebot.site",
  "logo": "https://finebot.site/static/images/ic_launcher.png"`
                            }}></script>
                            <meta property="og:site_name" content="FineBot"/>
                            <meta name="keywords" content={"finebot, файнбот,"+this.props.keywords.map((e)=>{return(" "+e.toString())})} />
                            <meta property="og:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                            <meta property="og:image:width" content="1200"/>
                            <meta property="og:image:height" content="630"/>
                            <meta name="twitter:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                            <meta property="vk:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="icon" type="image/png" sizes="32x32"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="icon" type="image/png" sizes="16x16"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="apple-touch-icon" href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="apple-touch-icon" sizes="76x76"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="apple-touch-icon" sizes="120x120"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="apple-touch-icon" sizes="152x152"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="apple-touch-icon" sizes="180x180"
                                  href="https://finebot.site/static/images/ic_launcher.png"/>
                            <link rel="mask-icon" href="https://finebot.site/static/images/logo.png" color="#FFF"/>
                            <link rel="image_src" href="https://finebot.site/static/images/ic_launcher.png"/>
                            <div dangerouslySetInnerHTML={{
                                    __html: '<!-- Yandex.Metrika counter -->\n' +
                                        '<script type="text/javascript" >\n' +
                                        '   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n' +
                                        '   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n' +
                                        '   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
                                        '\n' +
                                        '   ym(64433395, "init", {\n' +
                                        '        clickmap:true,\n' +
                                        '        trackLinks:true,\n' +
                                        '        accurateTrackBounce:true\n' +
                                        '   });\n' +
                                        '</script>\n' +
                                        '<noscript><div><img src="https://mc.yandex.ru/watch/64433395" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\n' +
                                        '<!-- /Yandex.Metrika counter -->'
                            }}></div>
                    </Head>
                )
        }
        }


