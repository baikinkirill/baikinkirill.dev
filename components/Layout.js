import PropTypes from 'prop-types'
import NextHead from 'next/head'
import { AmpIncludeAmpInstallServiceworker } from './amp/AmpCustomElement'
import React from "react";

// Your app's theme color
const THEME_COLOR = '#ffffffff'

/**
 * A sample page layout installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
export const config={amp:true}
const Layout = props => (
  <>

    <NextHead>
        <meta charSet="utf-8"/>
      <title>{props.title || 'FineBot'}</title>

      <meta name="description" content={props.description || 'Это сайт файнбота'} />
      <meta name="theme-color" content={THEME_COLOR} />

      <link rel="apple-touch-icon" href="/static/images/ic_launcher.png" />
      <link rel="icon" href="/static/images/ic_launcher.png" />
      <link rel="manifest" href="/manifest.json" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
    </NextHead>

    {props.children}

    <AmpIncludeAmpInstallServiceworker />
    <amp-install-serviceworker
      src="/serviceworker.js"
      data-iframe-src="/install-serviceworker.html"
      layout="nodisplay"
    />

      <style jsx global amp-custom>{`
      body{
	margin: 0;
}
.button1{
    margin-top: 1.5rem;
    font-family: Poppins,sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 15px;
    color: #fff;
    display: inline-block;
    max-width: 100%;
    width: auto;
    height: auto;
    padding: .25em 1em;
    margin: 0;
    text-decoration: none;
    text-align: center;
    border-radius: 3px;
    background-color: #0A77B7;
    border-radius: 15px;
    border: 3;
    cursor: pointer;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,.25);
    transition: transform .3s cubic-bezier(.25,.1,.25,1),box-shadow .3s cubic-bezier(.25,.1,.25,1);
}
.button2{
    margin-top: 1.5rem;
    font-family: Poppins,sans-serif;
    font-weight: 700;
    line-height: 1.2em;
    font-size: 1em;
    color: #fff;
    display: inline-block;
    max-width: 100%;
    width: auto;
    height: auto;
    padding: .20em 2em;
    margin: 0;
    text-decoration: none;
    text-align: center;
    border-radius: 3px;
    background-color: green;
    border: 3;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,.25);
    transition: transform .3s cubic-bezier(.25,.1,.25,1),box-shadow .3s cubic-bezier(.25,.1,.25,1);
}
.h1{
               
               	text-align: left;
               	font-size: calc(1em + 1vw);
               	margin-bottom:15px;
            }
 .textArticle{
                text-align: left;
                margin-top: 10px;
                font-size: 18px;
            }
.hdblock{
	max-width: 1190px; /* Ширина элемента в пикселах */
	padding: 0px; /* Поля вокруг текста */
	margin-left: auto; /* Выравниваем по центру */
	margin-right: auto;
	margin-top: 5px;
	margin-bottom: 2px;
}
.hdblock1{
	max-width: 900px; /* Ширина элемента в пикселах */
	padding: 0px; /* Поля вокруг текста */
	margin-left: auto; /* Выравниваем по центру */
	margin-right: auto;
	margin-top: 5px;
	margin-bottom: 2px;
}
.text{
                text-align: left;
                margin-top: 10px;
                font-size: 19px;
            }
.HomeIMG{
	object-fit:cover;
	display:table;
	height: 100vh;
	overflow: hidden;
	background-size: auto;
	background-position: center;
	background-image:url("/static/images/Nature-Mountain-Wallpaper-21.jpg");
}
.HomeIMGBIG{
	object-fit:cover;
	overflow: hidden;
	display:table;

	height: 100vh;
	background-size: 300%;
	background-position: center;
	background-image:url("/static/images/Nature-Mountain-Wallpaper-21.jpg");
}
@font-face {
	font-family: "Rubik Medium"; /* Гарнитура шрифта */
	src: url("/static/fonts/Rubik-Medium.ttf"); /* Путь к файлу со шрифтом */
}
@font-face {
	font-family: TextDiv; /* Гарнитура шрифта */
	src: url("/static/fonts/Rubik-Light.ttf"); /* Путь к файлу со шрифтом */
}
div{
font-display: swap;
	font-family: "Calibri", 'Comic Sans MS', bold;
}
.HomeTextPage {
	display:table-cell;
	vertical-align:middle;
	text-align: center;
	font-display: swap;
	font-size: calc(1em + 2vw);
	padding-left: 10px;
	padding-right: 10px;
	font-family: "Rubik Medium", 'Comic Sans MS', bold;
}
.HomeTextPage2 {
	display:table-cell;
	vertical-align:middle;
	text-align: center;
	font-size: calc(1em + 2vw);
	padding-right: 10px;
	font-display: swap;
	font-family: "Rubik Medium", 'Comic Sans MS', bold;
}
.HomeTextPage1 {
font-display: swap;
	font-family: "Rubik Medium", 'Comic Sans MS', bold;
}
@font-face {
	font-family: FineBot; /* Гарнитура шрифта */
	src: url("/static/fonts/vag_world_bold.ttf"); /* Путь к файлу со шрифтом */
}
.FineBot {
font-display: swap;
	font-family: FineBot, 'Comic Sans MS', bold;
}
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;


}`}</style>
  </>
)

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
