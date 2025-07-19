<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'])) {
    // Pastikan file ini ada dan berisi fungsi sendEmail()
    // seperti yang diinstruksikan.
    $mailerPath = 'hosted/phpmailer/autoload.php';
    if (file_exists($mailerPath)) {
        require_once $mailerPath;

        $name = htmlspecialchars(strip_tags($_POST['nama']));
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        if (filter_var($email, FILTER_VALIDATE_EMAIL) && function_exists('sendEmail')) {
            $toEmail = $email;
            $toName = $name;
            $subject = "Pesan Anda akan direview";
            $body = "Halo " . $name . ",<br><br>Terima kasih telah menghubungi. Pesan Anda akan direview beberapa saat.<br><br>Terima kasih.";

            sendEmail($toEmail, $toName, $subject, $body);

            header("Location: " . $_SERVER['PHP_SELF'] . "?status=success#contact");
            exit();
        }
    }
    // Jika file tidak ada atau email tidak valid, redirect ke error.
    header("Location: " . $_SERVER['PHP_SELF'] . "?status=error#contact");
    exit();
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="description" content="Portofolio Faris, seorang Programmer dan Trader yang bersemangat dalam teknologi, AI, dan pengembangan solusi digital. Lihat proyek dan keahlian saya di sini.">
	<meta name="keywords" content="Faris, programmer, trader, portofolio, web developer, tech, AI, trading, crypto, Node.js, PHP, JavaScript, IoT, MQTT">
	<meta name="author" content="Faris">

	<meta property="og:title" content="Faris | Programmer & Trader">
	<meta property="og:description" content="Portofolio Faris, seorang Programmer dan Trader yang bersemangat dalam teknologi, AI, dan pengembangan solusi digital. Lihat proyek dan keahlian saya di sini.">
	<meta property="og:image" content="https://faydev.my.id/img/FAY_Motion.png">
	<meta property="og:url" content="https://faydev.my.id">
	<meta property="og:type" content="website">

    <title>Faris | Programmer & Trader</title>

	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/apple-touch-icon.png">

    <link rel="stylesheet" href="css/style.css">

    <script src="https://kit.fontawesome.com/6ae1bb73d0.js" crossorigin="anonymous"></script>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"></noscript>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Faris",
      "url": "https://faydev.my.id",
      "jobTitle": ["Programmer", "Trader"],
      "sameAs": [
        "https://www.github.com/FAYnim",
        "https://www.instagram.com/faris.a.y",
        "https://www.threads.net/@faris.a.y"
      ]
    }
    </script>
</head>
<body>

    <header class="header">
        <a href="#hero" class="logo">
            <img src="img/FAY_Motion.png" alt="Logo Faris - Programmer & Trader">
        </a>
        <div class="menu-icon">
            <i class="fas fa-bars"></i>
        </div>
    </header>

    <nav class="sidebar">
        <div class="close-icon">
            <i class="fas fa-times"></i>
        </div>

		<a href="#hero"><i class="fas fa-house"></i> <span data-langkey="nav_home">Home</span></a>
		<a href="#about"><i class="fas fa-user"></i> <span data-langkey="nav_about">Tentang</span></a>
		<a href="#skills"><i class="fas fa-cogs"></i> <span data-langkey="nav_skills">Keahlian</span></a>
		<a href="#portfolio"><i class="fas fa-briefcase"></i> <span data-langkey="nav_portfolio">Portfolio</span></a>
		<a href="#contact"><i class="fas fa-envelope"></i> <span data-langkey="nav_contact">Kontak</span></a>

        <div class="lang-switcher">
            <button data-lang="id" class="active">ID</button>
            <button data-lang="en">EN</button>
        </div>
    </nav>

    <div class="overlay"></div>

    <main>
        <section id="hero" class="hero-section">
            <div class="hero-content">
                <h1 class="hidden" data-langkey="hero_title">Creating content, tools, and tech solutions with AI</h1>
                <h2 class="role hidden">Faris | <span id="typing-animation"></span><span class="cursor">&nbsp;</span></h2>
                <p class="tagline hidden" data-langkey="hero_tagline">I enjoy exploring and creating practical tools. Let me assist you with AI, custom tools, and investment insights.</p>
                <a href="#portfolio" class="cta-button hidden" data-langkey="hero_cta">View Projects</a>
            </div>
        </section>

        <section id="about" class="content-section">
            <h2 class="hidden" data-langkey="about_title">Tentang Saya</h2>
            <div class="about-container hidden">
                <div class="about-photo">
                    <div class="about-photo-card">
                        <img src="img/FAY_Motion.png" alt="Foto Profil Faris">
                    </div>
                </div>
                <div class="about-text-content">
                    <p class="about-text" data-langkey="about_desc">
                        I’m a programmer and trader from Indonesia, passionate about technology, AI, and building practical tools. I enjoy blending logic and creativity to create solutions that are both efficient and impactful.

						Currently, I focus on integrating AI into workflows, developing custom tools, and sharing useful tech content. I believe tech should help people work smarter and solve real problems.
                    </p>
                </div>
            </div>
        </section>

        <section id="skills" class="content-section">
            <h2 class="hidden" data-langkey="skills_title">Keahlian (Tech Stack)</h2>
            <div class="skills-carousel-container">
                <div class="skill-grid-wrapper">
                    <div class="skill-grid">
                        <div class="skill-item hidden">HTML</div>
                        <div class="skill-item hidden">CSS</div>
                        <div class="skill-item hidden">JavaScript</div>
                        <div class="skill-item hidden">PHP</div>
                        <div class="skill-item hidden">MySQL</div>
                        <div class="skill-item hidden">Node.js</div>
                        <div class="skill-item hidden">Git & GitHub</div>
                        <div class="skill-item hidden">MQTT & IoT</div>
                        <div class="skill-item hidden">Canva</div>
                    </div>
                </div>
                <div class="carousel-pagination"></div>
            </div>
        </section>

        <section id="portfolio" class="content-section">
            <h2 class="hidden" data-langkey="portfolio_title">Portfolio</h2>
            <div class="portfolio-grid">
            </div>
        </section>

        <section id="contact" class="content-section">
            <h2 class="hidden" data-langkey="contact_title">Kontak</h2>
            <?php if (isset($_GET['status'])): ?>
                <?php if ($_GET['status'] == 'success'): ?>
                    <p style="color: green; text-align: center; margin-bottom: 1em;" data-langkey="contact_success">Pesan Anda berhasil dikirim. Terima kasih!</p>
                <?php elseif ($_GET['status'] == 'error'): ?>
                    <p style="color: red; text-align: center; margin-bottom: 1em;" data-langkey="contact_error">Gagal mengirim pesan. Silakan coba lagi.</p>
                <?php endif; ?>
            <?php endif; ?>
            <p class="contact-cta hidden" data-langkey="contact_cta">Tertarik kerja sama atau ingin tahu lebih banyak? Hubungi saya.</p>
            <form class="contact-form hidden" method="POST" action="index.php#contact">
                <input type="text" name="nama" data-langkey="form_name" placeholder="Nama Anda" required>
                <input type="email" name="email" data-langkey="form_email" placeholder="Email Anda" required>
                <textarea name="pesan" rows="5" data-langkey="form_message" placeholder="Pesan Anda" required></textarea>
                <button type="submit" class="cta-button" data-langkey="form_submit">Kirim Pesan</button>
            </form>
            <div class="social-links hidden">
                <a href="https://www.github.com/FAYnim" target="_blank" rel="noopener noreferrer" title="GitHun FAYnim"><i class="fab fa-github"></i></a>
                <a href="https://www.instagram.com/faris.a.y" target="_blank" rel="noopener noreferrer" title="Instagram faris.a.y"><i class="fab fa-instagram"></i></a>
                <a href="https://www.threads.net/@faris.a.y" target="_blank" rel="noopener noreferrer" title="Threads faris.a.y"><i class="fab fa-threads"></i></a>
            </div>
        </section>
    </main>

    <script src="js/script.js" defer></script>
</body>
</html>
