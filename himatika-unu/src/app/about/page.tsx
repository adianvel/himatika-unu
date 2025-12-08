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
            {/* Page Header */}
            <section className="relative py-32 md:py-40 bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-blue-600 text-sm font-semibold mb-4 tracking-wider uppercase">PROFIL ORGANISASI</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        <BlurText
                            text="Tentang HIMATIKA"
                            delay={80}
                            animateBy="words"
                            direction="top"
                            className=""
                        />
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto">
                        Kenali lebih dekat Himpunan Mahasiswa Informatika UNU Yogyakarta
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedContent direction="left" distance={50} duration={0.6}>
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                                        <History className="text-blue-500" size={24} />
                                    </div>
                                    <span className="text-blue-500 font-semibold">Sejarah</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Perjalanan HIMATIKA</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                    HIMATIKA UNU Yogyakarta didirikan pada tahun 2019 bersamaan dengan dibukanya
                                    Program Studi Informatika di Universitas Nahdlatul Ulama Yogyakarta.
                                </p>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Dengan semangat &quot;Ahlussunnah Wal Jamaah&quot; dan teknologi, HIMATIKA berkomitmen
                                    untuk mencetak generasi IT yang cerdas dan berakhlak mulia.
                                </p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent direction="right" distance={50} duration={0.6} delay={0.2}>
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logohima.png"
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

            {/* Visi Misi */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent direction="up" distance={30} duration={0.5}>
                        <div className="text-center mb-16">
                            <span className="inline-block text-blue-600 text-sm font-semibold mb-2 tracking-wider">VISI & MISI</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tujuan Organisasi</h2>
                        </div>
                    </AnimatedContent>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <AnimatedContent direction="left" distance={40} duration={0.5}>
                            <div className="h-full bg-blue-50 border border-blue-100 rounded-2xl p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                    <Target size={32} className="text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Menjadi wadah pengembangan potensi mahasiswa informatika yang adaptif
                                    terhadap teknologi dan berlandaskan nilai-nilai Aswaja.
                                </p>
                            </div>
                        </AnimatedContent>

                        <AnimatedContent direction="right" distance={40} duration={0.5} delay={0.15}>
                            <div className="h-full bg-slate-50 border border-slate-200 rounded-2xl p-8">
                                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle size={32} className="text-blue-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Menyelenggarakan kegiatan akademik dan non-akademik yang berkualitas',
                                        'Membangun jejaring kerjasama dengan berbagai pihak',
                                        'Meningkatkan soft skill dan hard skill anggota',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
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
                                    <span className="text-blue-500 font-semibold">Filosofi Logo</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Makna Logo Kami</h2>
                                <div className="space-y-4">
                                    {[
                                        { title: 'Warna Biru', desc: 'Melambangkan profesionalisme, kepercayaan, dan teknologi.' },
                                        { title: 'Bentuk Modern', desc: 'Mencerminkan bidang informatika dan teknologi.' },
                                        { title: 'Elemen Tradisional', desc: 'Menjaga nilai-nilai Aswaja dalam modernitas.' },
                                    ].map((item, i) => (
                                        <AnimatedContent key={item.title} direction="up" distance={20} delay={i * 0.1} duration={0.4}>
                                            <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors shadow-sm">
                                                <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-500 text-sm">{item.desc}</p>
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
                                        src="/logohima.png"
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

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedContent direction="up" distance={30} duration={0.5}>
                        <div className="text-center mb-16">
                            <span className="inline-block bg-blue-50 text-blue-600 border border-blue-100 text-sm font-semibold px-4 py-2 rounded-full mb-4">Nilai-Nilai</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Nilai yang Kami{' '}
                                <span className="text-blue-600">Junjung</span>
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
                                <div className="h-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-100">
                                        <value.icon size={28} className="text-blue-500" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                                    <p className="text-slate-500 text-sm">{value.description}</p>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
