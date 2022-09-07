import React from 'react';
import getSeo from '../services/getSeo';
import styles from '../styles/index.module.scss';

export default function Index() {

 return (
  <div>
   {getSeo('THIS IS WEBPAGE TITLE', 'THIS IS WEBPAGE DESCRIPTION')}
   <div data-text='baikinkirill.dev' className={styles.glitch}>
    <a href='https://github.com/baikinkirill'>baikinkirill.dev</a>
   </div>
   <span>Say no <a target={'_blank'} rel={'noreferrer'} href='https://laptev.dev'>laptev.dev</a>!</span>
  </div>
 );
}

export function getStaticProps() {
 return {
  props: {},
 };
}
