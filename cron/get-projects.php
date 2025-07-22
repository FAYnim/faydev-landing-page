<?php

// Sertakan file koneksi database
require_once __DIR__ . '/../db.php';

// Tentukan path untuk file JSON
$jsonFilePath = __DIR__ . '/../data/projects.json';

try {
    // Buat instance database
    $db = new Database();

    // Query untuk mengambil semua data dari tabel project_content
    $sql = "SELECT * FROM project_content";
    $projects = $db->db_fetch($sql);

    // Periksa apakah ada error saat mengambil data
    if ($projects === false) {
        error_log("Error fetching projects from database: " . $db->getError());
        exit("Gagal mengambil data proyek.");
    }

    // Ubah data menjadi format JSON
    $jsonData = json_encode($projects, JSON_PRETTY_PRINT);

    // Periksa apakah ada error saat meng-encode JSON
    if ($jsonData === false) {
        error_log("Error encoding projects to JSON: " . json_last_error_msg());
        exit("Gagal mengonversi data ke JSON.");
    }

    // Simpan data JSON ke file
    if (file_put_contents($jsonFilePath, $jsonData) === false) {
        error_log("Error writing projects to JSON file: " . $jsonFilePath);
        exit("Gagal menyimpan data ke file JSON.");
    }

	echo $jsonData;

	echo "\n\n";

    echo "Data proyek berhasil disimpan ke " . $jsonFilePath;

} catch (Exception $e) {
    // Tangani error koneksi database atau error lainnya
    error_log("Database connection or other error: " . $e->getMessage());
    exit("Terjadi kesalahan: " . $e->getMessage());
}

?>
