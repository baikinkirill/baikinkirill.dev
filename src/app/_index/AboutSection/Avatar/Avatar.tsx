import React from 'react';
import avatar from '@/shared/illustrations/avatar/avatar.png';
import Image from 'next/image';
import { RadialBackgroundGradient } from '@/components/RadialBackgroundGradient';
import Arrow from '@/shared/icons/arrow/arrow.svg';

import styles from './Avatar.module.scss';

export const Avatar: React.FC = () => {
    return (
        <div className={styles.parent}>
            <div className={styles.greeting}>
                <Arrow/>
                <p className={styles.title}>Hello! I Am <b>Baikin Kirill</b></p>
            </div>

            <RadialBackgroundGradient>
                <Image src={avatar} alt="Avatar" width={240} height={240}/>
            </RadialBackgroundGradient>
        </div>
    );
};
