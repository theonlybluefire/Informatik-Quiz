

//start button
function button1_start() {
    let clicked_ = window.localStorage.getItem('clicked_about_section');
    if (clicked_ =='true') {
        window.location = "quiz1.html"

    }
    else {
window.location = "info.html";
}
}

function clicked_about_section_button() {
window.localStorage.setItem('clicked_about_section','true');
window.location = "quiz1.html";
}









//deklarieren der variablen für einlogen und punkte
var right_true = '';
var points = '';
 function check_(test) {
    right_true = test

 }




//weiter button
   function weiter_(quizlocation)  {
if (right_true == true) {
    //punkt hinzufüugen
   points = sessionStorage.getItem('points');
   window.sessionStorage.removeItem('points');
   points += 1 ;
   window.sessionStorage.setItem('points',points);
   window.location = quizlocation;

} 
else if (right_true == false) {
    window.location = quizlocation;
}
   }





function auswertung_anfordern() {
    points = sessionStorage.getItem('points');
    window.sessionStorage.removeItem('points'); 
    if (points == null) {
    points = '';
}
 //weiter
 var points_a = points.length
 //points löschen 

points = null;

if (points_a < 2 ) {
   
let add = document.getElementById('points_anzeige').innerHTML += 'sehr Schlecht';
let color = document.getElementById('points_anzeige').style.backgroundColor = 'red'
}
else if (points_a > 2 && points_a < 6 || points_a == 2) {

add = document.getElementById('points_anzeige').innerHTML += 'Schlecht';
let color = document.getElementById('points_anzeige').style.backgroundColor = 'rgb(255,51,51)'
}

else if (points_a > 6 && points_a < 7 || points_a == 6) {

add = document.getElementById('points_anzeige').innerHTML += 'gut';
let color = document.getElementById('points_anzeige').style.backgroundColor = 'rgb(17,147,43)'
}


else if (points_a > 7 && points_a < 8 || points_a == 7) {

add = document.getElementById('points_anzeige').innerHTML += 'sehr gut';
let color = document.getElementById('points_anzeige').style.backgroundColor = 'rgb(57, 190, 30)'
}

//points_genau anzeige
let add_ = document.getElementById('points_display').innerHTML += points_a



}


