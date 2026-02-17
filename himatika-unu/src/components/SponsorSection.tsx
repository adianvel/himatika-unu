'use client';

import { GraduationCap, Monitor, Wifi, Database, Cloud, Shield, Cpu, Globe, Code, Layers, Laptop, Server } from 'lucide-react';
import LogoLoop from '@/components/reactbits/animations/LogoLoop';
import type { LogoItem } from '@/components/reactbits/animations/LogoLoop';

function SponsorCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <div className="flex items-center gap-3 px-8 py-3 select-none">
            <Icon className="w-7 h-7 text-slate-300 flex-shrink-0" />
            <span className="text-lg font-semibold text-slate-300 font-sans whitespace-nowrap">{label}</span>
        </div>
    );
}

const row1: LogoItem[] = [
    { node: <SponsorCard icon={GraduationCap} label="UNU Yogyakarta" />, title: 'UNU Yogyakarta' },
    { node: <SponsorCard icon={Monitor} label="Dicoding" />, title: 'Dicoding' },
    { node: <SponsorCard icon={Cloud} label="Google Cloud" />, title: 'Google Cloud' },
    { node: <SponsorCard icon={Database} label="Supabase" />, title: 'Supabase' },
    { node: <SponsorCard icon={Code} label="GitHub Education" />, title: 'GitHub Education' },
    { node: <SponsorCard icon={Wifi} label="Telkom Indonesia" />, title: 'Telkom Indonesia' },
];

const row2: LogoItem[] = [
    { node: <SponsorCard icon={Shield} label="Tokopedia" />, title: 'Tokopedia' },
    { node: <SponsorCard icon={Cpu} label="Intel Indonesia" />, title: 'Intel Indonesia' },
    { node: <SponsorCard icon={Globe} label="Niagahoster" />, title: 'Niagahoster' },
    { node: <SponsorCard icon={Layers} label="Vercel" />, title: 'Vercel' },
    { node: <SponsorCard icon={Laptop} label="Lenovo" />, title: 'Lenovo' },
    { node: <SponsorCard icon={Server} label="IDCloudHost" />, title: 'IDCloudHost' },
];

export default function SponsorSection() {
    return (
        <section className="py-8 bg-transparent relative">
            <p className="text-center text-xs font-sans font-semibold tracking-widest uppercase text-slate-400 mb-6">
                Didukung Oleh Mitra & Sponsor Kami
            </p>
            <div className="space-y-4">
                <LogoLoop
                    logos={row1}
                    speed={50}
                    direction="left"
                    pauseOnHover
                    gap={32}
                    logoHeight={48}
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Sponsor HIMATIKA baris 1"
                />
                <LogoLoop
                    logos={row2}
                    speed={50}
                    direction="right"
                    pauseOnHover
                    gap={32}
                    logoHeight={48}
                    fadeOut
                    fadeOutColor="transparent"
                    ariaLabel="Sponsor HIMATIKA baris 2"
                />
            </div>
        </section>
    );
}
