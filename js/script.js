document.addEventListener('DOMContentLoaded', () => {

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // ============ EDITABLE SECTION START: Multi-language Texts ============ 
    const langData = {
        'id': {
            'nav_home': 'Beranda',
            'nav_about': 'Tentang',
            'nav_skills': 'Keahlian',
            'nav_portfolio': 'Portfolio',
            'nav_contact': 'Kontak',
            'hero_title': 'Lorem Ipsum Dolor Sit Amet',
            'hero_tagline': 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'hero_cta': 'Lihat Proyek',
            'about_title': 'Tentang Saya',
            'about_desc': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
            'skills_title': 'Keahlian',
            'portfolio_title': 'Portfolio',
            'contact_title': 'Kontak',
            'contact_cta': 'Duis aute irure dolor in reprehenderit in voluptate.',
            'form_name': 'Nama Anda',
            'form_email': 'Email Anda',
            'form_message': 'Pesan Anda',
            'form_submit': 'Kirim Pesan',
            'btn_demo': 'Demo',
            'btn_source': 'Kode Sumber'
        },
        'en': {
            'nav_home': 'Home',
            'nav_about': 'About',
            'nav_skills': 'Skills',
            'nav_portfolio': 'Portfolio',
            'nav_contact': 'Contact',
            'hero_title': 'Lorem Ipsum Dolor Sit Amet',
            'hero_tagline': 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'hero_cta': 'View Projects',
            'about_title': 'About Me',
            'about_desc': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
            'skills_title': 'Skills',
            'portfolio_title': 'Portfolio',
            'contact_title': 'Contact',
            'contact_cta': 'Duis aute irure dolor in reprehenderit in voluptate.',
            'form_name': 'Your Name',
            'form_email': 'Your Email',
            'form_message': 'Your Message',
            'form_submit': 'Send Message',
            'btn_demo': 'Demo',
            'btn_source': 'Source Code'
        }
    };
    // ============ EDITABLE SECTION END: Multi-language Texts ============

    function initSidebar() {
        const menuIcon = $('.menu-icon');
        const sidebar = $('.sidebar');
        const closeIcon = $('.close-icon');
        const overlay = $('.overlay');
        const sidebarLinks = $$('.sidebar a');

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
    }

    function initScrollReveal() {
        const hiddenElements = $$('.hidden');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
        hiddenElements.forEach((el) => observer.observe(el));
        return observer; 
    }

    function initLanguageSwitcher() {
        const langButtons = $$('.lang-switcher button');
        const translatableElements = $$('[data-langkey]');

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

        changeLanguage('en');
    }

    function initTypingAnimation() {
        // ============ EDITABLE SECTION START: Typing Animation Words ============ 
        const words = ["Make Life Easier", "Solve Problems", "Create Solutions"];
        // ============ EDITABLE SECTION END: Typing Animation Words ============ 
        let i = 0, j = 0, currentWord = "", isDeleting = false;
        const typingElement = $("#typing-animation");

        if (!typingElement) return;

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
    }

    function initSkillsCarousel() {
        const slider = $('.skill-grid-wrapper');
        const pagination = $('.carousel-pagination');

        if (!slider || !pagination) return;

        const itemCount = slider.querySelectorAll('.skill-item').length;
        const itemsPerPage = 6;
        const pageCount = Math.ceil(itemCount / itemsPerPage);
        let autoScrollInterval;

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
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentPage));
        };
        slider.addEventListener('scroll', updatePagination);

        const stopAutoScroll = () => clearInterval(autoScrollInterval);
        const startAutoScroll = () => {
            stopAutoScroll();
            autoScrollInterval = setInterval(() => {
                let currentPage = Math.round(slider.scrollLeft / slider.offsetWidth);
                let nextPage = (currentPage + 1) % pageCount;
                slider.scrollTo({ left: nextPage * slider.offsetWidth, behavior: 'smooth' });
            }, 3000);
        };

        let isDown = false, startX, scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            stopAutoScroll();
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
            startAutoScroll();
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        slider.addEventListener('mouseenter', stopAutoScroll);
        startAutoScroll();
    }

    async function loadProjects(observer) {
        try {
            const response = await fetch('data/projects.json');
            const projects = await response.json();
            projects.sort((a, b) => new Date(b.dupd) - new Date(a.dupd));
            const limitedProjects = projects.slice(0, 4);
            const projectContainer = $('.portfolio-grid');

            if (!projectContainer) return;

            limitedProjects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card', 'hidden');

                let buttonsHtml = '';
                if (project.demo_url) {
                    buttonsHtml += `<a href="${project.demo_url}" class="btn" target="_blank" rel="noreferrer"><i class="fas fa-eye"></i> <span data-langkey="btn_demo">Demo</span></a>`;
                }
                if (project.source_code_url) {
                    buttonsHtml += `<a href="${project.source_code_url}" class="btn" target="_blank" rel="noreferrer"><i class="fab fa-github"></i> <span data-langkey="btn_source">Source Code</span></a>`;
                }

                let displayContent = project.content || '';
                const maxLength = 100;
                if (displayContent.length > maxLength) {
                    let truncated = displayContent.substring(0, maxLength);
                    let lastSpace = truncated.lastIndexOf(' ');
                    displayContent = (lastSpace !== -1) ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
                }

                projectCard.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${displayContent}</p>
                    <div class="project-buttons">${buttonsHtml}</div>
                `;
                projectContainer.appendChild(projectCard);
            });

            const newHiddenElements = $$('.project-card.hidden');
            newHiddenElements.forEach((el) => observer.observe(el));

        } catch (error) {
            console.error('Failed to load projects:', error);
        }
    }

    initSidebar();
    const scrollObserver = initScrollReveal();
    initLanguageSwitcher();
    initTypingAnimation();
    initSkillsCarousel();
    loadProjects(scrollObserver);
});