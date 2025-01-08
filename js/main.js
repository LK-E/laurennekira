(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    $(this).addClass(showClass)
                        .find('.dropdown-toggle').attr("aria-expanded", "true")
                        .end().find('.dropdown-menu').addClass(showClass);
                },
                function () {
                    $(this).removeClass(showClass)
                        .find('.dropdown-toggle').attr("aria-expanded", "false")
                        .end().find('.dropdown-menu').removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
    // Animation sur le header
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
        heroHeader.classList.add('animate');
        setTimeout(() => heroHeader.classList.remove('animate'), 3000);
    }

    // Rotation des mots
    const wordItems = document.querySelectorAll('.word-item');
    let currentWordIndex = 0;

    function rotateWords() {
        wordItems[currentWordIndex].classList.remove('active');
        currentWordIndex = (currentWordIndex + 1) % wordItems.length;
        wordItems[currentWordIndex].classList.add('active');
    }

    if (wordItems.length > 0) {
        setInterval(rotateWords, 2000);
    }

    
document.addEventListener('DOMContentLoaded', () => {
    const countdownKey = "countdownDate"; // Clé pour le stockage local

    // Fonction pour définir ou réinitialiser la date de fin à 9 jours
    function resetCountdown() {
        const now = new Date(); // Obtenir la date actuelle
        now.setDate(now.getDate() + 9); // Ajouter 9 jours
        const newCountdownDate = now.getTime(); // Convertir en millisecondes
        localStorage.setItem(countdownKey, newCountdownDate); // Sauvegarder dans le stockage local
        return newCountdownDate; // Retourner la nouvelle date
    }

    // Vérifier si une date existe déjà
    let countdownDate = localStorage.getItem(countdownKey);
    if (!countdownDate || parseInt(countdownDate, 10) < new Date().getTime()) {
        // Si aucune date ou si elle est expirée, réinitialiser à 9 jours
        countdownDate = resetCountdown();
    } else {
        // Convertir en entier si la date existe
        countdownDate = parseInt(countdownDate, 10);
    }

    // Fonction pour mettre à jour le compte à rebours
    function updateCountdown() {
        const now = new Date().getTime(); // Temps actuel en millisecondes
        const distance = countdownDate - now; // Calculer la différence

        if (distance < 0) {
            document.querySelector('.countdown').innerHTML = "Temps écoulé !";
            return;
        }

        // Calcul des jours, heures, minutes et secondes
        const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((distance % (1000 * 60)) / 1000);

        // Mise à jour de l'affichage
        document.getElementById("days").textContent = String(jours).padStart(2, '0');
        document.getElementById("hours").textContent = String(heures).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(secondes).padStart(2, '0');
    }

    // Mettre à jour toutes les secondes
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Gestion du bouton de réinitialisation
    document.getElementById('resetCountdown').addEventListener('click', () => {
        countdownDate = resetCountdown(); // Réinitialiser à 9 jours
        alert("Le compte à rebours a été réinitialisé à 9 jours !");
    });
});


// Gestion Google Maps (si nécessaire)
if (typeof google !== 'undefined' && google.maps) {
    const ngemeLimbe = { lat: 4.0173, lng: 9.2012 };
    const mapElement = document.getElementById("map");

    if (mapElement) {
        const map = new google.maps.Map(mapElement, {
            zoom: 14,
            center: ngemeLimbe
        });
        new google.maps.Marker({
            position: ngemeLimbe,
            map: map,
            title: "LKE"
        });
    }
}
