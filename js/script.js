// Year in Website
const year = new Date().getFullYear();
const yearContainer = document.getElementById('year');
yearContainer.textContent = year;

// Scroll Effect
const arr = document.querySelectorAll('a');
const links = [];
arr.forEach(el => {
   if (el.classList.contains('nav-link')) links.push(el);
});

links.forEach(link => {
   let target = document.getElementById(link.href);
   target.addEventListener('click', function (e) {
      e.preventDefault();
      let element = document.getElementById(link.href);
      element.scrollIntoView({ behavior: 'smooth' });
   });
});
