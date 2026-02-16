export interface TeamMember {
    name: string;
    role: string;
    photo?: string;
    instagram?: string;
    email?: string;
}

export interface Department {
    id: string;
    name: string;
    members: TeamMember[];
}

export const departments: Department[] = [
    {
        id: 'bph',
        name: 'Badan Pengurus Harian',
        members: [
            {
                name: 'Huda Muliya',
                role: 'Ketua Umum',
                photo: '/HUDAMULIYA.webp',
                instagram: 'hudamuliya',
                email: 'huda.muliya@unu-jogja.ac.id',
            },
            {
                name: 'Ahmad Rizky Fadillah',
                role: 'Wakil Ketua',
                photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                instagram: 'ahmadrizky_',
                email: 'ahmad.rizky@unu-jogja.ac.id',
            },
            {
                name: 'Siti Nurhaliza Putri',
                role: 'Sekretaris Umum',
                photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
                instagram: 'sitinurhaliza.p',
                email: 'siti.nurhaliza@unu-jogja.ac.id',
            },
            {
                name: 'Dewi Safitri Ramadhani',
                role: 'Wakil Sekretaris',
                photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
                instagram: 'dewisafitri.r',
            },
            {
                name: 'Budi Santoso Wibowo',
                role: 'Bendahara Umum',
                photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
                instagram: 'budisantoso.w',
                email: 'budi.santoso@unu-jogja.ac.id',
            },
            {
                name: 'Rina Wati Handayani',
                role: 'Wakil Bendahara',
                photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
                instagram: 'rinawati.h',
            },
        ],
    },
    {
        id: 'riset',
        name: 'Departemen Riset & Teknologi',
        members: [
            {
                name: 'Fajar Nugroho',
                role: 'Kepala Departemen',
                photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
                instagram: 'fajar.nugroho',
                email: 'fajar.nugroho@unu-jogja.ac.id',
            },
            {
                name: 'Andi Pratama Putra',
                role: 'Wakil Kepala',
                photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
                instagram: 'andipratama.p',
            },
            {
                name: 'Lina Marlina Sari',
                role: 'Staff Riset — Machine Learning',
                photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
                instagram: 'linamarlina.s',
            },
            {
                name: 'Rendi Saputra',
                role: 'Staff Riset — IoT',
                photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
                instagram: 'rendisaputra',
            },
            {
                name: 'Nur Aini Fitriani',
                role: 'Staff Riset — Data Science',
                photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
                instagram: 'nuraini.f',
            },
            {
                name: 'Dimas Arya Pratama',
                role: 'Staff Riset — Cybersecurity',
                photo: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=400&q=80',
                instagram: 'dimasarya.p',
            },
            {
                name: 'Putri Handayani',
                role: 'Staff Riset — Cloud Computing',
                photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
                instagram: 'putrihandayani',
            },
        ],
    },
    {
        id: 'media',
        name: 'Departemen Media & Komunikasi',
        members: [
            {
                name: 'Galih Permana Putra',
                role: 'Kepala Departemen',
                photo: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&q=80',
                instagram: 'galihpermana.p',
                email: 'galih.permana@unu-jogja.ac.id',
            },
            {
                name: 'Nisa Aulia Zahra',
                role: 'Wakil Kepala',
                photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
                instagram: 'nisaaulia.z',
            },
            {
                name: 'Rizki Ramadhan',
                role: 'Desainer Grafis',
                photo: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80',
                instagram: 'rizkiramadhan',
            },
            {
                name: 'Sari Dewi Lestari',
                role: 'Content Creator',
                photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80',
                instagram: 'saridewi.l',
            },
            {
                name: 'Aditya Firmansyah',
                role: 'Videografer',
                photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&q=80',
                instagram: 'adityafirmansyah',
            },
            {
                name: 'Mega Puspita Sari',
                role: 'Fotografer',
                photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
                instagram: 'megapuspita.s',
            },
            {
                name: 'Yusuf Hakim Maulana',
                role: 'Social Media Manager',
                photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
                instagram: 'yusufhakim.m',
            },
            {
                name: 'Indah Lestari Putri',
                role: 'Social Media Specialist',
                photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80',
                instagram: 'indahlestari.p',
            },
        ],
    },
    {
        id: 'ekraf',
        name: 'Departemen Ekonomi Kreatif',
        members: [
            {
                name: 'Bagus Setiawan',
                role: 'Kepala Departemen',
                photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&q=80',
                instagram: 'bagussetiawan',
                email: 'bagus.setiawan@unu-jogja.ac.id',
            },
            {
                name: 'Tika Amelia Putri',
                role: 'Wakil Kepala',
                photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80',
                instagram: 'tikaamelia.p',
            },
            {
                name: 'Wahyu Hidayat',
                role: 'Staff — Sponsorship',
                photo: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&q=80',
                instagram: 'wahyuhidayat',
            },
            {
                name: 'Ratna Sari Dewi',
                role: 'Staff — Event Management',
                photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
                instagram: 'ratnasari.d',
            },
            {
                name: 'Ilham Maulana Akbar',
                role: 'Staff — Merchandise',
                photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
                instagram: 'ilhammaulana.a',
            },
            {
                name: 'Citra Dewi Anggraeni',
                role: 'Staff — Partnership',
                photo: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&q=80',
                instagram: 'citradewi.a',
            },
            {
                name: 'Arif Rahman Hakim',
                role: 'Staff — Fundraising',
                photo: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=400&q=80',
                instagram: 'arifrahman.h',
            },
        ],
    },
    {
        id: 'humas',
        name: 'Departemen Hubungan Masyarakat',
        members: [
            {
                name: 'Dinda Permata Sari',
                role: 'Kepala Departemen',
                photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
                instagram: 'dindapermata.s',
                email: 'dinda.permata@unu-jogja.ac.id',
            },
            {
                name: 'Farhan Akbar Maulana',
                role: 'Wakil Kepala',
                photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=400&q=80',
                instagram: 'farhanakbar.m',
            },
            {
                name: 'Layla Azzahra Putri',
                role: 'Staff — Eksternal',
                photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
                instagram: 'laylaazzahra.p',
            },
            {
                name: 'Eko Prasetyo Wibowo',
                role: 'Staff — Internal',
                photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
                instagram: 'ekoprasetyo.w',
            },
            {
                name: 'Anisa Rahma Wati',
                role: 'Staff — Alumni Relations',
                photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
                instagram: 'anisarahma.w',
            },
            {
                name: 'Riko Aditya Pratama',
                role: 'Staff — Networking',
                photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&q=80',
                instagram: 'rikoaditya.p',
            },
            {
                name: 'Fitri Yanti Lestari',
                role: 'Staff — Protokoler',
                photo: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=400&q=80',
                instagram: 'fitriyanti.l',
            },
        ],
    },
    {
        id: 'akademik',
        name: 'Departemen Akademik',
        members: [
            {
                name: 'Hendra Wijaya Kusuma',
                role: 'Kepala Departemen',
                photo: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&q=80',
                instagram: 'hendrawijaya.k',
                email: 'hendra.wijaya@unu-jogja.ac.id',
            },
            {
                name: 'Maya Sari Indah',
                role: 'Wakil Kepala',
                photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&q=80',
                instagram: 'mayasari.i',
            },
            {
                name: 'Taufik Hidayat',
                role: 'Staff — Tutorial & Mentoring',
                photo: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=400&q=80',
                instagram: 'taufikhidayat',
            },
            {
                name: 'Novi Anggraeni',
                role: 'Staff — Seminar & Workshop',
                photo: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=400&q=80',
                instagram: 'novianggraeni',
            },
            {
                name: 'Bayu Aditya Nugraha',
                role: 'Staff — Kompetisi',
                photo: 'https://images.unsplash.com/photo-1480429370612-2cd6962e4ed2?w=400&q=80',
                instagram: 'bayuaditya.n',
            },
            {
                name: 'Wulan Dari Permata',
                role: 'Staff — Sertifikasi',
                photo: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=400&q=80',
                instagram: 'wulandari.p',
            },
            {
                name: 'Agus Santoso',
                role: 'Staff — Study Group',
                photo: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&q=80',
                instagram: 'agussantoso',
            },
            {
                name: 'Rini Puspitasari',
                role: 'Staff — Perpustakaan Digital',
                photo: 'https://images.unsplash.com/photo-1485875437517-e17f604a4f34?w=400&q=80',
                instagram: 'rinipuspitasari',
            },
        ],
    },
];
