import React from 'react'
import ArticleTemplate from "../components/article-template"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=({ampUrl,stars,amp})=> (
    <>
        <ArticleTemplate url={ampUrl} amp={amp} date="Опубликовано сегодня" creator="Admin" title="Правила использования FineBot" header="Правила использования | FineBot" text={`
Администрация «FineBot» (далее — Администрация) —  это люди(человек), которые(ый) являются(ется) администраторами(ом) сообщества «FineBot», а так же, на кого зарегистрирован домен «finebot.site» и сервер, который арендован теми же людьми (или человеком), на кого зарегистрирован домен «finebot.site». Администрация предоставляет любым пользователям (далее — Пользователи) различные возможности взаимодействовать друг с другом через продукты, которые описаны на странице https://finebot.site/products (далее — Продукты).
<br/><br/>
Администрация не несет ответственности за контент распространяемый Пользователями. При выявлении нарушений Администрация имеет право забанить на бессрочный срок любого Пользователя, нарушающего данные правила. Администрация не может гарантировать, что запрещенная информация будет отсутствовать в Продуктах «FineBot». Администрация обязуется приложить все возможные усилия для выявления Пользователей, которые нарушают правила «FineBot».
<br/><br/>
Мы крайне не рекомендуем пользоваться некоторыми функциями пользователям младше 18 лет.
<br/><br/>
Через Продукты «FineBot» запрещено распространять любые вещи, документы или информацию, запрещенную к распространению законодательством Российской Федерации.
<br/><br/>
Администрация не несет ответственности за любые последствия и за любой ущерб причиненный Пользователям при использовании Продуктов «FineBot».
<br/><br/>
Эти правила распространяются на все Продукты «FineBot», которые описаны на странице <a href="https://finebot.site/" target="_blank">https://finebot.site/</a>.
<br/><br/>
При начале использования Продуктов «FineBot» Вы автоматически соглашаетесь с вышеуказанными правилами.
        
        `} description="Администрация «FineBot» (далее — Администрация) —  это люди(человек), которые(ый) являются(ется) администраторами(ом) сообщества «FineBot», а так же, на кого зарегистрирован домен «finebot.site»"/>
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