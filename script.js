// Simple carousel for testimonials on Home page
(function () {
  const container = document.querySelector('[data-carousel]');
  if (!container) return;
  const slides = Array.from(container.querySelectorAll('.slide'));
  let i = 0;

  function show(index) {
    slides.forEach((s, idx) => s.style.display = idx === index ? 'block' : 'none');
  }
  show(i);

  container.querySelector('[data-prev]')?.addEventListener('click', () => {
    i = (i - 1 + slides.length) % slides.length;
    show(i);
  });
  container.querySelector('[data-next]')?.addEventListener('click', () => {
    i = (i + 1) % slides.length;
    show(i);
  });
})();

// Shop filters (very basic demo)
(function () {
  const grid = document.querySelector('[data-products]');
  if (!grid) return;

  const ageSelect = document.querySelector('#filter-age');
  const genderSelect = document.querySelector('#filter-gender');
  const priceSelect = document.querySelector('#filter-price');
  const occasionSelect = document.querySelector('#filter-occasion');

  function applyFilters() {
    const age = ageSelect.value;
    const gender = genderSelect.value;
    const price = priceSelect.value;
    const occasion = occasionSelect.value;

    grid.querySelectorAll('.card').forEach(card => {
      const okAge = age === 'all' || card.dataset.age === age;
      const okGender = gender === 'all' || card.dataset.gender === gender;
      const okOccasion = occasion === 'all' || card.dataset.occasion === occasion;
      const priceVal = Number(card.dataset.price || 0);
      let okPrice = true;
      if (price === 'low') okPrice = priceVal < 10000;
      if (price === 'mid') okPrice = priceVal >= 10000 && priceVal <= 25000;
      if (price === 'high') okPrice = priceVal > 25000;

      card.style.display = (okAge && okGender && okOccasion && okPrice) ? '' : 'none';
    });
  }

  [ageSelect, genderSelect, priceSelect, occasionSelect].forEach(el => el.addEventListener('change', applyFilters));
  applyFilters();
})();

// WhatsApp inquiry buttons
(function () {
  document.querySelectorAll('[data-whatsapp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = encodeURIComponent(btn.dataset.msg || 'Hello Umm Zahra Boutique!');
      const phone = '2349017254986'; // WhatsApp number
      window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, '_blank');
    });
  });
})();
