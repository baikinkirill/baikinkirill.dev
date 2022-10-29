import React, { Fragment, ReactElement, useEffect } from 'react';
import styles from '../styles/index.module.scss';
import { NextPageContext } from 'next';
import Image from 'next/image';
import tippy from 'tippy.js';
import MainLayout from '../layouts/MainLayout';
import { MainPageProps } from '../types/MainPageProps';

const Home = (props: MainPageProps): React.ReactNode => {
  const { isVPN } = props;
  return (
	<div className={styles.parent}>
	 <div className={styles.container}>
		<h1 data-text='baikinkirill.dev' className={styles.glitch}>
		 <a href='https://github.com/baikinkirill'>baikinkirill.dev</a>
		</h1>
		<p>
		 {/* eslint-disable-next-line react/no-unescaped-entities */}
		 Hi there! I'm Kirill, a frontent developer on ReactJS & NextJS.
		 {/* <ul> */}
		 {/* <li>My achievements</li> */}
		 {/* <li>Projects</li> */}
		 {/* </ul> */}
		</p>
		<span>With ❤ to <a target={'_blank'} rel={'noreferrer'} href='https://laptev.dev'>laptev.dev</a></span>
		<ShowVPNIcon show={isVPN}/>
	 </div>
	</div>
  );
};

function ShowVPNIcon (props: { show: boolean }): ReactElement {
  useEffect(() => {
    if (props.show) {
	 tippy('#iconContainer', {
        content: 'VPN detected. Your connection is secure.',
        animation: 'perspective-subtle',
        placement: 'bottom'
	 });
    }
  }, []);

  if (!props.show) {
    return (
	 <Fragment key={'vpnIcon'}/>
    );
  }

  return (
	<Fragment key={'vpnIcon'}>
	 <div className={styles.vpnLogo}>
		<Image id={'iconContainer'} width={45} height={45} src='/images/vpn.png' alt=''/>
	 </div>
	</Fragment>
  );
}

export function getServerSideProps ({ req }: NextPageContext): { props: MainPageProps } {
  let isVPN = false;
  if (req != null) {
    const ip = req.headers['x-forwarded-for'] ?? req.connection.remoteAddress;
    isVPN = ip?.includes(process?.env?.NEXT_APP_VPN_HOST ??
	 'something_long_string') ?? false;
  }
  return {
    props: {
	 isVPN
    }
  };
}

Home.getLayout = function getLayout (page: ReactElement): ReactElement {
  return (
	<MainLayout title={'Hi there'} desc={''}>
	 {page}
	</MainLayout>
  );
};

export default Home;
