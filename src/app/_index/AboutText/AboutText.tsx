import React from 'react';
import styles from './AboutText.module.scss';
import { Ellipse } from '@/components/Ellipse';

export const AboutText: React.FC = () => {
    return (
        <div className={styles.aboutText}>
            <span className={styles.title}>
              I am a Software Engineer with a focus on <Ellipse className={styles.ellipse}><b>frontend</b></Ellipse>
            </span>
            <p>Because I started my career with web application development</p>
        </div>
    );
};
