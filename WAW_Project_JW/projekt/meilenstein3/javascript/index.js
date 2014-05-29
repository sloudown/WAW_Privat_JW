/**
 * Diese Funktion ueberprueft die einzelnen Felder des Formulars
 * @param formularId das formular welches ueberprueft werden soll
 * @returns {boolean}
 */

function pruefen(formularId){
    var form = document.getElementById(formularId);
    var fehlertext = "Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben.";
    var korrekt = true;
    //pruefen auf vollstaendigkeit
    for (var i = 0; i < form.elements.length; i++){
        var elem = form.elements[i];
        if(elem.value == ''){
            korrekt = false;
            elem.classList.add("fehler");
        }else{
            elem.classList.remove("fehler");
        }
    }

    var name = form.elements['name'];
    if (!istBuchstabe(name.value)) {
        korrekt = false;
        name.classList.add("fehler");
    }else{
        name.classList.remove("fehler");
    }

    var vorname = form.elements['vorname'];
    if (!istBuchstabe(vorname.value)) {
        korrekt = false;
        vorname.classList.add("fehler");
    }else{
        vorname.classList.remove("fehler");
    }

    var matrikelnr = form.elements['matrikelnr'];
    if (!istZahl(matrikelnr.value)) {
        korrekt = false;
        matrikelnr.classList.add("fehler");
    }else{
        matrikelnr.classList.remove("fehler");
    }

    var email = form.elements['email'];
    if(!istEmail(email.value)){
        korrekt = false;
        email.classList.add("fehler");
    }else{
        email.classList.remove("fehler");
    }

    var handy = form.elements['handy'];
    if (!istHandy(handy.value)) {
        korrekt = false;
        handy.classList.add("fehler");
    }else{
        handy.classList.remove("fehler");
    }

    if(korrekt){
        return true;
    }else {
        alert(fehlertext);
        return false;
    }
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


