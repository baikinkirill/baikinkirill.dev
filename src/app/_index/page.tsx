import React from 'react';
import { buildMetadata } from '@/shared/utils/metadata';

export const metadata = buildMetadata();

const Page: React.FC = () => (
    <main style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
        background: 'black'
    }}>
        <article style={{ fontSize: 'clamp(20px, 3vw, 70px)', color: 'white', fontWeight: '900' }}>
            ВАНЯ СПАСИБО ЗА БАРМЕТЛ
        </article>
    </main>
);

export default Page;
