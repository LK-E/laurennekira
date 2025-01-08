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

document.addEventListener('DOMContentLoaded', () => {
    const COUNTDOWN_KEY = 'countdownDeadline'; 
    const COUNTDOWN_DURATION = 16 * 24 * 60 * 60 * 1000;

    if (typeof Storage === "undefined") {
        console.error("localStorage n'est pas pris en charge par ce navigateur.");
        return;
    }

    let countdownDate;
    const savedCountdown = localStorage.getItem(COUNTDOWN_KEY);
    if (savedCountdown) {
        countdownDate = new Date(savedCountdown);
    } else {
        countdownDate = new Date(Date.now() + COUNTDOWN_DURATION);
        localStorage.setItem(COUNTDOWN_KEY, countdownDate.toISOString());
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate.getTime() - now;

        if (distance < 0) {
            document.querySelector('.countdown').innerHTML = "Temps écoulé !";
            return;
        }

        const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
        const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((distance % (1000 * 60)) / 1000);

        const daysElem = document.getElementById("days");
        const hoursElem = document.getElementById("hours");
        const minutesElem = document.getElementById("minutes");
        const secondsElem = document.getElementById("seconds");

        if (daysElem && hoursElem && minutesElem && secondsElem) {
            daysElem.textContent = String(jours).padStart(2, '0');
            hoursElem.textContent = String(heures).padStart(2, '0');
            minutesElem.textContent = String(minutes).padStart(2, '0');
            secondsElem.textContent = String(secondes).padStart(2, '0');
        } else {
            console.error("Éléments du compte à rebours manquants dans le DOM.");
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});

function initMap() {
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
