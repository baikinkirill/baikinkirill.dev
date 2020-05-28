// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="en">
          <Head />
          <div dangerouslySetInnerHTML={{__html:'<!-- Yandex.Metrika counter -->\n' +
                  '<script type="text/javascript" >\n' +
                  '   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n' +
                  '   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n' +
                  '   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n' +
                  '\n' +
                  '   ym(64433395, "init", {\n' +
                  '        clickmap:true,\n' +
                  '        trackLinks:true,\n' +
                  '        accurateTrackBounce:true\n' +
                  '   });\n' +
                  '</script>\n' +
                  '<noscript><div><img src="https://mc.yandex.ru/watch/64433395" style="position:absolute; left:-9999px;" alt="" /></div></noscript>\n' +
                  '<!-- /Yandex.Metrika counter -->'}}></div>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
    )
  }
}

export default MyDocument