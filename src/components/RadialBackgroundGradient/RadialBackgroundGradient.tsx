import React from 'react';
import styles from './RadialBackgroundGradient.module.scss';

interface RadialBackgroundGradientProps {
    children?: React.ReactNode
    childrenPadding?: number
    width?: number | string
    height?: number | string
}

export const RadialBackgroundGradient: React.FC<RadialBackgroundGradientProps> = (props) => {
    const { children, height, width, childrenPadding } = props;

    return (
        <div className={styles.container} style={{ width, height }}>
            <div className={styles.backgroundGradient}/>
            <div className={styles.foregroundGradient}/>

            {children !== undefined && (
                <div className={styles.children} style={{ padding: childrenPadding }}>
                    {children}
                </div>
            )}
        </div>
    );
};
