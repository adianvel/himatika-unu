'use client';

import { Users, Layers, Calendar, Award, Code, Globe, BookOpen, Cpu, GraduationCap, Trophy, Handshake, Rocket } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/animations/AnimatedContent';
import LogoLoop from '@/components/reactbits/animations/LogoLoop';
import type { LogoItem } from '@/components/reactbits/animations/LogoLoop';

function LogoCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 select-none">
            <Icon className="w-7 h-7 text-slate-400 flex-shrink-0" />
            <span className="text-lg font-semibold text-slate-400 font-sans whitespace-nowrap">{label}</span>
        </div>
    );
}

const stats = [
    { icon: Users, value: '120+', label: 'Mahasiswa Aktif', featured: true },
    { icon: Layers, value: '5', label: 'Divisi' },
    { icon: Calendar, value: '50+', label: 'Kegiatan' },
    { icon: Award, value: '2019', label: 'Tahun Berdiri' },
];

const row1: LogoItem[] = [
    { node: <LogoCard icon={Code} label="10+ Workshop" />, title: '10+ Workshop' },
    { node: <LogoCard icon={Globe} label="Aswaja Digital" />, title: 'Aswaja Digital' },
    { node: <LogoCard icon={BookOpen} label="S1 Informatika" />, title: 'S1 Informatika' },
    { node: <LogoCard icon={Cpu} label="Tech Innovation" />, title: 'Tech Innovation' },
    { node: <LogoCard icon={GraduationCap} label="UNU Yogyakarta" />, title: 'UNU Yogyakarta' },
    { node: <LogoCard icon={Trophy} label="Kompetisi IT" />, title: 'Kompetisi IT' },
    { node: <LogoCard icon={Handshake} label="Networking" />, title: 'Networking' },
    { node: <LogoCard icon={Rocket} label="Proyek Nyata" />, title: 'Proyek Nyata' },
];

export default function StatisticsSection() {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
            {/* Bento Stats Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <AnimatedContent key={stat.label} direction="up" distance={30} delay={index * 0.1}>
                            {stat.featured ? (
                                <div className="bg-blue-600 rounded-2xl p-6 text-white relative overflow-hidden h-full">
                                    <div className="noise-overlay" />
                                    <div className="relative z-10">
                                        <stat.icon className="w-8 h-8 mb-3 opacity-80" />
                                        <p className="text-4xl tracking-wide">{stat.value}</p>
                                        <p className="text-white/70 text-sm font-sans mt-1">{stat.label}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 h-full">
                                    <stat.icon className="w-7 h-7 text-blue-500 mb-3" />
                                    <p className="text-3xl tracking-wide text-slate-900">{stat.value}</p>
                                    <p className="text-slate-500 text-sm font-sans mt-1">{stat.label}</p>
                                </div>
                            )}
                        </AnimatedContent>
                    ))}
                </div>
            </div>

            {/* Marquee */}
            <p className="text-center text-sm font-sans font-semibold tracking-widest uppercase text-slate-400 mb-8">
                Membangun Generasi IT Unggul
            </p>
            <div className="space-y-4">
                <LogoLoop
                    logos={row1}
                    speed={60}
                    direction="left"
                    pauseOnHover
                    gap={32}
                    logoHeight={48}
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Statistik HIMATIKA"
                />
            </div>
        </section>
    );
}
