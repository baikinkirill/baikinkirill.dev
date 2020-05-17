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
import Promo from "./promo"
import Head from 'next/head'

import AmpScript from '../components/amp/AmpScript'
import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import {useRouter} from "next/router";

export const config={amp:false}

export default class extends React.Component {

    state = {
        fontSize: 55,HomeIMGStyle:"HomeIMG",height:0,width:0,show:false,text:"Hello World!",promo:false
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
            </Head>
        )
    }
    render() {

        const {title} = this.props
        let height = this.state.height
        let width=this.state.width
        const eventslogo = "/static/images/zrIzFdTjVG0.jpg"
        const FineBotVK = "/static/images/ic_launcher.png"
        const FineBotTG = "/static/images/unnamed1.png"
        const VKCDuiels = "/static/images/unna'lkmed.png"
        const pushkinlogo = "/static/images/pushkinlogo.png"

        return (

            <>

                <Layout>
                    {this.getHead("","Это сайт файнбота")}


                    <Header1/>

                    <div>



                        <div className="wrapper" style={{paddingTop:"-50px"}}>
                            <Fade opposite when={this.state.show}>
                                <div id="tt" className="HomeTextPage" style={{ position:"relative",textAlign:"center",color:"white"}} dangerouslySetInnerHTML={{__html:this.state.text}}></div>
                            </Fade>
                            <button type="button" onClick={()=>{
                                window.scrollTo(0,document.getElementById("texts").offsetTop-30)
                            }} className="scroll_down" id="scroll_down"></button>
                        </div>
                        <div id="texts" className="HomeTextPage1" style={{textAlign:"center",marginTop:"50px",color:"gray",fontSize:"calc(2em + 1vw)"}}>

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
                                            Сервис для ВКонтакте, показывающий интересные мероприятия во многих городах России.
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
                                                <a style={{marginTop:"15px"}} href="/telegram/index.html" target="_blank" className="button1">Перейти</a>
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
                        <div className="parent">
                            <div className="hdblock1">

                                <div style={{textAlign:"center",display:"inline-flex",marginTop:"50px"}}>
                                    <div style={{textAlign:"center",marginRight:"20px"}}>
                                        <img style={{width:"150px",height:"150px"}} src={pushkinlogo}></img>
                                    </div>
                                    <div>
                                        <div className="HomeTextPage2" style={{textAlign:"left",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                            Бот для группы «Фильм Спасти Пушкина»
                                        </div>
                                        <div  style={{textAlign:"left",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                            Простой бот, который помогает в отправке комментариев от имени группы
                                            <div>
                                                <a style={{marginTop:"15px"}} href="https://vk.com/spastipushkina" target="_blank" className="button1">Перейти</a>
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
                                                Сервис для ВКонтакте, показывающий интересные мероприятия во многих городах России
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
                                                    <a style={{marginTop:"15px"}} href="/telegram/index.html" target="_blank" className="button1">Перейти</a>
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
                            <div className="parent">
                                <div className="hdblock1">

                                    <div style={{textAlign:"center",marginTop:"50px"}}>
                                        <div style={{textAlign:"center"}}>
                                            <img style={{width:"150px",height:"150px"}} src={pushkinlogo}></img>
                                        </div>
                                        <div>
                                            <div className="HomeTextPage1" style={{textAlign:"center",top:"50px",fontSize:"calc(1em + 1.25vw)"}}>
                                                Бот для группы «Фильм Спасти Пушкина»
                                            </div>
                                            <div  style={{textAlign:"center",marginTop:"10px",fontSize:"calc(1em + 0.5vw)"}}>
                                                Простой бот, который помогает в отправке комментариев от имени группы
                                                <div>
                                                    <a style={{marginTop:"15px"}} href="https://vk.com/spastipushkina" target="_blank" className="button1">Перейти</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>)}

                    <div className="parent">
                        <div className="hdblock1">
                            <div style={{textAlign:"center",marginTop:"50px",paddingLeft:"15px",paddingRight:"15px"}}>

                                <div >

                                    <div id="donate" style={{textAlign:"center",marginTop:"10px",fontSize:"17px",}}>
                                        Помогите нам стать больше и лучше

                                    </div>
                                    <div >
                                        <a id="buttondon" style={{marginTop:"5px"}} onClick={()=>{
                                            var t=document.getElementById("donate").innerHTML
                                            document.getElementById("buttondon").style.display="none"
                                            document.getElementById("donate").innerHTML="<h1>Спасибо ❤</h1>"

                                            setTimeout(()=>{
                                                window.open("https://qiwi.me/finebot")
                                                document.getElementById("buttondon").style.display=""

                                                document.getElementById("donate").innerHTML=t
                                            },1500)

                                        }} target="_blank" className="button2">Donate</a>
                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>

                    <Footer1/>


                </Layout>
            </>
        )
    }
}
