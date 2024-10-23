import React from 'react';
import styles from './AboutSection.module.scss';
import { Avatar } from './Avatar/Avatar';
import { AboutText } from './AboutText/AboutText';
import { SectionLayout } from '@/components/SectionLayout';
import { SocialIcons } from '@/components/SocialIcons';
import { Laptev } from '@/app/_index/AboutSection/Laptev';

export const AboutSection: React.FC = () => {
    return (
        <SectionLayout className={styles.parent}>
            <section className={styles.content}>
                <Avatar/>
                <div className={styles.textParent}>
                    <AboutText/>
                    <SocialIcons/>
                </div>
                <section className={styles.laptev}>
                    <Laptev/>
                </section>
            </section>
        </SectionLayout>
    );
};
