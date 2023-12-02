import React from 'react';
import styles from '@/app/_index/index.module.scss';
import { GITHUB_URL, SITE_NAME } from '@/shared/constants';

export const Header: React.FC = () => {
    return (
        <section>
            <h1 data-text={SITE_NAME} className={styles.glitch}>
                <a href={GITHUB_URL}>{SITE_NAME}</a>
            </h1>
        </section>
    );
};
