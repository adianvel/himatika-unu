'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang' },
    { href: '/team', label: 'Struktur' },
    { href: '/news', label: 'Berita' },
    { href: '/contact', label: 'Kontak' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > 50);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full max-w-4xl rounded-2xl border transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/85 backdrop-blur-xl border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.04)]'
                        : 'bg-white/40 backdrop-blur-md border-white/60'
                }`}
            >
                <div className="px-4 sm:px-6">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-50 p-0.5 border border-slate-200 relative">
                                <Image
                                    src="/logohima-removebg-preview.webp"
                                    alt="HIMATIKA Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-sm text-slate-800 group-hover:text-slate-900 transition-colors">
                                HIMATIKA
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                                    onMouseEnter={() => setHoveredLink(link.href)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    {hoveredLink === link.href && (
                                        <motion.span
                                            layoutId="navbar-hover"
                                            className="absolute inset-0 rounded-lg bg-slate-100"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                        />
                                    )}
                                    <span
                                        className={`relative z-10 ${
                                            isActive(link.href)
                                                ? 'text-slate-900'
                                                : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                    >
                                        {link.label}
                                    </span>
                                    {isActive(link.href) && (
                                        <motion.span
                                            layoutId="navbar-active"
                                            className="absolute -bottom-0.5 left-2 right-2 h-[2px] bg-blue-600 rounded-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="px-4 py-1.5 text-sm bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300"
                            >
                                Hubungi Kami
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                            aria-label="Toggle menu"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isOpen ? 'close' : 'open'}
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="pb-4 pt-2 space-y-1 border-t border-slate-100">
                                    {navLinks.map((link, index) => (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                                    isActive(link.href)
                                                        ? 'bg-slate-100 text-slate-900'
                                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                                }`}
                                            >
                                                {isActive(link.href) && (
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                )}
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-3 py-2.5 mt-2 bg-slate-900 text-white text-sm font-medium rounded-lg text-center hover:bg-slate-800 transition-colors"
                                        >
                                            Hubungi Kami
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </div>
    );
}
