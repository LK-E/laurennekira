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
    const countdownDuration = 16 * 24 * 60 * 60 * 1000; // 16 jours en millisecondes
    const storageKey = "countdownEndTime";

    // Vérifier si une date de fin existe dans le localStorage
    let countdownEndTime = localStorage.getItem(storageKey);

    if (!countdownEndTime) {
        // Si aucune date de fin n'est trouvée, en créer une nouvelle
        const now = new Date().getTime();
        countdownEndTime = now + countdownDuration; // Ajoutez 16 jours à l'heure actuelle
        localStorage.setItem(storageKey, countdownEndTime); // Stocker la nouvelle date de fin
    } else {
        countdownEndTime = parseInt(countdownEndTime, 10); // Convertir en nombre
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownEndTime - now;

        if (distance < 0) {
            document.querySelector('.countdown').innerHTML = "Temps écoulé !";
            localStorage.removeItem(storageKey); // Nettoyer le stockage local
            return;
        }

        // Calculer les jours, heures, minutes et secondes restants
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mettre à jour les éléments HTML avec des animations
        updateElementWithEffect("days", days);
        updateElementWithEffect("hours", hours);
        updateElementWithEffect("minutes", minutes);
        updateElementWithEffect("seconds", seconds);
    }

    // Fonction pour mettre à jour un élément avec une animation
    function updateElementWithEffect(id, value) {
        const element = document.getElementById(id);
        const newValue = String(value).padStart(2, '0');

        if (element.textContent !== newValue) {
            element.classList.add("animate");
            setTimeout(() => element.classList.remove("animate"), 500);
            element.textContent = newValue;
        }
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
