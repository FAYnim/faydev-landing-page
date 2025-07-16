const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');
const overlay = document.querySelector('.overlay');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
}
function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

menuIcon.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));

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
        'about_desc': `Saya seorang programmer dan trader dari Indonesia yang tertarik pada teknologi, AI, dan pembuatan alat-alat praktis. Saya senang memadukan logika dan kreativitas untuk menciptakan solusi yang efisien dan berdampak.<br><br>Saat ini, saya fokus pada integrasi AI ke dalam alur kerja, pengembangan alat khusus, dan berbagi konten teknologi yang bermanfaat. Saya percaya teknologi harus membantu orang bekerja lebih cerdas dan memecahkan masalah nyata.`,
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
        'about_desc': `I’m a programmer and trader from Indonesia, passionate about technology, AI, and building practical tools. I enjoy blending logic and creativity to create solutions that are both efficient and impactful.<br><br>Currently, I focus on integrating AI into workflows, developing custom tools, and sharing useful tech content. I believe tech should help people work smarter and solve real problems.`,
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

function changeLanguage(lang) {
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
}

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.getAttribute('data-lang');
        changeLanguage(selectedLang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');

    const words = ["Programmer", "Trader"];
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
});
