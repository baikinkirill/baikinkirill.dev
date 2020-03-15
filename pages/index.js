import React from 'react'
import Link from 'next/link'
import Header1 from "../components/Header"
import Footer1 from "../components/Footer"
import ampFooter1 from "../components/ampFooter"
import ampHeader1 from "../components/ampHeader"
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade';
import AmpState from '../components/amp/AmpState'
import { useAmp } from 'next/amp'
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';
import {NextSeo} from "next-seo";

import Head from 'next/head'

import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import {useRouter} from "next/router";


export default class extends React.Component {

    state = {
        fontSize: 55,HomeIMGStyle:"HomeIMG",height:0,width:0,show:false,text:"Hello World!"
    }

    componentDidMount() {

        setTimeout(()=>        this.test()
        )

        //document.body.clientWidth //Ширина браузера
        //document.body.clientHeight //Высота браузера

        let height = window.outerHeight
        let width=window.innerWidth
        this.setState({height:height,width:width})

        if(width>700){
            this.setState({fontSize:45})
        }
        if(width<800){
            this.setState({fontSize:45})
        }
        if(width<700){
            this.setState({fontSize:25})
        }
        if(width>800){
            this.setState({fontSize:55})
        }
        this.forceUpdate()
        window.addEventListener(`resize`, (event) => {

            if(event==null) return
            let height = window.innerHeight
            let width=window.innerWidth
            this.setState({height:height,width:width})


            if(width>700){
                this.setState({fontSize:45})
            }
            if(width<800){
                this.setState({fontSize:45})
            }
            if(width<700){
                this.setState({fontSize:25})
            }
            if(width>800){
                this.setState({fontSize:55})
            }

            let cl="HomeIMG"
            if(height>1080||width>1920){
                cl="HomeIMGBIG"
            }else{
                cl="HomeIMG"
            }
            this.setState({HomeIMGStyle:cl})
            this.forceUpdate()
        });

    }
    async test(){
        var t = 1
        var array = ["Hello World!","Hallo Welt!","Halló Veröld!","Ciao Mondo!","Witaj Świecie!","Hej Världen!","Sálem Álem!","Bonjour Le Monde!","Прывітанне Свет!","Привіт Світ!","こんにちは！","碌莽禄!:","안녕하세요 세계!","Сәлем Әлем!"
            ,"Γεια Σου Ειρήνη!","Hallo Verden!","Dia Duit Ar Domhan!","🙋 🌍 ❗","00110001<br/>0100111001<br/>01010101010<br/>1010101100000<br/>010100010000000101<br/>1000010110110101010<br/>1010011010000111<br/>00001101100011010","Привет Мир!"]

        var inte = setInterval(()=>{
            if(this.state.show){
                this.setState({show:false})
                if(t==array.length){
                    t=-1

                }
                this.setState({text:array[t]})
                t=t+1
            }else{
                this.setState({show:true})

            }
        },1000)

    }
    render() {

        const {title} = this.props
        let height = this.state.height
        let width=this.state.width
        const eventslogo = "/static/images/zrIzFdTjVG0.jpg"
        const FineBotVK = "/static/images/ic_launcher.png"
        const FineBotTG = "/static/images/unnamed1.png"
        const VKCDuiels = "/static/images/unna'lkmed.png"

        return (

            <>
                <NextSeo
                    openGraph={{
                        type: 'website',
                        url: 'https://cs2.finebot.site',
                        title: 'FineBot',
                        description: 'Это сайт файнбота',
                        images: [
                            {
                                url: '/static/images/ic_launcher.png'
                            }

                        ],
                    }}
                />
                <Layout>
                    <Head>
                        <title>FineBot</title>




                    </Head>
                    <Header1/>

                    <div>
                        <div className={this.state.HomeIMGStyle} style={{width:"100%",position:"relative",marginBottom:"50px"}}>
                            <Fade opposite when={this.state.show}>
                                <div id="tt" className="HomeTextPage" style={{ position:"relative",textAlign:"center",color:"white"}} dangerouslySetInnerHTML={{__html:this.state.text}}></div>
                            </Fade>
                        </div>
                        <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",color:"gray",fontSize:"calc(2em + 1vw)"}}>
                            {title}

                            Че натворили
                        </div>
                    </div>
                    {width>=800?(<div style={{marginLeft:"10px",marginRight:"10px"}}>
                        <div className="parent">
                            <div className="hdblock1">

                                <div style={{textAlign:"center",display:"inline-flex",marginTop:"50px"}}>
                                    <div style={{textAlign:"center",marginRight:"20px"}}>
                                        <img style={{width:"150px",height:"150px"}} src={eventslogo}></img>
                                    </div>
                                    <div>
                                        <div className="HomeTextPage2" style={{textAlign:"left",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                            События в твоем городе
                                        </div>
                                        <div  style={{textAlign:"left",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                            Сервис для ВКонтакте, который показывает интересные мероприятия во многих городах России.
                                            <div>
                                                <a style={{marginTop:"15px"}} href="https://vk.com/appevents" target="_blank" className="button1">Перейти</a>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <div className="hdblock1">

                                <div style={{textAlign:"center",display:"inline-flex",marginTop:"50px"}}>
                                    <div style={{textAlign:"center",marginRight:"20px"}}>
                                        <img style={{width:"150px",height:"150px"}} src={FineBotVK}></img>
                                    </div>
                                    <div>
                                        <div className="HomeTextPage2" style={{textAlign:"left",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                            Чат-менеджер для VK
                                        </div>
                                        <div  style={{textAlign:"left",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                            • Помогает в администрировании беседы<br/>
                                            • Добавляет игры в беседу<br/>
                                            • Может создавать цитаты из пересланного сообщения<br/>
                                            • Ищет самые популярные клипы на YouTube<br/>
                                            • Показывает самые популярные новости за последние 10 секунд<br/>
                                            • Вечерняя рассылка новостей<br/>
                                            • Анонимный чат<br/>
                                            И многое другое!
                                            <div>
                                                <a style={{marginTop:"15px"}} href="https://vk.com/finebot" target="_blank" className="button1">Перейти</a>
                                            </div></div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <div className="hdblock1">

                                <div style={{textAlign:"center",display:"inline-flex",marginTop:"50px"}}>
                                    <div style={{textAlign:"center",marginRight:"20px"}}>
                                        <img style={{width:"150px",height:"150px"}} src={FineBotTG}></img>
                                    </div>
                                    <div>
                                        <div className="HomeTextPage2" style={{textAlign:"left",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                            Бот для Telegram
                                        </div>
                                        <div  style={{textAlign:"left",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                            • Анонимный чат<br/>
                                            • Скачивание музыки с ВК<br/>
                                            • Создание цитат<br/>
                                            • Переводчик<br/>
                                            • Возможность делиться файлами<br/>
                                            <div>
                                                <a style={{marginTop:"15px"}} href="/telegram" target="_blank" className="button1">Перейти</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="parent">
                            <div className="hdblock1">

                                <div style={{textAlign:"center",display:"inline-flex",marginTop:"50px"}}>
                                    <div style={{textAlign:"center",marginRight:"20px"}}>
                                        <img style={{width:"150px",height:"150px"}} src={VKCDuiels}></img>
                                    </div>
                                    <div>
                                        <div className="HomeTextPage2" style={{textAlign:"left",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                            VKcoin Duels
                                        </div>
                                        <div  style={{textAlign:"left",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                            Бот для заработка коинов ВК. Доступен через сервис VKcoin.
                                            <div>
                                                <a style={{marginTop:"15px"}} href="https://vk.com/vkcoinduels" target="_blank" className="button1">Перейти</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>):(
                        <div style={{marginLeft:"10px",marginRight:"10px"}}>
                            <div className="parent">
                                <div className="hdblock1">

                                    <div style={{textAlign:"center",marginTop:"50px"}}>
                                        <div style={{textAlign:"center"}}>
                                            <img width="150px" height="150px" style={{width:"150px",height:"150px"}} src={eventslogo}></img>
                                        </div>
                                        <div>
                                            <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                                События в твоем городе
                                            </div>
                                            <div  style={{textAlign:"center",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                                Сервис для ВКонтакте, который показывает интересные мероприятия во многих городах России
                                                <div>
                                                    <a style={{marginTop:"15px"}} href="https://vk.com/appevents" target="_blank" className="button1">Перейти</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="hdblock1">

                                    <div style={{textAlign:"center",marginTop:"50px"}}>
                                        <div style={{textAlign:"center"}}>
                                            <img width="150px" height="150px" style={{width:"150px",height:"150px"}} src={FineBotVK}></img>
                                        </div>
                                        <div>
                                            <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                                Чат-менеджер для VK
                                            </div>
                                            <div  style={{textAlign:"center",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                                • Помогает в администрировании беседы<br/>
                                                • Добавляет игры в беседу<br/>
                                                • Может создавать цитаты из пересланного сообщения<br/>
                                                • Ищет самые популярные клипы на YouTube<br/>
                                                • Показывает самые популярные новости за последние 10 секунд<br/>
                                                • Вечерняя рассылка новостей<br/>
                                                • Анонимный чат<br/>
                                                И многое другое!
                                                <div>
                                                    <a style={{marginTop:"15px"}} href="https://vk.com/finebot" target="_blank" className="button1">Перейти</a>
                                                </div></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="hdblock1">

                                    <div style={{textAlign:"center",marginTop:"50px"}}>
                                        <div style={{textAlign:"center"}}>
                                            <img width="150px" height="150px" style={{width:"150px",height:"150px"}} src={FineBotTG}></img>
                                        </div>
                                        <div>
                                            <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                                Бот для Telegram
                                            </div>
                                            <div  style={{textAlign:"center",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                                • Анонимный чат<br/>
                                                • Скачивание музыки с ВК<br/>
                                                • Создание цитат<br/>
                                                • Переводчик<br/>
                                                • Возможность делиться файлами<br/>
                                                <div>
                                                    <a style={{marginTop:"15px"}} href="/telegram" target="_blank" className="button1">Перейти</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="parent">
                                <div className="hdblock1">

                                    <div style={{textAlign:"center",marginTop:"50px"}}>
                                        <div style={{textAlign:"center"}}>
                                            <img width="150px" height="150px" style={{width:"150px",height:"150px"}} src={VKCDuiels}></img>
                                        </div>
                                        <div>
                                            <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                                VKcoin Duels
                                            </div>
                                            <div  style={{textAlign:"center",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                                Бот для заработка коинов ВК. Доступен через сервис VKcoin.
                                                <div>
                                                    <a style={{marginTop:"15px"}} href="https://vk.com/vkcoinduels" target="_blank" className="button1">Перейти</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)}
                    <Footer1/>

                </Layout>
            </>
        )
    }
}
