import React from 'react'
import Link from 'next/link'
import Header1 from "../components/Header"
import Footer1 from "../components/Footer"

import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade';
import GetHead from "./service/getHead"
import Head from 'next/head'




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
                    <GetHead title={""} description={"Это сайт файнбота"} keywords={[]}/>


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

                            Че натворил
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

                            <div style={{display:"block",marginLeft:"auto",marginRight:"auto",textAlign:"center",height: "50px",marginBottom:"-10px",paddingTop:"20px"}}>
                                <div style={{display:"inline-flex",flexWrap:"wrap"}}>
                                    <div style={{display:"inline-block",width:"50px",marginLeft:"auto",marginRight:"auto"}}>
                                        <a target={"_blank"} href={"https://vk.com/finebot"}><img className={"img"} src={"/static/images/VK_Blue_Logo_transparent.png"} style={{width:"40px",color:"gray"}}/></a>
                                    </div>
                                    <div style={{display:"inline-block",width:"50px",marginLeft:"auto",marginRight:"auto"}}>
                                        <a target={"_blank"} href={"/telegram"}><img className={"img"} src={"/static/images/1024px-Telegram_logo.svg.webp"} style={{width:"40px",color:"gray"}}/></a>
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
