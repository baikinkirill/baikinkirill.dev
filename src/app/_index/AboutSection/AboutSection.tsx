import React from 'react';
import styles from './AboutSection.module.scss';
import { Avatar } from './Avatar/Avatar';
import { AboutText } from './AboutText/AboutText';
import { SectionLayout } from '@/components/SectionLayout';
import { SocialIcons } from '@/components/SocialIcons';

export const AboutSection: React.FC = () => {
    return (
        <SectionLayout className={styles.parent}>
            <Avatar/>
            <div>
                <AboutText/>
                <SocialIcons/>
            </div>
        </SectionLayout>
    );
};
