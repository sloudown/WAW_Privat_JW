/**
 * Diese Funktion zeigt alle Elemente der uebergebenen Klasse an.
 * Dafuer werden alle Elemente der Klasse gesucht, mit einer for Schleife durchlaufen
 * und auf visible gestellt.
 *
 * @param klassenname damit wird angegeben welche Klasse angezeigt werden soll
 */
function anzeigen(klassenname) {
    var klasse = document.getElementsByClassName(klassenname);
    for (var i = 0; i < klasse.length; i++){
        klasse[i].style.visibility='visible';
    }
}

/**
 * Diese Funktion versteckt alle Elemente der uebergebenen Klasse.
 * Dafuer werden alle Elemente der Klasse gesucht, mit einer for Schleife durchlaufen
 * und auf hidden gestellt.
 *
 * @param klassenname damit wird angegeben welche Klasse versteckt werden soll
 */
function verstecken(klassenname) {
    var klasse = document.getElementsByClassName(klassenname);
    for (var i = 0; i < klasse.length; i++){
        klasse[i].style.visibility='hidden';
    }
}

/**
 * Diese Funktion faerbt das geklickte Element in die Farbe blue um.
 * Zuvor werden alle Element der gleichen Gruppe, wie das geklickte Element,
 * mit Hilfe einer for Schleife, wieder auf die Standardfarbe gefaerbt.
 *
 * @param id die id, des elements, auf welches geklickt wird
 */
function klick(id) {
    var name = document.getElementById(id).className;
    var klasse = document.getElementsByClassName(name);
    for (var i = 0; i < klasse.length; i++){
        klasse[i].style.backgroundColor = 'rgb(153,217,234)';
    }
    document.getElementById(id).style.backgroundColor='blue';
}
