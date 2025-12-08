'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const linkColumns = [
    {
        title: 'Navigasi',
        links: [
            { href: '/', label: 'Beranda' },
            { href: '/about', label: 'Tentang Kami' },
            { href: '/team', label: 'Struktur' },
            { href: '/news', label: 'Berita' },
            { href: '/contact', label: 'Kontak' },
        ],
    },
    {
        title: 'Organisasi',
        links: [
            { href: '/about', label: 'Visi & Misi' },
            { href: '/about', label: 'Sejarah' },
            { href: '/team', label: 'Pengurus' },
            { href: '/team', label: 'Divisi' },
        ],
    },
    {
        title: 'Lainnya',
        links: [
            { href: '/news', label: 'Kegiatan' },
            { href: '/news', label: 'Workshop' },
            { href: '/contact', label: 'Hubungi Kami' },
        ],
    },
];

const socialLinks = [
    { href: 'https://instagram.com/himatika_unujogja', icon: Instagram, label: 'Instagram' },
    { href: 'https://youtube.com/@himatikaunujogja', icon: Youtube, label: 'YouTube' },
    { href: 'https://linkedin.com/company/himatikaunujogja', icon: Linkedin, label: 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="bg-white text-white">
            {/* Gradient Card */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-600 to-indigo-700 p-8 md:p-12 lg:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* Left — Logo + Description + Social */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/20 p-1 relative">
                                    <Image
                                        src="/logohima.png"
                                        alt="HIMATIKA Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-bold text-xl text-white">HIMATIKA</span>
                            </div>
                            <p className="text-white/70 text-base leading-relaxed max-w-md mb-8">
                                Himpunan Mahasiswa Informatika Universitas Nahdlatul Ulama Yogyakarta.
                                Mewujudkan Mahasiswa Informatika yang Unggul, Kreatif, dan Berintegritas
                                dengan semangat Aswaja.
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right — Link Columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {linkColumns.map((column) => (
                                <div key={column.title}>
                                    <h4 className="font-semibold text-white text-sm mb-4">{column.title}</h4>
                                    <ul className="space-y-3">
                                        {column.links.map((link) => (
                                            <li key={link.label}>
                                                <Link
                                                    href={link.href}
                                                    className="text-white/60 hover:text-white text-sm transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright — outside card */}
                <p className="text-center text-slate-400 text-sm mt-8">
                    &copy; {new Date().getFullYear()} HIMATIKA UNU Yogyakarta. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
