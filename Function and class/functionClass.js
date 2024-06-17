/*Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/
class Library {
    #books;

    constructor(initialBooks = []) {
        const uniqueBooks = new Set(initialBooks);
        if (uniqueBooks.size !== initialBooks.length) {
            throw new Error("Initial books list contains dublicates.");

        }
        this.#books = [...initialBooks];
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Books '${title}' is already in the library.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Book '${title}' is not found in the library.`);
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

try {
    const myLibrary = new Library(["To Kill", "1984"]);
    console.log(myLibrary.allBooks);
    myLibrary.addBook("The Great Gatsby");
    console.log(myLibrary.allBooks);
    myLibrary.removeBook("1984");
    console.log(myLibrary.allBooks);
    console.log(myLibrary.hasBook("To Kill"))
} catch (error) {
    console.error(error.message);

}

/*Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.*/

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе." },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            { id: "3", text: "Интересный дизайн, но дорогой." },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            { id: "4", text: "Люблю играть на PS5, графика на высоте." },
        ],
    },
];

function loadData() {
    const productSelect = document.getElementById('productSelect');
    initialData.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = item.product;
        productSelect.appendChild(option);
    });

    productSelect.addEventListener('change', () => {
        displayReviews(productSelect.value);
    });
    displayReviews(0);
}

function displayReviews(productIndex) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';

    const reviews = initialData[productIndex].reviews;
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.textContent = review.text;
        reviewsContainer.appendChild(reviewElement);
    });
}

function addReview() {
    const productSelect = document.getElementById('productSelect');
    const selectedProductIndex = productSelect.value;
    const input = document.getElementById('reviewInput');
    const text = input.value;

    try {

        if (text.length < 50 || text.length > 500) {
            throw new Error("Отзыв должен содержать от 50 до 500 символов.");
        }

        const newReview = { id: Date.now().toString(), text: text };
        initialData[selectedProductIndex].reviews.push(newReview);
        displayReviews(selectedProductIndex);

        input.value = '';

    } catch (error) {
        alert(error.message);
    }
}

window.onload = loadData;

