import React from 'react'
import Layout from '../../components/Layout'
import ampFooter1 from "../../components/ampFooter"
import ampHeader1 from "../../components/ampHeader"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";


export const config = { amp: true }
const Post=({ampUrl,stars})=> (
          <>


              <Head>

                  <link rel="amphtml" href={ampUrl}/>
                  <link rel="canonical" href={ampUrl}/>


              <title>Отменены матчи Лиги чемпионов и Лиги Европы — Meduza</title>
                  <meta name="description" content="Все матчи, запланированные на следующую неделю в рамках Лиги чемпионов и Лиги Европы, отложены на неопределенный срок из-за ситуации с распространением коронавируса. Об этом говорится в заявлении Союза европейских футбольных ассоциаций (УЕФА)."/>
                  <meta property="og:title" content="Отменены матчи Лиги чемпионов и Лиги Европы — Meduza"/>
                  <meta property="og:description" content="Все матчи, запланированные на следующую неделю в рамках Лиги чемпионов и Лиги Европы, отложены на неопределенный срок из-за ситуации с распространением коронавируса. Об этом говорится в заявлении Союза европейских футбольных ассоциаций (УЕФА)."/>
                  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\":\"http://schema.org\",\"@type\":\"NewsArticle\",\"mainEntityOfPage\":\"/\",\"headline\":\"Отменены матчи Лиги чемпионов и Лиги Европы\",\"datePublished\":\"2020-03-13T10:12:09Z\",\"dateModified\":\"2020-03-13T11:33:09Z\",\"description\":\"Все матчи, запланированные на следующую неделю в рамках Лиги чемпионов и Лиги Европы, отложены на неопределенный срок из-за ситуации с распространением коронавируса. Об этом говорится в заявлении Союза европейских футбольных ассоциаций (УЕФА).\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"FineBot\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"/static/images/ic_launcher.png\",\"width\":286,\"height\":60}},\"author\":{\"@type\":\"Organization\",\"name\":\"FineBot\"},\"image\":\"/static/images/ic_launcher.png\"}"}}></script>
                  <meta property="og:site_name" content="Meduza"/>
                  <meta property="og:image" content="/static/images/ic_launcher.png"/>
                  <meta property="og:image:width" content="1200"/>
                  <meta property="og:image:height" content="630"/>
                  <meta name="twitter:image" content="/static/images/ic_launcher.png"/>
                  <meta property="vk:image" content="/static/images/ic_launcher.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/static/images/ic_launcher.png"/>
                  <link rel="icon" type="image/png" sizes="16x16" href="/static/images/ic_launcher.png"/>
                  <link rel="apple-touch-icon" href="/static/images/ic_launcher.png"/>
                  <link rel="apple-touch-icon" sizes="76x76" href="/static/images/ic_launcher.png"/>
                  <link rel="apple-touch-icon" sizes="120x120" href="/static/images/ic_launcher.png"/>
                  <link rel="apple-touch-icon" sizes="152x152" href="/static/images/ic_launcher.png"/>
                  <link rel="apple-touch-icon" sizes="180x180" href="/static/images/ic_launcher.png"/>
                  <link rel="mask-icon" href="/static/images/logo.png" color="B88B58"/>
                  <link rel="image_src" href="/static/images/ic_launcher.png"/>



              </Head>


              <Layout title="Путин согласился обнулить свои президентские сроки. Главное из его выступления перед депутатами (вдруг вы не смотрели) | FineBot">
                  {ampHeader1()}


                  <div className="parent">
                      <div className="hdblock">

                          <div amp-custom style={{textAlign:"left",display:"block",marginTop:"20px",marginRight:"10px",marginLeft:"10px"}}>

                              <div>

                                  <h1 className="h1">
                                      {stars}
                                      {ampUrl}
                                  </h1>
                                  <h5>Creator • Published today</h5>
                                  <div className="text">
                                      Я приехал в Госдуму обсудить поправки, потому что я их инициировал и потому что они носят принципиальный характер. Ситуация в мировой политике и экономике сложная, «еще коронавирус прилетел», «цены на нефть пляшут и прыгают». Этот период мы пройдем достойно, но в мире есть те, кто хочет сдержать Россию. Внутри страны тоже многое пока сделано «на живую нитку».
                                      <br/>
                                      <br/>
                                      Относительно досрочных выборов в Госдуму я думаю так. Если россияне одобрят поправки в Конституцию, то Госдума должна получить расширенные полномочия немедленно. Существующий состав Госдумы имеет право их принять. Если в парламенте нет консенсуса (а мне председатель Госдумы сказал, что его нет) по вопросу досрочных выборов, я не вижу в них необходимости.
                                      <br/>
                                      <br/>
                                      Сильная президентская вертикаль для России «абсолютно необходима». Парламентская форма правления для нас не подходит: из-за нее в других странах годами не могут сформировать правительство. А наделение других органов — Госсовета или Совбеза — полномочиями президентского характера не имеет ничего общего с демократией и приведет к двоевластию.
                                      <br/>
                                      <br/>
                                      Звучало предложение продлить срок моих полномочий, если россияне проголосуют за такую поправку. Но тогда полномочия будут продлены на безальтернативных выборах, а альтернатива должна быть. Отменить ограничение по президентским срокам формально можно было бы: когда страна проходит через испытания («а мы еще не все преодолели после развала Союза»), стабильность должна быть в приоритете. Но мы вносим поправки в Конституцию хотя бы лет на 30-50, и в этой перспективе общество должно иметь гарантии смены власти. Вариант с обнулением президентских сроков возможен. Но только если Конституционный суд скажет, что такая поправка не противоречит Конституции. И если ее одобрят россияне. «Как вы, дорогие друзья, решите — так и будет».
                                      <br/>
                                      <br/>
                                      Мы сделаем для России еще много хорошего. «Во всяком случае до 2024 года. А там видно будет» (смех в зале).
                                  </div>

                              </div>

                          </div>
                      </div>
                  </div>

                  {ampFooter1()}

              </Layout>
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