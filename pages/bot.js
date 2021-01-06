import React from 'react'
import ArticleTemplate from "../components/article-template1"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=({ampUrl,stars,amp})=> (
    <>
        <ArticleTemplate url={ampUrl} amp={amp} date="Опубликовано сегодня" creator="Admin" title="Функции бота в личных сообщениях VK" header="Функции бота в личных сообщениях VK | FineBot" text={`
• /film — отправка случайного фильма
<br/><br/>
• /chat — анонимный чат
<br/><br/>
• /invite — пригласить бота в беседу
<br/><br/>
• /feedback — связь с администрацией
<br/><br/>
• /news — меню новостей
<br/><br/>
• /weather [название города, геолокация] — бот отправит погоду в данном городе или месте
<br/><br/>
• /audio — рекомендации VK Music
<br/><br/>
• /online — Вы сможете следить кто и когда зашел или вышел из ВК
<br/><br/>
• /quote [пересланное сообщение] — бот создаст картинку с цитатой
        
        `} description="• /film — отправка случайного фильма

• /chat — анонимный чат

• /invite — пригласить бота в беседу

• /feedback — связь с администрацией

• /news — меню новостей

• /weather [название города, геолокация] — бот отправит погоду в данном городе или месте

• /audio — рекомендации VK Music"/>
    </>


)
function generateInlineScript(script) {
    if (typeof script === 'function') {
        return `${script.toString()}()`
    }
    return String(script)
}
Post.getInitialProps = async ({ req,query }) => {
    const amp = query.amp

    const url = req ? req.url : window.location.href
    const id = url.replace("/"+url.split("/")[1]+"/","")
    const ampUrl = url
    //const res = await fetch('https://amp.dev/documentation/examples/api/time')
  //  const data = await res.json();
    //const time = data.time
    return { ampUrl,id,amp }
};
export default Post