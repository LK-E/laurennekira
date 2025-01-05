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
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
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
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
    // Animation sur le header
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
        heroHeader.classList.add('animate'); // Activer
        setTimeout(() => {
            heroHeader.classList.remove('animate'); // Désactiver après un délai
        }, 3000);
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

const countdownKey = "countdownDate"; // Clé pour le stockage local

// Réinitialiser la date de fin pour forcer 5 jours (uniquement pour la correction initiale)
// Supprime la clé existante si nécessaire
localStorage.removeItem(countdownKey);

// Initialiser la date de fin uniquement si elle n'est pas déjà enregistrée
if (!localStorage.getItem(countdownKey)) {
    const now = new Date();
    now.setDate(now.getDate() + 5); // Ajouter 5 jours à partir de maintenant
    localStorage.setItem(countdownKey, now.getTime()); // Sauvegarder la date de fin dans le stockage local
}

// Fonction pour mettre à jour l'affichage du compte à rebours
function updateCountdown() {
    const now = new Date().getTime();
    const countdownDate = parseInt(localStorage.getItem(countdownKey), 10);

    const distance = countdownDate - now;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = "Temps écoulé !";
        return;
    }

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(jours).padStart(2, '0');
    document.getElementById("hours").textContent = String(heures).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(secondes).padStart(2, '0');
}

// Mettre à jour l'affichage chaque seconde
setInterval(updateCountdown, 1000);
updateCountdown();



    // Carte Google Maps
    if (typeof google !== 'undefined' && google.maps) {
        const ngemeLimbe = { lat: 4.0173, lng: 9.2012 };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: ngemeLimbe,
        });

        new google.maps.Marker({
            position: ngemeLimbe,
            map: map,
            title: "LKE",
        });
    }
});
