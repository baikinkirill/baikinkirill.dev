import React from 'react';
import '@/shared/styles/globals.scss';

const AppLayout: Function = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default AppLayout;
