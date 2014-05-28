/**
 * Diese Funktion ueberprueft die einzelnen Felder des Formulars
 * @param form das formular welches ueberprueft werden soll
 * @returns {boolean}
 */

function pruefen(form){

    //pruefen auf vollstaendigkeit
    var fehlertext = "Einige Eingaben sind fehlerhaft! Bitte überprüfen Sie Ihre Eingaben.";
    var fehler = false;
    if(form.elements['vorname'].value == ''){
        fehler = true;
    }
    if(form.elements['name'].value == ''){
        fehler = true;
    }
    if(form.elements['matrikelnr'].value == ''){
        fehler = true;
    }
    if(form.elements['email'].value == ''){
        fehler = true;
    }
    if(form.elements['handy'].value == ''){
        fehler = true;
    }
    // Pruefung auf Zahlen von matrikelnummer und der handynummer
    if(!istZahl(form.elements['matrikelnr'].value)){
        fehler = true;
    }

    if(!istZahl(form.elements['handy'].value)){
        fehler = true;
    }

    //Pruefung auf Buchstaben von Namen und Vornamen

    if(istZahl(form.elements['vorname'].value)){
        fehler = true;
    }

    if(istZahl(form.elements['name'].value)){
        fehler = true;
    }

    //pruefung der email
    if(!istEmail(form.elements['matrikelnr'].value)){
        fehler = true;
    }

    //wenn ein feld falsch true zurueckliefert wurde wird ein fehlertext ausgegeben
    if(fehler){
        alert(fehlertext);
        return false;
    }else {
        return true;
    }
}

/**
 * Diese Funktion gibt true zurueck wenn die eingabe nur aus zahlen besteht
 * und false wenn nicht.
 * @param eingabe
 * @returns {boolean}
 */
function istZahl(eingabe) {
    var nummer = "" + eingabe;
    var zahlen = "0123456789";
    for (var i = 0; i < nummer.length; i++){
        if (zahlen.indexOf(nummer.charAt(i)) == -1){
            return false;
        }
    }
    return true;
}
/**
 * Diese Funktion prueft ob es sich bei dem uebergebenen wert um eine korrekte email handelt
 * @param mail
 */
function istEmail(mail){
    var at = mail.indexOf('@');
    if (at < 1){
        return false;
    }else{
        var punkt = mail.substring(at).indexOf('.');
        if (punkt < 2){
            return false;
        }else {
            return true;
        }
    }
}


