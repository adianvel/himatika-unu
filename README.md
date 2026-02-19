# HIMATIKA UNU Yogyakarta

Website resmi Himpunan Mahasiswa Informatika Universitas Nahdlatul Ulama Yogyakarta.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **UI** — React 19, Tailwind CSS v4
- **Font** — Bebas Neue (headings), General Sans (body)
- **Animasi** — Framer Motion
- **Database** — Supabase
- **Icons** — Lucide React

## Menjalankan Proyek

```bash
cd himatika-unu
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Scripts

| Perintah | Fungsi |
|----------|--------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Jalankan production server |
| `npm run lint` | Jalankan ESLint |

## Struktur Proyek

```
himatika-unu/
  src/
    app/            # Halaman (App Router)
    components/     # Komponen React
    lib/            # Utilities & Supabase client
    types/          # TypeScript types
  public/           # Asset statis (gambar, video, logo)
```

## Halaman

- `/` — Beranda
- `/about` — Tentang HIMATIKA
- `/team` — Struktur Organisasi
- `/news` — Berita & Kegiatan
- `/contact` — Kontak

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Lisensi

Hak cipta HIMATIKA UNU Yogyakarta.
