import { MapPin, Clock, Ticket, Phone, Users, Calendar } from 'lucide-react';
import { useUiLang } from '../i18n';

const T = {
  id: {
    title: 'Rencanakan Kunjungan Anda',
    subtitle:
      'Semua yang perlu Anda ketahui sebelum mengunjungi Indonesian Heritage Museum',
    openingHours: 'Jam Buka',
    tueFri: 'Selasa - Jumat',
    satSun: 'Sabtu - Minggu',
    monday: 'Senin',
    closed: 'Tutup',
    hoursNote:
      'Catatan: Pembelian tiket terakhir 30 menit sebelum tutup. Museum dapat tutup pada hari libur nasional.',
    admission: 'Tiket Masuk',
    adults: 'Dewasa',
    adultsDesc: 'Tiket umum',
    studentsSeniors: 'Pelajar & Lansia',
    studentsDesc: 'Dengan kartu identitas',
    children: 'Anak-anak',
    childrenDesc: 'Tinggi di bawah 85 cm',
    free: 'Gratis',
    familyPass: 'Paket Keluarga',
    familyDesc: 'Paket keluarga',
    admissionNote: 'Catatan: Setiap pembelian 30 tiket gratis 1 tiket.',
    location: 'Lokasi',
    howToGet: 'Cara Menuju ke Sini',
    getList: [
      '40 menit dari Stasiun Kereta Malang',
      '55 menit dari Bandara Abdul Rachman Saleh',
      'Tersedia tempat parkir di lokasi',
      'Dapat diakses dengan layanan transportasi daring dan umum',
    ],
    contactUs: 'Hubungi Kami',
    phone: 'Telepon',
    customerService: 'Layanan Pelanggan',
    customerServiceText:
      'Staf kami siap membantu selama jam buka untuk pertanyaan, pemesanan, dan informasi umum.',
    findUs: 'Temukan Kami',
    groupVisits: 'Kunjungan Rombongan',
    groupText:
      'Tarif dan layanan khusus tersedia untuk rombongan 10 orang atau lebih, termasuk sekolah, universitas, dan grup wisata.',
    groupList: [
      'Tarif rombongan dengan potongan harga',
      'Tur berpemandu dalam berbagai bahasa',
      'Tersedia materi edukasi',
      'Pemesanan di muka diperlukan',
    ],
    bookGroup: 'Pesan Kunjungan Rombongan',
    specialEvents: 'Acara Khusus',
    specialText:
      'Museum tersedia untuk acara khusus, termasuk acara korporat, program edukasi, dan perayaan budaya.',
    specialList: [
      'Penyewaan tempat privat',
      'Penyelenggaraan acara korporat',
      'Lokakarya edukasi',
      'Pertunjukan budaya',
    ],
    inquireEvents: 'Tanya Tentang Acara',
    guidelines: 'Panduan Pengunjung',
    g: [
      ['Fotografi', 'Fotografi pribadi diperbolehkan. Fotografi dengan blitz dan tripod tidak diperbolehkan.'],
      ['Aksesibilitas', 'Museum dapat diakses kursi roda. Kursi roda tersedia di pintu masuk.'],
      ['Fasilitas', 'Tersedia Wi-Fi gratis, toilet, ruang ibadah, dan penitipan barang.'],
      ['Aturan Berpakaian', 'Diharapkan berpakaian sopan. Disarankan memakai sepatu yang nyaman untuk berjalan.'],
      ['Makanan & Minuman', 'Tidak diperbolehkan di area galeri. Kafe tersedia di lobi museum.'],
      ['Penitipan Tas', 'Tas besar harus dititipkan. Loker gratis tersedia di pintu masuk.'],
    ],
  },
  en: {
    title: 'Plan Your Visit',
    subtitle:
      'Everything you need to know before visiting the Indonesian Heritage Museum',
    openingHours: 'Opening Hours',
    tueFri: 'Tuesday - Friday',
    satSun: 'Saturday - Sunday',
    monday: 'Monday',
    closed: 'Closed',
    hoursNote:
      'Note: Last admission is 30 minutes before closing time. The museum may close on national holidays.',
    admission: 'Admission',
    adults: 'Adults',
    adultsDesc: 'General admission',
    studentsSeniors: 'Students & Seniors',
    studentsDesc: 'With valid ID',
    children: 'Children',
    childrenDesc: 'Under 85 cm tall',
    free: 'Free',
    familyPass: 'Family Pass',
    familyDesc: 'Family package',
    admissionNote: 'Note: Every purchase of 30 tickets gets 1 ticket free.',
    location: 'Location',
    howToGet: 'How to Get Here',
    getList: [
      '40 minutes from Malang Train Station',
      '55 minutes from Abdul Rachman Saleh Airport',
      'Parking available on-site',
      'Accessible via ride-hailing services and public transportation',
    ],
    contactUs: 'Contact Us',
    phone: 'Phone',
    customerService: 'Customer Service',
    customerServiceText:
      'Our staff is available during opening hours to assist with inquiries, bookings, and general information.',
    findUs: 'Find Us',
    groupVisits: 'Group Visits',
    groupText:
      'Special rates and services available for groups of 10 or more visitors, including schools, universities, and tour groups.',
    groupList: [
      'Discounted group rates',
      'Guided tours in multiple languages',
      'Educational materials available',
      'Advance booking required',
    ],
    bookGroup: 'Book Group Visit',
    specialEvents: 'Special Events',
    specialText:
      'The museum is available for special events, including corporate functions, educational programs, and cultural celebrations.',
    specialList: [
      'Private venue rental',
      'Corporate event hosting',
      'Educational workshops',
      'Cultural performances',
    ],
    inquireEvents: 'Inquire About Events',
    guidelines: 'Visitor Guidelines',
    g: [
      ['Photography', 'Personal photography is permitted. Flash photography and tripods are not allowed.'],
      ['Accessibility', 'The museum is wheelchair accessible. Wheelchairs available at the entrance.'],
      ['Facilities', 'Free Wi-Fi, restrooms, prayer room, and coat check available.'],
      ['Dress Code', 'Respectful attire requested. Comfortable walking shoes recommended.'],
      ['Food & Drink', 'Not permitted in galleries. Café available in the museum lobby.'],
      ['Bag Storage', 'Large bags must be checked. Free lockers available at the entrance.'],
    ],
  },
  zh: {
    title: '规划您的参观',
    subtitle: '参观印度尼西亚遗产博物馆前您需要了解的一切',
    openingHours: '开放时间',
    tueFri: '周二 - 周五',
    satSun: '周六 - 周日',
    monday: '周一',
    closed: '闭馆',
    hoursNote: '提示：最后入场时间为闭馆前 30 分钟。博物馆在国家法定假日可能闭馆。',
    admission: '门票',
    adults: '成人',
    adultsDesc: '普通门票',
    studentsSeniors: '学生与长者',
    studentsDesc: '需出示有效证件',
    children: '儿童',
    childrenDesc: '身高 85 厘米以下',
    free: '免费',
    familyPass: '家庭套票',
    familyDesc: '家庭套票',
    admissionNote: '提示：每购买 30 张门票，免费赠送 1 张。',
    location: '位置',
    howToGet: '如何抵达',
    getList: [
      '距玛琅火车站 40 分钟',
      '距 Abdul Rachman Saleh 机场 55 分钟',
      '现场提供停车位',
      '可通过网约车及公共交通抵达',
    ],
    contactUs: '联系我们',
    phone: '电话',
    customerService: '客户服务',
    customerServiceText:
      '我们的工作人员在开放时间内为您提供咨询、预订及一般信息的协助。',
    findUs: '找到我们',
    groupVisits: '团体参观',
    groupText:
      '为 10 人及以上的团体提供特别优惠与服务，包括学校、大学及旅行团。',
    groupList: [
      '团体优惠价',
      '多语言导览',
      '提供教育材料',
      '需提前预订',
    ],
    bookGroup: '预订团体参观',
    specialEvents: '特别活动',
    specialText:
      '博物馆可承办特别活动，包括企业活动、教育项目及文化庆典。',
    specialList: [
      '私人场地租赁',
      '企业活动承办',
      '教育工作坊',
      '文化表演',
    ],
    inquireEvents: '咨询活动事宜',
    guidelines: '参观须知',
    g: [
      ['摄影', '允许个人拍照。不允许使用闪光灯及三脚架。'],
      ['无障碍设施', '博物馆设有无障碍通道。入口处提供轮椅。'],
      ['设施', '提供免费 Wi-Fi、洗手间、祈祷室及衣物寄存。'],
      ['着装要求', '请着装得体。建议穿着舒适的步行鞋。'],
      ['饮食', '展厅内不允许饮食。博物馆大堂设有咖啡厅。'],
      ['行李寄存', '大件行李须寄存。入口处提供免费储物柜。'],
    ],
  },
};

export default function Visit() {
  const lang = useUiLang();
  const t = T[lang];

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            {t.title}
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Opening Hours & Admission */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.openingHours}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <span className="text-[#2B2B2B]">{t.tueFri}</span>
                <span className="text-[#8C6B3E] font-medium">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <span className="text-[#2B2B2B]">{t.satSun}</span>
                <span className="text-[#8C6B3E] font-medium">08:00 - 16:00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-[#2B2B2B]">{t.monday}</span>
                <span className="text-[#d4183d] font-medium">{t.closed}</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#E7DED0] rounded">
              <p className="text-sm text-[#5A5A5A]">{t.hoursNote}</p>
            </div>
          </div>

          {/* Admission Prices */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Ticket className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.admission}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">{t.adults}</div>
                  <div className="text-sm text-[#5A5A5A]">{t.adultsDesc}</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 50,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">{t.studentsSeniors}</div>
                  <div className="text-sm text-[#5A5A5A]">{t.studentsDesc}</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 25,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[#C8B9A6]">
                <div>
                  <div className="text-[#2B2B2B]">{t.children}</div>
                  <div className="text-sm text-[#5A5A5A]">{t.childrenDesc}</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">{t.free}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <div className="text-[#2B2B2B]">{t.familyPass}</div>
                  <div className="text-sm text-[#5A5A5A]">{t.familyDesc}</div>
                </div>
                <span className="text-[#8C6B3E] font-medium text-xl">IDR 120,000</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#E7DED0] rounded">
              <p className="text-sm text-[#5A5A5A]">
                <strong className="text-[#2B2B2B]">{t.admissionNote}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.location}</h2>
            </div>
            <div className="space-y-4">
              <p className="text-[#2B2B2B] leading-relaxed">
                Jl. Kartika No.2, Sisir, Kec. Batu, Kota Batu, Jawa Timur 65314
              </p>
              <div className="border-t border-[#C8B9A6] pt-4">
                <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">{t.howToGet}</h3>
                <ul className="space-y-2 text-[#5A5A5A]">
                  {t.getList.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E7DED0] flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.contactUs}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#8C6B3E] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-[#2B2B2B] font-medium">{t.phone}</div>
                  <div className="text-[#5A5A5A]">+62 857 4840 5800</div>
                </div>
              </div>
              <div className="border-t border-[#C8B9A6] pt-4">
                <h3 className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-3">{t.customerService}</h3>
                <p className="text-[#5A5A5A]">{t.customerServiceText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">{t.findUs}</h2>
          <div className="aspect-video rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4924.694188352999!2d112.52393289999999!3d-7.8840109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78872dd3c46115%3A0x1d9644037c54d349!2sIndonesian%20Heritage%20Museum!5e1!3m2!1sen!2sid!4v1772927997715!5m2!1sen!2sid"
              className="w-full h-full border-0"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Group Visits & Special Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Group Visits */}
          <div className="bg-[#E7DED0] rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Users className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.groupVisits}</h2>
            </div>
            <p className="text-[#2B2B2B] mb-4 leading-relaxed">{t.groupText}</p>
            <ul className="space-y-2 text-[#5A5A5A] mb-6">
              {t.groupList.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-colors">
              <a href="https://wa.me/+6285748405800"> {t.bookGroup} </a>
            </button>
          </div>

          {/* Special Events */}
          <div className="bg-[#E7DED0] rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#8C6B3E]" />
              </div>
              <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">{t.specialEvents}</h2>
            </div>
            <p className="text-[#2B2B2B] mb-4 leading-relaxed">{t.specialText}</p>
            <ul className="space-y-2 text-[#5A5A5A] mb-6">
              {t.specialList.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-colors">
              {t.inquireEvents}
            </button>
          </div>
        </div>

        {/* Visitor Guidelines */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-6 text-center">{t.guidelines}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.g.map(([heading, body]) => (
              <div key={heading}>
                <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-3">{heading}</h3>
                <p className="text-[#5A5A5A] text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
