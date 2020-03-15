import React from 'react'

import fetch from 'isomorphic-unfetch'
import Head from "next/head";
import ArticleTemplate from "../../components/article-template"


export const config = { amp: true }
const Post=({ampUrl,stars})=> (
          <>


              <ArticleTemplate date="Опубликовано сегодня" creator="Admin" title="Разгадан смысл песни «Uno», которую Little Big записали для «Евровидения». Подсказка: загибайте пальцы — uno, dos, cuatro" header="Разгадан смысл песни «Uno», которую Little Big записали для «Евровидения». Подсказка: загибайте пальцы — uno, dos, cuatro | FineBot" text={`
Может мы тормозим, но. Кажется, разгадан смысл странного подсчета в песне «Uno», с которой группа Little Big собирается ехать на «Евровидение». Там цифры идут не подряд, а так: uno (один), dos (два), cuatro (четыре). Смысл становится понятен, когда начинаешь загибать пальцы.
        `} description="Может мы тормозим, но. Кажется, разгадан смысл странного подсчета в песне «Uno», с которой группа Little Big собирается ехать на «Евровидение». Там цифры идут не подряд, а так: uno (один), dos (два), cuatro (четыре). Смысл становится понятен, когда начинаешь загибать пальцы."/>
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
    const res = await fetch('https://amp.dev/documentation/examples/api/time')
    const data = await res.json();
    return { ampUrl,stars: data.time,id }
};
export default Post