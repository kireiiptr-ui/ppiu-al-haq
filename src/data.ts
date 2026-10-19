import {
  MeetingSchedule,
  MaterialResource,
  EbookPage,
  ReelVideo,
  DepartureGroupPoster,
  InfographicItem,
  TestimonialItem,
  DocumentationItem
} from './types';

export const MANASIK_SCHEDULES: MeetingSchedule[] = [
  {
    title: "Pertemuan I",
    date: "Sabtu, 6 Juni 2026",
    items: [
      {
        no: 1,
        waktu: "08.00 – 08.30",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Registrasi & Pembagian Buku Panduan Manasik",
        topikDetail: "Pembagian kelengkapan bimbingan, verifikasi kehadiran jamaah, serta pembagian buku cetak Panduan Manasik Al-Haq.",
        pjNarasumber: "Admin"
      },
      {
        no: 2,
        waktu: "08.30 – 09.15",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Materi Regulasi & Kebijakan Terbaru (Update 2025)",
        topikDetail: "Penjelasan regulasi, visa, dan kebijakan terbaru penyelenggaraan umrah dari Kemenag & Kerajaan Arab Saudi. Pengenalan aplikasi Nusuk dan layanan digital pendukung ibadah umrah.",
        pjNarasumber: "Pemateri"
      },
      {
        no: 3,
        waktu: "09.15 – 10.00",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Sosialisasi Kesehatan",
        topikDetail: "Pencegahan penyakit, vaksinasi, dan kesiapan menghadapi cuaca ekstrem di Arab Saudi. Pengelolaan kesehatan jamaah (obat penahan haid, penyakit komorbid, obat pribadi, dan riwayat medis).",
        pjNarasumber: "Pemateri"
      },
      {
        no: 4,
        waktu: "10.00 – 10.15",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Coffee Break",
        topikDetail: "Istirahat singkat, coffee break, dan ramah tamah antar jamaah satu rombongan.",
        pjNarasumber: "Panitia"
      },
      {
        no: 5,
        waktu: "10.15 - 11.00",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Materi Fiqih Umroh",
        topikDetail: "Pengertian, hukum, dan hikmah ibadah umrah. Pendalaman rukun, syarat, wajib, dan larangan-larangan selama berihram beserta denda (dam).",
        pjNarasumber: "Pembimbing"
      },
      {
        no: 6,
        waktu: "11.00 - 12.00",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Alur perjalanan dan Pendalaman Doa-Doa",
        topikDetail: "Visualisasi alur perjalanan ibadah mulai dari miqat, Thawaf, Sa'i, Tahallul, adab minum air Zamzam, serta pendalaman doa saat melihat Ka'bah.",
        pjNarasumber: "Pembimbing"
      },
      {
        no: 7,
        waktu: "12.00 – 13.00",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Ishoma (Istirahat, Sholat, Makan)",
        topikDetail: "Makan siang bersama, sholat Dzuhur berjamaah di masjid, dan istirahat sejenak.",
        pjNarasumber: "Panitia"
      },
      {
        no: 8,
        waktu: "13.00 – 14.30",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Pengarahan Teknis Keberangkatan",
        topikDetail: "Pembagian koper bagasi, tas kabin, seragam batik, name tag, dan syal. Sosialisasi nilai tukar mata uang, serta layanan penukaran uang Rupiah ke Riyal.",
        pjNarasumber: "Panitia"
      },
      {
        no: 9,
        waktu: "14.30 - 14.45",
        tempat: "Aula PPIU Al-Haq",
        sesiKegiatan: "Penutupan",
        topikDetail: "Sesi foto dokumentasi bersama per kelompok, doa penutup majelis, dan ramah tamah akhir.",
        pjNarasumber: "Panitia"
      }
    ]
  },
  {
    title: "Pertemuan II",
    date: "Sabtu, 13 Juni 2026",
    items: [
      {
        no: 1,
        waktu: "07.30 - 08.00",
        tempat: "Plaza Haji Al-Qosbah",
        sesiKegiatan: "Registrasi",
        topikDetail: "Verifikasi kehadiran jamaah di lokasi simulasi outdoor, pembagian air mineral, dan pengkondisian barisan kelompok.",
        pjNarasumber: "Admin"
      },
      {
        no: 2,
        waktu: "08.00 – 08.45",
        tempat: "Plaza Haji Al-Qosbah",
        sesiKegiatan: "Briefing, Pengarahan & Persiapan Simulasi",
        topikDetail: "Review singkat alur perjalanan umrah, ketentuan dasar ihram, wajib umrah, dan larangan ihram. Pengarahan teknis simulasi serta melafalkan bacaan niat dan talbiyah.",
        pjNarasumber: "Pemateri"
      },
      {
        no: 3,
        waktu: "08.45 – 12.00",
        tempat: "Plaza Haji Al-Qosbah",
        sesiKegiatan: "Simulasi Praktik Rangkaian Umrah",
        topikDetail: "Praktik memakai kain ihram (bagi pria) dan niat di miqat. Melafalkan talbiyah dan tata cara memasuki Masjidil Haram. Simulasi Thawaf 7 putaran mengitari miniatur Ka'bah beserta doa utama. Simulasi sholat sunnah Thawaf dan adab minum air Zamzam. Simulasi Sa'i dari Shafa ke Marwah (termasuk lari kecil di area lampu hijau). Simulasi Tahallul (potong rambut) dan penyelesaian umrah.",
        pjNarasumber: "Pembimbing"
      },
      {
        no: 4,
        waktu: "10.30 – 10.45",
        tempat: "Plaza Haji Al-Qosbah",
        sesiKegiatan: "Ishoma (Istirahat, Sholat, Makan)",
        topikDetail: "Break singkat untuk minum dan istirahat sejenak di tengah praktik luar ruangan.",
        pjNarasumber: "Panitia"
      },
      {
        no: 5,
        waktu: "12.00 – 13.00",
        tempat: "Plaza Haji Al-Qosbah",
        sesiKegiatan: "Evaluasi & Penutupan",
        topikDetail: "Review & koreksi rangkaian gerakan serta bacaan doa yang sering keliru selama simulasi. Sesi tanya jawab interaktif, doa bersama kelancaran ibadah, dan dokumentasi kelompok.",
        pjNarasumber: "Pembimbing"
      }
    ]
  }
];

export const MATERIAL_RESOURCES: MaterialResource[] = [
  {
    id: "mat-1",
    title: "Modul Manasik Haji dan Umrah Lengkap",
    description: "Panduan teks lengkap mengenai fiqih, rukun, wajib, dan doa-doa ibadah haji serta umrah sesuai syariat.",
    type: "pdf",
    sizeOrDuration: "14.8 MB (PDF)",
    downloadUrl: "#"
  },
  {
    id: "mat-2",
    title: "Video Rekaman Manasik Pertemuan I",
    description: "Rekaman utuh penyampaian materi fiqih umrah, regulasi terbaru, dan sosialisasi kesehatan dari pembimbing.",
    type: "video",
    sizeOrDuration: "1 Jam 45 Menit (MP4)",
    downloadUrl: "#"
  },
  {
    id: "mat-3",
    title: "Checklist Persiapan Keberangkatan",
    description: "Daftar periksa barang bawaan wajib, dokumen penting, dan obat-obatan pribadi yang harus masuk koper.",
    type: "checklist",
    sizeOrDuration: "1.2 MB (Interactive)",
    downloadUrl: "#"
  },
  {
    id: "mat-4",
    title: "Panduan Kesehatan Jamaah di Tanah Suci",
    description: "Tips menjaga stamina, menghadapi cuaca panas ekstrem, hidrasi yang cukup, dan pertolongan pertama.",
    type: "guide",
    sizeOrDuration: "3.5 MB (PDF)",
    downloadUrl: "#"
  },
  {
    id: "mat-5",
    title: "Panduan Perjalanan Bandara hingga Tanah Suci",
    description: "Navigasi lengkap dari Bandara Soekarno-Hatta, proses imigrasi Jeddah/Madinah, hingga check-in hotel.",
    type: "guide",
    sizeOrDuration: "5.1 MB (PDF)",
    downloadUrl: "#"
  }
];

export const EBOOK_PAGES: EbookPage[] = [
  {
    pageNumber: 1,
    chapterTitle: "Kata Pengantar & Pembukaan",
    arabicQuote: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    arabicTranslation: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.",
    paragraphs: [
      "Puji syukur kami panjatkan ke hadirat Allah SWT, yang telah memberikan nikmat iman, Islam, dan kesehatan kepada kita semua. Buku 'Panduan Praktis Haji dan Umrah 2026' ini disusun sebagai wujud komitmen PPIU Al-Haq dalam memberikan bimbingan ibadah yang terbaik, sistematis, dan mudah dipahami oleh jamaah dari segala rentang usia.",
      "Perjalanan ke Baitullah bukan sekadar perjalanan fisik, melainkan perjalanan spiritual tingkat tinggi. Setiap langkah kaki, tetesan keringat, dan lafal doa yang dipanjatkan memiliki nilai pahala yang agung di sisi Allah SWT.",
      "Melalui buku panduan digital ini, kami berharap jamaah dapat mempersiapkan diri secara optimal baik dari aspek ilmu (fiqih), mental, spiritual, maupun fisik sebelum keberangkatan hingga kembali ke tanah air."
    ]
  },
  {
    pageNumber: 2,
    chapterTitle: "Bab I: Fiqih Dasar & Keutamaan Umrah",
    arabicQuote: "وَأَتِمُّوا الْحَجَّ وَالْعُمْرَةَ لِلَّهِ",
    arabicTranslation: "Dan sempurnakanlah ibadah haji dan umrah karena Allah. (QS. Al-Baqarah: 196)",
    paragraphs: [
      "Umrah menurut bahasa berarti berkunjung atau berziarah. Menurut istilah syar'i, umrah adalah berkunjung ke Ka'bah (Baitullah) untuk melaksanakan serangkaian ibadah mulai dari Ihram, Thawaf, Sa'i, dan diakhiri dengan Tahallul demi mengharap ridha Allah SWT.",
      "Keutamaan ibadah umrah sangatlah agung. Dari Abu Hurairah radhiyallahu 'anhu, Rasulullah SAW bersabda: 'Satu umrah ke umrah berikutnya adalah penghapus dosa di antara keduanya, dan haji yang mabrur tidak ada balasan baginya selain surga.' (HR. Bukhari & Muslim)",
      "Adapun hukum umrah adalah fardhu/wajib sekali seumur hidup bagi yang mampu, menurut pendapat terkuat dari Mazhab Syafi'i dan Hambali. Menyiapkan bekal ilmu fiqih umrah yang benar adalah syarat diterimanya ibadah (maqbul)."
    ]
  },
  {
    pageNumber: 3,
    chapterTitle: "Bab II: Rukun & Wajib Umrah",
    paragraphs: [
      "Jamaah yang dirahmati Allah, sangat penting untuk membedakan antara Rukun Umrah dan Wajib Umrah, karena keduanya memiliki konsekuensi hukum yang sangat berbeda terhadap keabsahan ibadah kita.",
      "1. RUKUN UMRAH: Sesuatu yang harus dikerjakan dalam umrah dan tidak boleh ditinggalkan. Jika ditinggalkan, maka umrahnya batal (tidak sah) dan tidak bisa diganti dengan denda (dam). Rukun umrah meliputi: Niat Ihram di Miqat, Thawaf, Sa'i, Tahallul, dan Tertib.",
      "2. WAJIB UMRAH: Ketentuan yang wajib dikerjakan, namun jika ditinggalkan karena udzur atau ketidaktahuan, ibadah umrah tetap sah tetapi jamaah wajib membayar denda (dam) berupa menyembelih seekor kambing atau memberi makan orang miskin. Wajib umrah adalah: Mengambil niat ihram dari miqat makani dan menjaga diri dari larangan ihram."
    ]
  },
  {
    pageNumber: 4,
    chapterTitle: "Bab III: Panduan Memakai Ihram & Miqat",
    arabicQuote: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً",
    arabicTranslation: "Aku penuhi panggilan-Mu, ya Allah, untuk melaksanakan ibadah umrah.",
    paragraphs: [
      "Pakaian ihram untuk laki-laki berupa dua lembar kain putih tak berjahit (satu disarungkan di pinggang, satu disandangkan di bahu). Bagi wanita, ihram adalah pakaian muslimah yang menutup seluruh aurat (kecuali wajah dan kedua telapak tangan).",
      "Sebelum mengenakan pakaian ihram, disunnahkan untuk mandi besar (mandi jinabah), memotong kuku, merapikan jenggot, dan memakai wewangian di tubuh (bukan di kain ihram).",
      "Niat umrah dilakukan di Miqat Makani (batas tempat dimulainya ibadah). Bagi jamaah Al-Haq gelombang pertama yang mendarat di Madinah, miqatnya adalah di Bir Ali (Dzulhulaifah). Bagi gelombang kedua yang mendarat di Jeddah, miqat dilakukan di pesawat di atas Yalamlam atau setibanya di Bandara King Abdul Aziz."
    ]
  },
  {
    pageNumber: 5,
    chapterTitle: "Bab IV: Tata Cara Thawaf di Baitullah",
    arabicQuote: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    arabicTranslation: "Dengan nama Allah, dan Allah Maha Besar.",
    paragraphs: [
      "Thawaf adalah mengitari Ka'bah sebanyak 7 kali putaran dengan arah berlawanan jarum jam (Ka'bah berada di sebelah kiri jamaah). Thawaf dimulai dan diakhiri di garis sejajar Hajar Aswad.",
      "Syarat sah Thawaf: Suci dari hadats besar/kecil (wajib berwudhu), menutup aurat secara sempurna, dan dilakukan di dalam Masjidil Haram.",
      "Selama Thawaf, jamaah dianjurkan memperbanyak dzikir, doa, dan membaca Al-Qur'an. Pada putaran antara Rukun Yamani dan Hajar Aswad, disunnahkan membaca doa sapu jagat: 'Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adzaban-nar'."
    ]
  },
  {
    pageNumber: 6,
    chapterTitle: "Bab V: Panduan Sa'i & Tahallul",
    arabicQuote: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ",
    arabicTranslation: "Sesungguhnya bukit Shafa dan bukit Marwah adalah sebagian dari syiar Allah. (QS. Al-Baqarah: 158)",
    paragraphs: [
      "Sa'i adalah berjalan kaki antara bukit Shafa dan bukit Marwah sebanyak 7 kali perjalanan. Perjalanan dari Shafa ke Marwah dihitung 1 kali, dan dari Marwah kembali ke Shafa dihitung kali ke-2.",
      "Ibadah Sa'i dimulai di bukit Shafa dan diakhiri di bukit Marwah. Di antara pilar hijau (lampu hijau), jamaah laki-laki disunnahkan untuk berlari-lari kecil (ramal) sambil mengagungkan asma Allah.",
      "Tahallul adalah penutup rangkaian umrah yang ditandai dengan memotong minimal 3 helai rambut. Bagi wanita, dipotong sepanjang ruas jari. Bagi laki-laki, lebih utama untuk mencukur gundul (halq). Setelah tahallul, seluruh larangan ihram menjadi halal kembali."
    ]
  }
];

export const REELS_VIDEOS: ReelVideo[] = [
  {
    id: "reel-1",
    title: "Tata Cara Ihram Laki-laki & Wanita",
    category: "Tata Cara Ihram",
    thumbnail: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=600",
    duration: "01:30",
    views: "12.4K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "reel-2",
    title: "Praktik Thawaf & Posisi Garis Hajar Aswad",
    category: "Praktik Tawaf",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    duration: "02:15",
    views: "9.8K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "reel-3",
    title: "Panduan Sa'i Antara Shafa & Marwah",
    category: "Praktik Sa'i",
    thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600",
    duration: "01:45",
    views: "8.1K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "reel-4",
    title: "Checklist Persiapan Keberangkatan Bandara",
    category: "Persiapan Keberangkatan",
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
    duration: "03:00",
    views: "15.2K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "reel-5",
    title: "Tips Menjaga Hidrasi & Kesehatan di Arab Saudi",
    category: "Tips Menjaga Kesehatan di Tanah Suci",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    duration: "02:00",
    views: "7.3K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "reel-6",
    title: "Aturan Barang Bawaan Koper Kabasi vs Kabin",
    category: "Panduan Barang Bawaan Jamaah",
    thumbnail: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=600",
    duration: "02:40",
    views: "11.1K Views",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const DEPARTURE_GROUPS: DepartureGroupPoster[] = [
  {
    id: "group-1",
    groupName: "Kelompok Ar-Rahman",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=500",
    quota: "Penuh",
    status: "Penuh",
    departureDate: "Agustus 2026"
  },
  {
    id: "group-2",
    groupName: "Kelompok Al-Mumin",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=500",
    quota: "Sisa 5 Kursi",
    status: "Sisa Kursi",
    departureDate: "Oktober 2026"
  },
  {
    id: "group-3",
    groupName: "Kelompok Al-Muhaimin",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500",
    quota: "Sisa 12 Kursi",
    status: "Sisa Kursi",
    departureDate: "Desember 2026"
  },
  {
    id: "group-4",
    groupName: "Kelompok Al-Aziz",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=500",
    quota: "Tersedia",
    status: "Segera Dibuka",
    departureDate: "Februari 2027"
  },
  {
    id: "group-5",
    groupName: "Kelompok Al-Jabar",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=500",
    quota: "Tersedia",
    status: "Segera Dibuka",
    departureDate: "Safar 1448H / Juli 2026"
  }
];

export const INFOGRAPHICS_DATA: InfographicItem[] = [
  {
    id: "info-1",
    title: "Alur Pelaksanaan Umrah",
    category: "alur",
    description: "Siklus lengkap perjalanan ibadah umrah dari awal hingga akhir secara tertib sesuai tuntunan Rasulullah SAW.",
    points: [
      "1. Mandi sunnah ihram, mengenakan pakaian ihram di Miqat.",
      "2. Shalat sunnah ihram 2 rakaat dan berniat umrah (Nawaitul 'umrata... ).",
      "3. Melafalkan kalimat Talbiyah sepanjang perjalanan menuju Makkah.",
      "4. Memasuki Masjidil Haram dengan kaki kanan dan membaca doa masuk masjid.",
      "5. Melaksanakan Thawaf sebanyak 7 putaran dimulai dari Hajar Aswad.",
      "6. Shalat sunnah Thawaf 2 rakaat di belakang Maqam Ibrahim dan meminum air Zamzam.",
      "7. Melaksanakan Sa'i antara Shafa dan Marwah sebanyak 7 kali perjalanan.",
      "8. Mengakhiri ibadah dengan Tahallul (mencukur atau memotong rambut)."
    ]
  },
  {
    id: "info-2",
    title: "Alur Pelaksanaan Haji",
    category: "alur",
    description: "Alur tahapan ibadah haji Tamattu' mulai dari persiapan ihram tanggal 8 Dzulhijjah hingga Thawaf Wada'.",
    points: [
      "1. Ihram Haji (8 Dzulhijjah) di hotel makkah, lalu bertolak menuju Mina.",
      "2. Wukuf di Arafah (9 Dzulhijjah) dari tergelincir matahari hingga maghrib.",
      "3. Mabit di Muzdalifah (malam 10 Dzulhijjah) mencari batu kerikil.",
      "4. Melontar Jumrah Aqabah (10 Dzulhijjah) dilanjutkan Tahallul Awal.",
      "5. Mabit di Mina (11, 12, 13 Dzulhijjah) dan melontar tiga Jumrah (Ula, Wustha, Aqabah).",
      "6. Thawaf Ifadhah, Sa'i Haji di Masjidil Haram, dilanjutkan Tahallul Tsani.",
      "7. Thawaf Wada' sebagai penutup perpisahan sebelum meninggalkan kota Makkah."
    ]
  },
  {
    id: "info-3",
    title: "Checklist Dokumen Jamaah",
    category: "checklist",
    description: "Kelengkapan berkas administratif wajib yang harus diserahkan ke sekretariat PPIU Al-Haq.",
    points: [
      "1. Paspor asli yang masih berlaku minimal 8 bulan sebelum keberangkatan dengan nama minimal 2 kata.",
      "2. Fotokopi Kartu Keluarga (KK) dan Kartu Tanda Penduduk (KTP) yang jelas.",
      "3. Pasfoto terbaru ukuran 4x6 sebanyak 4 lembar dengan latar belakang putih, fokus wajah 80%.",
      "4. Buku Nikah asli bagi suami istri yang berangkat bersama.",
      "5. Akta Kelahiran asli bagi anak-anak di bawah umur atau wanita di bawah 45 tahun tanpa mahram.",
      "6. Sertifikat Vaksin Meningitis asli (Kartu Kuning ICV) yang masih valid."
    ]
  },
  {
    id: "info-4",
    title: "Barang Wajib Dibawa",
    category: "checklist",
    description: "Perlengkapan esensial yang wajib dimasukkan ke dalam tas kabin maupun koper bagasi.",
    points: [
      "1. Pakaian ihram cadangan (minimal 2 set untuk pria, mukena/gamis ihram untuk wanita).",
      "2. Buku Panduan Manasik Digital PPIU Al-Haq di smartphone atau versi cetak.",
      "3. Sandal jepit yang nyaman dan kantong sandal untuk dibawa masuk ke dalam masjid.",
      "4. Pelembab kulit (moisturizer), petroleum jelly, lip balm, kacamata hitam, payung kecil.",
      "5. Obat-obatan pribadi cadangan untuk komorbiditas, obat lambung, flu, batuk, dan vitamin.",
      "6. Powerbank berkapasitas aman (maksimal 20.000 mAh) untuk diletakkan di tas kabin."
    ]
  },
  {
    id: "info-5",
    title: "Panduan Kesehatan Jamaah",
    category: "kesehatan",
    description: "Saran praktis tim medis PPIU Al-Haq untuk menjaga stamina dan vitalitas selama di tanah suci.",
    points: [
      "1. Minum air Zamzam atau air mineral minimal 3 liter per hari untuk mencegah dehidrasi parah.",
      "2. Gunakan semprotan air wajah secara berkala saat berada di bawah terik matahari outdoor.",
      "3. Hindari paparan langsung matahari pukul 11.00 - 15.00 dengan payung dan kacamata anti-UV.",
      "4. Selalu gunakan pelembab kulit di area sela paha (bagi pria) untuk mencegah lecet akibat ihram.",
      "5. Istirahat yang cukup di hotel, hindari memaksakan ibadah sunnah jika fisik terasa sangat lelah.",
      "6. Segera hubungi tim medis pendamping Al-Haq jika merasakan pusing ekstrem atau demam."
    ]
  },
  {
    id: "info-6",
    title: "Tips Adaptasi Cuaca Arab Saudi",
    category: "kesehatan",
    description: "Perbedaan iklim subtropis kering memerlukan adaptasi tubuh yang tepat agar ibadah tetap nyaman.",
    points: [
      "1. Cuaca Panas (Musim Panas): Suhu bisa mencapai 45°C - 50°C. Wajib memakai payung, kacamata, masker basah.",
      "2. Cuaca Dingin (Musim Dingin): Suhu Madinah malam hari bisa turun hingga 10°C. Siapkan jaket tebal dan kaos kaki hangat.",
      "3. Kelembaban Rendah: Udara sangat kering menyebabkan bibir pecah-pecah dan mimisan. Oleskan lip balm dan basahi hidung.",
      "4. Badai Pasir: Jika terjadi badai debu, segera masuk ke dalam ruangan atau gunakan masker medis berlapis."
    ]
  },
  {
    id: "info-7",
    title: "Larangan Selama Ihram",
    category: "panduan",
    description: "Hal-hal yang mutlak diharamkan bagi jamaah sejak melafalkan niat ihram hingga Tahallul.",
    points: [
      "1. Bagi Laki-laki: Dilarang memakai pakaian berjahit yang membentuk lekuk tubuh, dan menutup kepala.",
      "2. Bagi Wanita: Dilarang menutup wajah (cadar/niqab) dan mengenakan sarung tangan yang menutup jemari.",
      "3. Bagi Keduanya: Dilarang memakai wewangian di tubuh atau kain ihram setelah berniat.",
      "4. Dilarang mencukur, mencabut rambut/bulu badan, memotong kuku, dan membunuh hewan buruan.",
      "5. Dilarang mengadakan aqad nikah, bercumbu, bersetubuh (rafats), bertengkar (jidal), dan mencaci maki.",
      "6. Melanggar salah satu larangan di atas mewajibkan jamaah membayar fidyah/dam sesuai jenis pelanggaran."
    ]
  },
  {
    id: "info-8",
    title: "Doa-doa Penting Selama Perjalanan",
    category: "panduan",
    description: "Kumpulan doa-doa terpilih yang sangat dianjurkan dihafal atau dibaca selama perjalanan umrah.",
    points: [
      "1. Doa Keluar Rumah: 'Bismillahi tawakkaltu 'alallah la hawla wa la quwwata illa billah'.",
      "2. Doa Naik Kendaraan: 'Subhanal-ladzi sakhkhara lana hadza wa ma kunna lahu muqrinin...'.",
      "3. Lafal Talbiyah: 'Labbaykallahumma labbayk, labbayka la syarika laka labbayk...'.",
      "4. Doa Masuk Kota Makkah: Memohon perlindungan dan keamanan di tanah haram.",
      "5. Doa Melihat Ka'bah: 'Allahumma Antas-Salam wa Minkas-Salam fa hayyina Rabbana bis-Salam'.",
      "6. Doa di Antara Rukun Yamani & Hajar Aswad: Doa sapu jagat (QS. Al-Baqarah: 201)."
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Hj. Siti Aminah",
    age: 58,
    origin: "Bandung",
    package: "Umrah Reguler Premium 2025",
    rating: 5,
    review: "Alhamdulillah perjalanan umrah saya bersama PPIU Al-Haq berjalan sangat lancar. Pembimbing manasik ustadznya sangat sabar membimbing kami yang lansia ini. Aplikasi digitalnya sangat membantu kami belajar doa kapan saja sebelum terbang.",
    videoThumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-2",
    name: "H. Muhammad Ridwan",
    age: 42,
    origin: "Jakarta Selatan",
    package: "Haji Khusus 2024",
    rating: 5,
    review: "Profesionalitas Al-Haq luar biasa. Hotel di Makkah dan Madinah sangat dekat dengan masjid, makanan cocok di lidah, dan tim kesehatan sigap 24 jam. Manasik teoritis dan simulasi praktisnya membuat kami paham betul rangkaian ibadah.",
    videoThumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-3",
    name: "dr. Amanda Syahputri",
    age: 34,
    origin: "Sumedang",
    package: "Umrah Syawal 1446H",
    rating: 5,
    review: "Layanan digital PPIU Al-Haq sangat mutakhir. Buku bimbingan digital di websitenya interaktif, ada checklist persiapan online yang membuat packing barang jadi teratur. Sangat recommended bagi jamaah muda maupun tua!",
    videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
  }
];

export const DOCUMENTATION_GALLERY: DocumentationItem[] = [
  {
    id: "doc-1",
    title: "Pelepasan Jamaah Rombongan Al-Haq di Bandara",
    category: "keberangkatan",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    description: "Prosesi pelepasan jamaah Umrah Ramadhan di terminal 3 Bandara Internasional Soekarno-Hatta."
  },
  {
    id: "doc-2",
    title: "Bimbingan Manasik Teori di Aula Pusat",
    category: "manasik",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description: "Penyampaian materi regulasi, kebijakan terbaru, serta fiqih haji-umrah oleh pembimbing bersertifikat Kemenag."
  },
  {
    id: "doc-3",
    title: "Simulasi Praktik Thawaf Outdoor",
    category: "manasik",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    description: "Praktik mengitari replika Ka'bah secara berkelompok di bawah bimbingan ustadz pendamping PPIU Al-Haq."
  },
  {
    id: "doc-4",
    title: "Pembinaan Akhlak Jamaah Pasca Umrah",
    category: "pembinaan",
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    description: "Pertemuan rutin kajian alumni jamaah Al-Haq guna menjaga kelestarian mabrurnya ibadah."
  },
  {
    id: "doc-5",
    title: "Kunjungan Silaturahmi di Kantor Pusat Al-Haq",
    category: "kantor",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "Layanan konsultasi tatap muka bagi calon jamaah baru di Jl. Aha Nasution No. 125, Bandung."
  },
  {
    id: "doc-6",
    title: "Jamaah Al-Haq Beribadah Khusyuk di Depan Ka'bah",
    category: "tanah_suci",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",
    description: "Momen haru jamaah Al-Haq sesaat setelah menyelesaikan Thawaf Umrah di Masjidil Haram, Makkah."
  },
  {
    id: "doc-7",
    title: "Ziarah Rombongan Al-Haq di Masjid Nabawi",
    category: "tanah_suci",
    imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=800",
    description: "Foto bersama jamaah di pelataran payung raksasa Masjid Nabawi, Madinah Al-Munawwarah."
  },
  {
    id: "doc-8",
    title: "Praktik Penggunaan Kain Ihram yang Benar",
    category: "manasik",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    description: "Bimbingan teknis melilitkan kain ihram bebas jahitan bagi jamaah pria agar kuat dan sah."
  }
];

export const ORGANIGRAM_STRUCTURE = {
  role: "KOMISARIS",
  name: "Dr. H. Asep Iwan Setiawan, S.Sos.I., M.Ag.",
  subRoles: [
    {
      role: "DIREKTUR PPIU",
      name: "Saiful Haq",
      subRoles: [
        {
          role: "WAKIL KETUA",
          name: "Reza Maulana",
          subRoles: [
            {
              role: "SEKRETARIS",
              name: "Firyal Nurawaliya Wafda Al Ma'arif"
            },
            {
              role: "BENDAHARA",
              name: "Kireisha Rizqy Khaira Putri"
            },
            {
              role: "KEPALA DIVISI BIDANG MANASIK",
              name: "Salwa Qolbunisa"
            },
            {
              role: "KEPALA DIVISI PELAYANAN JAMA'AH & ADMINISTRASI",
              name: "khairil akbar djailani"
            },
            {
              role: "KEPALA DIVISI OPERASIONAL, HUMAS & TRANSPORTASI",
              name: "Hud Nur Muslim"
            }
          ]
        }
      ]
    }
  ]
};
