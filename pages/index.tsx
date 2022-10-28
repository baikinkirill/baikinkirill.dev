import React from 'react';
import getSeo from '../services/getSeo';
import styles from '../styles/index.module.scss';
import { MainPage } from '../types/types';
import { NextPageContext } from 'next';
import Image from 'next/image';

export default function Index(props: MainPage) {
 const { isVPN } = props;
 return (
  <div className={styles.parent}>
   {getSeo('Hi there', '')}
   <div data-text='baikinkirill.dev' className={styles.glitch}>
    <a href='https://github.com/baikinkirill'>baikinkirill.dev</a>
   </div>
   <span>With ❤ to <a target={'_blank'} rel={'noreferrer'} href='https://laptev.dev'>laptev.dev</a></span>
   {isVPN && (
    <div className={styles.vpnLogo}>
     <Image width={'45px'} height={'45px'} src='/vpn.png' alt='' />
    </div>
   )}
  </div>
 );
}

export function getServerSideProps({ req }: NextPageContext): { props: MainPage } {
 if (!req) {
  return {
   props: {
    isVPN: false,
   },
  };
 }

 const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '';
 return {
  props: {
   isVPN: ip.includes(process?.env?.NEXT_APP_VPN_HOST || '') || ip.includes('127.0.0.1'),
  },
 };
}
