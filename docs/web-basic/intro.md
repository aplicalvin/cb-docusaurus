
# Pengantar Web Development

## 1. Apa Itu Website?

Website adalah sekumpulan halaman web yang saling berhubungan, umumnya berada pada satu server (peladen) yang sama, dan berisi kumpulan informasi yang dapat diakses melalui internet menggunakan browser.

Setiap website memiliki alamat unik yang disebut **URL** (Uniform Resource Locator), misalnya `https://www.contoh.com`.

> **Istilah Penting:**
> - **Browser** — Perangkat lunak yang menerjemahkan berkas HTML, CSS, dan JavaScript dari server menjadi tampilan halaman web.
> - **HTTP Server** — Server yang menerima permintaan (request) dari client melalui protokol HTTP.
> - **DNS Server** — Server yang mengubah nama domain menjadi alamat IP numerik.
> - **Client** — Perangkat (browser) yang meminta layanan ke server.

---

## 2. Mengapa Website Itu Ada?

Website diciptakan untuk berbagai kebutuhan:

- **Informasi** — Menyediakan informasi tentang produk, layanan, kegiatan, dan berita terkini (perusahaan, organisasi, institusi pendidikan, pemerintah).
- **Komunikasi & Interaksi** — Memungkinkan komunikasi dua arah antara pengguna dan pemilik website.
- **E-Commerce** — Platform jual beli produk dan jasa secara online.
- **Hiburan & Konten Kreatif** — Menyediakan konten hiburan, artikel, video, dan media lainnya.
- **Layanan Digital** — Portal layanan publik, e-learning, bank online, dan lain-lain.

### Evolusi Web

| Generasi | Era | Ciri Khas |
|----------|-----|-----------|
| **Web 1.0** | 1990–2004 | Satu arah: pembuat memberi informasi, pengguna hanya membaca (seperti koran digital). |
| **Web 2.0** | 2004–sekarang | Interaktif: pengguna berpartisipasi aktif (media sosial, blog, UGC). |
| **Web 3.0** | Masa depan | Web semantik + AI: internet yang lebih memahami konten dan hubungan antar data. |

---

## 3. Domain vs Hosting

Keduanya adalah komponen **wajib** agar website bisa diakses di internet, tetapi memiliki fungsi berbeda:

| Aspek | **Domain** | **Hosting** |
|-------|-----------|-------------|
| **Fungsi** | Alamat/nama website (misal: `contoh.com`) | Tempat penyimpanan file website di server |
| **Analogi** | Alamat rumah | Lahan/bangunan rumah |
| **Biaya** | Sekali per tahun (registrasi) | Berlangganan (bulanan/tahunan) |
| **Contoh Provider** | GoDaddy, Namecheap, Niagahoster, Rumahweb | AWS, DigitalOcean, cPanel, Vercel, Netlify |
| **Teknis** | Diarahkan ke IP server via **DNS record** | Menyimpan file HTML, CSS, JS, gambar, database |

### Bagaimana Keduanya Bekerja Bersama?

1. User mengetik `contoh.com` di browser.
2. Browser meminta **DNS** untuk menerjemahkan `contoh.com` → IP server (misal `192.168.1.1`).
3. Browser mengirim **request HTTP** ke server di IP tersebut.
4. **Hosting/server** mengirimkan file website (HTML, CSS, JS) ke browser.
5. Browser **merender** dan menampilkan halaman.

---

## 4. Anatomi Website: Tiga Fondasi Utama

| Teknologi | Peran | Analogi |
|-----------|-------|---------|
| **HTML** (Hypertext Markup Language) | Struktur & konten halaman | Kerangka tulang |
| **CSS** (Cascading Style Sheets) | Tampilan, warna, layout | Pakaian & dekorasi |
| **JavaScript** | Interaktivitas & logika dinamis | Otot & saraf |

### Contoh Sederhana

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Halaman Pertama Saya</title>
  <style>
    body { font-family: sans-serif; text-align: center; }
    h1 { color: #2c3e50; }
    button { padding: 10px 20px; cursor: pointer; }
  </style>
</head>
<body>
  <h1 id="judul">Halo, Dunia!</h1>
  <button onclick="ubahTeks()">Klik Saya</button>

  <script>
    function ubahTeks() {
      document.getElementById("judul").textContent = "Anda baru saja berinteraksi!";
    }
  </script>
</body>
</html>
```

---

## 5. Front-End vs Back-End

| Aspek | **Front-End** | **Back-End** |
|-------|--------------|-------------|
| **Lokasi** | Di sisi browser (client) | Di sisi server |
| **Fokus** | Tampilan & interaksi pengguna | Logika, data, keamanan |
| **Teknologi** | HTML, CSS, JavaScript, React, Vue, Angular | Node.js, PHP, Python, Java, Go |
| **Database** | — | MySQL, PostgreSQL, MongoDB |
| **Contoh Tugas** | Membuat layout responsif, animasi, validasi form | Membuat API, mengelola database, autentikasi |

> **Full-Stack Developer** = menguasai keduanya.

---

## 6. Cara Kerja Website (Request–Response Cycle)

```
┌──────────┐         ┌──────────┐         ┌──────────────┐
│  Browser │ ──────► │   DNS    │ ──────► │    Server    │
│ (Client) │ ◄────── │ Server   │ ◄────── │  (Hosting)   │
└──────────┘         └──────────┘         └──────────────┘
     │                                          │
     │  1. User mengetik URL                    │
     │  2. DNS resolve nama → IP                │
     │  3. HTTP Request dikirim                 │
     │  4. Server memproses & kirim response    │
     │  5. Browser render HTML/CSS/JS           │
```

---

## 7. Jenis-Jenis Website

| Jenis | Deskripsi | Contoh |
|-------|-----------|--------|
| **Statis** | Konten tetap, tidak berubah tanpa edit manual | Landing page, portfolio |
| **Dinamis** | Konten berubah berdasarkan input/permintaan | Situs berita, e-commerce |
| **Interaktif** | Pengguna dapat berinteraksi langsung | Media sosial, forum |
| **Aplikasi Web (SPA)** | Satu halaman, data dimuat dinamis | Gmail, Trello |

---

## 8. Langkah Awal Menjadi Web Developer

1. **Kuasai HTML & CSS** — Fondasi struktur dan tampilan.
2. **Pelajari JavaScript** — Menambah interaktivitas.
3. **Pilih framework front-end** — React, Vue, atau Angular.
4. **Pelajari back-end** — Node.js, PHP, atau Python.
5. **Pahami database** — SQL (MySQL, PostgreSQL) atau NoSQL (MongoDB).
6. **Kuasai Git & Deployment** — Git/GitHub untuk version control; deploy ke Vercel, Netlify, atau cloud.

---

## Ringkasan

> Website adalah gabungan dari **domain** (alamat), **hosting** (penyimpanan), **HTML** (struktur), **CSS** (tampilan), dan **JavaScript** (interaktivitas) yang bekerja sama melalui protokol HTTP untuk menyajikan informasi kepada pengguna di seluruh dunia.
```

Materi di atas sudah mencakup poin-poin yang Anda minta (apa itu website, mengapa ada, domain vs hosting) plus tambahan anatomi website, front-end vs back-end, cara kerja request-response, jenis website, dan roadmap belajar — semuanya dalam format Markdown yang kompatibel dengan GitBook. Anda bisa langsung paste ke file `.md` di GitBook.

