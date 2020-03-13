import React from 'react'
import Layout from '../components/Layout'

import ampFooter1 from "../components/ampFooter"
import ampHeader1 from "../components/ampHeader"
import NextHead from 'next/head'

import {
    AmpIncludeAmpList,
    AmpIncludeAmpCarousel,
} from '../components/amp/AmpCustomElement'
import Home from "./home"
import Head from "next/head";
import {NextSeo} from "next-seo";
import { NewsArticleJsonLd,LocalBusinessJsonLd } from 'next-seo';


export const config = { amp: true }
export default class extends React.Component {

    static async getInitialProps({ req, query }) {
        const amp = query.amp == '1'
        const url = req ? req.url : window.location.href
        const ampUrl = url
        return { amp, ampUrl }
    }

    render() {
        const {ampUrl} = this.props

        return (

          <>
              <style amp-custom jsx>{`
              @font-face {
	            font-family: "Rubik Medium"; /* Гарнитура шрифта */
	            src: url("/static/fonts/Rubik-Medium.ttf"); /* Путь к файлу со шрифтом */
               }
            @font-face {
	            font-family: TextDiv; /* Гарнитура шрифта */
	            src: url("/static/fonts/Rubik-Light.ttf"); /* Путь к файлу со шрифтом */
               }
            h1{
               	font-family: "Rubik Medium", 'Comic Sans MS', bold;
               	text-align: left;
               	font-size: calc(1em + 1vw);
               	margin-bottom:15px;
            }
            
            .text{
                text-align: left;
                margin-top: 10px;
                font-size: 19px;
            }
              `}</style>

              <Head>



              </Head>
              <NextSeo
                  openGraph={{

                      title: 'Путин согласился обнулить свои президентские сроки. Главное из его выступления перед депутатами (вдруг вы не смотрели)',
                      description: 'Description of open graph article',
                      url: 'https://cs2.finebot.site/article-template/',
                      type: 'NewsArticle',
                      article: {
                          publishedTime: '2017-06-21T23:04:13Z',
                          modifiedTime: '2018-01-21T18:04:43Z',
                          expirationTime: '2022-12-21T22:04:11Z',
                          section: 'Section II',
                          image: 'https://meduza.io/impro/34JGU9TGNEBQ-JmeuFW7IS5PHfaj7fR0SZDx4WC-Cxg/fill/0/0/ce/1/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNS8y/MTcvNzAwL2xhcmdl/LzBuWWUwNE5RaTVr/WGtwb1lsZ3NXWmcu/anBn.webp',

                          tags: ['Tag A', 'Tag B', 'Tag C'],
                      },
                      images: [
                          {
                              url: 'https://meduza.io/impro/34JGU9TGNEBQ-JmeuFW7IS5PHfaj7fR0SZDx4WC-Cxg/fill/0/0/ce/1/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNS8y/MTcvNzAwL2xhcmdl/LzBuWWUwNE5RaTVr/WGtwb1lsZ3NXWmcu/anBn.webp',
                              width: 850,
                              height: 650,
                              alt: 'Photo of text',
                          },
                      ],
                  }}
              />
              <NewsArticleJsonLd
                  url="https://cs2.finebot.site/article-template/"
                  title="Article headline"
                  images={[
                      'https://meduza.io/impro/34JGU9TGNEBQ-JmeuFW7IS5PHfaj7fR0SZDx4WC-Cxg/fill/0/0/ce/1/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNS8y/MTcvNzAwL2xhcmdl/LzBuWWUwNE5RaTVr/WGtwb1lsZ3NXWmcu/anBn.webp',

                  ]}
                  image="https://meduza.io/impro/34JGU9TGNEBQ-JmeuFW7IS5PHfaj7fR0SZDx4WC-Cxg/fill/0/0/ce/1/aHR0cHM6Ly9tZWR1/emEuaW8vaW1hZ2Uv/YXR0YWNobWVudHMv/aW1hZ2VzLzAwNS8y/MTcvNzAwL2xhcmdl/LzBuWWUwNE5RaTVr/WGtwb1lsZ3NXWmcu/anBn.webp"
                  section="politic"
                  keywords="prayuth,taksin"
                  datePublished="2015-02-05T08:00:00+08:00"
                  dateModified="2015-02-05T09:00:00+08:00"
                  authorName="Jane Blogs"
                  publisherName="FineBot"
                  publisherLogo="https://finebot.site/wp-content/uploads/2018/11/41EPs6tw8wL-150x150.png"
                  description="This is a mighty good description of this article."
                  body="This is all text for this news article"
              />

              <Layout title="Путин согласился обнулить свои президентские сроки. Главное из его выступления перед депутатами (вдруг вы не смотрели) | FineBot">
                  {ampHeader1()}


                  <div className="parent">
                      <div className="hdblock">

                          <div style={{textAlign:"left",display:"block",marginTop:"20px",marginRight:"10px",marginLeft:"10px"}}>

                              <div>

                                  <h1>
                                      Путин согласился обнулить свои президентские сроки. Главное из его выступления перед депутатами (вдруг вы не смотрели)
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
    }
}