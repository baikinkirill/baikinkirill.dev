import React from 'react'
import ArticleTemplate from "../../components/article-template1"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=({ampUrl,stars,amp,id})=> (
    <>
        <ArticleTemplate url={ampUrl} amp={amp} date="Опубликовано сегодня" creator="Admin" title="Правила использования FineBot" header="Правила использования | FineBot" text={id} description="Администрация «FineBot» (далее — Администрация) —  это люди(человек), которые(ый) являются(ется) администраторами(ом) сообщества «FineBot», а так же, на кого зарегистрирован домен «finebot.site»"/>
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