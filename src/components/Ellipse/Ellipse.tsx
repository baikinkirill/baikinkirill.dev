import React from 'react';
import EllipseImage from '@/shared/illustrations/ellipse/ellipse.svg';
import styles from './Ellipse.module.scss';

interface EllipseProps {
    children: React.ReactNode
    className?: string
}

export const Ellipse: React.FC<EllipseProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={styles.parent}>
            <EllipseImage className={[styles.ellipse, className].join(' ')}/>
            {children}
        </div>
    );
};
