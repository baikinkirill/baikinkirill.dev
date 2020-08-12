'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Header1 from "../components/Header"
import Footer1 from "../components/Footer"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Head from "next/head";


export default class Persik extends React.Component {

    constructor(props){
        super(props);

        this.state={
            your_city:"",

        }


    }
    UNSAFE_componentDidMount() {

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
  "url": "https://finebot.site",
  "logo": "https://finebot.site/static/images/ic_launcher.png"`}}></script>
                <meta property="og:site_name" content="FineBot"/>
                <meta property="og:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta name="twitter:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                <meta property="vk:image" content="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="https://finebot.site/static/images/ic_launcher.png"/>
                <link rel="mask-icon" href="https://finebot.site/static/images/logo.png" color="#FFF"/>
                <link rel="image_src" href="https://finebot.site/static/images/ic_launcher.png"/>
                <div dangerouslySetInnerHTML={{__html:'<!-- Yandex.Metrika counter -->\n' +
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
                        '<!-- /Yandex.Metrika counter -->'}}></div>
            </Head>
        )
    }

    render() {


        return (
            <div style={{backgroundColor: "#E3E3E3"}}>
                {this.getHead("Roadmap")}
                <Header1 ></Header1>
                <div >
                    <div id="texts" className="HomeTextPage1" style={{textAlign:"center",marginTop:"50px",color:"gray",fontSize:"calc(2em + 1vw)"}}>

                        Roadmap project
                    </div>
                    <VerticalTimeline>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Зима 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Создание этого сайта</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Зима - осень 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Фигня по мелочам</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Июль 2020"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Написание мега крутой админки</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Создание веб версии сервиса событий</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Расширение сервиса на голосовых ассистентов (Алиса, Маруся)</div>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Когда-то"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div className="vertical-timeline-element-title">Отключение чат-ботов</div>

                        </VerticalTimelineElement>


                    </VerticalTimeline>
                </div>

            </div>


        );
    }
}



