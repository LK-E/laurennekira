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
    // Configurez votre date limite en ajoutant 13 jours à partir d'aujourd'hui
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 13); // Ajouter 13 jours

    function updateCountdown() {
        const now = new Date().getTime(); // Obtenez l'heure actuelle en millisecondes
        const distance = countdownDate.getTime() - now; // Calculez la différence

        // Si la date limite est dépassée
        if (distance < 0) {
            document.querySelector('.countdown').innerHTML = "Temps écoulé !";
            return;
        }

        // Calculez les jours, heures, minutes et secondes restants
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mettez à jour le DOM
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Mettre à jour toutes les secondes
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Exécuter immédiatement pour éviter un délai
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
});
