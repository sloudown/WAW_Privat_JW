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
        klasse[i].classList.remove("geklickt");
    }
    document.getElementById(id).classList.add("geklickt");
}

/**
 * Funktion um die Tabelle,fuer die Kosten der einzelnen Messen,
 * mit Hilfe von JSON Objekten, mit Details zu fuellen.
 */
function kostenTabelleFuellen(){
    /**
     * Die JSON Objekte der Kosten.
     */

    var header = [
        {ueberschrift: "Messe"},
        {ueberschrift: "Selbstkosten"}
    ];

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

    // das div tag mit der id details holen
    var detailsDiv = document.getElementById('details');
    // das table tag erstellen
    var tableTag = document.createElement('table');
    // dem tableTag die id tabelle geben
    tableTag.setAttribute('id', 'tabelle');
    // rowTag erstellen
    var rowTag = document.createElement('tr');

    //rowTag mit einer foreach schleife fuellen
    for (i in header){
        var cellTag = document.createElement('td');
        var textNode = document.createTextNode(i.ueberschrift); //warum steht in der HTML Datei undefined?
        cellTag.appendChild(textNode);
        rowTag.appendChild(cellTag);
    }
    tableTag.appendChild(rowTag);
    detailsDiv.appendChild(tableTag);

}

function teilnehmerTabelleFuellen(){
    /**
     * Die JSON Objekte der einzelnen Teilnehmer
     */

    var teilnehmercebit1 = {
        name: "Ent",
        vorname: "Thilo",
        studiengang: "IB",
        email: "t.ent@gmail.de"
    };

    var teilnehmercebit2 = {
        name: "Kraus",
        vorname: "Martina",
        studiengang: "IB",
        email: "m.kraus@hs-mannheim.de"
    };

    var teilnehmercebit3 = {
        name: "Smits",
        vorname: "Thomas",
        studiengang: "UIB",
        email: "t.smits@hs-mannheim.de"
    };

    var teilnehmercebit4 = {
        name: "Groeschel",
        vorname: "Michael",
        studiengang: "UIB",
        email: "m.groeschel@hs-mannheim.de"
    };

    var teilnehmerconhit1 = {
        name: "Schmuecker",
        vorname: "Paul",
        studiengang: "IMB",
        email: "p.schmuecker@hs-mannheim.de"
    };

    var teilnehmerconhit2 = {
        name: "Felsenheimer",
        vorname: "Jan",
        studiengang: "IB",
        email: "j.felsenheimer@diebestebaendderwelt.de"
    };

    var teilnehmerwebtechcon1 = {
        name: "Spies",
        vorname: "Marcell",
        studiengang: "IB",
        email: "m.spies@gmail.de"
    };

    var teilnehmerwebtechcon2 = {
        name: "Hoppe",
        vorname: "Johannes",
        studiengang: "UIB",
        email: "j.hoppe@gmx.de"
    };

    var teilnehmerwebtechcon3 = {
        name: "Hofmeister",
        vorname: "Johannes",
        studiengang: "UIB",
        email: "cessor@gmail.de"
    };
}