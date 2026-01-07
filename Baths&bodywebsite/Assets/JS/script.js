// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Reservation Form Handling =====
const form = document.getElementById('reservationForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  if(name && email && phone){
    alert(`Thank you, ${name}! Your reservation is received.`);
    form.reset();
  } else {
    alert('Please fill all fields before submitting.');
  }
});

// ===== Mobile Menu Toggle =====
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

if(menuBtn){
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    body.classList.toggle('no-scroll'); // prevent background scroll
  });
}

// ===== Fade-in Sections on Scroll =====
const faders = document.querySelectorAll('.fade-in');
const options = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
