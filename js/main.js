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
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

})(jQuery);

// Animation Header
document.querySelector('.hero-header').classList.add('animate');
document.querySelector('.hero-header').classList.remove('animate');

// Rotation des mots
document.addEventListener('DOMContentLoaded', () => {
    const wordItems = document.querySelectorAll('.word-item');
    let currentWordIndex = 0;

    function rotateWords() {
        wordItems[currentWordIndex].classList.remove('active');
        currentWordIndex = (currentWordIndex + 1) % wordItems.length;
        wordItems[currentWordIndex].classList.add('active');
    }

    setInterval(rotateWords, 2000);
});

// Compte à rebours synchronisé (14 jours)
document.addEventListener('DOMContentLoaded', () => {
    const CYCLE_DURATION = 14 * 24 * 60 * 60 * 1000; // 14 jours en millisecondes
    const REFERENCE_DATE = new Date("2025-01-01T00:00:00Z").getTime();

    function getNextCycleEnd(currentTime) {
        const elapsedTime = currentTime - REFERENCE_DATE;
        const cyclesCompleted = Math.floor(elapsedTime / CYCLE_DURATION);
        return REFERENCE_DATE + (cyclesCompleted + 1) * CYCLE_DURATION;
    }

    function updateCountdown() {
        const now = Date.now();
        const nextCycleEnd = getNextCycleEnd(now);
        const timeRemaining = nextCycleEnd - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

// Carte Google Maps
function initMap() {
    const ngemeLimbe = { lat: 4.0173, lng: 9.2012 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: ngemeLimbe,
    });

    const marker = new google.maps.Marker({
        position: ngemeLimbe,
        map: map,
        title: "LKE",
    });
}
