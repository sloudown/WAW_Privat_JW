
/**
 * Diese Funktion ueberprueft die einzelnen Felder des Formulars
 * @param formularId das formular welches ueberprueft werden soll
 * @returns {boolean}
 */
function pruefen(formularId){

<<<<<<< HEAD
function pruefen(formularId){
=======
>>>>>>> FETCH_HEAD
    var form = document.getElementById(formularId);
    var fehlertext = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben.";
    var korrekt = false;
    var fehlerspeicher = [];

    /**
     //pruefen auf vollstaendigkeit
     for (var i = 0; i < form.elements.length; i++) {
        var elem = form.elements[i];
        if (elem.value == '') {
            fehlerspeicher.push(elem);
        }
    }
     */

<<<<<<< HEAD
=======
    //felder auf richtige angaben pruefen
>>>>>>> FETCH_HEAD
    var name = form.elements['name'];
    if (!istBuchstabe(name.value)) {
        fehlerspeicher.push(name);
    }

    var vorname = form.elements['vorname'];
    if (!istBuchstabe(vorname.value)) {
<<<<<<< HEAD
        korrekt = false;
        vorname.classList.add("fehler");
    }else{
        vorname.classList.remove("fehler");
=======
        fehlerspeicher.push(vorname);
>>>>>>> FETCH_HEAD
    }

    var matrikelnr = form.elements['matrikelnr'];
    if (!istZahl(matrikelnr.value)) {
        fehlerspeicher.push(matrikelnr);
    }


    var email = form.elements['email'];
    if (!istEmail(email.value)) {
        fehlerspeicher.push(email);
    }

    var handy = form.elements['handy'];
    if (!istHandy(handy.value)) {
        fehlerspeicher.push(handy);
    }

<<<<<<< HEAD
    if(korrekt){
        return true;
    }else {
=======
    //focus auf den ersten fehler setzen und fehlertext ausgeben
    if (fehlerspeicher.length == 0) {
        korrekt = true;
    }else{
        //alle fehler rot umranden
        for (var j in fehlerspeicher) {
            fehlerspeicher[j].addClass('fehler');
        }
        fehlerspeicher[0].focus();
>>>>>>> FETCH_HEAD
        alert(fehlertext);
    }

    return korrekt;
}

/**
 * Diese Funktion gibt true zurueck wenn die eingabe nur aus zahlen besteht
 * und false wenn nicht.
 * @param zahlen
 * @returns {boolean}
 */
function istZahl(zahlen) {
    var ergebnis = zahlen.match("[0-9]{1,}");
    return ergebnis == zahlen;
}
/**
 * prueft ob es sich bei der uebergebenen nummer umm eine handynummer handelt
 * @param nummer
 * @returns {boolean}
 */
function istHandy(nummer){
    var ergebnis = nummer.match("[0]{1}[1-9]{1,}[1-9]{1,}");
    return ergebnis == nummer;
}
/**
 * Diese Funkion prueft ob die uebergebene zeichenkette NUR aus buchstaben besteht
 * @param buchstaben die uebergebene zeichenkette
 * @returns {boolean}
 */
function istBuchstabe(buchstaben){
    var ergebnis = buchstaben.match("[A-Za-z]{1,}");
    return ergebnis == buchstaben;
}
/**
 * Diese Funktion prueft ob es sich bei dem uebergebenen wert um eine korrekte email handelt
 * @param email
 */
function istEmail(email){
    var ergebnis = email.match("[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Z,a-z]{2,5}");
    return ergebnis == email;
}


