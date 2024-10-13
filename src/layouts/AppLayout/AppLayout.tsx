import React from 'react';

import '@/shared/styles/globals.scss';
import '@/shared/styles/fonts.scss';

export const AppLayout: Function = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);
