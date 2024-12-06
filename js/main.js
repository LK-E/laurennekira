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
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.querySelector('.hero-header').classList.add('animate'); // Activer
document.querySelector('.hero-header').classList.remove('animate'); // Désactiver

document.addEventListener('DOMContentLoaded', () => {
        const wordItems = document.querySelectorAll('.word-item');
        let currentWordIndex = 0;

        function rotateWords() {
            // Enlever l'état actif de l'élément actuel
            wordItems[currentWordIndex].classList.remove('active');

            // Passer au mot suivant
            currentWordIndex = (currentWordIndex + 1) % wordItems.length;

            // Ajouter l'état actif au nouveau mot
            wordItems[currentWordIndex].classList.add('active');
        }

        // Changer le mot toutes les 2 secondes
        setInterval(rotateWords, 2000);
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Configurez votre date limite
        const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                document.querySelector('.countdown').innerHTML = "Temps écoulé !";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = String(days).padStart(2, '0');
            document.getElementById("hours").textContent = String(hours).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        }

        // Mettre à jour toutes les secondes
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Exécuter immédiatement
    });

    function initMap() {
        // Coordonnées de Ngeme, Limbe
        const ngemeLimbe = { lat: 4.0173, lng: 9.2012 };

        // Créer la carte centrée sur Ngeme
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: ngemeLimbe,
        });

        // Ajouter un marqueur
        const marker = new google.maps.Marker({
            position: ngemeLimbe,
            map: map,
            title: "LKE",
        });
    }