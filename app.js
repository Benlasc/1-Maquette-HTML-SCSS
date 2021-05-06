(function () {
    let button = document.querySelector('.header__button');
    button.addEventListener('click', function () {
        button.classList.toggle('show');
    })
    let posters = document.querySelectorAll('.movie__poster');
    posters.forEach(function (poster) {
        poster.scrollTop = poster.scrollHeight * 0.45
    });

    let forms = document.querySelectorAll(".form");

    forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            alert('Votre formulaire a bien été envoyé.');
        });
    });
})();

