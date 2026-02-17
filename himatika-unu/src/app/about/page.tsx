import { Metadata } from 'next';
import Image from 'next/image';
import { Target, Users, Lightbulb, Heart, History, Sparkles, CheckCircle } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/animations/AnimatedContent';
import BlurText from '@/components/reactbits/text-animations/BlurText';

export const metadata: Metadata = {
    title: 'Tentang Kami',
    description: 'Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta.',
};

const values = [
    { icon: Target, title: 'Akademik', description: 'Mengutamakan pengembangan ilmu pengetahuan' },
    { icon: Users, title: 'Kekeluargaan', description: 'Membangun ikatan persaudaraan yang kuat' },
    { icon: Lightbulb, title: 'Inovatif', description: 'Mendorong kreativitas dan solusi teknologi' },
    { icon: Heart, title: 'Religius', description: 'Menjunjung nilai-nilai Aswaja' },
];

export default function AboutPage() {
    return (
        <>
            {/* Page Header + History */}
            <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
                <Image
                    src="/bg-tentang.webp"
                    alt=""
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-slate-100/10" />

                {/* Header */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <span className="inline-block text-blue-600 text-sm font-semibold font-sans mb-4 tracking-wider uppercase">PROFIL ORGANISASI</span>
                    <div role="heading" aria-level={1} className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-slate-900 mb-6">
                        <BlurText
                            text="TENTANG HIMATIKA"
                            delay={80}
                            animateBy="words"
                            direction="top"
                            className=""
                        />
                    </div>
                    <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-sans">
                        Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta
                    </p>
                </div>

                {/* History */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedContent direction="left" distance={50} duration={0.6}>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                                        <History className="text-blue-500" size={24} />
                                    </div>
                                    <span className="font-sans text-blue-500 font-semibold tracking-wide uppercase text-sm">Sejarah</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 mb-6">Perjalanan HIMATIKA</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6 font-sans">
                                    HIMATIKA UNU Yogyakarta didirikan pada tahun 2019 bersamaan dengan dibukanya
                                    Program Studi Informatika di Universitas Nahdlatul Ulama Yogyakarta.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed font-sans">
                                    Dengan semangat &quot;Ahlussunnah Wal Jamaah&quot; dan teknologi, HIMATIKA berkomitmen
                                    untuk mencetak generasi IT yang cerdas dan berakhlak mulia.
                                </p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent direction="right" distance={50} duration={0.6} delay={0.2}>
                            <div className="relative flex justify-center lg:justify-start">
                                <div className="items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logohima-removebg-preview.webp"
                                        alt="Logo HIMATIKA"
                                        width={192}
                                        height={192}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Visi Misi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent direction="up" distance={30} duration={0.5}>
                        <div className="text-center mb-16">
                            <span className="inline-block text-blue-600 text-sm font-semibold font-sans mb-2 tracking-wider uppercase">VISI & MISI</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900">Tujuan Organisasi</h2>
                        </div>
                    </AnimatedContent>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <AnimatedContent direction="left" distance={40} duration={0.5}>
                            <div className="h-full bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                                <div className="noise-overlay" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-white/15 rounded-xl flex items-center justify-center mb-6">
                                        <Target size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-2xl uppercase tracking-wide mb-4">Visi</h3>
                                    <p className="text-white/80 text-lg leading-relaxed font-sans">
                                        Menjadi wadah pengembangan potensi mahasiswa informatika yang adaptif
                                        terhadap teknologi dan berlandaskan nilai-nilai Aswaja.
                                    </p>
                                </div>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent direction="right" distance={40} duration={0.5} delay={0.15}>
                            <div className="h-full bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle size={32} className="text-blue-500" />
                                </div>
                                <h3 className="text-2xl uppercase tracking-wide text-slate-900 mb-4">Misi</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Menyelenggarakan kegiatan akademik dan non-akademik yang berkualitas',
                                        'Membangun jejaring kerjasama dengan berbagai pihak',
                                        'Meningkatkan soft skill dan hard skill anggota',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 font-sans">
                                            <span className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5 border border-blue-100">{i + 1}</span>
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Logo Philosophy */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedContent direction="left" distance={50} duration={0.6}>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                                        <Sparkles className="text-blue-500" size={24} />
                                    </div>
                                    <span className="font-sans text-blue-500 font-semibold tracking-wide uppercase text-sm">Filosofi Logo</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900 mb-6">Makna Logo Kami</h2>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Warna Biru', desc: 'Melambangkan profesionalisme, kepercayaan, dan teknologi.' },
                                        { title: 'Bentuk Modern', desc: 'Mencerminkan bidang informatika dan teknologi.' },
                                        { title: 'Elemen Tradisional', desc: 'Menjaga nilai-nilai Aswaja dalam modernitas.' },
                                    ].map((item, i) => (
                                        <AnimatedContent key={item.title} direction="up" distance={20} delay={i * 0.1} duration={0.4}>
                                            <div className="bg-white p-4 rounded-xl border border-slate-200/60 hover:border-blue-200/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                                                <h4 className="font-sans font-semibold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-500 text-sm font-sans">{item.desc}</p>
                                            </div>
                                        </AnimatedContent>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent direction="right" distance={50} duration={0.6} delay={0.2}>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 bg-blue-50 rounded-3xl flex items-center justify-center shadow-sm border border-blue-100">
                                    <Image
                                        src="/logohima-removebg-preview.webp"
                                        alt="Logo HIMATIKA"
                                        width={192}
                                        height={192}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </AnimatedContent>
                    </div>
                </div>
            </section>

            <div className="section-divider" />

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent direction="up" distance={30} duration={0.5}>
                        <div className="text-center mb-16">
                            <span className="inline-block bg-blue-50 text-blue-600 border border-blue-100 text-sm font-semibold font-sans px-4 py-2 rounded-full mb-4">Nilai-Nilai</span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-slate-900">
                                Nilai yang Kami{' '}
                                <span className="text-gradient-accent">Junjung</span>
                            </h2>
                        </div>
                    </AnimatedContent>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <AnimatedContent
                                key={value.title}
                                direction="up"
                                distance={30}
                                delay={index * 0.1}
                                duration={0.5}
                            >
                                <div className="h-full bg-white border border-slate-200/60 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 hover:border-blue-200/60 transition-all duration-300">
                                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                                        <value.icon size={28} className="text-blue-500" />
                                    </div>
                                    <h3 className="font-sans text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                                    <p className="text-slate-500 text-sm font-sans">{value.description}</p>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
