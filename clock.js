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
    if(hours < 10) {
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    // Afficher l'horloge 
    $('.clock').html(hours + ':' + minutes + ':' + seconds);
}
