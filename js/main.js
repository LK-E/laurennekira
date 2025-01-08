document.addEventListener('DOMContentLoaded', () => {
    // Configurez la date limite (exemple : 16 jours et 5 heures à partir de maintenant)
    const countdownKey = 'countdownEndTime'; // Clé pour localStorage
    let countdownDate;

    if (localStorage.getItem(countdownKey)) {
        // Charger la date depuis localStorage
        countdownDate = new Date(localStorage.getItem(countdownKey));
    } else {
        // Initialiser une nouvelle date limite si elle n'existe pas
        countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 16); // Ajouter 16 jours
        countdownDate.setHours(countdownDate.getHours() + 5); // Ajouter 5 heures
        localStorage.setItem(countdownKey, countdownDate.toISOString()); // Sauvegarder la date
    }

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
