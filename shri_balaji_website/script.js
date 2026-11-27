const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    'Hello Shri Balaji Interior & Decorators,',
    '',
    'I would like to enquire about your services.',
    'Name: ' + data.get('name'),
    'Phone: ' + data.get('phone'),
    'Service: ' + data.get('service'),
    'Project details: ' + (data.get('details') || 'Not provided'),
    '',
    'Please contact me to discuss a quotation.'
  ].join('\\n');
  window.open('https://wa.me/919587936406?text=' + encodeURIComponent(message), '_blank');
});