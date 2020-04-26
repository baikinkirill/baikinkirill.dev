'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Layout from "./Layout";

export default class Persik extends React.Component {

    constructor(props){
        super(props);
        this.state={
            show:false,
            showabout:false,
            showbutton:true,
            showcontacts:false,
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({show:true})
        },500)
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
                   {this.getHead("","Это сайт файнбота")}
                    <div style={{width:"100vw",minHeight:"100%",backgroundColor:"black",position:"absolute",zIndex:1}}>

                    </div>
                   <div style={{width:"100vw",height:"100vh",backgroundColor:"black",position:"absolute",zIndex:2}}>
                       <div style={{display:"block",margin:"auto",maxWidth:"1000px"}}>
                           <div style={{display:"block"}}>
                               <div style={{marginLeft:"15px",marginRight:"15px"}}>
                                   <Fade top when={this.state.showbutton}>
                                       <div id="about" className="noselect" style={{color:"white",fontSize:"40px",marginTop:"40vh",display:"inline-flex",zIndex:3}} onMouseLeave={()=>{
                                           document.getElementById("about").style.textDecoration="none"
                                           document.getElementById("about").style.color="white"

                                       }}  onMouseEnter={()=>{
                                           document.getElementById("about").style.textDecoration="underline"
                                       }}
                                            onMouseDown={()=>{
                                                document.getElementById("about").style.color="blue"
                                            }}
                                            onMouseUp={()=>{
                                                document.getElementById("about").style.color="white"
                                            }}
                                            onClick={()=>{
                                                document.getElementById("aboutme").style.display="block"
                                                this.setState({showabout:!this.state.showabout})
                                            }}>🙋‍♂Обо мне</div>
                                       <br/>
                                       <div id="projects" className="noselect" style={{color:"white",fontSize:"40px",marginTop:"5px",display:"inline-flex"}}
                                            onMouseLeave={()=>{
                                                document.getElementById("projects").style.textDecoration="none"
                                                document.getElementById("projects").style.color="white"
                                            }}  onMouseEnter={()=>{
                                           document.getElementById("projects").style.textDecoration="underline"
                                       }}
                                            onMouseDown={()=>{
                                                document.getElementById("projects").style.color="blue"
                                            }}
                                            onMouseUp={()=>{
                                                document.getElementById("projects").style.color="white"
                                            }}
                                       onClick={()=>{
                                           this.props.hidePromo()
                                           setTimeout(()=>{
                                                    window.location.hash=""
                                                   window.scrollTo(0,document.getElementById("texts").offsetTop-30)

                                           },10)
                                       }}>💼Проекты</div><br/>
                                       <div id="contacts" className="noselect" style={{color:"white",fontSize:"40px",marginTop:"5px",display:"inline-flex"}}
                                            onMouseLeave={()=>{
                                                document.getElementById("contacts").style.textDecoration="none"
                                                document.getElementById("contacts").style.color="white"
                                            }}  onMouseEnter={()=>{
                                           document.getElementById("contacts").style.textDecoration="underline"
                                       }}
                                            onMouseDown={()=>{
                                                document.getElementById("contacts").style.color="blue"
                                            }}
                                            onMouseUp={()=>{
                                                document.getElementById("contacts").style.color="white"
                                            }}
                                       onClick={()=>{

                                           setTimeout(()=>{

                                               this.setState({showcontacts:!this.state.showcontacts})
                                               document.getElementById("contactstext").style.display="block"

                                           },10)
                                       }}>🤙🏻Контакты</div>
                                   </Fade>
                               </div>
                               <Fade right when={this.state.showabout}>
                                   <div id="aboutme" style={{color:"white",fontSize:"14px",border:"1px double gray",padding:"7px",position:"fixed",top:"30vh",display:"none",backgroundColor:"black",right:"20vw",left:"20vw"}}><code>Меня зовут Кирилл и я люблю прогать.<br/><br/>

                                       В принципе здесь можно было бы написать что-то более качественное, но всем своим работодателям я отправляю хорошее резюме, а все, кто знаком со мной, знают про мои проекты :)<br/><br/>Если Вы хотите
                                       сотрудничать, то моя почта всегда доступна 😉 <a href="mailto:bk@finebot.site" target="_blank" style={{color:"orange"}}>bk@finebot.site</a><br/><br/><div style={{fontSize:"23px",cursor:"pointer",display:"inline-block",color:"red",}} onClick={()=>{
                                           setTimeout(()=>{
                                               document.getElementById("aboutme").style.display="none"
                                           },350)

                                           this.setState({showabout:!this.state.showabout})
                                       }}>{"X"}</div></code></div>
                               </Fade>
                               <Fade right when={this.state.showcontacts}>
                                   <div id="contactstext" style={{color:"white",fontSize:"14px",border:"1px double gray",padding:"7px",position:"fixed",top:"42vh",display:"none",backgroundColor:"black",right:"20vw",left:"20vw"}}><code>
                                       • VK: <a href="https://vk.com/finebot" target="_blank" style={{color:"orange"}}>vk.com/finebot</a><br/>
                                       • Telegram: <a href="https://t.me/baikinkirill" target="_blank" style={{color:"orange"}}>@baikinkirill</a><br/>
                                       • Email: <a href="mailto:bk@finebot.site" target="_blank" style={{color:"orange"}}>bk@finebot.site</a><br/>
                                       <br/><br/><div style={{fontSize:"23px",cursor:"pointer",display:"inline-block",color:"red",}} onClick={()=>{
                                           setTimeout(()=>{
                                               document.getElementById("contactstext").style.display="none"
                                           },350)

                                           this.setState({showcontacts:!this.state.showcontacts})
                                       }}>{"X"}</div></code></div>
                               </Fade>

                           </div>
                       </div>

                   </div>
                   </>


        );
    }
}



