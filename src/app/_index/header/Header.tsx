import React from 'react';
import styles from '@/app/_index/index.module.scss';
import { GITHUB_URL, SITENAME } from '@/shared/constants';

export const Header: React.FC = () => {
    return (
        <section>
            <h1 data-text={SITENAME} className={styles.glitch}>
                <a href={GITHUB_URL}>{SITENAME}</a>
            </h1>
        </section>
    );
};
