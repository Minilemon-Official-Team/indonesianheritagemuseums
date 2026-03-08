import { useParams, Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { Share2, Check, ArrowLeft, MapPin } from 'lucide-react';

const CDN_FALLBACK = 'https://res.cloudinary.com/dnbq1z8lx/image/upload';

interface ObjectItem {
    id: number;
    name: string;
    description: string;
    image?: string;
}

interface Zone {
    name: string;
    objects: ObjectItem[];
}

// Data koleksi museum - 44 benda dalam 10 zona (sama seperti AutoGuide)
const museumData: Zone[] = [
    {
        name: 'Welcome to Indonesia Herritage Museum',
        objects: [
            {
                id: 1,
                name: 'Pembukaan',
                image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/IHM1-1024x576_1_yhi1lk.webp',
                description: 'Indonesian heritage Museum merupakan museum warisan budaya Indonesia yang mempunyai koleksi warisan budaya dari seluruh wilayah Indonesia, berdiri sejak tahun 2010, Indonesian heritage Museum juga merupakan pelopor museum berteknologi Augmented Reality di Indonesia, terdapat 17 zona yang mewakili wilayah di Indonesia, yang menyimpan benda benda bersejarah dari seluruh suku di tanah air.',
            },
            {
                id: 2,
                name: 'Download AR',
                image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772931496/IHM2-768x432_w8r2nn.webp',
                description: 'Silakan kepada para pengunjung untuk dapat mengunduh aplikasi Augmented Reality di Google Play Store dan juga Autoself Guided Tour yang dapat diakses melalui website untuk dapat memudahkan para pengunjung selama berada di Indonesian Heritage Museum.',
            },
        ],
    },
    {
        name: 'AUSTRONESIA',
        objects: [
            { id: 3, name: 'Kapak Corong', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/1_eulnh0.webp', description: 'Kapak corong merupakan kapak yang digunakan oleh masyarakat zaman dahulu untuk bercocok tanam, bentuknya menyerupai cangkul kuno untuk mengolah tanah agar menghasilkan bahan makanan terutama umbi-umbian. Kapak ini berasal dari Kebudayaan Dongson di Vietnam Utara dan ditemukan di pedalaman Jawa.' },
            { id: 4, name: 'Gelang Kuno', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/2_dsdv00.webp', description: 'Gelang kuno digunakan sebagai aksesoris sekaligus penanda status sosial. Gelang batu yang besar dan berat menunjukkan pemakainya berasal dari status sosial tinggi dan tidak perlu melakukan pekerjaan berat.' },
            { id: 5, name: 'Patung Kepala', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/3_ptqqgo.webp', description: 'Patung kuno berbentuk kepala manusia yang digunakan dalam ritual animisme dan dinamisme untuk memuja roh nenek moyang. Patung ini ditemukan di pesisir Pulau Jawa.' },
            { id: 6, name: 'Figur Suku Tua', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/4_xgsw8x.webp', description: 'Figur ini menggambarkan suku-suku tua pada masa lampau yang telah hilang dari peradaban. Pada masa Austronesia terdapat banyak suku dengan kemampuan seni dan pertanian yang tinggi.' },
            { id: 7, name: 'Kapak Candrasa', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/5_mytqbo.webp', description: 'Kapak Candrasa atau kapak sepatu digunakan untuk ritual adat masyarakat animisme. Terbuat dari perunggu dan berasal dari kebudayaan Dongson di Vietnam Utara.' },
        ],
    },
    {
        name: 'MAJAPAHIT',
        objects: [
            { id: 8, name: 'Figur Terakota', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/6_xkbmz2.webp', description: 'Figur terakota dari masa Majapahit yang dibuat dari tanah liat yang dibakar dan dibentuk sebagai peralatan maupun figur tokoh penting pada masa kerajaan.' },
            { id: 9, name: 'Candi Bajang Ratu Terakota', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/7_sufact.webp', description: 'Gerbang Bajang Ratu di Trowulan Mojokerto merupakan peninggalan Kerajaan Majapahit yang berjaya pada abad ke-13 di masa Hayam Wuruk dan Mahapatih Gajah Mada.' },
            { id: 10, name: 'Celengan Kuno', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/8_jrg9rn.webp', description: 'Celengan berbentuk babi dari terakota yang ditemukan di Trowulan. Digunakan sebagai pembawa berkah bagi penghuni rumah serta suvenir bagi kerabat.' },
            { id: 11, name: 'Cermin Puteri Tembaga', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/9_vjjlvi.webp', description: 'Cermin tembaga yang digunakan anggota keluarga kerajaan untuk berias diri. Kualitas tembaga yang baik memberikan pantulan yang jernih.' },
            { id: 12, name: 'Cetakan Emas', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/10_aeazi5.webp', description: 'Cetakan emas digunakan untuk mencetak emas cair yang dijadikan alat tukar perdagangan pada masa Majapahit.' },
        ],
    },
    {
        name: 'JAWA TIMUR',
        objects: [
            { id: 13, name: 'Tempat Obat Berundak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/11_mcazsc.webp', description: 'Kotak obat bertingkat yang digunakan tabib untuk membawa berbagai obat herbal ketika mengunjungi pasien.' },
            { id: 14, name: 'Miniatur Karapan Sapi', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/12_ajoeyf.webp', description: 'Karapan sapi merupakan tradisi khas Madura yang awalnya dibuat untuk menghibur seorang pangeran dan kemudian menjadi budaya populer masyarakat.' },
            { id: 15, name: 'Loro Blonyo Probolinggo', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/12_ajoeyf.webp', description: 'Patung pasangan suami istri yang melambangkan keharmonisan rumah tangga dan kebahagiaan keluarga.' },
            { id: 16, name: 'Hiasan Sampiran Tirai', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/13_klxw2q.webp', description: 'Hiasan berbentuk peri laut yang berfungsi menahan bambu pada tirai dan melambangkan keberkahan dalam rumah.' },
        ],
    },
    {
        name: 'JAWA TENGAH',
        objects: [
            { id: 17, name: 'Genteng Wuwungan', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/15_kcsn7n.webp', description: 'Hiasan di puncak atap rumah Jawa kuno yang dipercaya membawa keberkahan dan melambangkan peran ibu dalam keluarga.' },
            { id: 18, name: 'Tombak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/16_y01t1j.webp', description: 'Tombak keraton dahulu digunakan sebagai senjata prajurit kerajaan dan kini menjadi simbol status kerabat keraton.' },
            { id: 19, name: 'Topeng Drama', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/17_yyq57m.webp', description: 'Topeng drama kontemporer yang menggambarkan kritik sosial terhadap elite pemerintah melalui pertunjukan teater.' },
            { id: 20, name: 'Topeng Harimau', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/18_ewehkf.webp', description: 'Topeng yang menggambarkan Singo Barong dan harimau dalam kisah Raja Klono Sewandono.' },
            { id: 21, name: 'Tempat Sirih', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/19_d56o9w.webp', description: 'Wadah sirih masyarakat Jawa kuno yang melambangkan keindahan dan keagungan serta digunakan untuk kesehatan gigi.' },
        ],
    },
    {
        name: 'JAWA BARAT',
        objects: [
            { id: 22, name: 'Dadu Judi', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/20_fb2wjy.webp', description: 'Dadu besar yang digunakan masyarakat peranakan Jawa-Cina untuk berjudi sekaligus meramal nasib perdagangan.' },
            { id: 23, name: 'Blawong', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921569/21_jwfsfq.webp', description: 'Tempat menggantung keris dengan ornamen perpaduan budaya Cina dan Jawa Barat.' },
            { id: 24, name: 'Kaca Rias Keraton', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/22_w70vfg.webp', description: 'Kaca rias milik keluarga kerajaan Jawa Barat yang digunakan untuk menyimpan riasan dan perhiasan.' },
            { id: 25, name: 'Topeng Buto Terong', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/23_jwjk5s.webp', description: 'Topeng yang menggambarkan raksasa berhidung besar yang membantu pembangunan kerajaan namun meminta hadiah perempuan tercantik.' },
        ],
    },
    {
        name: 'SULAWESI',
        objects: [
            { id: 26, name: 'Kendi Susu', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/24_inr60o.webp', description: 'Kendi berbentuk payudara wanita yang melambangkan kesuburan serta digunakan sebagai wadah air minum.' },
            { id: 27, name: 'Rangda', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/25_xelxrv.webp', description: 'Rangda adalah tokoh dalam mitologi Bali yang melambangkan kekuatan jahat dan malapetaka.' },
            { id: 28, name: 'Patung Singaraja', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/26_n0uokg.webp', description: 'Patung yang menjadi simbol keselamatan dan sering dijadikan ikon penyambutan di fasilitas umum di Bali.' },
            { id: 29, name: 'Topeng Tua', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/27_gssuzt.webp', description: 'Topeng yang menggambarkan sosok tetua bijaksana dan digunakan dalam tarian ritual masyarakat Bali.' },
        ],
    },
    {
        name: 'KALIMANTAN',
        objects: [
            { id: 30, name: 'Kursi Singgasana Raja', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921570/28_no6f7w.webp', description: 'Singgasana kerajaan Buleleng dengan motif burung merak yang melambangkan keagungan.' },
            { id: 31, name: 'Patung Garuda Wisnu Kencana', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921627/29_wgmwv4.webp', description: 'Patung yang menggambarkan Dewa Wisnu menunggang Garuda sebagai simbol kebesaran Bali.' },
        ],
    },
    {
        name: 'PAPUA',
        objects: [
            { id: 32, name: 'Jaran Kamput', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921640/30_c3wdlb.webp', description: 'Kuda mitologi Lombok yang melambangkan kekuatan dan digunakan dalam tradisi khitanan.' },
            { id: 33, name: 'Kuda Kemanten', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921658/31_jgdkn4.webp', description: 'Simbol pesta pernikahan masyarakat Lombok yang menggambarkan kebahagiaan pasangan pengantin.' },
        ],
    },
    {
        name: 'WAYANG',
        objects: [
            { id: 34, name: 'Patung Penjaga Desa', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921658/31_jgdkn4.webp', description: 'Patung penjaga yang ditempatkan di batas desa untuk melindungi masyarakat dari niat jahat.' },
            { id: 35, name: 'Sangkar Burung Raja', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921701/33_qnkpcp.webp', description: 'Sangkar burung milik raja atau bangsawan dengan ornamen naga sebagai simbol status tinggi.' },
            { id: 36, name: 'Topeng Drama Sasak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/34_sjqevd.webp', description: 'Topeng yang digunakan dalam pertunjukan drama masyarakat Sasak di Lombok.' },
            { id: 37, name: 'Moko', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/35_nkv7ft.webp', description: 'Alat musik tradisional NTT yang dimainkan dalam upacara adat dan pernikahan.' },
        ],
    },
    {
        name: 'CHENGHO',
        objects: [
            { id: 38, name: 'Patung Yene', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/36_tpsjb7.webp', description: 'Patung batu kuno yang digunakan dalam ritual persembahan kepada dewa.' },
            { id: 39, name: 'Pedang Surik', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/37_sijhcr.webp', description: 'Pedang panjang masyarakat NTT yang menjadi simbol kekuatan.' },
            { id: 41, name: 'Haikara Jangga', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/38_lc4tiu.webp', description: 'Sisir kepala bangsawan NTT yang melambangkan keanggunan dan status tinggi.' },
            { id: 42, name: 'Cincin Kawin', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/39_xckkol.webp', description: 'Cincin dengan motif hewan yang melambangkan doa dan harapan baik dalam pernikahan.' },
            { id: 43, name: 'Pemarut Kelapa', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/40_yiv2pz.webp', description: 'Alat tradisional masyarakat Batak untuk memarut kelapa dengan cara diduduki.' },
            { id: 44, name: 'Rumbi', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/41_l52blz.webp', description: 'Wadah penyimpanan beras dari akar kelapa yang kuat dan dapat bertahan ratusan tahun.' },
            { id: 45, name: 'Kitab Pustaha Lak Lak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/42_jesese.webp', description: 'Kitab mantra pengobatan tradisional masyarakat Batak yang dibuat dari kulit pohon.' },
            { id: 46, name: 'Topeng Makyong', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921702/43_itlsvb.webp', description: 'Topeng yang digunakan dalam tarian panen raya masyarakat Melayu dan Batak.' },
            { id: 47, name: 'Jendela Batak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921703/44_wlrupk.webp', description: 'Jendela rumah adat Batak dengan ukiran yang melambangkan perlindungan orang tua terhadap keluarga.' },
        ],
    },
    {
        name: 'SULAWESI',
        objects: [
            { id: 48, name: 'Pintu Makam', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921703/45_xhucv5.webp', description: 'Pintu makam Toraja dengan ukiran kerbau sebagai simbol kendaraan menuju surga.' },
            { id: 49, name: 'Patung Tao Tao', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921703/46_uxxswm.webp', description: 'Patung kayu yang melambangkan arwah orang yang dimakamkan di tebing Toraja.' },
            { id: 50, name: 'Topeng Kematian', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921719/47_nkly4n.webp', description: 'Topeng ritual pemakaman masyarakat Toraja untuk bangsawan.' },
            { id: 51, name: 'Tedong Bonga', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921719/48_kl6fuq.webp', description: 'Kerbau putih langka yang digunakan dalam upacara pemakaman adat Toraja.' },
            { id: 52, name: 'Koin Syilling Yassin', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921719/49_gzv87y.webp', description: 'Koin emas dengan ukiran surat Yasin yang digunakan sebagai alat tukar di kerajaan Gowa.' },
        ],
    },
    {
        name: 'KALIMANTAN',
        objects: [
            { id: 53, name: 'Patung Pantak Pandagi', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/50_vcsxuf.webp', description: 'Patung penjaga desa masyarakat Dayak yang terbuat dari kayu ulin.' },
            { id: 54, name: 'Penutup Botol', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921564/51_mj7lan.webp', description: 'Penutup botol ukiran khas Dayak yang dibuat dari labu untuk bekal minum saat berburu.' },
            { id: 55, name: 'Kursi Kepala Suku', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/52_s0lrnr.webp', description: 'Kursi kepala suku Dayak berbentuk kura-kura yang melambangkan umur panjang dan kewaspadaan.' },
            { id: 56, name: 'Sapundu', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/53_grcw50.webp', description: 'Tiang gantungan hewan buruan dalam tradisi Dayak.' },
        ],
    },
    {
        name: 'PAPUA',
        objects: [
            { id: 57, name: 'Perisai Asmat', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/54_i4vjvc.webp', description: 'Perisai tradisional suku Asmat yang dihias ukiran keluarga dan diberkati dengan darah ritual.' },
            { id: 58, name: 'Patung Kewenak', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/55_xbkulv.webp', description: 'Patung kayu tinggi yang menggambarkan aktivitas sehari-hari masyarakat Papua.' },
            { id: 59, name: 'Patung Kewenak Asmat', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/56_ccijk3.webp', description: 'Patung ukiran kayu Asmat yang menggambarkan kehidupan masyarakat setempat.' },
            { id: 60, name: 'Wayang Golek', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/57_eneter.webp', description: 'Wayang kayu khas Jawa Barat yang dikenal sejak abad ke-16.' },
            { id: 61, name: 'Wayang Kulit', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/59_rxnx4z.webp', description: 'Gunungan wayang yang menjadi simbol pembuka dan penutup pertunjukan.' },
            { id: 62, name: 'Wayang Pegunungan', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/59_rxnx4z.webp', description: 'Gunungan wayang yang menjadi simbol pembuka dan penutup pertunjukan.' },
            { id: 63, name: 'Wayang Potehi', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/60_l9zsul.webp', description: 'Wayang boneka tangan dari tradisi Tionghoa yang berkembang di Nusantara.' },
        ],
    },
    {
        name: 'BATIK',
        objects: [
            { id: 64, name: 'Batik Parang Kelitik', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/61_hmb71v.webp', description: 'Motif batik halus yang melambangkan kelembutan dan kebijaksanaan.' },
            { id: 65, name: 'Batik Cap', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/62_w6kwdz.webp', description: 'Jenis batik yang dibuat menggunakan canting cap dari tembaga.' },
            { id: 66, name: 'Batik 3 Negeri', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921567/63_sq1l7y.webp', description: 'Batik dengan perpaduan warna merah Tionghoa, biru Belanda, dan coklat Jawa.' },
            { id: 67, name: 'Loro Blonyo Jogja', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/64_aftwuu.webp', description: 'Patung pasangan suami istri yang melambangkan keharmonisan rumah tangga.' },
        ],
    },
    {
        name: 'CHENGHO',
        objects: [
            { id: 68, name: 'Siapakah Laksamana Chengho', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/65_qj3dhu.webp', description: 'Cheng Ho adalah pelaut dan penjelajah Tiongkok yang melakukan ekspedisi ke Nusantara dan menyebarkan pengaruh Islam serta ilmu pengetahuan.' },
            { id: 69, name: 'Batik Cina', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/66_tqk8wj.webp', description: 'Teknik batik dari Tiongkok dengan warna merah sebagai ciri khas.' },
            { id: 70, name: 'Patung Naga', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921568/67_uv0okn.webp', description: 'Patung naga dari kayu Quan Zhi yang melambangkan kekuatan dan keberuntungan.' },
            { id: 71, name: 'Keramik Cina', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921564/68_qv6wms.webp', description: 'Keramik hadiah dari ekspedisi Cheng Ho kepada penguasa daerah di Nusantara.' },
        ],
    },
    {
        name: 'SINGOSARI',
        objects: [
            { id: 72, name: 'Patung Ganesa', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921565/69_rvq7f3.webp', description: 'Patung Dewa Ganesha yang berkepala gajah dan bertubuh manusia sebagai simbol kebijaksanaan.' },
        ],
    },
];

const closingZone: Zone = {
    name: 'PENUTUP',
    objects: [
        { id: 73, name: 'Penutup', image: 'https://res.cloudinary.com/dnbq1z8lx/image/upload/v1772921566/70_orr2oj.webp', description: 'Penutup perjalanan Indonesian Heritage Museum yang menampilkan berbagai koleksi budaya Nusantara. Terima kasih atas kunjungan Anda dan salam budaya.' },
    ],
};

// Function untuk mendapatkan image
const getObjectImage = (object: ObjectItem) => {
    if (object.image && object.image !== '') {
        return object.image;
    }
    return `${CDN_FALLBACK}${object.id}.webp`;
};

// Helper function untuk mencari object berdasarkan ID
const findObjectById = (id: number): { object: ObjectItem | null; zone: string } => {
    // Search in main museum data
    for (const zone of museumData) {
        const found = zone.objects.find(obj => obj.id === id);
        if (found) {
            return { object: found, zone: zone.name };
        }
    }
    // Search in closing zone
    const closingFound = closingZone.objects.find(obj => obj.id === id);
    if (closingFound) {
        return { object: closingFound, zone: closingZone.name };
    }
    return { object: null, zone: '' };
};

export default function ObjectPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [copied, setCopied] = useState(false);

    const objectId = id ? parseInt(id, 10) : null;
    const { object, zone } = objectId ? findObjectById(objectId) : { object: null, zone: '' };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleShare = async () => {
        const shareUrl = `${window.location.origin}/object/${objectId}`;
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!object) {
        return (
            <div className="bg-[#F4EFE6] min-h-screen pt-20 pb-12">
                <div className="max-w-[1200px] mx-auto px-4 py-12 text-center">
                    <h1 className="font-['Cinzel'] text-3xl text-[#8C6B3E] mb-4">
                        Object Not Found
                    </h1>
                    <p className="text-[#5A5A5A] mb-8">
                        The object with ID {id} was not found in our collection.
                    </p>
                    <Link
                        to="/auto-guide"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F4EFE6] min-h-screen pt-20 pb-12">
            {/* Breadcrumb */}
            <div className="bg-[#E7DED0] py-3 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-[#8C6B3E] hover:underline">Home</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <Link to="/auto-guide" className="text-[#8C6B3E] hover:underline">Auto Guide</Link>
                        <span className="text-[#5A5A5A]">/</span>
                        <span className="text-[#5A5A5A]">{object.name}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative bg-[#8C6B3E] text-white py-12 px-4">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-2 text-sm mb-2 opacity-80">
                        <MapPin className="w-4 h-4" />
                        <span>{zone}</span>
                    </div>
                    <h1 className="font-['Cinzel'] text-4xl md:text-5xl mb-2">
                        {object.name}
                    </h1>
                    <p className="text-sm opacity-80">Object #{object.id}</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1200px] mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Image */}
                    <div className="w-full h-[400px] md:h-[500px] bg-[#8C6B3E] flex items-center justify-center">
                        <img
                            src={getObjectImage(object)}
                            alt={object.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Description */}
                    <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div>
                                <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-2">
                                    {object.name}
                                </h2>
                                <p className="text-[#8C6B3E] font-medium">{zone}</p>
                            </div>

                            {/* Share Button */}
                            <button
                                onClick={handleShare}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Link Copied!
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-4 h-4" />
                                        Share Link
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-[#2B2B2B] leading-relaxed text-lg">
                                {object.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 flex gap-4">
                    <Link
                        to="/auto-guide"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#7A5F36] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Auto Guide
                    </Link>
                </div>
            </div>
        </div>
    );
}

