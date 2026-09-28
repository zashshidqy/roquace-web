# Product Requirements Document (PRD)
## Website ROQUACE. Digital

**Versi:** 1.0
**Tanggal:** 25 September 2026
**Disusun untuk:** ROQUACE. Digital (divisi aktif dari ROQUACE. — master brand multi-bisnis)
**Referensi desain:** a24.raviklaassens.com (gaya cinematic/editorial, disesuaikan dengan identitas ROQUACE)

---

## 1. Latar Belakang

ROQUACE. adalah master brand yang dirancang untuk memulai dari bisnis berbasis skill dengan modal rendah — pengembangan website — dan berkembang menjadi grup bisnis (Tech, Atelier, Living) di masa depan. Divisi pertama yang aktif adalah **ROQUACE. Digital**, yang membangun website dan pengalaman digital untuk bisnis.

Website ROQUACE. Digital adalah aset paling penting dalam customer journey brand ini: ia berfungsi sebagai **hub** tempat calon klien berpindah dari "Discover" (Instagram/TikTok/referral) menuju "Decide" (proposal & kesepakatan). Website ini harus membuktikan kapabilitas ROQUACE secara langsung — desain dan interaksinya sendiri adalah portofolio.

Referensi UI/UX yang diminta (situs bertema A24) menonjol karena smooth-scroll bermomentum, animasi scroll-trigger yang halus, video hero interaktif, dan tipografi editorial berskala besar dengan banyak whitespace — kesan "premium, percaya diri, minim basa-basi". Kualitas ini selaras dengan brand personality ROQUACE: **Modern, Confident, Minimal, Precise, Ambitious** ("quiet confidence").

## 2. Tujuan Produk

1. Menghadirkan kesan profesional dan "high-craft" sejak detik pertama, agar calon klien percaya ROQUACE mampu membangun produk digital berkualitas tinggi.
2. Menjadikan setiap proyek (baik klien nyata maupun concept work) sebagai etalase yang menunjukkan proses berpikir, bukan sekadar galeri gambar.
3. Mengarahkan pengunjung secara jelas menuju kontak/brief, tanpa terasa memaksa ("clarity over hype").
4. Membangun fondasi teknis yang bisa dipakai berulang untuk sub-brand lain (Tech, Atelier, Living) di masa depan tanpa mengubah sistem identitas inti.

## 3. Target Pengguna

- **Growing businesses**: UKM, perusahaan jasa, brand lokal, layanan profesional yang butuh presence digital lebih kuat.
- **Decision makers**: pemilik bisnis, founder, marketing lead, tim operasional yang punya wewenang menyetujui proyek.
- **Good-fit client**: menghargai presentasi, keandalan, komunikasi — bukan hanya mencari harga termurah.

## 4. Prinsip Desain (Design Direction)

Mengacu pada Slide 10 (Visual Direction) proposal brand:

| Elemen | Nilai |
|---|---|
| Gaya | Editorial minimalism × modern technology × understated luxury |
| Warna dasar | ROQUACE Black `#0A0A0A`, Warm White `#F5F3EF` |
| Warna sekunder | Soft Gray `#A7A39E` |
| Aksen digital | Digital Accent Blue `#3B82F6` |
| Tipografi | Besar, tegas, banyak negative space (mengikuti gaya editorial film seperti referensi) |
| Kata kunci visual | Bold, Clean, Editorial, Precise, Minimal, Architectural, Modern, Premium |

Perbedaan dengan referensi A24: A24 memakai palet gelap generik untuk *mood sinematik film*; ROQUACE mengadaptasi struktur interaksinya (bukan temanya) ke arah **studio digital yang percaya diri dan presisi** — dengan aksen biru digital sebagai penanda "teknologi", bukan dekorasi film.

## 5. Peta Situs (Sitemap)

1. **Home** — hero + ringkasan proposisi + preview karya unggulan
2. **Work / Portfolio** — daftar proyek (setara "Films" di referensi), masing-masing punya halaman detail
3. **Services** — Build / Maintain / Improve (mengacu Slide 4)
4. **Process** — bagaimana ROQUACE bekerja (Discover → Continue, Slide 12)
5. **About** — positioning, nilai (Clarity, Craft, Performance, Continuity)
6. **Contact / Brief** — form pengajuan proyek

## 6. Rincian Halaman & Adaptasi UI dari Referensi

### 6.1 Home
- **Hero full-bleed** dengan video/motion loop (bukan trailer film, melainkan showreel proses kerja: UI animasi, coding, hasil akhir). Kontrol sound opsional (mute default) — mengadopsi pola "TAP FOR SOUND" dari referensi, tapi konten showreel studio.
- Tagline besar: *"Built for what's next."* / *"Built with intent."* ditampilkan dengan tipografi besar bergaya editorial, mirip judul film di referensi.
- **Smooth scroll bermomentum** (bukan native browser scroll) di seluruh halaman.

### 6.2 Work / Portfolio (pengganti "Films")
- Grid daftar proyek, tiap item menampilkan: nama klien/konsep, tahun, kategori (Corporate, Hospitality, Fashion/E-commerce, Service/Property — mengacu Slide 14), dan tag "Client Work" atau **"Concept Work"** — label transparansi wajib sesuai *Rule* di Slide 14 ("Never present concept projects as client work").
- Saat hover: muncul preview visual proyek (menggantikan "disc artwork" di referensi) dengan transform/scale halus.
- Testimoni klien singkat (menggantikan kutipan kritikus film) ditampilkan dengan stagger animation saat scroll masuk viewport.

### 6.3 Halaman Detail Proyek (`/work/nama-proyek`)
Format konten mengikuti **Signature Content Format** dari Slide 13:
`Concept → Approach → Design → Final → Lesson`
- Layout satu kolom panjang, scroll-driven, dengan gambar/video full-width bergantian dengan blok teks pendek — animasi fade/slide saat setiap section masuk viewport.

### 6.4 Services
- Tiga kartu: **Build / Maintain / Improve** (Slide 4), dengan micro-interaction hover (bukan disc, tapi ikon/garis presisi khas "Architectural" keyword).

### 6.5 Process
- Timeline horizontal/vertikal 6 tahap (Discover → Continue), animasi step-by-step muncul saat discroll, garis penghubung tumbuh secara animatif.

### 6.6 Contact / Brief
- Form singkat & jelas (nama, jenis bisnis, kebutuhan, budget range) — tanpa elemen dekoratif berlebih, konsisten dengan prinsip "Clarity over hype".

## 7. Spesifikasi Animasi & Interaksi

| Interaksi | Perilaku | Analogi dari referensi A24 |
|---|---|---|
| Scroll | Smooth, bermomentum, easing custom | Scroll behavior situs referensi |
| Masuk viewport | Fade + translate-Y halus, stagger antar elemen | Kemunculan quote kritikus satu-satu |
| Hover kartu proyek | Scale + shadow/reveal preview | Hover disc artwork film |
| Hero video | Custom play/pause/mute control | "TAP FOR SOUND", "PAUSE", "MAXIMIZE" |
| Transisi antar halaman | Fade/slide halus, tanpa reload kasar | Transisi ke halaman `/production/...` |
| Tipografi | Ukuran responsif besar (`clamp()`), letter-spacing presisi | Judul film besar di hero |

Prinsip kunci: animasi harus terasa **presisi dan tenang**, bukan ramai — selaras dengan "quiet confidence", bukan gaya hiburan/film yang dramatis.

## 8. Tumpukan Teknologi (Tech Stack)

Disesuaikan dengan stack yang sudah dikuasai (React.js, JavaScript, HTML/CSS):

- **Framework:** React.js (Next.js direkomendasikan untuk routing halaman proyek + SEO tiap case study)
- **Styling:** Tailwind CSS (custom theme dengan token warna ROQUACE)
- **Animasi:** GSAP + ScrollTrigger (scroll-based reveal), Framer Motion (transisi halaman/komponen)
- **Smooth scroll:** Lenis
- **CMS/konten proyek (opsional):** Markdown/MDX lokal di tahap awal, migrasi ke headless CMS (mis. Sanity) saat jumlah proyek bertambah
- **Hosting/CDN aset:** Vercel + CDN gambar/video (mis. Bunny CDN/Cloudinary) untuk performa

## 9. Strategi Konten yang Ditampilkan di Situs

Mengacu Slide 13, distribusi konten portofolio & insight yang ditonjolkan di Home/Work:
- **Work (40%)** — studi kasus proyek
- **Insight (30%)** — artikel/insight singkat tentang berpikir digital (bisa jadi section blog ringan)
- **Process (20%)** — halaman Process & elemen "how it's made" di tiap studi kasus
- **Offer (10%)** — CTA menuju Contact

## 10. Non-Negotiables (dari Governance, Slide 18)

- Master wordmark **ROQUACE.** selalu dominan di header/footer.
- Warna dan tone mengikuti sistem yang ditetapkan (tidak menambah warna baru di luar palet).
- Setiap proyek konsep wajib diberi label transparan "Concept Work".
- Bahasa di seluruh copy situs: singkat, langsung, tanpa hype ("Best website service!", superlatif berlebihan dihindari).

## 11. Metrik Keberhasilan

- Rasio pengunjung → pengisian form Contact/Brief
- Waktu tinggal (time on page) di halaman Work/detail proyek
- Jumlah proyek konsep yang berhasil dikonversi jadi pembicaraan/klien nyata
- Skor performa teknis (Core Web Vitals) — penting karena "Performance" adalah salah satu janji brand (Slide 7)

## 12. Roadmap Pengembangan

| Fase | Cakupan |
|---|---|
| **Fase 1 — MVP** | Home, Work (grid + 2–4 concept project detail), Contact. Fokus animasi inti (scroll, hero, hover). |
| **Fase 2** | Services, Process, About lengkap; tambah CMS untuk proyek. |
| **Fase 3** | Section Insight/blog ringan; optimasi SEO tiap case study. |
| **Fase 4** | Template sistem yang bisa direplikasi untuk sub-brand (ROQUACE. Tech, Atelier, Living) dengan warna aksen berbeda tapi struktur identik (sesuai "Flexible Elements" Slide 18). |

## 13. Di Luar Cakupan (Out of Scope) — Versi 1.0

- E-commerce penuh (baru relevan saat fase ROQUACE. Tech/Atelier)
- Dashboard klien/portal internal
- Multi-bahasa (ID/EN) — dipertimbangkan di fase lanjutan