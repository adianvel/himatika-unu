'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const HIDDEN_FOOTER_ROUTES = ['/contact'];

export default function FooterWrapper() {
    const pathname = usePathname();

    if (HIDDEN_FOOTER_ROUTES.includes(pathname)) {
        return null;
    }

    return <Footer />;
}
