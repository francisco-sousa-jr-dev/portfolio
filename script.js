// Menu do celular
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

botaoMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
});

menu.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => menu.classList.remove('aberto'))
);

// Animação suave das seções ao rolar a página
const elementos = document.querySelectorAll('.secao, .card, .linha-tempo li');
elementos.forEach((el) => el.classList.add('revelar'));

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  elementos.forEach((el) => observador.observe(el));
} else {
  elementos.forEach((el) => el.classList.add('visivel'));
}
