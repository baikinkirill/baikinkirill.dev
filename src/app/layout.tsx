import React from 'react';
import '@/shared/styles/globals.scss';
import '@/shared/styles/fonts.scss';

const Layout: Function = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default Layout;
