import React from 'react';

import styles from './index.module.scss';

const Page: React.FC = () => {
  return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <h1 data-text='baikinkirill.dev' className={styles.glitch}>
                    <a href='https://github.com/baikinkirill'>baikinkirill.dev</a>
                </h1>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hi there! I'm Kirill, a frontend developer on ReactJS & NextJS.
                </p>
                <span>With ❤ to <a target={'_blank'} rel={'noreferrer'} href='https://laptev.dev'>laptev.dev</a></span>
            </div>
        </div>
  );
};

export default Page;
