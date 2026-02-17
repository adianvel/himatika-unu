'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlurText from '@/components/reactbits/text-animations/BlurText';
import VideoBackground from '@/components/VideoBackground';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video background */}
            <VideoBackground src="/bg-video.webm" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full text-center">
                {/* Main Heading */}
                <div role="heading" aria-level={1} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wide text-slate-900 mb-4 leading-none">
                    <BlurText
                        text="MEMBANGUN GENERASI IT"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className=""
                    />
                    <br />
                    <BlurText
                        text="UNGGUL & BERAKHLAK"
                        delay={80}
                        animateBy="words"
                        direction="top"
                        className=""
                    />
                </div>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-slate-500 font-sans mt-4 max-w-2xl mx-auto leading-relaxed">
                    Himpunan Mahasiswa Informatika UNU Yogyakarta — wadah pengembangan akademik, kreativitas, dan kepemimpinan mahasiswa informatika
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <Link
                        href="/about"
                        className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white pl-8 pr-6 py-3.5 rounded-full font-semibold font-sans text-base hover:bg-slate-800 transition-all duration-300"
                    >
                        <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
