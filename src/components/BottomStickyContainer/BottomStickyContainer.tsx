import React from 'react';
import styles from './BottomStickyContainer.module.scss';

export const BottomStickyContainer: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <section className={styles.bottomStickyContainer}>
            {children}
        </section>
    );
};
