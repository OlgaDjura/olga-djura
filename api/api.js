function addReview() {
    const productName = document.getElementById('productName').value;
    const productReview = document.getElementById('productReview').value;

    if (productName && productReview) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
        if (!reviews[productName]) {
            reviews[productName] = [];
        }
        reviews[productName].push(productReview);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        document.getElementById('productName').value = '';
        document.getElementById('productReview').value = '';
        displayProducts();
    } else {
        alert('Пожалуйста, заполните все поля!');
    }
}

function displayProducts() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';
    for (let product in reviews) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${product}</strong> (<a href="#" onclick="displayReviews('${product}')">Показать отзывы</a>)`;
        productsList.appendChild(li);
    }
}

function displayReviews(productName) {
    const reviews = JSON.parse(localStorage.getItem('reviews'))[productName];
    if (reviews) {
        alert(reviews.join('\n'));
    }
}

document.addEventListener('DOMContentLoaded', displayProducts);