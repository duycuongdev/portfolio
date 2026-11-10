// ── AOS Init ──
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 750,
    once: true,
    offset: 70,
    easing: 'ease-out-cubic'
  });
}

// ── Navbar scroll effect ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Mobile menu toggle ──
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('.section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
});

// ── Trello Screenshot Gallery Tabs ──
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption-text');
const galleryUrl = document.getElementById('gallery-url');

if (galleryTabs.length && galleryImage) {
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const src = tab.dataset.src;
      const alt = tab.dataset.alt;
      const caption = tab.dataset.caption;
      const url = tab.dataset.url;

      galleryImage.style.opacity = '0.35';
      setTimeout(() => {
        galleryImage.src = src;
        galleryImage.alt = alt;
        if (galleryCaption) galleryCaption.textContent = caption;
        if (galleryUrl && url) galleryUrl.textContent = url;
        galleryImage.style.opacity = '1';
      }, 150);
    });
  });
}
