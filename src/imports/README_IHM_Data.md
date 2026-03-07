# README - Data Indonesian Heritage Museum

**Tanggal Pengumpulan:** 5 Maret 2026
**Sumber:** https://indonesianheritagemuseum.com

---

## DAFTAR FILE YANG TERSEDIA

### 1. IHM_Koleksi_AutoGuide.md
**Deskripsi:** Data lengkap koleksi museum dari halaman Auto Guide Indonesia
**Konten:**
- 44 benda koleksi dengan nama, image, audio, dan deskripsi
- 10 zona/section (Austronesia, Majapahit, Jawa Timur, Jawa Tengah, Jawa Barat, Sulawesi, Kalimantan, Papua, Wayang, Chengho, Penutup)
- Deskripsi lengkap setiap benda

### 2. IHM_Testimoni_Lengkap.md
**Deskripsi:** Ringkasan lengkap semua testimoni dan konten dari 5 menu
**Konten:**
- General/Family (Testimoni) - 20 testimoni
- Educational Institution (Testimoni) - 20 testimoni
- Educational Series - 12 konten edukasi
- General/Family (Visit) - 21 konten
- Educational Institution (Visit) - 21+ konten
- **Total: 94+ konten**

### 3. IHM_Detail_Testimoni_General_Family.md
**Deskripsi:** Detail lengkap testimoni General/Family
**Konten:**
- 20 testimoni dengan deskripsi lengkap
- Setiap testimoni dilengkapi video TikTok embed
- Informasi akun TikTok: @indonesianheritage

### 4. IHM_Detail_Educational_Series.md
**Deskripsi:** Detail lengkap Educational Series
**Konten:**
- 12 konten edukasi dengan deskripsi lengkap
- Kategorisasi konten (Tekstil, Alat Tradisional, Artefak, dll)
- Setiap konten dilengkapi video TikTok embed
- Informasi akun TikTok: @indonesianheritage

---

## RINGKASAN DATA

### Total Konten yang Dikumpulkan:

#### Auto Guide Indonesia:
- **44 benda koleksi** dengan nama, image, audio player, dan deskripsi lengkap
- **10 zona** yang mewakili wilayah Indonesia

#### Testimoni & Konten:
- **40 testimoni** dengan video TikTok (General/Family + Educational Institution)
- **12 konten edukasi** dengan video TikTok (Educational Series)
- **42+ konten kunjungan** dengan gambar dokumentasi
- **Total: 94+ konten**

### Media yang Digunakan:
- **Video TikTok Embed:** 52 video (40 testimoni + 12 edukasi)
- **Gambar Dokumentasi:** 42+ gambar
- **Audio Player:** 44 audio (untuk Auto Guide)

---

## INFORMASI LINK EMBED TIKTOK

### Akun TikTok Museum:
**Username:** @indonesianheritage
**Platform:** TikTok

### Cara Mendapatkan Link Embed:

1. **Melalui Website:**
   - Kunjungi halaman testimoni/educational series
   - Scroll ke video yang diinginkan
   - Klik kanan pada video > Inspect Element
   - Cari tag `<blockquote class="tiktok-embed">`
   - Copy URL dari attribute `cite`

2. **Melalui TikTok Langsung:**
   - Kunjungi https://www.tiktok.com/@indonesianheritage
   - Pilih video yang diinginkan
   - Klik tombol Share > Embed
   - Copy kode embed yang disediakan

3. **Format Link TikTok:**
   ```
   https://www.tiktok.com/@indonesianheritage/video/[VIDEO_ID]
   ```

4. **Format Embed Code:**
   ```html
   <blockquote class="tiktok-embed" 
     cite="https://www.tiktok.com/@indonesianheritage/video/[VIDEO_ID]" 
     data-video-id="[VIDEO_ID]">
   </blockquote>
   <script async src="https://www.tiktok.com/embed.js"></script>
   ```

---

## URL HALAMAN YANG DIANALISIS

### Auto Guide:
1. **Auto Guide Indonesia**
   - URL: https://indonesianheritagemuseum.com/autoguide/autoguideind/
   - Konten: 44 benda koleksi dengan audio guide

### Testimoni:
2. **General/Family (Testimoni)**
   - URL: https://indonesianheritagemuseum.com/testimoni/general-family/
   - Konten: 20 testimoni dengan video TikTok

3. **Educational Institution (Testimoni)**
   - URL: https://indonesianheritagemuseum.com/testimoni/educational-institution/
   - Konten: 20 testimoni dengan video TikTok

### Educational Series:
4. **Educational Series**
   - URL: https://indonesianheritagemuseum.com/educational-series/
   - Konten: 12 konten edukasi dengan video TikTok

### Visit:
5. **General/Family (Visit)**
   - URL: https://indonesianheritagemuseum.com/visit/general-family-2/
   - Konten: 21 konten dengan gambar

6. **Educational Institution (Visit)**
   - URL: https://indonesianheritagemuseum.com/visit/education-institution/
   - Konten: 21+ konten dengan gambar

---

## STRUKTUR DATA

### Auto Guide Indonesia:
```
Zona → Benda → {
  - Nama Benda
  - Image/Gambar
  - Audio Player
  - Deskripsi Lengkap
}
```

### Testimoni:
```
Kategori → Testimoni → {
  - Judul Testimoni
  - Deskripsi
  - Video TikTok Embed
  - Akun: @indonesianheritage
}
```

### Educational Series:
```
Kategori → Konten Edukasi → {
  - Judul Konten
  - Deskripsi Lengkap
  - Video TikTok Embed
  - Kategori (Tekstil, Alat, Artefak, dll)
  - Akun: @indonesianheritage
}
```

### Visit:
```
Kategori → Konten Kunjungan → {
  - Judul Konten
  - Deskripsi
  - Gambar Dokumentasi
  - Nama Sekolah/Institusi (untuk Educational)
}
```

---

## KONTAK & INFORMASI MUSEUM

**Nama:** Indonesian Heritage Museum
**Lokasi:** Jatim Park 1, Kota Batu, Malang, Jawa Timur
**Telepon:** +62 857-4840-5800
**Website:** https://indonesianheritagemuseum.com

**Media Sosial:**
- TikTok: @indonesianheritage
- Facebook: Indonesian Heritage Museum
- Instagram: @indonesianheritage (kemungkinan)
- YouTube: Indonesian Heritage Museum (kemungkinan)

---

## CATATAN PENTING

1. **Link Embed TikTok:**
   - Semua video TikTok berasal dari akun @indonesianheritage
   - Untuk mendapatkan link embed spesifik, perlu inspect element pada halaman web
   - Atau kunjungi langsung profil TikTok dan ambil link dari setiap video

2. **Audio Player:**
   - Audio guide tersedia untuk 44 benda di halaman Auto Guide Indonesia
   - Format audio kemungkinan MP3 atau streaming

3. **Gambar:**
   - Semua gambar di-host di server indonesianheritagemuseum.com
   - Format: JPG/PNG
   - Ukuran bervariasi (ada yang scaled, ada yang original)

4. **Update Data:**
   - Data dikumpulkan pada 5 Maret 2026
   - Konten website mungkin bertambah seiring waktu
   - Disarankan untuk cek website secara berkala untuk update terbaru

---

## PENGGUNAAN DATA

Data ini dapat digunakan untuk:
1. **Dokumentasi** koleksi museum
2. **Referensi** konten marketing dan promosi
3. **Analisis** strategi konten digital museum
4. **Pengembangan** website atau aplikasi terkait
5. **Riset** tentang digitalisasi museum di Indonesia

---

## LISENSI & HAK CIPTA

Semua konten, gambar, video, dan audio adalah milik **Indonesian Heritage Museum**.
Penggunaan data ini harus sesuai dengan ketentuan dan izin dari pihak museum.

Untuk informasi lebih lanjut atau permintaan penggunaan konten, hubungi:
**+62 857-4840-5800**

---

**Dikumpulkan oleh:** Vy AI Assistant
**Tanggal:** 5 Maret 2026
**Untuk:** Minilemon - Website Company Profile IHM
