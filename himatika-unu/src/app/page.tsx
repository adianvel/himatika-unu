import HeroSection from '@/components/HeroSection';
import SponsorSection from '@/components/SponsorSection';
import Image from 'next/image';
import { Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { mockPosts } from '@/lib/data/mockData';
import AnimatedContent from '@/components/reactbits/animations/AnimatedContent';

export default function Home() {
  const latestPosts = mockPosts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section - Sambutan Ketua */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimatedContent direction="left" distance={60} duration={0.7}>
              <div className="relative group">
                <div className="relative aspect-[4/3] md:aspect-[3/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/HUDAMULIYA.webp"
                    alt="Ketua HIMATIKA"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </AnimatedContent>

            {/* Content */}
            <AnimatedContent direction="right" distance={60} duration={0.7} delay={0.2}>
              <div>
                <div className="flex items-center gap-3 mb-6"> 
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                    <Quote className="text-blue-500" size={24} />
                  </div>
                  <span className="font-sans font-semibold tracking-wide uppercase text-sm">Sambutan Ketua</span>
                </div>
                <h2 className="text-sm font-sans text-slate-600 mb-6">
                  Generasi IT Unggul & Berakhlak
                </h2>

                <blockquote className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 border-l-4 border-blue-500 pl-4 md:pl-6 bg-slate-50 py-4 pr-4 rounded-r-lg font-sans">
                  &quot;Assalamualaikum Warahmatullahi Wabarakatuh. Selamat datang di keluarga besar HIMATIKA UNU Yogyakarta.
                  Kami hadir sebagai wadah bagi mahasiswa informatika untuk mengembangkan
                  skill teknologi, soft skill, dan jiwa kepemimpinan dengan semangat Aswaja.&quot;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-sans font-bold text-slate-900 text-lg">Huda Muliya</h4>
                    <p className="text-slate-500 text-sm font-sans">Ketua HIMATIKA 2025/2026</p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Latest News Section */}
      <section className="py-20 md:py-28 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedContent direction="up" distance={30} duration={0.5}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 mb-4">
                Berita Terbaru
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-sans">
                Ikuti perkembangan terbaru kegiatan dan program kerja HIMATIKA UNU Yogyakarta
              </p>
            </div>
          </AnimatedContent>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <AnimatedContent
                key={post.id}
                direction="up"
                distance={40}
                delay={index * 0.15}
                duration={0.5}
              >
                <Link
                  href={`/news/${post.slug || post.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200/60 hover:border-blue-200/60"
                >
                  <div className="h-1 bg-blue-500" />
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    {post.thumbnail_url ? (
                      <Image
                        src={post.thumbnail_url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-slate-300 text-4xl font-bold font-sans">H</span>
                      </div>
                    )}
                    {post.category && (
                      <span className="absolute top-3 right-3 bg-white text-slate-700 text-xs font-semibold font-sans px-3 py-1 rounded-full shadow-sm border border-slate-100">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-sans text-base font-semibold text-blue-600 group-hover:text-blue-700 transition-colors line-clamp-2 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-sans">
                      {new Date(post.published_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              </AnimatedContent>
            ))}
          </div>

          {/* View All Link */}
          <AnimatedContent direction="up" distance={20} delay={0.4}>
            <div className="text-center mt-16">
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 text-slate-700 font-semibold font-sans px-8 py-3 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                Lihat Semua Berita
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Sponsor Section */}
      <SponsorSection />

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Radial accent glow */}
        <div className="absolute inset-0 bg-blue-50/40" />
        <div className="absolute inset-0 noise-overlay" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <AnimatedContent direction="up" distance={40} duration={0.6}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans">
              Jadilah bagian dari keluarga besar HIMATIKA UNU Yogyakarta dan kembangkan potensimu
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold font-sans px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                Hubungi Kami
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-slate-600 border border-slate-200 font-semibold font-sans px-8 py-4 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </>
  );
}
