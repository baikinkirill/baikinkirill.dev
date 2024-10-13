import React from 'react';
import { buildMetadata } from '@/shared/utils/metadata';
import { SocialIcons } from '@/components/SocialIcons/SocialIcons';
import { Avatar } from '@/app/_index/Avatar/Avatar';
import { AboutText } from '@/app/_index/AboutText';

export const metadata = buildMetadata();

const Page: React.FC = () => (
    <div>
        <SocialIcons/>
        <Avatar/>
        <AboutText/>
    </div>
);

export default Page;
