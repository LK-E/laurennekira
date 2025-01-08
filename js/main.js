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
        // Configurez la date limite à 12 jours et 5 heures à partir de maintenant
        let countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 12); // Ajouter 12 jours
        countdownDate.setHours(countdownDate.getHours() + 5); // Ajouter 5 heures
    
        function updateCountdown() {
            const now = new Date().getTime(); // Heure actuelle en millisecondes
            const distance = countdownDate.getTime() - now; // Temps restant
    
            if (distance < 0) {
                document.querySelector('.countdown').innerHTML = "Temps écoulé !";
                return;
            }
    
            // Calcul des jours, heures, minutes, secondes
            const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
            const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondes = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Mise à jour des éléments HTML
            document.getElementById("days").textContent = String(jours).padStart(2, '0');
            document.getElementById("hours").textContent = String(heures).padStart(2, '0');
            document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
            document.getElementById("seconds").textContent = String(secondes).padStart(2, '0');
        }
    
        // Exécuter la fonction immédiatement et toutes les secondes
        setInterval(updateCountdown, 1000);
        updateCountdown();
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
