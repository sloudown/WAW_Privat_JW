/**
 * Selbst erstellte Regeln zur Validierung des Formulars
 */

$(document).ready(function(){

    $("#formular").validate({

        rules: {

            vorname: "required",

            name: "required",

            email: {

                required: true,
                email: true

            },

            matrikelnr: {

                required: true,
                digits: true
            },

            handy: {

                required: true,
                digits: true
            }

        },

        messages: {

            vorname: "Bitte Vornamen angeben!",

            name: "Bitte Namen angeben!",

            email: {

                required: "Bitte E-Mail-Adresse eingeben!",
                email: "E-Mail im Format name@domain.de eingeben!"

            },

            matrikelnr: {

                required: "Bitte Matrikelnummer eingeben!",
                digits: "Bitte nur Zahlen verwenden"

            },

            handy: {

                required: "Bitte Handynummer eingeben!",
                digits: "Bitte nur Zahlen eingeben"

            }

        }

    });

});
