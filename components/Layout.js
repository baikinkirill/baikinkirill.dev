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

    <style jsx global>{`
      body{
	margin: 0;
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
