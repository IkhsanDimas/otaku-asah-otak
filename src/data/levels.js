// 20 Level Puzzle Asah Otak dalam Bahasa Indonesia
// Setiap level memiliki tipe berbeda untuk variasi gameplay

export const levels = [
  // Level 1 - Trick Question (Mudah)
  {
    id: 1,
    type: 'input',
    illustration: '🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️🕯️',
    illustrationSize: 'text-3xl',
    question: 'Ada 10 lilin menyala di atas meja. Angin bertiup dan 3 lilin mati. Berapa lilin yang tersisa di meja?',
    answers: ['10', 'sepuluh'],
    hint: 'Perhatikan pertanyaannya... yang ditanya adalah lilin di MEJA, bukan yang menyala.',
    explanation: 'Semua 10 lilin masih ada di meja. 3 lilin mati tidak berarti hilang dari meja!',
    difficulty: 1
  },

  // Level 2 - Math Trick
  {
    id: 2,
    type: 'input',
    illustration: '🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔',
    illustrationSize: 'text-2xl',
    question: 'Seorang petani punya 17 ekor ayam. Semua kecuali 9 mati. Berapa ayam yang tersisa?',
    answers: ['9', 'sembilan'],
    hint: 'Baca lagi kalimatnya perlahan... "semua KECUALI 9"',
    explanation: '"Semua kecuali 9 mati" berarti 9 ayam yang tidak mati = 9 ayam tersisa.',
    difficulty: 1
  },

  // Level 3 - Visual/Tap
  {
    id: 3,
    type: 'tap',
    illustration: '🍎🍉🍇🍊🍋🍌',
    illustrationSize: 'text-4xl',
    question: 'Tap buah yang paling besar!',
    items: [
      { id: 'apple', emoji: '🍎', label: 'Apel', size: 60, correct: false },
      { id: 'watermelon', emoji: '🍉', label: 'Semangka', size: 40, correct: false },
      { id: 'grape', emoji: '🍇', label: 'Anggur', size: 50, correct: false },
      { id: 'question', emoji: '❓', label: 'Tanda Tanya', size: 80, correct: false },
      { id: 'text', emoji: '', label: 'paling besar', size: 30, correct: true, isText: true }
    ],
    hint: 'Lihat ukuran TULISAN di layar, bukan ukuran buahnya...',
    explanation: 'Tulisan "paling besar" di pertanyaan adalah yang paling besar ukurannya di layar!',
    difficulty: 1
  },

  // Level 4 - Logic
  {
    id: 4,
    type: 'input',
    illustration: '🏃‍♂️🏃‍♂️🏃‍♂️🏁',
    illustrationSize: 'text-5xl',
    question: 'Kamu ikut lomba lari dan berhasil menyalip orang di posisi ke-2. Sekarang kamu di posisi berapa?',
    answers: ['2', 'dua', 'kedua', 'ke-2', 'ke 2'],
    hint: 'Kalau kamu menyalip orang ke-2, kamu mengambil POSISINYA...',
    explanation: 'Menyalip orang di posisi 2 berarti kamu sekarang di posisi 2, bukan posisi 1!',
    difficulty: 2
  },

  // Level 5 - Wordplay
  {
    id: 5,
    type: 'input',
    illustration: '🔮✨🌟',
    illustrationSize: 'text-5xl',
    question: 'Apa yang selalu ada di depan kamu tapi tidak bisa kamu lihat?',
    answers: ['masa depan', 'masadepan', 'future', 'waktu'],
    hint: 'Ini bukan benda fisik, tapi sesuatu yang pasti datang...',
    explanation: 'Masa depan selalu ada di depan kita, tapi tidak bisa dilihat!',
    difficulty: 2
  },

  // Level 6 - Multiple Choice Trick
  {
    id: 6,
    type: 'choice',
    illustration: '🧶 ⚖️ 🔩',
    illustrationSize: 'text-5xl',
    question: 'Mana yang lebih berat: 1 kg kapas atau 1 kg besi?',
    choices: [
      { id: 'a', text: 'Kapas', correct: false },
      { id: 'b', text: 'Besi', correct: false },
      { id: 'c', text: 'Sama berat', correct: true },
      { id: 'd', text: 'Tidak bisa dibandingkan', correct: false }
    ],
    hint: 'Perhatikan angka yang disebutkan...',
    explanation: '1 kg = 1 kg. Tidak peduli bahannya apa, beratnya tetap sama!',
    difficulty: 1
  },

  // Level 7 - Counting Trick
  {
    id: 7,
    type: 'input',
    illustration: '📅 7️⃣',
    illustrationSize: 'text-5xl',
    question: 'Dalam sebulan, ada berapa tanggal yang memiliki angka 7?',
    answers: ['4', 'empat'],
    hint: 'Hitung: 7, 17, 27... ada lagi tidak?',
    explanation: 'Tanggal dengan angka 7: 7, 17, 27 (dan 37 tidak ada). Jadi ada 4 (7, 17, 27, dan bulan ke-7 tidak dihitung karena bukan tanggal)... Sebenarnya 3 atau 4 tergantung apakah bulan punya 31 hari. Tapi biasanya 4: tanggal 7, 17, 27.',
    difficulty: 2
  },

  // Level 8 - Drag and Drop
  {
    id: 8,
    type: 'drag',
    illustration: '🐘 ➡️ 🧊',
    illustrationSize: 'text-5xl',
    question: 'Masukkan gajah ke dalam kulkas!',
    instruction: 'Geser gajah ke kulkas',
    items: [
      { id: 'elephant', emoji: '🐘', label: 'Gajah', draggable: true },
      { id: 'fridge', emoji: '🧊', label: 'Kulkas', isTarget: true }
    ],
    hint: 'Gajahnya terlalu besar? Coba kecilkan dulu...',
    explanation: 'Kamu harus mengecilkan tulisan "GAJAH" di pertanyaan dan memasukkannya ke kulkas!',
    specialAction: 'shrinkText',
    difficulty: 3
  },

  // Level 9 - Riddle
  {
    id: 9,
    type: 'input',
    illustration: '⏰🕐🕑🕒',
    illustrationSize: 'text-5xl',
    question: 'Aku punya tangan tapi tidak bisa memegang. Aku punya muka tapi tidak bisa tersenyum. Siapa aku?',
    answers: ['jam', 'jam tangan', 'jam dinding', 'clock', 'arloji'],
    hint: 'Benda ini menunjukkan waktu...',
    explanation: 'Jam punya "jarum jam" (tangan) dan "muka jam" (permukaan)!',
    difficulty: 2
  },

  // Level 10 - Visual Puzzle
  {
    id: 10,
    type: 'tap',
    illustration: '🐕🐰🐦🐟❓',
    illustrationSize: 'text-4xl',
    question: 'Temukan kucing yang bersembunyi!',
    items: [
      { id: 'dog', emoji: '🐕', label: 'Anjing', correct: false },
      { id: 'rabbit', emoji: '🐰', label: 'Kelinci', correct: false },
      { id: 'bird', emoji: '🐦', label: 'Burung', correct: false },
      { id: 'fish', emoji: '🐟', label: 'Ikan', correct: false },
      { id: 'hidden', emoji: '🐱', label: 'Kucing', correct: true, hidden: true }
    ],
    hint: 'Kucing suka bersembunyi... coba geser-geser layar atau cari di tempat tak terduga',
    explanation: 'Kucing bersembunyi di balik salah satu elemen. Kamu harus mencarinya!',
    difficulty: 2
  },

  // Level 11 - Math Sequence
  {
    id: 11,
    type: 'input',
    illustration: '🔢 2️⃣ 6️⃣ 1️⃣2️⃣ ❓',
    illustrationSize: 'text-3xl',
    question: 'Lanjutkan pola ini: 2, 6, 12, 20, 30, ?',
    answers: ['42', 'empat puluh dua'],
    hint: 'Selisih antar angka: 4, 6, 8, 10, ... lalu?',
    explanation: 'Pola: +4, +6, +8, +10, +12. Jadi 30 + 12 = 42',
    difficulty: 3
  },

  // Level 12 - Trick Tap
  {
    id: 12,
    type: 'tap',
    illustration: '🔴🟢🔵🟡',
    illustrationSize: 'text-5xl',
    question: 'Tap tombol BIRU sebanyak 5 kali!',
    items: [
      { id: 'red', emoji: '', label: 'MERAH', color: 'red', correct: false, tapCount: 0 },
      { id: 'green', emoji: '', label: 'HIJAU', color: 'green', correct: false, tapCount: 0 },
      { id: 'blue_text', emoji: '', label: 'BIRU', color: 'orange', correct: true, tapCount: 5, isTextTrick: true },
      { id: 'blue_color', emoji: '', label: 'KUNING', color: 'blue', correct: false, tapCount: 0 }
    ],
    hint: 'Yang biru itu warnanya atau tulisannya?',
    explanation: 'Tap tulisan "BIRU" (bukan tombol berwarna biru), karena yang ditanya adalah tombol BIRU!',
    difficulty: 3
  },

  // Level 13 - Word Puzzle
  {
    id: 13,
    type: 'input',
    illustration: '🐸 🏢',
    illustrationSize: 'text-6xl',
    question: 'KATAK bisa melompat lebih tinggi dari gedung. Kenapa?',
    answers: ['gedung tidak bisa melompat', 'karena gedung tidak bisa melompat', 'gedung tidak bisa loncat', 'gedung tidak melompat'],
    hint: 'Apakah gedung bisa melompat?',
    explanation: 'Gedung tidak bisa melompat sama sekali! Jadi katak pasti melompat lebih tinggi.',
    difficulty: 2
  },

  // Level 14 - Count
  {
    id: 14,
    type: 'input',
    illustration: '🔺\n🔺🔺\n🔺🔺🔺',
    illustrationSize: 'text-4xl',
    question: 'Berapa banyak segitiga dalam gambar ini? △ △△ △△△',
    answers: ['6', 'enam'],
    hint: 'Hitung dengan teliti setiap segitiga kecil...',
    explanation: '1 + 2 + 3 = 6 segitiga terlihat jelas',
    difficulty: 2
  },

  // Level 15 - Reverse Logic
  {
    id: 15,
    type: 'choice',
    illustration: '❌ ✅ ❓',
    illustrationSize: 'text-5xl',
    question: 'Pilih jawaban yang SALAH!',
    choices: [
      { id: 'a', text: '1 + 1 = 2', correct: false },
      { id: 'b', text: 'Matahari terbit dari timur', correct: false },
      { id: 'c', text: 'Air mengalir ke bawah', correct: false },
      { id: 'd', text: '2 x 3 = 7', correct: true }
    ],
    hint: 'Kamu harus memilih yang SALAH, bukan yang benar!',
    explanation: '2 x 3 = 6, bukan 7. Jadi jawaban D adalah yang SALAH.',
    difficulty: 2
  },

  // Level 16 - Time Puzzle
  {
    id: 16,
    type: 'input',
    illustration: '🕛 ➡️ 🕐',
    illustrationSize: 'text-5xl',
    question: 'Jam berapa jarum jam dan jarum menit bertemu kembali setelah jam 12:00?',
    answers: ['1:05', '01:05', '1.05', '01.05', 'jam 1 lewat 5', 'sekitar jam 1'],
    hint: 'Setelah jam 12, kapan kedua jarum bertemu lagi? Sekitar jam 1...',
    explanation: 'Kedua jarum bertemu sekitar jam 1:05 (tepatnya 1:05:27)',
    difficulty: 3
  },

  // Level 17 - Visual Trick
  {
    id: 17,
    type: 'tap',
    illustration: '💡💡💡☀️',
    illustrationSize: 'text-5xl',
    question: 'Nyalakan semua lampu!',
    items: [
      { id: 'bulb1', emoji: '💡', label: 'Lampu 1', on: false, correct: false },
      { id: 'bulb2', emoji: '💡', label: 'Lampu 2', on: false, correct: false },
      { id: 'bulb3', emoji: '💡', label: 'Lampu 3', on: false, correct: false },
      { id: 'sun', emoji: '☀️', label: 'Matahari', correct: true, isSolution: true }
    ],
    hint: 'Apa yang bisa menyalakan SEMUA lampu sekaligus?',
    explanation: 'Tap matahari untuk menyalakan semua lampu sekaligus!',
    difficulty: 3
  },

  // Level 18 - Logic Puzzle
  {
    id: 18,
    type: 'input',
    illustration: '👨‍👧‍👦 📅📅📅❓',
    illustrationSize: 'text-4xl',
    question: 'Ayah Budi punya 4 anak: Senin, Selasa, Rabu, dan... siapa anak ke-4?',
    answers: ['budi', 'Budi'],
    hint: 'Baca lagi pertanyaannya dari awal dengan teliti...',
    explanation: '"Ayah BUDI punya 4 anak" - Budi adalah salah satu anaknya!',
    difficulty: 2
  },

  // Level 19 - Action Puzzle
  {
    id: 19,
    type: 'action',
    illustration: '5️⃣ ➕ 5️⃣ ➕ 5️⃣ = 5️⃣5️⃣0️⃣',
    illustrationSize: 'text-3xl',
    question: 'Buat persamaan ini benar: 5 + 5 + 5 = 550',
    instruction: 'Tap di tempat yang tepat untuk menambahkan garis',
    equation: '5 + 5 + 5 = 550',
    hint: 'Kamu bisa menambahkan satu garis untuk mengubah tanda...',
    explanation: 'Tambahkan garis di tanda + pertama untuk membuatnya jadi 545 + 5 = 550!',
    solution: '545 + 5 = 550',
    difficulty: 4
  },

  // Level 20 - Final Boss
  {
    id: 20,
    type: 'multi',
    illustration: '🏆🎯🧠',
    illustrationSize: 'text-6xl',
    question: 'Level terakhir! Jawab 3 pertanyaan cepat:',
    subQuestions: [
      {
        q: '1. Warna apa yang dihasilkan dari campuran merah dan biru?',
        answers: ['ungu', 'purple', 'violet']
      },
      {
        q: '2. Berapa hasil dari 111 x 111?',
        answers: ['12321']
      },
      {
        q: '3. Planet apa yang paling dekat dengan matahari?',
        answers: ['merkurius', 'mercury']
      }
    ],
    hint: 'Ini level terakhir! Jawab semua dengan benar untuk menang!',
    explanation: 'Selamat! Kamu berhasil menyelesaikan semua level!',
    difficulty: 4
  }
];

export const getLevel = (id) => levels.find(level => level.id === id);

export const getTotalLevels = () => levels.length;
