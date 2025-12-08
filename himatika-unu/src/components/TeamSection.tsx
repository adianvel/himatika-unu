'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { User, Mail, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { departments } from '@/lib/data/teamData';
import type { TeamMember } from '@/lib/data/teamData';

function MemberCard({ member, index }: { member: TeamMember; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex-shrink-0 w-[280px] md:w-[320px]"
        >
            <div className="bg-slate-50 rounded-2xl p-6 h-full">
                {/* Photo area */}
                <div className="relative w-full aspect-square rounded-xl bg-slate-100 mb-5 flex items-center justify-center overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[70%] h-[70%] rounded-full border border-slate-200" />
                        <div className="absolute w-[50%] h-[50%] rounded-full border border-slate-200" />
                    </div>

                    {member.photo ? (
                        <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            className="object-cover rounded-xl"
                        />
                    ) : (
                        <div className="relative z-10 w-16 h-16 bg-slate-200 rounded-xl flex items-center justify-center">
                            <User className="w-8 h-8 text-slate-400" />
                        </div>
                    )}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{member.role}</p>

                {/* Social icons */}
                <div className="flex gap-3">
                    {member.instagram && (
                        <a
                            href={`https://instagram.com/${member.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-slate-700 transition-colors"
                        >
                            <Instagram size={18} />
                        </a>
                    )}
                    {member.email ? (
                        <a
                            href={`mailto:${member.email}`}
                            className="text-slate-400 hover:text-slate-700 transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    ) : (
                        <>
                            <span className="text-slate-300"><Instagram size={18} /></span>
                            <span className="text-slate-300"><Mail size={18} /></span>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function TeamSection() {
    const [activeDept, setActiveDept] = useState(departments[0].id);
    const scrollRef = useRef<HTMLDivElement>(null);
    const activeMembers = departments.find(d => d.id === activeDept)?.members ?? [];

    // Reset scroll when department changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, [activeDept]);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return;
        const amount = 340;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-16">
                {/* Left Navigation */}
                <nav className="lg:sticky lg:top-32 lg:self-start">
                    <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                        {departments.map((dept) => (
                            <li key={dept.id}>
                                <button
                                    onClick={() => setActiveDept(dept.id)}
                                    className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-colors px-1 py-1.5 ${
                                        activeDept === dept.id
                                            ? 'text-slate-900'
                                            : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    <span
                                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                                            activeDept === dept.id
                                                ? 'bg-slate-900'
                                                : 'bg-slate-300'
                                        }`}
                                    />
                                    {dept.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right Content */}
                <div className="min-w-0">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
                            Struktur Organisasi
                        </h1>
                        <p className="text-slate-500">
                            Kepengurusan HIMATIKA UNU Yogyakarta periode 2025/2026
                        </p>
                    </div>

                    {/* Cards Slider */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDept}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex gap-5"
                                >
                                    {activeMembers.map((member, index) => (
                                        <MemberCard key={member.name} member={member} index={index} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Scroll Buttons */}
                        {activeMembers.length > 3 && (
                            <div className="flex gap-2 mt-4">
                                {/* Scroll indicators */}
                                <div className="flex gap-1.5 items-center flex-1">
                                    {activeMembers.map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-1 flex-1 rounded-full bg-slate-200 max-w-[80px]"
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => scroll('left')}
                                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                                    aria-label="Scroll left"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-white transition-colors"
                                    aria-label="Scroll right"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
