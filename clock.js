/*
 * License MIT (c) 2015 Samantha-Mazzei <http://samantha-mazzei.com>
 */
$(document).ready(function() {
    // 
    displayClock();
    setInterval(displayClock, 1000);
});

function displayClock() {
    // Récupérer l'heure actuelle >> instancier l'objet Date
    var today = new Date();
    // Récupérer les heures, les minutes et les secondes
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    // Afficher l'horloge 
    $('.clock').html(hours + ':' + minutes + ':' + seconds);
}
