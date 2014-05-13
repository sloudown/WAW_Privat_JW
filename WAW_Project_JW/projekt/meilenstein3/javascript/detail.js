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

var kostenCebit = {
    name: "CeBit",
    kosten: "15"
};

var kostenConhit = {
    name: "ConhIT",
    kosten: "50"
};

var kostenWebtechcon = {
    name: "WebTechCon",
    kosten: "300"
};

var teilnehmercebit1 = {
    name: "Ent",
    vorname: "Thilo",
    studiengang:  "IB",
    email: "t.ent@gmail.de"
};

var teilnehmercebit2 = {
    name: "Kraus",
    vorname: "Martina",
    studiengang:  "IB",
    email: "m.kraus@hs-mannheim.de"
};

var teilnehmercebit3 = {
    name: "Smits",
    vorname: "Thomas",
    studiengang:  "UIB",
    email: "t.smits@hs-mannheim.de"
};

var teilnehmercebit4 = {
    name: "Groeschel",
    vorname: "Michael",
    studiengang:  "UIB",
    email: "m.groeschel@hs-mannheim.de"
};


/**
 * Funktion um die Tabelle, mit Hilfe von JSON Objekten, mit Details zu fuellen.
 */
function tabelleFuellen(){

}


