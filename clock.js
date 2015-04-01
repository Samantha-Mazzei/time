/*
 * License MIT (c) 2015 Samantha-Mazzei <http://samantha-mazzei.com>
 */
$(document).ready(function() {
    // 
    displayClock();
    countDown();
    setInterval(displayClock, 1000);
    setInterval(countDown, 1000);
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


function countDown() {
    // Récupérer la date de l'utisateur
    var dateString = $('[data-target-date]').attr('data-target-date');
    var targetDate = new Date(dateString);
    var today = new Date();
    var targetTimeStamp = targetDate.getTime();
    var todayTimeStamp = today.getTime();
    var resultTimeStamp = targetTimeStamp - todayTimeStamp; 
    var time = millisecondsToTime(resultTimeStamp);
}

function millisecondsToTime(milliseconds) {
    var days = parseInt(milliseconds/1000/60/60/24);
    milliseconds = milliseconds - days*24*60*60*1000;
    
    var hours = parseInt(milliseconds/1000/60/60);
    milliseconds = milliseconds - hours*60*60*1000;
    
    var minutes = parseInt(milliseconds/1000/60);
    milliseconds = milliseconds - minutes*60*1000;
    
    var seconds = parseInt(milliseconds/1000);
    milliseconds = milliseconds - seconds*1000;
    console.log(days, hours, minutes, seconds);
}