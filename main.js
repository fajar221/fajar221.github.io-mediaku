var tombolThema = document.querySelector(".btn-theme");
  $(tombolThema).click(function() {
    document.body.classList.toggle('dark-thema');
    tombolThema.classList.toggle('ri-moon-line');
    tombolThema.classList.toggle('ri-sun-line');
  })