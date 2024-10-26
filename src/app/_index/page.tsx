import React from 'react';

import styles from './index.module.scss';
import { buildMetadata } from '@/shared/utils/metadata';
import { SocialIcons } from './social/Social';
import { Laptev } from '@/app/_index/laptev/Laptev';
import { Main } from '@/app/_index/main/Main';
import { Header } from '@/app/_index/header/Header';
import { BottomStickyContainer } from '@/components/BottomStickyContainer';

export const metadata = buildMetadata();

const Page: React.FC = () => (
    <>
        <div className={styles.parent}>
            <div className={styles.container}>
                <Header/>
                <Main/>
                <SocialIcons/>
            </div>
            <BottomStickyContainer>
                <Laptev/>
            </BottomStickyContainer>
        </div>
    </>
);

export default Page;
