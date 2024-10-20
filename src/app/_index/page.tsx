import React from 'react';
import { buildMetadata } from '@/shared/utils/metadata';
import { AboutSection } from './AboutSection';

export const metadata = buildMetadata();

const Page: React.FC = () => (
    <main>
        <article>
            <AboutSection/>
        </article>
    </main>
);

export default Page;
