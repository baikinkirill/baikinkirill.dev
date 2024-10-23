import React from 'react';
import Link from 'next/link';
import styles from './Laptev.module.scss';

export const Laptev: React.FC = () => {
    return (
        <p className={styles.parent}>
          With ❤️ to <Link href="https://laptev.dev">laptev.dev</Link>
        </p>
    );
};
