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
            { name: 'Huda Muliya', role: 'Ketua Umum', photo: '/HUDAMULIYA.JPG' },
            { name: 'Ahmad Rizky', role: 'Wakil Ketua' },
            { name: 'Siti Nurhaliza', role: 'Sekretaris Umum' },
            { name: 'Dewi Safitri', role: 'Wakil Sekretaris' },
            { name: 'Budi Santoso', role: 'Bendahara Umum' },
            { name: 'Rina Wati', role: 'Wakil Bendahara' },
        ],
    },
    {
        id: 'riset',
        name: 'Departemen Riset',
        members: [
            { name: 'Fajar Nugroho', role: 'Kepala Departemen' },
            { name: 'Andi Pratama', role: 'Wakil Kepala' },
            { name: 'Lina Marlina', role: 'Staff Riset' },
            { name: 'Rendi Saputra', role: 'Staff Riset' },
            { name: 'Nur Aini', role: 'Staff Riset' },
            { name: 'Dimas Arya', role: 'Staff Riset' },
            { name: 'Putri Handayani', role: 'Staff Riset' },
        ],
    },
    {
        id: 'media',
        name: 'Departemen Media',
        members: [
            { name: 'Galih Permana', role: 'Kepala Departemen' },
            { name: 'Nisa Aulia', role: 'Wakil Kepala' },
            { name: 'Rizki Ramadhan', role: 'Desainer Grafis' },
            { name: 'Sari Dewi', role: 'Content Creator' },
            { name: 'Aditya Firmansyah', role: 'Videografer' },
            { name: 'Mega Puspita', role: 'Fotografer' },
            { name: 'Yusuf Hakim', role: 'Social Media' },
            { name: 'Indah Lestari', role: 'Social Media' },
        ],
    },
    {
        id: 'ekraf',
        name: 'Departemen Ekraf',
        members: [
            { name: 'Bagus Setiawan', role: 'Kepala Departemen' },
            { name: 'Tika Amelia', role: 'Wakil Kepala' },
            { name: 'Wahyu Hidayat', role: 'Staff Ekraf' },
            { name: 'Ratna Sari', role: 'Staff Ekraf' },
            { name: 'Ilham Maulana', role: 'Staff Ekraf' },
            { name: 'Citra Dewi', role: 'Staff Ekraf' },
            { name: 'Arif Rahman', role: 'Staff Ekraf' },
        ],
    },
    {
        id: 'humas',
        name: 'Departemen Humas',
        members: [
            { name: 'Dinda Permata', role: 'Kepala Departemen' },
            { name: 'Farhan Akbar', role: 'Wakil Kepala' },
            { name: 'Layla Azzahra', role: 'Staff Humas' },
            { name: 'Eko Prasetyo', role: 'Staff Humas' },
            { name: 'Anisa Rahma', role: 'Staff Humas' },
            { name: 'Riko Aditya', role: 'Staff Humas' },
            { name: 'Fitri Yanti', role: 'Staff Humas' },
        ],
    },
    {
        id: 'akademik',
        name: 'Departemen Akademik',
        members: [
            { name: 'Hendra Wijaya', role: 'Kepala Departemen' },
            { name: 'Maya Sari', role: 'Wakil Kepala' },
            { name: 'Taufik Hidayat', role: 'Staff Akademik' },
            { name: 'Novi Anggraeni', role: 'Staff Akademik' },
            { name: 'Bayu Aditya', role: 'Staff Akademik' },
            { name: 'Wulan Dari', role: 'Staff Akademik' },
            { name: 'Agus Santoso', role: 'Staff Akademik' },
            { name: 'Rini Puspitasari', role: 'Staff Akademik' },
        ],
    },
];
