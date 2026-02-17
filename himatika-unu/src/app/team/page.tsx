import { Metadata } from 'next';
import Image from 'next/image';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
    title: 'Struktur Organisasi',
    description: 'Struktur kepengurusan HIMATIKA UNU Yogyakarta.',
};

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white relative">
            <Image
                src="/bg-struktur.webp"
                alt=""
                fill
                className="object-cover opacity-10 fixed"
                priority
            />
            <div className="relative z-10">
                <TeamSection />
            </div>
        </div>
    );
}
