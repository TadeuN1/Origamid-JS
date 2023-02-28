const div = document.querySelector('div');
// const h1 = document.querySelector('[data-cor]');

div.dataset.height = 1000;

delete div.dataset.width
console.log(div.dataset);

