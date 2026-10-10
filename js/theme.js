(function () {
    const bouton = document.getElementById('toggle-theme');
    if (!bouton) return;
  
    const racine = document.documentElement;
  
    if (localStorage.getItem('theme') === 'dark') {
      racine.setAttribute('data-theme', 'dark');
    }
  
    bouton.addEventListener('click', function () {
      if (racine.getAttribute('data-theme') === 'dark') {
        racine.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        racine.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  })();