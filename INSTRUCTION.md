# Panduan Instalasi & Konfigurasi Template Portofolio

Ikuti langkah-langkah di bawah ini untuk mengkonfigurasi dan mempersonalisasi template portofolio ini.

## Langkah 1: Unduh dan Ekstrak

Unduh file template ini dalam format ZIP dan ekstrak ke folder di mana Anda ingin menyimpan proyek ini.

## Langkah 2: Personalisasi Konten

Buka file `index.php` dengan editor teks atau kode favorit Anda. Cari dan ganti teks placeholder berikut:

-   **Nama**: Ganti semua kemunculan `John Doe` dengan nama Anda.
-   **Judul & Deskripsi**: Ubah konten tag `<title>` dan `<meta name="description">` agar sesuai dengan profil Anda.
-   **Tautan Media Sosial**: Di bagian bawah file, cari tautan sosial media dan ganti `#` dengan URL profil Anda yang sebenarnya.
-   **Gambar**: Ganti path gambar di dalam tag `<img>` agar sesuai dengan nama file gambar yang Anda siapkan di folder `img/`.

## Langkah 3: Perbarui Proyek Portofolio

Buka file `data/projects.json`. File ini berisi daftar proyek Anda dalam format JSON. Anda bisa mengubah contoh yang ada atau menambahkan yang baru dengan format yang sama:

```json
{
  "title": "Nama Proyek Anda",
  "thumbnail": "img/nama-gambar-proyek.png",
  "content": "Deskripsi singkat tentang proyek Anda.",
  "demo_url": "#", // Tautan ke demo langsung
  "source_code_url": "#" // Tautan ke kode sumber
}
```

## Langkah 4: Ganti Gambar

Buka folder `img/` dan ganti semua gambar di dalamnya dengan gambar Anda sendiri:

-   **Logo**: Ganti file logo.
-   **Foto Profil**: Ganti gambar profil.
-   **Favicon**: Ganti `favicon.ico` dan `apple-touch-icon.png`.

## Langkah 5 (Opsional): Konfigurasi Formulir Kontak

Formulir kontak di `index.php` memerlukan sedikit konfigurasi di sisi server jika Anda ingin menggunakannya.

1.  **Hosting**: Pastikan hosting Anda mendukung PHP.
2.  **Skrip Email**: Template ini dirancang untuk bekerja dengan skrip pengirim email (seperti PHPMailer). Anda perlu mengunggah library tersebut ke server Anda dan memastikan path di `index.php` (`$mailerPath`) sudah benar.
3.  **Alamat Email**: Konfigurasikan skrip email untuk mengirim notifikasi ke alamat email Anda.

Jika Anda tidak ingin menggunakan formulir kontak, Anda bisa menghapus bagian `<form>` dari `index.php`.

## Langkah 6: Unggah ke Server

Setelah semua konfigurasi selesai, unggah semua file dan folder ke server web Anda. Portofolio Anda sekarang sudah online!
