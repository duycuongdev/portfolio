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
const updateNavbarScroll = () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', updateNavbarScroll, { passive: true });
updateNavbarScroll();

// ── Mobile menu toggle ──
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const setMobileMenuState = isOpen => {
  if (!hamburger || !navMenu) return;
  hamburger.classList.toggle('active', isOpen);
  navMenu.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
};

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    setMobileMenuState(!navMenu.classList.contains('active'));
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMobileMenuState(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      setMobileMenuState(false);
    }
  });

  document.addEventListener('click', e => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      setMobileMenuState(false);
    }
  });
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const updateActiveSection = () => {
  if (!sections.length) return;
  const atPageBottom = window.scrollY > 120 && (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 20);
  const scrollY = window.scrollY + 120;
  let currentId = '';

  if (atPageBottom) {
    currentId = sections[sections.length - 1].getAttribute('id');
  } else {
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });
  }

  navLinks.forEach(link => {
    link.classList.toggle('active', currentId !== '' && link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', updateActiveSection, { passive: true });
updateActiveSection();

// ── Trello Screenshot Gallery Tabs ──
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption-text');
const galleryUrl = document.getElementById('gallery-url');

if (galleryTabs.length && galleryImage) {
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

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
      }, 140);
    });
  });

  // Warm browser cache for secondary gallery tabs once initial page load completes
  window.addEventListener('load', () => {
    galleryTabs.forEach(tab => {
      const src = tab.dataset.src;
      if (src && !tab.classList.contains('active')) {
        const img = new Image();
        img.src = src;
      }
    });
  });
}
