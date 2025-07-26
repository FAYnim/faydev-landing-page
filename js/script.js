document.addEventListener('DOMContentLoaded', () => {

    // --- Fungsi Sidebar Navigasi ---
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.close-icon');
    const overlay = document.querySelector('.overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    const openSidebar = () => {
        sidebar.classList.add('show');
        overlay.classList.add('show');
    }
    const closeSidebar = () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    }

    menuIcon.addEventListener('click', openSidebar);
    closeIcon.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    sidebarLinks.forEach(link => link.addEventListener('click', closeSidebar));

    // --- Animasi Scroll Reveal ---
    const hiddenElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    hiddenElements.forEach((el) => observer.observe(el));

    // --- Sistem Multi-Bahasa ---
    const langData = {
        'id': {
            'nav_home': 'Beranda',
            'nav_about': 'Tentang',
            'nav_skills': 'Keahlian',
            'nav_portfolio': 'Portfolio',
            'nav_contact': 'Kontak',
            'hero_title': 'Menciptakan konten, tools, dan solusi teknologi dengan AI',
            'hero_tagline': 'Suka ngulik dan bikin tools praktis. Bantu kamu dengan AI, custom tools, dan insight investasi.',
            'hero_cta': 'Lihat Proyek',
            'about_title': 'Tentang Saya',
            'about_desc': `Saya seorang programmer dan crypto antusias dari Indonesia yang tertarik pada teknologi, AI, dan pembuatan alat-alat praktis. Saya senang memadukan logika dan kreativitas untuk menciptakan solusi yang efisien dan berdampak.<br><br>Saat ini, saya fokus pada integrasi AI ke dalam alur kerja, pengembangan alat khusus, dan berbagi konten teknologi yang bermanfaat. Saya percaya teknologi harus membantu orang bekerja lebih cerdas dan memecahkan masalah nyata.`,
            'skills_title': 'Keahlian (Tech Stack)',
            'portfolio_title': 'Portfolio',
            'p1_title': 'Aplikasi Jurnal Trading',
            'p1_desc': 'Aplikasi web untuk mencatat dan menganalisis riwayat trading.',
            'p2_title': 'WhatsApp AI Chatbot',
            'p2_desc': 'Chatbot WA menggunakan Node.js via Termux dengan integrasi AI.',
            'p3_title': 'Indikator Pompa IoT',
            'p3_desc': 'Sensor pompa air otomatis dengan notifikasi web dan MQTT.',
            'p4_title': 'Website Pribadi FX',
            'p4_desc': 'Website portofolio ini. Dibuat dengan HTML, CSS & JS.',
            'btn_demo': 'Demo',
            'btn_video': 'Video',
            'btn_source': 'Kode Sumber',
            'contact_title': 'Kontak',
            'contact_cta': 'Tertarik kerja sama atau ingin tahu lebih banyak? Hubungi saya.',
            'form_name': 'Nama Anda',
            'form_email': 'Email Anda',
            'form_message': 'Pesan Anda',
            'form_submit': 'Kirim Pesan'
        },
        'en': {
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_skills': 'Skills',
            'nav_portfolio': 'Portfolio',
            'nav_contact': 'Contact',
            'hero_title': 'Creating content, tools, and tech solutions with AI',
            'hero_tagline': 'Love exploring and creating practical tools. Let me assist you with AI, custom tools, and investment insights.',
            'hero_cta': 'View Projects',
            'about_title': 'About Me',
            'about_desc': `I’m a programmer and enthusiast from Indonesia, passionate about technology, AI, and building practical tools. I enjoy blending logic and creativity to create solutions that are both efficient and impactful.<br><br>Currently, I focus on integrating AI into workflows, developing custom tools, and sharing useful tech content. I believe tech should help people work smarter and solve real problems.`,
            'skills_title': 'Skills (Tech Stack)',
            'portfolio_title': 'Portfolio',
            'p1_title': 'Trading Journal App',
            'p1_desc': 'A web app to record and analyze trading history.',
            'p2_title': 'WhatsApp AI Chatbot',
            'p2_desc': 'WA chatbot using Node.js via Termux with AI integration.',
            'p3_title': 'IoT Pump Indicator',
            'p3_desc': 'Automatic water pump sensor with web and MQTT notifications.',
            'p4_title': 'FX Personal Website',
            'p4_desc': 'This portfolio website. Built with HTML, CSS & JS.',
            'btn_demo': 'Demo',
            'btn_video': 'Video',
            'btn_source': 'Source Code',
            'contact_title': 'Contact',
            'contact_cta': 'Interested in collaborating or want to know more? Contact me.',
            'form_name': 'Your Name',
            'form_email': 'Your Email',
            'form_message': 'Your Message',
            'form_submit': 'Send Message'
        }
    };

    const langButtons = document.querySelectorAll('.lang-switcher button');
    const translatableElements = document.querySelectorAll('[data-langkey]');

    const changeLanguage = (lang) => {
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-langkey');
            if (langData[lang] && langData[lang][key]) {
                if (el.placeholder) {
                    el.placeholder = langData[lang][key];
                } else {
                    el.innerHTML = langData[lang][key];
                }
            }
        });
        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });

    changeLanguage('en'); // Set bahasa default

    // --- Animasi Mengetik (Typing) ---
    const words = ["Programmer", "Crypto Enthusiast", "Content Creator"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingElement = document.getElementById("typing-animation");

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, j - 1);
            j--;
        } else {
            typingElement.textContent = currentWord.substring(0, j + 1);
            j++;
        }
        if (!isDeleting && j === currentWord.length) {
            setTimeout(() => isDeleting = true, 3000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, typingSpeed);
    }

    type();

    // --- Carousel Keahlian (Drag, Swipe & Auto-Scroll) ---
    const slider = document.querySelector('.skill-grid-wrapper');
    const pagination = document.querySelector('.carousel-pagination');

    if (slider && pagination) {
        const itemCount = slider.querySelectorAll('.skill-item').length;
        const itemsPerPage = 6; // 3 baris * 2 kolom
        const pageCount = Math.ceil(itemCount / itemsPerPage);
        let autoScrollInterval;

        // Hapus dot yang mungkin sudah ada untuk menghindari duplikasi
        pagination.innerHTML = '';

        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('pagination-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                slider.scrollTo({ left: i * slider.offsetWidth, behavior: 'smooth' });
            });
            pagination.appendChild(dot);
        }

        const dots = pagination.querySelectorAll('.pagination-dot');
        const updatePagination = () => {
            const currentPage = Math.round(slider.scrollLeft / slider.offsetWidth);
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentPage);
            });
        };
        slider.addEventListener('scroll', updatePagination);

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        const startAutoScroll = () => {
            stopAutoScroll(); // Hentikan interval sebelumnya untuk mencegah beberapa interval berjalan bersamaan
            autoScrollInterval = setInterval(() => {
                let currentPage = Math.round(slider.scrollLeft / slider.offsetWidth);
                let nextPage = (currentPage + 1) % pageCount; // Kembali ke 0 jika di akhir
                slider.scrollTo({ left: nextPage * slider.offsetWidth, behavior: 'smooth' });
            }, 3000); // Ganti setiap 3 detik
        };

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            stopAutoScroll(); // Hentikan auto-scroll saat user menekan mouse
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
            startAutoScroll(); // Mulai lagi saat mouse keluar dari area slider
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
            // Tidak perlu start di sini, karena akan ditangani oleh mouseleave
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Kecepatan scroll saat drag
            slider.scrollLeft = scrollLeft - walk;
        });

        // Tambahan: Berhenti saat mouse masuk, mulai lagi saat keluar
        slider.addEventListener('mouseenter', stopAutoScroll);

        startAutoScroll(); // Mulai auto-scroll pertama kali
    }

    // --- Load Proyek dari projects.json ---
    const loadProjects = async () => {
        try {
            const response = await fetch('data/projects.json');
            const projects = await response.json();
            
            // Urutkan proyek berdasarkan tanggal update (dupd) terbaru
            // `sort` akan mengurutkan array `projects`.
            // `new Date(b.dupd) - new Date(a.dupd)` akan mengurutkan dari tanggal terbaru ke terlama.
            projects.sort((a, b) => new Date(b.dupd) - new Date(a.dupd));

            // Ambil hanya 4 proyek pertama
            // `slice(0, 4)` akan mengambil elemen dari indeks 0 hingga sebelum indeks 4 (yaitu 4 elemen pertama).
            const limitedProjects = projects.slice(0, 4);

            const projectContainer = document.querySelector('.portfolio-grid'); // Asumsi ada elemen dengan class ini

            if (projectContainer) {
                // Gunakan `limitedProjects` yang sudah diurutkan dan dibatasi
                limitedProjects.forEach(project => {
                    const projectCard = document.createElement('div');
                    projectCard.classList.add('project-card', 'hidden');

                    let buttonsHtml = '';
                    if (project.demo_url) {
                        buttonsHtml += `<a href="${project.demo_url}" class="btn" target="_blank" rel="noreferrer"><i class="fas fa-eye"></i> <span data-langkey="btn_demo">Demo</span></a>`;
                    }
                    if (project.source_code_url) {
                        buttonsHtml += `<a href="${project.source_code_url}" class="btn" target="_blank" rel="noreferrer"><i class="fab fa-github"></i> GitHub</a>`;
                    }

                    // Memotong konten jika terlalu panjang, tanpa memotong kata
                    let displayContent = project.content;
                    const maxLength = 100;

                    if (displayContent && displayContent.length > maxLength) {
                        let truncated = displayContent.substring(0, maxLength);
                        // Cari spasi terakhir sebelum titik potong
                        let lastSpace = truncated.lastIndexOf(' ');

                        // Jika ada spasi, potong di spasi terakhir
                        if (lastSpace !== -1) {
                            displayContent = truncated.substring(0, lastSpace) + '...';
                        } else {
                            // Jika tidak ada spasi (kata terlalu panjang), potong langsung
                            displayContent = truncated + ' ...';
                        }
                    }

                    projectCard.innerHTML = `
                        <h3>${project.title}</h3>
                        <p>${displayContent}</p>
                        <div class="project-buttons">
                            ${buttonsHtml}
                        </div>
                    `;
                    projectContainer.appendChild(projectCard);
                });

                // Re-observe hidden elements for scroll reveal after adding new projects
                const newHiddenElements = document.querySelectorAll('.project-card.hidden');
                newHiddenElements.forEach((el) => observer.observe(el));

            } else {
                console.warn("Elemen '.portfolio-grid' tidak ditemukan. Pastikan ada elemen untuk menampung proyek.");
            }

        } catch (error) {
            console.error('Gagal memuat data proyek:', error);
        }
    };

    loadProjects(); // Panggil fungsi untuk memuat proyek saat DOM siap
});
