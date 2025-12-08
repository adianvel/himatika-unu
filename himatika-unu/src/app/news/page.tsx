import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { mockPosts } from '@/lib/data/mockData';

export const metadata: Metadata = {
    title: 'Berita & Kegiatan',
    description: 'Berita terbaru dan kegiatan HIMATIKA UNU Yogyakarta.',
};

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });
}

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
                        Berita
                    </h1>
                    <p className="text-slate-500 text-base max-w-sm md:text-right">
                        Ikuti perkembangan terbaru kegiatan dan program kerja HIMATIKA UNU Yogyakarta.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-slate-200" />
            </div>

            {/* Articles Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-slate-50 rounded-3xl p-6 md:p-10">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Artikel Terbaru</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {mockPosts.map((post) => (
                            <article key={post.id} className="group">
                                {/* Image */}
                                <Link href={`/news/${post.slug || post.id}`} className="block">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 mb-4">
                                        {post.thumbnail_url ? (
                                            <Image
                                                src={post.thumbnail_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                                                <span className="text-slate-400 text-4xl font-bold">H</span>
                                            </div>
                                        )}

                                        {/* Category Badge */}
                                        {post.category && (
                                            <span className="absolute top-3 right-3 bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-slate-200">
                                                {post.category}
                                            </span>
                                        )}
                                    </div>
                                </Link>

                                {/* Title */}
                                <Link href={`/news/${post.slug || post.id}`}>
                                    <h3 className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors leading-snug mb-1 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                {/* Date */}
                                <p className="text-slate-400 text-sm">
                                    {formatDate(post.published_at)}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
