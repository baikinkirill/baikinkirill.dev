import React from 'react';

import styles from './SectionLayout.module.scss';

interface SectionLayoutProps {
    children: React.ReactNode
    className?: string
}

export const SectionLayout: React.FC<SectionLayoutProps> = ({ children, className }) => {
    return (
        <main className={[styles.parent, className].join(' ')}>
            {children}
        </main>
    );
};
