import React from 'react';
import styles from './AboutText.module.scss';
import { Ellipse } from '@/components/Ellipse';

import '@/shared/styles/globals.scss';

export const AboutText: React.FC = () => {
    return (
        <div className={styles.parent}>
            <span className={styles.title}>
              I am a Software Engineer with a focus on <Ellipse className={styles.ellipse}><b>frontend</b></Ellipse>
            </span>
            <p className={styles.subTitle}>Because I started my career with web application development</p>
        </div>
    );
};
