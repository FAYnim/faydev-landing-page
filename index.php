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

    <!-- ============ EDITABLE SECTION START: SEO & Metadata ============ -->
	<meta name="description" content="Portfolio of John Doe, a passionate Programmer and Trader in technology, AI, and digital solutions development. See my projects and skills here.">
	<meta name="keywords" content="John Doe, programmer, trader, portfolio, web developer, tech, AI, trading, crypto, Node.js, PHP, JavaScript, IoT, MQTT">
	<meta name="author" content="John Doe">

	<meta property="og:title" content="John Doe | Programmer & Crypto">
	<meta property="og:description" content="Portfolio of John Doe, a passionate Programmer and Trader in technology, AI, and digital solutions development. See my projects and skills here.">
	<meta property="og:image" content="">
	<meta property="og:url" content="">
	<meta property="og:type" content="website">

    <title>John Doe | Programmer & Crypto Enthusiast</title>
    <!-- ============ EDITABLE SECTION END: SEO & Metadata ============ -->

	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/apple-touch-icon.png">

    <link rel="stylesheet" href="css/style.css">

    <script src="https://kit.fontawesome.com/6ae1bb73d0.js" crossorigin="anonymous"></script>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"></noscript>

    <!-- ============ EDITABLE SECTION START: Schema.org Markup ============ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "John Doe",
      "url": "",
      "jobTitle": ["Programmer", "Trader", "Crypto Enthusiast"],
      "sameAs": [
        "https://www.github.com/johndoe",
        "https://www.instagram.com/johndoe",
        "https://www.threads.net/@johndoe"
      ]
    }
    </script>
    <!-- ============ EDITABLE SECTION END: Schema.org Markup ============ -->
</head>
<body>

    <header class="header">
        <a href="#hero" class="logo">
            <!-- ============ EDITABLE SECTION START: Logo Image ============ -->
            <img src="https://i.pravatar.cc/300" alt="Logo John Doe - Programmer & Trader">
            <!-- ============ EDITABLE SECTION END: Logo Image ============ -->
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
                <!-- ============ EDITABLE SECTION START: Hero Text ============ -->
                <h1 class="hidden" data-langkey="hero_title">Creating content, tools, and tech solutions with AI</h1>
                <h2 class="role hidden">John Doe | <span id="typing-animation"></span><span class="cursor">&nbsp;</span></h2>
                <p class="tagline hidden" data-langkey="hero_tagline">I enjoy exploring and creating practical tools. Let me assist you with AI, custom tools, and investment insights.</p>
                <!-- ============ EDITABLE SECTION END: Hero Text ============ -->
                <div class="hero-buttons">
                    <a href="#portfolio" class="cta-button hidden" data-langkey="hero_cta">View Projects</a>
                    <!-- ============ EDITABLE SECTION START: My Store Link ============ -->
                    <a href="#" target="_blank" rel="noopener noreferrer" class="cta-button hidden">My Store</a>
                    <!-- ============ EDITABLE SECTION END: My Store Link ============ -->
                </div>
            </div>
        </section>

        <section id="about" class="content-section">
            <h2 class="hidden" data-langkey="about_title">Tentang Saya</h2>
            <div class="about-container hidden">
                <div class="about-photo">
                    <div class="about-photo-card">
                        <!-- ============ EDITABLE SECTION START: Profile Photo ============ -->
                        <img src="https://i.pravatar.cc/300" alt="Profile Photo John Doe">
                        <!-- ============ EDITABLE SECTION END: Profile Photo ============ -->
                    </div>
                </div>
                <div class="about-text-content">
                    <!-- ============ EDITABLE SECTION START: About Text ============ -->
                    <p class="about-text" data-langkey="about_desc">
                        I’m a programmer and crypto enthusiast from Indonesia, passionate about technology, AI, and building practical tools. I enjoy blending logic and creativity to create solutions that are both efficient and impactful.

						Currently, I focus on integrating AI into workflows, developing custom tools, and sharing useful tech content. I believe tech should help people work smarter and solve real problems.
                    </p>
                    <!-- ============ EDITABLE SECTION END: About Text ============ -->
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
            <!-- ============ EDITABLE SECTION START: Social Links ============ -->
            <div class="social-links hidden">
                <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub JohnDoe"><i class="fab fa-github"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Instagram johndoe"><i class="fab fa-instagram"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Threads @johndoe"><i class="fab fa-threads"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn John Doe"><i class="fab fa-linkedin"></i></a>
            </div>
            <!-- ============ EDITABLE SECTION END: Social Links ============ -->
        </section>
    </main>

    <script src="js/script.js" defer></script>
</body>
</html>
