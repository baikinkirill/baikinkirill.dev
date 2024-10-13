import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
    GITHUB_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    SHOW_SOCIAL,
    TELEGRAM_URL,
    X_URL
} from './SocialIcons.constants';
import { EmailLink } from './EmailLink/EmailLink';

import styles from './SocialIcons.module.scss';

export const SocialIcons: React.FC = () => {
    if (!Boolean(SHOW_SOCIAL)) {
        return undefined;
    }

    return (
        <section className={styles.social}>
            {Boolean(TELEGRAM_URL) && <SocialIcon url={TELEGRAM_URL} bgColor={'transparent'} network={'telegram'}/>}
            {Boolean(GITHUB_URL) && <SocialIcon url={GITHUB_URL} bgColor={'transparent'}/>}
            {Boolean(LINKEDIN_URL) && <SocialIcon url={LINKEDIN_URL} bgColor={'transparent'}/>}
            {Boolean(X_URL) && <SocialIcon url={X_URL} bgColor={'transparent'}/>}
            {Boolean(INSTAGRAM_URL) && <SocialIcon url={INSTAGRAM_URL} bgColor={'transparent'}/>}
            <EmailLink/>
        </section>
    );
};
