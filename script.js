// Remplace simplement les placeholders dans index.html
document.getElementById('year').textContent = new Date().getFullYear();

// Formulaire basique : ouvre le client mail (tu peux remplacer par un submit vers une API)
function sendMail(e){
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(`Contact portfolio - ${f.name.value}`);
  const body = encodeURIComponent(`${f.message.value}\n\nContact: ${f.name.value} - ${f.email.value}`);
  window.location.href = `mailto:[ton.email@example.com]?subject=${subject}&body=${body}`;
}

// --- NAVBAR PREMIUM ---
const burger = document.getElementById('burger');
const nav = document.querySelector('.main-nav');
const body = document.body;

function toggleNav() {
  const isOpen = burger.classList.toggle('open');
  nav.classList.toggle('open', isOpen);
  body.classList.toggle('nav-open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  if (isOpen) {
    // Focus first link
    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  } else {
    burger.focus();
  }
}

burger.addEventListener('click', toggleNav);

// Fermer le menu au clic sur un lien (mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 900 && nav.classList.contains('open')) {
      toggleNav();
    }
  });
});

// Accessibilité : fermer avec Echap
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    toggleNav();
  }
});

// Focus trap (nav ouverte)
document.addEventListener('keydown', function(e) {
  if (!nav.classList.contains('open')) return;
  if (e.key !== 'Tab') return;
  const focusable = nav.querySelectorAll('a');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    last.focus();
    e.preventDefault();
  } else if (!e.shiftKey && document.activeElement === last) {
    first.focus();
    e.preventDefault();
  }
});
