# Portofolio Pribadi - faydev.my.id

## Deskripsi Singkat

Ini adalah proyek website portofolio pribadi yang menampilkan informasi tentang saya, keahlian, proyek yang pernah dikerjakan, dan cara menghubungi saya. Website ini dirancang untuk menjadi ringan, responsif, dan informatif.

## Fitur Utama / Tujuan

*   **Desain Responsif:** Tampilan yang baik di berbagai perangkat (desktop, tablet, mobile).
*   **Multi-Bahasa:** Mendukung Bahasa Indonesia dan Inggris.
*   **Portofolio Dinamis:** Daftar proyek diambil dari database dan ditampilkan secara dinamis.
*   **Formulir Kontak:** Pengunjung dapat mengirim pesan melalui formulir kontak dengan notifikasi email.
*   **Animasi Interaktif:** Menggunakan animasi halus untuk meningkatkan pengalaman pengguna.

## Cara Instalasi

Proyek ini tidak memerlukan instalasi yang kompleks di sisi klien. Cukup buka di browser. Untuk menjalankannya di server sendiri:

1.  **Clone Repository:**
    ```bash
    git clone https://github.com/FAYnim/faydev.my.id.git
    ```
2.  **Setup Database:**
    - Buat database baru (misal: `my_portfolio`).
    - Impor struktur tabel dari file `.sql` yang tersedia (jika ada) atau buat tabel `project_content` secara manual.
    - Sesuaikan detail koneksi database di `db.php`.
3.  **Jalankan Cron Job:**
    - Atur cron job untuk menjalankan `cron/get-projects.php` secara berkala (misal: setiap jam) untuk memperbarui file `data/projects.json` dari database.
    ```bash
    * * * * * php /path/to/your/project/cron/get-projects.php
    ```
4.  **Web Server:**
    - Arahkan web server (Apache, Nginx, dll.) ke direktori utama proyek.

## Cara Penggunaan

Setelah website diakses, pengguna dapat:
- **Navigasi:** Menggunakan menu untuk pindah ke bagian Beranda, Tentang, Keahlian, Portofolio, dan Kontak.
- **Ganti Bahasa:** Mengklik tombol "ID" atau "EN" untuk mengubah bahasa konten.
- **Lihat Proyek:** Men-scroll ke bagian portofolio untuk melihat proyek-proyek terbaru.
- **Hubungi Saya:** Mengisi dan mengirim formulir di bagian kontak.

## Struktur Folder / Arsitektur

```
/
├── cron/
│   └── get-projects.php  # Skrip untuk mengambil data proyek dari DB
├── css/
│   └── style.css         # File styling utama
├── data/
│   └── projects.json     # Data proyek dalam format JSON (dihasilkan oleh cron)
├── img/
│   └── ...               # Aset gambar
├── js/
│   └── script.js         # Logika interaktif frontend (navigasi, bahasa, dll)
├── .git/                 # Folder repositori Git
├── db.php                # Konfigurasi dan logika koneksi database
├── index.php             # Halaman utama dan logika form kontak
├── README.md             # File ini
└── ...                   # File lain (robots.txt, sitemap.xml, dll)
```

## Konfigurasi

- **Koneksi Database:** Detail koneksi ke database (host, username, password, nama database) diatur di dalam file `db.php`.
- **Email Notifikasi:** Logika pengiriman email untuk formulir kontak berada di `index.php` dan memerlukan konfigurasi lebih lanjut jika menggunakan library seperti PHPMailer.

## Dependensi / Teknologi yang Digunakan

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6)
- **Backend:**
  - PHP
  - MySQL (atau database SQL lainnya)
- **Lainnya:**
  - Font Awesome (untuk ikon)
  - Google Fonts
  - Git & GitHub (untuk kontrol versi)

## Kontributor / Kontak

- **Pemilik / Pengembang Utama:** Faris A. Y.
- **GitHub:** [@FAYnim](https://github.com/FAYnim)
- **Instagram:** [@faris.a.y](https://www.instagram.com/faris.a.y/)
