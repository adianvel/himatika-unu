'use client';

import Image from 'next/image';
import LogoLoop from '@/components/reactbits/animations/LogoLoop';
import type { LogoItem } from '@/components/reactbits/animations/LogoLoop';

function SponsorLogo({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="flex items-center px-4 sm:px-8 py-3 select-none">
            <Image
                src={src}
                alt={alt}
                width={860}
                height={90}
                className="h-6 sm:h-8 w-auto object-contain"
            />
        </div>
    );
}

const row1: LogoItem[] = [
    { node: <SponsorLogo src="/logos/unu-yogyakarta.svg" alt="UNU Yogyakarta" />, title: 'UNU Yogyakarta' },
    { node: <SponsorLogo src="/logos/dicoding.svg" alt="Dicoding" />, title: 'Dicoding' },
    { node: <SponsorLogo src="/logos/google-cloud.svg" alt="Google Cloud" />, title: 'Google Cloud' },
    { node: <SponsorLogo src="/logos/supabase.svg" alt="Supabase" />, title: 'Supabase' },
    { node: <SponsorLogo src="/logos/github.svg" alt="GitHub Education" />, title: 'GitHub Education' },
    { node: <SponsorLogo src="/logos/telkom.svg" alt="Telkom Indonesia" />, title: 'Telkom Indonesia' },
];

const row2: LogoItem[] = [
    { node: <SponsorLogo src="/logos/tokopedia.svg" alt="Tokopedia" />, title: 'Tokopedia' },
    { node: <SponsorLogo src="/logos/intel.svg" alt="Intel Indonesia" />, title: 'Intel Indonesia' },
    { node: <SponsorLogo src="/logos/niagahoster.svg" alt="Niagahoster" />, title: 'Niagahoster' },
    { node: <SponsorLogo src="/logos/vercel.svg" alt="Vercel" />, title: 'Vercel' },
    { node: <SponsorLogo src="/logos/lenovo.svg" alt="Lenovo" />, title: 'Lenovo' },
    { node: <SponsorLogo src="/logos/idcloudhost.svg" alt="IDCloudHost" />, title: 'IDCloudHost' },
];

export default function SponsorSection() {
    return (
        <section className="py-8 bg-transparent relative">
            <p className="text-center text-xs font-sans font-semibold tracking-widest uppercase text-slate-700 mb-6">
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
