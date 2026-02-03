/* =========================
   Smooth Scroll Navigation
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


/* =========================
   CTA Button Interaction
========================= */
const ctaBtn = document.getElementById('ctaBtn');
ctaBtn.addEventListener('click', () => {
  alert('Thanks for getting started!');
});


/* =========================
   Staggered Scroll Reveal
========================= */
const animatedElements = document.querySelectorAll('section, .feature-card');

animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'all 0.8s ease';
});

const revealOnScroll = () => {
  let delay = 0;

  animatedElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay);
      delay += 120;
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


/* =========================
   Feature Card Hover Effects
========================= */
document.querySelectorAll('.feature-card').forEach(card => {
  const title = card.querySelector('.feature-title');

  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
    title.style.color = '#facc15'; // yellow-400
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    title.style.color = '';
  });
});


/* =========================
   Navbar Shrink on Scroll
========================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.replace('py-4', 'py-2');
  } else {
    navbar.classList.replace('py-2', 'py-4');
  }
});


/* =========================
   Back To Top Button
========================= */
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('hidden', window.scrollY < 300);
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
