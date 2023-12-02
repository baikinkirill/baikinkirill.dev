import React from 'react';
import styles from './BottomStickyContainer.module.scss';

export const BottomStickyContainer: React.FC = (props) => {
    const { children } = props;
    return (
        <section className={styles.bottomStickyContainer}>
            {children}
        </section>
    );
};
