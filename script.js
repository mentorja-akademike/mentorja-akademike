document.querySelectorAll('a.navlink').forEach(a=>{
  const here = location.pathname.split('/').pop() || 'index.html';
  if(a.getAttribute('href') === here) a.classList.add('active');
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent = new Date().getFullYear());