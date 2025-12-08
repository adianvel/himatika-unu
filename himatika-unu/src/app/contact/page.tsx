import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Kontak',
    description: 'Hubungi HIMATIKA UNU Yogyakarta.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 min-h-[70vh]">
                    {/* Left Side */}
                    <div className="flex flex-col justify-between">
                        <h2 className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug">
                            Siap berkolaborasi<br />
                            bersama HIMATIKA?
                        </h2>

                        <div className="mt-auto pt-16">
                            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 relative overflow-hidden">
                                <Image
                                    src="/logohima.png"
                                    alt="HIMATIKA"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <p className="text-slate-900 text-sm font-medium">HIMATIKA UNU Yogyakarta</p>
                            <p className="text-slate-500 text-sm">Jl. Lowanu No. 47, Sorosutan, Yogyakarta</p>

                            <div className="flex gap-5 mt-5">
                                <Link href="https://instagram.com/himatika_unujogja" target="_blank" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">Instagram</Link>
                                <Link href="https://youtube.com/@himatikaunujogja" target="_blank" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">YouTube</Link>
                                <Link href="https://linkedin.com/company/himatikaunujogja" target="_blank" className="text-slate-600 hover:text-slate-900 text-sm transition-colors">LinkedIn</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side — Form */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-12">
                            Hubungi Kami
                        </h1>

                        <form className="space-y-8">
                            {/* Name Row */}
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nama depan"
                                        className="w-full bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nama belakang"
                                        className="w-full bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Subjek"
                                    className="w-full bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    rows={1}
                                    placeholder="Tulis pesan..."
                                    className="w-full bg-transparent border-b border-slate-300 text-slate-900 placeholder:text-slate-400 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none"
                                />
                            </div>

                            {/* Privacy */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="w-5 h-5 rounded-full border-2 border-slate-300 text-slate-900 focus:ring-0 focus:ring-offset-0 accent-slate-900"
                                />
                                <label htmlFor="privacy" className="text-slate-600 text-sm">
                                    Saya menyetujui bahwa data ini digunakan untuk keperluan komunikasi
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="bg-slate-900 text-white font-medium px-8 py-3 rounded-full hover:bg-slate-800 transition-colors text-sm"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
