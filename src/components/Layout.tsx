import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import SiteFooter from './SiteFooter';
import { colors } from '../data/colors';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div style={{ background: colors.bg, color: 'white', minHeight: '100vh' }}>
            <Navbar colors={colors} />
            <main style={{ paddingTop: '80px' }}>
                {children}
            </main>
            <SiteFooter colors={colors} />
        </div>
    );
};

export default Layout;
