import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { GITHUB_URL, INSTAGRAM_URL, SHOW_SOCIAL, TELEGRAM_URL, TWITTER_URL } from '@/shared/constants';
import { EmailLink } from './EmailLink/EmailLink';

import styles from './Social.module.scss';

export const SocialIcons: React.FC = () => {
    if (!Boolean(SHOW_SOCIAL)) {
        return undefined;
    }

    return (
        <section className={styles.social}>
            {Boolean(TELEGRAM_URL) && <SocialIcon url={TELEGRAM_URL} bgColor={'transparent'} network={'telegram'}/>}
            {Boolean(GITHUB_URL) && <SocialIcon url={GITHUB_URL} bgColor={'transparent'}/>}
            {Boolean(TWITTER_URL) && <SocialIcon url={TWITTER_URL} bgColor={'transparent'}/>}
            {Boolean(INSTAGRAM_URL) && <SocialIcon url={INSTAGRAM_URL} bgColor={'transparent'}/>}
            <EmailLink/>
        </section>
    );
};
