'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Prism from '@/components/reactbits/backgrounds/Prism';
import BlurText from '@/components/reactbits/text-animations/BlurText';


export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* White background */}
            <div className="absolute inset-0 bg-white" />

            {/* Prism Background */}
            <div className="absolute inset-0 z-[1]">
                <Prism
                    height={4}
                    baseWidth={4.5}
                    animationType="rotate"
                    glow={1.1}
                    noise={0}
                    transparent
                    scale={3.1}
                    hueShift={0}
                    colorFrequency={1.2}
                    hoverStrength={1.5}
                    inertia={0.05}
                    bloom={0.9}
                    timeScale={0.3}
                />
            </div>

            {/* Content — centered */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-slate-800 mb-6 leading-tight tracking-tight">
                    <BlurText
                        text="Membangun Generasi IT"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className=""
                    />
                    <br />
                    <BlurText
                        text="Unggul & Berakhlak"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className=""
                    />
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                    <Link
                        href="/about"
                        className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-7 py-3 rounded-full font-medium text-base hover:bg-slate-800 transition-all"
                    >
                        Kenalan Yuk
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/team"
                        className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-slate-900 px-7 py-3 rounded-full font-medium text-base transition-all border border-slate-200 hover:border-slate-400"
                    >
                        Lihat Struktur
                    </Link>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 z-[2]" style={{ background: 'linear-gradient(to top, white, transparent)' }} />
        </section>
    );
}
