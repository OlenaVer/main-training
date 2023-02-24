// Виведення повідомлення при кліку на товар
const products = document.querySelectorAll('.products article');
products.forEach(product => {
    product.addEventListener('click', () => {
        alert(`Ви клікнули на ${product.querySelector('h2').textContent} за ціною ${product.querySelector('.price').textContent}`);
    });
});