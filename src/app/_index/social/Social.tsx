import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { GITHUB_URL, INSTAGRAM_URL, SHOW_SOCIAL, TELEGRAM_URL, TWITTER_URL } from '@/shared/constants';

export const SocialIcons: React.FC = () => {
    if (!Boolean(SHOW_SOCIAL)) {
        return undefined;
    }

    return (
        <section>
            {Boolean(TELEGRAM_URL) && <SocialIcon url="https://telegram.org/" bgColor={'transparent'} href={TELEGRAM_URL}/>}
            {Boolean(GITHUB_URL) && <SocialIcon url={GITHUB_URL} bgColor={'transparent'}/>}
            {Boolean(TWITTER_URL) && <SocialIcon url={TWITTER_URL} bgColor={'transparent'}/>}
            {Boolean(INSTAGRAM_URL) && <SocialIcon url={INSTAGRAM_URL} bgColor={'transparent'}/>}
        </section>
    );
};
