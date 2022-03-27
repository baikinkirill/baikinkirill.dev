import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect } from 'react';
import styles from '../styles/index.module.scss';
import { someInter } from '../types/types';
import getSeo from '../services/getSeo';

export default function IndexPage(props: any) {
 return (
  <React.Fragment>
   <Script
    src={'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.9.1/lottie.min.js'}
    strategy={'lazyOnload'}
    onLoad={() => {
     let element = document.getElementById('gearsAnim');
     if (element) {
      window.lottie.loadAnimation({
       container: element,
       renderer: 'svg',
       loop: true,
       autoplay: true,
       path: './gearsAnim.json',
      });
     }
    }}
   />
   {getSeo('FineBot', 'Ето чья-то личная страница')}
   <main className={styles.indexPage}>
    <article>
     <div className={styles.gearsAnim} id={'gearsAnim'}></div>
     <p>Тут скоро что-то будет</p>
    </article>
   </main>
  </React.Fragment>
 );
}

export function getStaticProps(params: any) {
 return {
  props: {},
 };
}
