function anzeigen() {
    for (var i = 0; i < arguments.length; i++){
        var elem = document.getElementById(arguments[i]);
        elem.style.display='block';
    }
}

function verstecken() {
    for (var i = 0; i < arguments.length; i++){
        var elem = document.getElementById(arguments[i]);
        elem.style.display='none';
    }
}

function tauschen (elem1, elem2){
    var element1 = document.getElementById(elem1);
    element1.style.display='none'
    var element2 = document.getElementById(elem2);
    element2.style.display='block'
}