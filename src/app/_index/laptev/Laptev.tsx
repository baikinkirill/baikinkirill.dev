import React from 'react';
import styles from './Laptev.module.scss';

export const Laptev: React.FC = () => {
    return (
        <section className={styles.laptevSection}>
            <span>
                {'With ❤ to '}
                <a
                    target={'_blank'}
                    rel={'noreferrer'}
                    href='https://laptev.dev'
                >
                    {'laptev.dev'}
                </a>
            </span>
        </section>
    );
};
