import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { Post } from '@/types';

interface NewsCardProps {
    post: Post;
    featured?: boolean;
}

export default function NewsCard({ post, featured = false }: NewsCardProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    if (featured) {
        return (
            <Link
                href={`/news/${post.slug || post.id}`}
                className="group block bg-slate-900 rounded-2xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 border border-white/10"
            >
                {/* Image placeholder */}
                <div className="relative h-64 bg-slate-800 overflow-hidden">
                    {post.thumbnail_url ? (
                        <Image
                            src={post.thumbnail_url}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/20 text-6xl font-bold">H</span>
                            </div>
                        </>
                    )}
                    {post.is_featured && (
                        <div className="absolute top-4 left-4">
                            <span className="bg-yellow-500 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                        <Calendar size={14} />
                        <span>{formatDate(post.published_at)}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-slate-400 line-clamp-3 mb-4">
                        {post.excerpt || post.content.substring(0, 150)}...
                    </p>

                    <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <span>Baca selengkapnya</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/news/${post.slug || post.id}`}
            className="group block bg-slate-900 rounded-xl overflow-hidden shadow-lg shadow-black/20 hover:shadow-cyan-500/10 transition-all duration-300 border border-white/10"
        >
            {/* Image placeholder */}
            <div className="relative h-48 bg-slate-800 overflow-hidden">
                {post.thumbnail_url ? (
                    <Image
                        src={post.thumbnail_url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/10 text-4xl font-bold">H</span>
                        </div>
                    </>
                )}
            </div>

            <div className="p-5">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                    <Calendar size={12} />
                    <span>{formatDate(post.published_at)}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-slate-400 text-sm line-clamp-2">
                    {post.excerpt || post.content.substring(0, 100)}...
                </p>
            </div>
        </Link>
    );
}
