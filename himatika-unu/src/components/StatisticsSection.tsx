'use client';

import { Users, Layers, Calendar, Award, Code, Globe, BookOpen, Cpu, GraduationCap, Trophy, Handshake, Rocket } from 'lucide-react';
import LogoLoop from '@/components/reactbits/animations/LogoLoop';
import type { LogoItem } from '@/components/reactbits/animations/LogoLoop';

function LogoCard({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
    return (
        <div className="flex items-center gap-3 px-6 py-3 select-none">
            <Icon className="w-7 h-7 text-slate-500 flex-shrink-0" />
            <span className="text-lg font-semibold text-slate-400 whitespace-nowrap">{label}</span>
        </div>
    );
}

const row1: LogoItem[] = [
    { node: <LogoCard icon={Users} label="120+ Mahasiswa" />, title: '120+ Mahasiswa' },
    { node: <LogoCard icon={Layers} label="5 Divisi" />, title: '5 Divisi' },
    { node: <LogoCard icon={Calendar} label="50+ Kegiatan" />, title: '50+ Kegiatan' },
    { node: <LogoCard icon={Award} label="Berdiri 2019" />, title: 'Berdiri 2019' },
    { node: <LogoCard icon={Code} label="10+ Workshop" />, title: '10+ Workshop' },
    { node: <LogoCard icon={Globe} label="Aswaja Digital" />, title: 'Aswaja Digital' },
];

const row2: LogoItem[] = [
    { node: <LogoCard icon={BookOpen} label="S1 Informatika" />, title: 'S1 Informatika' },
    { node: <LogoCard icon={Cpu} label="Tech Innovation" />, title: 'Tech Innovation' },
    { node: <LogoCard icon={GraduationCap} label="UNU Yogyakarta" />, title: 'UNU Yogyakarta' },
    { node: <LogoCard icon={Trophy} label="Kompetisi IT" />, title: 'Kompetisi IT' },
    { node: <LogoCard icon={Handshake} label="Networking" />, title: 'Networking' },
    { node: <LogoCard icon={Rocket} label="Proyek Nyata" />, title: 'Proyek Nyata' },
];

export default function StatisticsSection() {
    return (
        <section className="py-14 md:py-20 relative overflow-hidden border-y border-slate-100 bg-white">
            <p className="text-center text-sm font-semibold tracking-widest uppercase text-slate-400 mb-10">
                Membangun Generasi IT Unggul Bersama HIMATIKA UNU Yogyakarta
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
                    ariaLabel="Statistik HIMATIKA baris 1"
                />
                <LogoLoop
                    logos={row2}
                    speed={60}
                    direction="right"
                    pauseOnHover
                    gap={32}
                    logoHeight={48}
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Statistik HIMATIKA baris 2"
                />
            </div>
        </section>
    );
}
