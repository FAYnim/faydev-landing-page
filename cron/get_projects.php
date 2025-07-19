<?php

require_once '../db.php';

header('Content-Type: application/json');

try {
    $db = new Database();

    $sql = "SELECT title, content FROM project_content";
    $projects = $db->db_fetch($sql);

    if ($projects === false) {
        echo json_encode(["error" => "Gagal mengambil data dari database: " . $db->getError()]);
    } else {
        $json_data = json_encode($projects, JSON_PRETTY_PRINT);
        if ($json_data === false) {
            echo json_encode(["error" => "Gagal mengkonversi data ke JSON: " . json_last_error_msg()]);
        } else {
            file_put_contents('project.json', $json_data);
            echo json_encode(["message" => "Data berhasil disimpan ke project.json", "data" => $projects]);
        }
    }

} catch (Exception $e) {
    echo json_encode(["error" => "Terjadi kesalahan: " . $e->getMessage()]);
}

?>
