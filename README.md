# 🧠 Otaku Asah Otak

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
</p>

<p align="center">
  <strong>🎮 Game puzzle asah otak berbasis web dalam Bahasa Indonesia</strong>
</p>

<p align="center">
  <a href="#fitur">Fitur</a> •
  <a href="#demo">Demo</a> •
  <a href="#instalasi">Instalasi</a> •
  <a href="#teknologi">Teknologi</a> •
  <a href="#kontribusi">Kontribusi</a>
</p>

---

## 📖 Deskripsi

**Otaku Asah Otak** adalah game puzzle interaktif yang menantang logika dan kreativitas pemain. Dengan 20+ level yang beragam, game ini menawarkan berbagai jenis teka-teki mulai dari pertanyaan jebakan, puzzle visual, hingga aksi interaktif.

### 🇮🇩 Bahasa Indonesia
Game tebak-tebakan asah otak dengan berbagai tipe soal unik yang akan menguji kemampuan berpikir kritis dan kreativitas kamu. Cocok untuk semua usia!

### 🇬🇧 English
A web-based brain teaser puzzle game featuring 20+ levels that challenge players' logic and creativity. Each level has different gameplay types including trick questions, visual puzzles, drag & drop, tap objects, and text input.

---

## ✨ Fitur

| Fitur | Deskripsi |
|-------|-----------|
| 🧩 **20+ Level Puzzle** | Berbagai tipe soal: input, pilihan ganda, tap, drag & drop, dan aksi khusus |
| ⭐ **Sistem Bintang** | Dapatkan 1-3 bintang berdasarkan performa |
| 💡 **Hint System** | Petunjuk tersedia untuk setiap level |
| 📱 **Responsive Design** | Optimal di semua perangkat (desktop, tablet, mobile) |
| 💾 **Auto Save** | Progress tersimpan otomatis di browser |
| 🎨 **UI Modern** | Desain glassmorphism dengan animasi smooth |
| 🔊 **Sound Effects** | Efek suara untuk feedback jawaban |
| 📲 **PWA Support** | Dapat diinstall sebagai aplikasi |

---

## 🎮 Tipe Level

- **📝 Input Level** - Ketik jawaban yang benar
- **🔘 Choice Level** - Pilih jawaban dari opsi yang tersedia  
- **👆 Tap Level** - Tap/klik objek yang tepat
- **🎯 Drag Level** - Drag & drop objek ke target
- **⚡ Action Level** - Lakukan aksi khusus (tambah garis, dll)
- **📋 Multi Level** - Jawab beberapa sub-pertanyaan

---

## 🚀 Demo

🔗 **Live Demo**: [Kunjungi Aplikasi](https://otaku-asah-otak.netlify.app)

---

## 💻 Instalasi

### Prasyarat
- Node.js 18+ 
- npm atau yarn

### Langkah Instalasi

```bash
# Clone repository
git clone https://github.com/IkhsanDimas/otaku-asah-otak.git

# Masuk ke direktori
cd otaku-asah-otak

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

### Build untuk Production

```bash
npm run build
```

---

## 🛠️ Teknologi

| Kategori | Teknologi |
|----------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | React Icons |
| **Effects** | React Confetti |
| **PWA** | vite-plugin-pwa |
| **Deployment** | Netlify |

---

## 📁 Struktur Proyek

```
otaku-asah-otak/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── GameScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── LevelSelect.jsx
│   │   ├── ResultScreen.jsx
│   │   └── levels/
│   │       ├── ActionLevel.jsx
│   │       ├── ChoiceLevel.jsx
│   │       ├── DragLevel.jsx
│   │       ├── InputLevel.jsx
│   │       ├── MultiLevel.jsx
│   │       └── TapLevel.jsx
│   ├── data/
│   │   └── levels.js
│   ├── utils/
│   │   └── sounds.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🎯 Cara Bermain

1. **Mulai Game** - Klik tombol "Mulai Main"
2. **Pilih Level** - Level terbuka secara bertahap
3. **Baca Soal** - Pahami pertanyaan dengan teliti
4. **Gunakan Hint** - Jika bingung, gunakan petunjuk (mengurangi bintang)
5. **Jawab** - Berikan jawaban sesuai tipe level
6. **Dapatkan Bintang** - Maksimal 3 bintang per level

### ⚠️ Perhatian
- Salah 3x = Game Over, kembali ke Level 1
- Menggunakan hint mengurangi 1 bintang
- Setiap kesalahan mengurangi potensi bintang

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -m 'Tambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## 👤 Author

**Ikhsan Dimas**

- GitHub: [@IkhsanDimas](https://github.com/IkhsanDimas)

---

<p align="center">
  Made with ❤️ in Indonesia 🇮🇩
</p>
