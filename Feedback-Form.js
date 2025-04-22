document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Заполните все поля!");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Введите корректный адрес электронной почты.");
        return;
    }

    alert("Спасибо за ваш отзыв! Мы с вами свяжемся.");
    this.reset();
});
