import React from 'react';
import { EmailIconLight } from '@/shared/icons/email';
import Link from 'next/link';
import styles from './EmailLink.module.scss';
import { EMAIL_URL } from '../SocialIcons.constants';

export const EmailLink: React.FC = () => {
    if (EMAIL_URL === undefined) {
        return null;
    }

    return (
        <Link href={EMAIL_URL} className={styles.socialEmailLink}>
            <EmailIconLight/>
        </Link>
    );
};
