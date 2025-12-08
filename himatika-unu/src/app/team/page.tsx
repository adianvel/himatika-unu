import { Metadata } from 'next';
import TeamSection from '@/components/TeamSection';

export const metadata: Metadata = {
    title: 'Struktur Organisasi',
    description: 'Struktur kepengurusan HIMATIKA UNU Yogyakarta.',
};

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-white">
            <TeamSection />
        </div>
    );
}
