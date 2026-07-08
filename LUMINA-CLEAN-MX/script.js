const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {

enlace.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});